import { NodeLocaleName } from '../PxcDataHandler'
import { INodeProxy, NodeProxy } from '../proxy/NodeProxy'
import { IProjectProxy } from '../proxy/ProjectProxy'
import { Input, Node } from '../types/Project'

let id = 1000

const int = NodeFactory(p, '2D Light', {}).getInputValue('Light shape')

export function NodeFactory<T extends NodeLocaleName>(project: IProjectProxy, type: T, options: {
    group: number,
}): INodeProxy<T> {
    const ownId = id++

    // const circleSteps = 100
    // const radius = 300
    // const centerY = 0
    // const centerX = 0

    const node: Node = {
        group: options.group,
        inputs: options.inputs,
        attri: {},
        iname: 'GEN_' + ownId,
        name: 'GEN_' + ownId,
        id: ownId,
        inspectInputs: [],
        outputs: [],
        preview: false,
        render: true,
        type: options.type,
        x: 0,
        y: 0,
        // x: centerX + radius * Math.cos((2 * Math.PI * ownId) / circleSteps),
        // y: centerY + radius * Math.sin((2 * Math.PI * ownId) / circleSteps),
        array_process: 0,
    }

    const proxy = NodeProxy<T>(project, node)

    return proxy
}