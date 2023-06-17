import WebSocket from 'ws'

interface IWsClient<T> {
  ws: WebSocket;
  waitForConnection: () => Promise<Error | boolean>;
  send: (data: T) => void;
  close: () => void;
  onFrame: (callback: (frame: number) => void, everyFrames?: number) => void;
  offFrame: (callback: (frame: number) => void) => void;
  currentFrame: number,
}

interface IWsOptions {
    framerate?: number,
    port?: number
    timeout?: number
}

export function WsClient<T>(options?: IWsOptions) {
    if (!options) options = {}
    
    let openPromise: Promise<boolean | Error> 
    let ws!: WebSocket
    let reconnectTry = 0
    startWs()

    
    function startWs() {
        console.log('Starting ws')
        ws = new WebSocket('ws://127.0.0.1:' + (options?.port ?? 22400), {
            timeout: 1000,

        })
        console.log('ok')

        // ws.on('error', (err) => { 
        //     console.log('ERR', err)
        // })
        startOpenPromise()
    }

    function startOpenPromise() {
        openPromise = new Promise((resolve, reject) => {
            ws.on('open', () => {
                reconnectTry = 0
                console.log('WS: Connected to ' + ws.url)
                resolve(true)
                ready = true
                if (sendBuffer) {
                    send(sendBuffer)
                }
                startFrameTimer()
            })

            ws.on('error', (err) => {
                resolve(false)
                ready = false
            })

            ws.on('close', (code, reason) => {

                stopFrameTimer()
                ready = false

                setTimeout(() => {
                    resolve(false)
                    reconnectTry++
                    console.log(
                        'WS: Reconnecting to ' +
                        ws.url +
                        ' (Try ' +
                        reconnectTry +
                        ')'
                    )
                    startWs()

                    
                }, options?.timeout ?? 3000)
            })
        })
    }

    let ready = false
    
    function bufferify(data: any) {
        return Buffer.from(JSON.stringify(data))
    }

    function getFrameTime() {
        return 1000 / (options?.framerate ?? 30)
    }


    

    const onFrameCallbacks: Map<(frame: number) => void, number> = new Map()

    let currentFrame = 0

    let frameTimer: NodeJS.Timer | undefined

    function startFrameTimer() {
        frameTimer = setInterval(() => {
            if(!ready) return
            onFrameCallbacks.forEach((everyFrames, callback) => {
                if (currentFrame % everyFrames === 0) {
                    callback(currentFrame)
                }
            })

            currentFrame++
        }, getFrameTime())
    }

    function stopFrameTimer() {
        if (frameTimer) {
            clearInterval(frameTimer)
        }
    }

    function close() {
        stopFrameTimer()
        ws.close()
    }

    

    function onFrame(callback: (frame: number) => void, nth = 1) {
        onFrameCallbacks.set(callback, nth)
    }

    function offFrame(callback: (frame: number) => void) {
        onFrameCallbacks.delete(callback)
    }

    let sendBuffer: T | undefined 

    function send(data: T) {
        if (!ready) {
            sendBuffer = data
        } else
            ws.send(bufferify(data))
    }

    async function waitForConnection() {
        return await openPromise
    }

    const iws: IWsClient<T> = {
        waitForConnection,
        close,
        ws,
        send,
        onFrame,
        offFrame,
        currentFrame
    }

    return iws
}
