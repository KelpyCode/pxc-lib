import { Node } from '../types/Project'
import { IProjectProxy, NodeSelector } from './ProjectProxy'

const INPUT_VAR_INDEX = 1

export interface INodeProxy {
  proxy: boolean;
  id: number;
  node: Node;
  setInputValue: (inputIndex: number, value: any) => void;
  connectFrom: (inputIndex: number, from: NodeSelector) => void;
  connectTo: (inputIndex: number, from: NodeSelector) => void;
  setName: (name: string) => void;
  getInConnections: () => INodeProxy[];
  getAllInConnections: () => INodeProxy[];
  getOutConnections: () => INodeProxy[];
  getAllOutConnections: () => INodeProxy[];
  move: (x: number, y: number) => void;
  moveAbsolute: (x: number, y: number) => void;
  remove: () => void;
  removeConnection(inputIndex: number): void;
}

export function NodeProxy(project: IProjectProxy, node: Node | number): INodeProxy {
    
    if (typeof node === 'number') {
        const id = node
        const nodeProxy = project.nodeProxies.get(id)

        if(nodeProxy) return nodeProxy

        node = project.nodes.get(id) as Node


        if (node === undefined) {
            node = project.project.nodes.find((x) => x.id === id)!
            if (node === undefined)
                throw new Error(`Node ${node} not found`)
        }
    }
    const $node = node as Node


    function setInputValue(inputIndex: number, value: any) {
        $node.inputs[inputIndex]['raw value'][0][INPUT_VAR_INDEX] = value
    }

    function removeConnection(inputIndex: number) {
        $node.inputs[inputIndex]['from node'] = -1
        $node.inputs[inputIndex]['from index'] = -1
    }

    /**
     * Connect to input of another node
     */
    function connectTo(inputIndex: number, to: NodeSelector) {
        const $to = project.getNode(to)

        $to.connectFrom(inputIndex, $node.id)
    }

    function connectFrom(inputIndex: number, from: NodeSelector) {
        const $from = project.getNode(from ?? -1)
        const id = $from.id
        $node.inputs[inputIndex]['from node'] = id ?? -1
        $node.inputs[inputIndex]['from index'] = (id ?? -1) >= 0 ? 0 : -1
    }

    function setName(name: string) {
        $node.name = name
    }

    function move(x: number, y: number) {
        $node.x += x
        $node.y += y
    }

    function moveAbsolute(x: number, y: number) {
        $node.x = x
        $node.y = y
    }

    function getOutConnections(): INodeProxy[] {
        return project.project.nodes.filter(x => x.inputs.some(y => y['from node'] === $node.id)).map(x => NodeProxy(project, x.id))
    }

    function getAllOutConnections(): INodeProxy[] {
        const nodes: INodeProxy[] = []

        getOutConnections().forEach(x => {
            nodes.push(x)
            nodes.push(...x.getAllOutConnections())
        })

        return nodes
    }

    function getInConnections(): INodeProxy[] {
        return $node.inputs
            .filter(x => x['from node'] >= 0)
            .map(x => NodeProxy(project, x['from node']))
    }

    function getAllInConnections(): INodeProxy[] {
        const nodes: INodeProxy[] = []

        getInConnections().forEach(x => {
            nodes.push(x)
            nodes.push(...x.getAllInConnections())
        })

        return nodes
    }

    function remove() {
        project.unregisterNode($node)
        project.removeNode($node)
    }

    const proxy = {
        id: $node.id,
        node,
        setInputValue,
        connectFrom,
        connectTo,
        setName,
        getInConnections,
        getAllInConnections,
        getOutConnections,
        getAllOutConnections,
        move,
        moveAbsolute,
        remove,
        removeConnection,
        proxy: true,
    }

    project.registerNode($node, proxy)

    return proxy
}