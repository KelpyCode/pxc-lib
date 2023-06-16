import { IProjectProxy } from '../proxy/ProjectProxy'
import { BooleanNode } from './BooleanNode'
import { GateNode } from './GateNode'
import { NotGateNode } from './NotGateNode'
import { TunnelInNode } from './TunnelInNode'
import { TunnelOutNode } from './TunnelOutNode'

export function Nodes(project: IProjectProxy) {

    return {
        BooleanNode: BooleanNode.bind(null, project),
        GateNode: GateNode.bind(null, project),
        NotGateNode: NotGateNode.bind(null, project),
        TunnelInNode: TunnelInNode.bind(null, project),
        TunnelOutNode: TunnelOutNode.bind(null, project),
    }
}