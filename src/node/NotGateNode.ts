import { LogicGate } from '../enum/LogicGate'
import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'

export function NotGateNode(options: { value: boolean; from?: number }) {
    return NodeFactory({
        group: -4,
        inputs: [
            InputFactory({ value: LogicGate.NOT }),
            InputFactory({ value: options.value, from: options.from })
        ],
        type: 'Node_Logic',
    })
}
