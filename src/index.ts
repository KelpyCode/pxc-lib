import { Nodes } from './node/Nodes'
import { ProjectProxy } from './proxy/ProjectProxy'


const $project = ProjectProxy.loadProject('./example/GradientMaker2.pxc')

const startTime = new Date().getTime()

// const $ = Nodes($project)


$project.format()

$project.save('dist/project2.pxc')


// function generateRandomString(): string {
//     return Math.random().toString(36).substring(7)
// }

// $project.project.nodes.forEach(node => {
//     const $node = NodeProxy($project, node)

//     $node.getInConnections().forEach((connection) => {
//         $project.tunnelifyConnection(connection.node.id, node.id, generateRandomString())
//     })
// });



const endTime = new Date().getTime()
console.log('Done, took ' + (endTime - startTime) + 'ms')

// setInterval(() => {
//     // Dont die
// }, 10000)