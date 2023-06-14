import { Node, Project } from '../types/Project'
import { INodeProxy, NodeProxy } from './NodeProxy'

export interface IProjectProxy {
  addNode: (node: NodeSelector) => void;
  removeNode: (node: NodeSelector) => void;
  project: Project;
  nodes: Map<number, Node>;
  nodeProxies: Map<number, INodeProxy>;
  getNode: (node: NodeSelector) => INodeProxy;
}

export type NodeSelector = number | INodeProxy | Node

export function ProjectProxy(project: Project): IProjectProxy {
    const $project = project as Project

    const nodes = new Map<number, Node>()
    const nodeProxies = new Map<number, INodeProxy>()

    function getNode(node: NodeSelector): INodeProxy {
        if (typeof node === 'number') {
            return NodeProxy(proxy, node)
        } else if ((node as INodeProxy).proxy) {
            return node as INodeProxy
        } else {
            return NodeProxy(proxy, (node as Node).id)
        }
    }


    function addNode(node: NodeSelector) {
        const $node = getNode(node)
        $project.nodes.push($node.node)
    }

    function removeNode(node: NodeSelector) {
        const $node = getNode(node)
        const index = $project.nodes.indexOf($node.node)
        if (index >= 0) {
            $project.nodes.splice(index, 1)
        }
    }

    const proxy = {
        addNode,
        removeNode,
        project: $project,
        nodes,
        nodeProxies,
        getNode
    }

    return proxy
}