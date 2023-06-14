import { LogicGate } from '../enum/LogicGate'
import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'
import { IProjectProxy } from '../proxy/ProjectProxy'

export function NotGateNode(project: IProjectProxy, options: { value: boolean; from?: number }) {
    return NodeFactory(
        project,
        {
            group: -4,
            inputs: [
                InputFactory({ value: LogicGate.NOT }),
                InputFactory({ value: options.value, from: options.from })
            ],
            type: 'Node_Logic',
        })
}
