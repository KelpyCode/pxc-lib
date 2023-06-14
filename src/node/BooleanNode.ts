import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'

export function BooleanNode(options: { value: boolean, from?: number }) {

    return NodeFactory({
        group: -4,
        inputs: [
            InputFactory({ value: options.value, from: options.from }),
        ],
        type: 'Node_Boolean'
    })
}