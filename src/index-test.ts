import { ProjectProxy } from './proxy/ProjectProxy'
import { WsClient } from './websocket/WsClient'

interface Data {
  x: number;
  y: number;
}

const client = WsClient<Data>({
    port: 4423,
    framerate: 60,
})

const res = 64

client.onFrame((frame) => {
    client.send({
        x: Math.sin(frame) * 0.5 * (64 / 2) + 64 / 2,
        y: frame % 64,
    })
}, 1)

// WsServer()

// client.onopen = (() => {
//     console.log('open')
//     client.send(Buffer.from(JSON.stringify({test: 'Hello world'})))
// })

// const $project = ProjectProxy.loadProject('./example/GradientMaker2.pxc')

// const startTime = new Date().getTime()

// // const $ = Nodes($project)

// $project.format()

// $project.save('dist/project2.pxc')

// // function generateRandomString(): string {
// //     return Math.random().toString(36).substring(7)
// // }

// // $project.project.nodes.forEach(node => {
// //     const $node = NodeProxy($project, node)

// //     $node.getInConnections().forEach((connection) => {
// //         $project.tunnelifyConnection(connection.node.id, node.id, generateRandomString())
// //     })
// // });

// const endTime = new Date().getTime()
// console.log('Done, took ' + (endTime - startTime) + 'ms')

setInterval(() => {
    // Dont die
}, 10000)
