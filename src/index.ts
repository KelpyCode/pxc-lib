import fs from 'fs'
import { ProjectFactory } from './factory/ProjectFactory'
import { NodeFactory } from './factory/NodeFactory'
import { InputFactory, RawValueFactory } from './factory/InputFactory'
import { BooleanNode } from './node/BooleanNode'
import { NotGateNode } from './node/NotGateNode'
import { loadProject } from './util'
import { ProjectProxy } from './proxy/ProjectProxy'
import { INodeProxy } from './proxy/NodeProxy'
import { GateNode } from './node/GateNode'
import { LogicGate } from './enum/LogicGate'
import { Nodes } from './node/Nodes'


const project = ProjectProxy.makeProject()

const $ = Nodes(project)

const inputs: INodeProxy[] = []

for (let i = 0; i < 2; i++) {
  

    inputs.push($.BooleanNode({ value: i % 2 == 1 }))

    project.addNode(inputs[i])
}

// for (let i = 0; i < 2; i += 2) {
const add = $.GateNode({ gate: LogicGate.AND, value1: false, value2: false })
add.setFromNode(1, inputs[0].id)
add.setFromNode(2, inputs[0 + 1].id)

project.addNode(add)
// }

const or = $.GateNode({ gate: LogicGate.OR, value1: false, value2: false })

or.setFromNode(1, add.id)
or.setFromNode(2, inputs[1].id)

project.addNode(or)

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

fs.writeFileSync('dist/project.pxc', JSON.stringify(project.project, null, 2))

// setInterval(() => {
//     // Dont die
// }, 10000)


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