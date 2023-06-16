import { LogicGate } from '../enum/LogicGate'
import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'
import { IProjectProxy } from '../proxy/ProjectProxy'
import { NodeGeneratorArgs } from '../types/NodeGenerator'

export function NotGateNode(project: IProjectProxy, options: NodeGeneratorArgs<{value: boolean}>) {
    return NodeFactory(project, {
        group: -4,
        inputs: [
            InputFactory({ value: LogicGate.NOT }),
            InputFactory({ value: options.value, from: options.from }),
        ],
        type: 'Node_Logic',
    })
}
