import { InputFactory } from '../factory/InputFactory'
import { NodeFactory } from '../factory/NodeFactory'
import { NodeGeneratorArgs } from '../types/NodeGenerator'
import { IProjectProxy } from './../proxy/ProjectProxy'

export function TunnelOutNode(project: IProjectProxy, options: NodeGeneratorArgs<{value: string}>) {
    return NodeFactory(project, {
        group: options.group ?? -4,
        inputs: [InputFactory({ value: options.value })],
        type: 'Node_Tunnel_Out',
    })
}
