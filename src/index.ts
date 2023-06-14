import fs from 'fs'
import { ProjectFactory } from './factory/ProjectFactory'
import { NodeFactory } from './factory/NodeFactory'
import { InputFactory, RawValueFactory } from './factory/InputFactory'
import { BooleanNode } from './node/BooleanNode'
import { NotGateNode } from './node/NotGateNode'
import { loadProject } from './util'
import { ProjectProxy } from './proxy/ProjectProxy'
import { INodeProxy, NodeProxy } from './proxy/NodeProxy'
import { GateNode } from './node/GateNode'
import { LogicGate } from './enum/LogicGate'
import { Nodes } from './node/Nodes'


const $project = ProjectProxy.loadProject('./example/book.pxc')

const $ = Nodes($project)


const groups: Set<number> = new Set()

$project.project.nodes.forEach(node => {
    groups.add(node.group)
});

[...groups].forEach(group => {
    let rootNodes = 1
    $project.project.nodes.filter(x => x.group === group).forEach((node) => {
        const $node = NodeProxy($project, node)

        if (node.inputs.every((input) => input['from node'] === -1)) {
            console.log('RootNode', group, rootNodes, node)
            node.y = 150 * rootNodes
            node.x = 0

            rootNodes++

            $node.getOutConnections().forEach((connection, i) => {
                connection.node.x = node.x + 300
                connection.node.y = node.y + (300 * i)
                
            })
        } else {
            node.y = 0
            node.x = 0

        }

    })

})


$project.project.nodes.forEach(node => {
    const $node = NodeProxy($project, node)

    $node.getOutConnections().forEach(connection => {
        let y = $node.node.y
        let x = $node.node.x + 400


        while($project.getNodeAt(x, y, 100)) {
            y += 200
            x += 0
        }

        connection.node.y = y
        connection.node.x = x
    })
    
    
})

fs.writeFileSync('dist/project.pxc', JSON.stringify($project.project))

console.log('Done')

setInterval(() => {
    // Dont die
}, 10000)
// const inputs: INodeProxy[] = []

// for (let i = 0; i < 2; i++) {
  

//     inputs.push($.BooleanNode({ value: i % 2 == 1 }))

//     project.addNode(inputs[i])
// }

// // for (let i = 0; i < 2; i += 2) {
// const add = $.GateNode({ gate: LogicGate.AND, value1: false, value2: false })
// add.connectFrom(1, inputs[0].id)
// add.connectFrom(2, inputs[0 + 1].id)

// project.addNode(add)
// // }

// const or = $.GateNode({ gate: LogicGate.OR, value1: false, value2: false })

// or.connectFrom(1, add.id)
// or.connectFrom(2, inputs[1].id)

// project.addNode(or)

// const boolNode = BooleanNode({ value: true })
// const bool2Node = BooleanNode({ value: true, from: boolNode.id })

// const nodes = new Array(100).fill(0).map(x => {
//     return BooleanNode({ value: x % 2 == 1 })
// })


// project.nodes.push(
//     boolNode,
//     bool2Node,
//     NotGateNode({ value: true, from: bool2Node.id }),
//     ...nodes
// )





// const pr = loadProject('example/7seg.pxc')

// pr.nodes = pr.nodes
//     .map((x, i) => {
//         return {
//             ...x,
//             x: Math.random() * 2000,
//             y: Math.random() * 2000,
//         }
//     })
//     .filter((x) => !['Node_Frame', 'Node_Display_Text'].includes(x.type))

// fs.writeFileSync('dist/project2.pxc', JSON.stringify(pr))