import { Node, Project } from '../types/Project'
import { INodeProxy } from './NodeProxy'

interface ProjectProxy {
    addNode: (node: INodeProxy | Node) => void;
    project: Project
}


export function ProjectProxy(project: Project): ProjectProxy {
    const $project = project as Project


    function addNode(node: INodeProxy | Node) {
        let $node = node as Node
        if ((node as INodeProxy).proxy) {
            $node = (node as INodeProxy).node
        }
        $project.nodes.push($node)
    }

    const proxy = {
        addNode,
        project: $project
    }

    return proxy
}