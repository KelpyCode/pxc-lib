import fs from 'fs'
import path from 'path'
import { ProjectFactory } from '../factory/ProjectFactory'
// import { TunnelInNode } from '../node/TunnelInNode'
// import { TunnelOutNode } from '../node/TunnelOutNode'
import { Node, Project } from '../types/Project'
import { INodeProxy, NodeProxy } from './NodeProxy'
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
  tunnelifyConnection: (from: number, to: number, name: string) => void;
  format: () => void;
  getGroups: () => number[];
  save: (file: string, format?: boolean) => void;
  GRID_SIZE_Y: number;
  GRID_SIZE_X: number;
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

    const FORMAT_INIT_POSITION = [-10000, -10000]
    const START_X = 800
    const GRID_SIZE_Y = 150
    const GRID_SIZE_X = 250

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
        tunnelifyConnection,
        getGroups,
        format,
        save,
        GRID_SIZE_Y,
        GRID_SIZE_X,
    } as IProjectProxy

    function registerAllNodes() {
        project.nodes.forEach((node) => {
            NodeProxy($project, node)
        })
    }

    registerAllNodes()

    function getNodesAt(
        x: number,
        y: number,
        threshold: number,
        ignoreNode?: number
    ) {
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

    function tunnelifyConnection(from: number, to: number, name: string) {
        const $to = getNode(to)
        const $from = getNode(from)
        // Todo: readd tunnel
        // const tunnelIn = TunnelInNode($project, {
        //     value: name,
        //     group: $to.node.group,
        // })
        // const tunnelOut = TunnelOutNode($project, {
        //     value: name,
        //     group: $to.node.group,
        // })

        // $to.node.inputs.forEach((input) => {
        //     if (input['from node'] === from) {
        //         input['from node'] = tunnelOut.node.id
        //         tunnelIn.connectFrom(1, $from, input['from index'])
        //         input['from index'] = 0
        //     }
        // })

        // // tunnelIn.connectFrom(1, $from, fromIndex)

        // $project.addNode(tunnelIn)
        // $project.addNode(tunnelOut)
    }

    function getGroups() {
        const groups = project.nodes.map((node) => node.group)
        return [...new Set(groups)]
    }

    function format() {
        const groups = getGroups()

        groups.forEach((group) => {
            const nodes = $project.project.nodes.filter((x) => x.group === group)

            nodes.forEach((node) => {
                const $node = NodeProxy($project, node)

                if ($node.getOutConnections().length === 0) {
                    // Last node

                    $node.putNode(START_X, 0)
                }
            })

            nodes.forEach((node) => {
                const $node = NodeProxy($project, node)

                $node.getInConnections().forEach((connection) => {
                    if (connection.node.x > node.x) {
                        // node.x = connection.node.x + GRID_SIZE_X
                        connection.move(node.x - connection.node.x - GRID_SIZE_X, 0, true)
                    }
                })
            })
        })
    }

    function save(file: string, format = false) {
        const dir = path.dirname(file)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        const data = JSON.stringify(project, null, format ? 2 : undefined)
        fs.writeFileSync(file, data)
        console.log('Saved project as', file)
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
