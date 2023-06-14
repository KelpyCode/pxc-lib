import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'
import { IProjectProxy } from './../proxy/ProjectProxy'

export function BooleanNode(project: IProjectProxy, options: { value: boolean, from?: number }) {

    return NodeFactory(
        project,
        {
            group: -4,
            inputs: [
                InputFactory({ value: options.value, from: options.from }),
            ],
            type: 'Node_Boolean'
        })
}