import { IProjectProxy } from '../proxy/ProjectProxy'
import { BooleanNode } from './BooleanNode'
import { GateNode } from './GateNode'
import { NotGateNode } from './NotGateNode'

export function Nodes(project: IProjectProxy) {

    return {
        BooleanNode: BooleanNode.bind(null, project),
        GateNode: GateNode.bind(null, project),
        NotGateNode: NotGateNode.bind(null, project)
    }
}