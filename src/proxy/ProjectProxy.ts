import { Node, Project } from '../types/Project'
import { INodeProxy, NodeProxy } from './NodeProxy'
import { loadProject } from './../util'
import fs from 'fs'
import { ProjectFactory } from '../factory/ProjectFactory'
export interface IProjectProxy {
  addNode: (node: NodeSelector) => void;
  removeNode: (node: NodeSelector) => void;
  project: Project;
  nodes: Map<number, Node>;
  nodeProxies: Map<number, INodeProxy>;
  getNode: (node: NodeSelector) => INodeProxy;
  getNodesAt: (x: number, y: number, threshold: number) => Node[];
  registerNode: (node: Node, proxy: INodeProxy) => void;
  unregisterNode: (node: NodeSelector) => void;
}

export type NodeSelector = number | INodeProxy | Node;

type ProjectProxyFn = {
  (project: Project): IProjectProxy;
  loadProject: (file: string) => IProjectProxy;
  makeProject: () => IProjectProxy;
};

export const ProjectProxy: ProjectProxyFn = (
    project: Project
): IProjectProxy => {

    const nodes = new Map<number, Node>()
    const nodeProxies = new Map<number, INodeProxy>()

    const $project = {
        addNode,
        removeNode,
        project,
        nodes,
        nodeProxies,
        getNode,
        getNodesAt,
        registerNode,
        unregisterNode,
    } as IProjectProxy

    function registerAllNodes() {
        project.nodes.forEach((node) => {
            NodeProxy($project, node)
        })
    }

    registerAllNodes()

    function getNodesAt(x: number, y: number, threshold: number, ignoreNode?: number) {
        let nodes = project.nodes.filter((node) => {
            return (
                node.x - threshold <= x &&
                node.x + threshold >= x &&
                node.y - threshold <= y &&
                node.y + threshold >= y
            )
        })

        if (ignoreNode) {
            nodes = nodes.filter((node) => node.id !== ignoreNode)
        }

        return nodes
    }

    function getNode(node: NodeSelector): INodeProxy {
        if (typeof node === 'number') {
            return NodeProxy($project, node)
        } else if ((node as INodeProxy).proxy) {
            return node as INodeProxy
        } else {
            return NodeProxy($project, (node as Node).id)
        }
    }

    function registerNode(node: Node, proxy: INodeProxy) {
        // const $node = getNode(node)
        nodes.set(node.id, node)
        nodeProxies.set(node.id, proxy)
    }

    function unregisterNode(node: NodeSelector) {
        const $node = getNode(node)
        nodes.delete($node.id)
        nodeProxies.delete($node.id)
    }

    function addNode(node: NodeSelector) {
        const $node = getNode(node)
        project.nodes.push($node.node)
    }

    function removeNode(node: NodeSelector) {
        const $node = getNode(node)
        const index = project.nodes.indexOf($node.node)
        if (index >= 0) {
            project.nodes.splice(index, 1)
        }
    }

    function save(file: string, format = false) {
        const data = JSON.stringify(project, null, 2)
        fs.writeFileSync(file, data)
    }



    return $project
}

ProjectProxy.makeProject = () => {
    return ProjectProxy(ProjectFactory())
}
ProjectProxy.loadProject = (file: string) => {
    const data = fs.readFileSync(file, 'utf-8')
    const project = JSON.parse(data) as Project

    return ProjectProxy(project)
}
