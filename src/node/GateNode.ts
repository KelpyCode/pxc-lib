import { LogicGate } from '../enum/LogicGate'
import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'
import { IProjectProxy } from '../proxy/ProjectProxy'

export function GateNode(project: IProjectProxy, options: { gate: LogicGate, value1: boolean; from1?: number, value2: boolean, from2?: number }) {
    return NodeFactory(
        project,
        {
            group: -4,
            inputs: [
                InputFactory({ value: options.gate }),
                InputFactory({ value: options.value1, from: options.from1 }),
                InputFactory({ value: options.value2, from: options.from2 })
            ],
            type: 'Node_Logic',
        })
}
