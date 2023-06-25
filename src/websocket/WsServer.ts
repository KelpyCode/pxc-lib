import {WebSocket, Server} from 'ws'
import { ISurfaceBuffer, SurfaceBuffer } from '../SurfaceBuffer'

interface IWsServer<T> {
  wsServer: Server;
  send: (data: T) => void;
    close: () => void;
    onSurface: (callback: (surface: ISurfaceBuffer) => void) => void;
    onData: (callback: (data: T) => void) => void;
}

interface IWsOptions {
  framerate?: number;
  port?: number;
  timeout?: number;
}

export function WsServer<T>(options?: IWsOptions) {
    if (!options) options = {}


    const wsServer = new Server({
        port: options.port ?? 22800,
        skipUTF8Validation: true,
    }) 
    


    function close() {
        wsServer.close()
    }

    const surfaceListeners = new Set<(data: ISurfaceBuffer) => void>()
    const listeners = new Set<(data: T) => void>()

    function onSurface(callback: (surface: ISurfaceBuffer) => void) {
        surfaceListeners.add(callback)
    }

    function onData(callback: (data: T) => void) {
        listeners.add(callback)
    }

    console.log('WsServer init')
    wsServer.on('connection', function connection(ws) {
        ws.on('error', console.error)
        // console.log('connection', ws)
        ws.on('message', function message(data) {
            // console.log('received: %s', data, typeof data)
            if (Buffer.isBuffer(data)) {
                const surf = SurfaceBuffer(data as Buffer)

                surfaceListeners.forEach(listener => listener(surf))   
            } else {
                listeners.forEach(listener => listener(data as T))
            }
        })

        ws.send('1')
    })



    function send(data: T) {
        // -
    }



    const iws: IWsServer<T> = {
        close,
        wsServer,
        send,
        onSurface,
        onData
    }

    return iws
}
