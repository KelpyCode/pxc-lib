import  * as pxc from '../PxcDataHandler'
import { Node } from '../types/Project'
import { IProjectProxy, NodeSelector } from './ProjectProxy'

const INPUT_VAR_INDEX = 1

export interface INodeProxy<T extends pxc.NodeLocaleName> {
  proxy: boolean;
  id: number;
  node: Node;
  setInputValue: (name: pxc.NodeInput<T>, value: any, frame?: number) => void;
  getInputValue: <V extends pxc.NodeInput<T>>(
    name: V,
    frame?: number
  ) => pxc.InputValueType<T, V>;
  connectFrom: (
    inputIndex: number,
    from: NodeSelector,
    fromIndex?: number
  ) => void;
  connectTo: (inputIndex: number, to: NodeSelector, fromIndex?: number) => void;
  setName: (name: string) => void;
  getInConnections: () => INodeProxy<any>[];
  getAllInConnections: () => INodeProxy<any>[];
  getOutConnections: () => INodeProxy<any>[];
  getAllOutConnections: () => INodeProxy<any>[];
  move: (x: number, y: number, connectionIns?: boolean) => void;
  moveAbsolute: (x: number, y: number, connectionIns?: boolean) => void;
  remove: () => void;
  removeConnection(inputIndex: number): void;
  putNode(x: number, y: number): number;
}

export function NodeProxy<T extends pxc.NodeLocaleName>($project: IProjectProxy, node: Node | number): INodeProxy<T> {
    
    if (typeof node === 'number') {
        const id = node
        const nodeProxy = $project.nodeProxies.get(id)

        if(nodeProxy) return nodeProxy

        node = $project.nodes.get(id) as Node


        if (node === undefined) {
            node = $project.project.nodes.find((x) => x.id === id)!
            if (node === undefined)
                throw new Error(`Node ${node} not found`)
        }
    }
    const $node = node as Node


    // function setInputValue(inputIndex: number, value: any) {
    //   $node.inputs[inputIndex]["raw value"][0][INPUT_VAR_INDEX] = value;
    // }

    function getLocaleName() {
        return pxc.getLocaleName($node.type as pxc.NodeInternalName)
    }

    function setInputValue(name: pxc.NodeInput<T>, value: any, frame = 0) {
        $node.inputs[pxc.getInputKey(getLocaleName() as any, name)]['raw value'][frame][
            INPUT_VAR_INDEX
        ] = value
    }

    function getInputValue(name: pxc.NodeInput<T>, frame = 0) {
        return $node.inputs[pxc.getInputKey(getLocaleName() as any, name)]['raw value'][frame][
            INPUT_VAR_INDEX
        ]
    }

    function removeConnection(inputIndex: number) {
        $node.inputs[inputIndex]['from node'] = -1
        $node.inputs[inputIndex]['from index'] = -1
    }

    /**
     * Connect to input of another node
     */
    function connectTo(
        inputIndex: number,
        to: NodeSelector,
        fromIndex?: number
    ) {
        const $to = $project.getNode(to)

        $to.connectFrom(inputIndex, $node.id, fromIndex)
    }

    function connectFrom(inputIndex: number, from: NodeSelector, fromIndex = 0) {
        const $from = $project.getNode(from ?? -1)
        const id = $from.id
        console.log($node.inputs)
        $node.inputs[inputIndex]['from node'] = id ?? -1
        $node.inputs[inputIndex]['from index'] = (id ?? -1) >= 0 ? fromIndex : -1
    }

    function setName(name: string) {
        $node.name = name
    }

    function move(x: number, y: number, connectionIns = false) {
        $node.x += x
        $node.y += y
        
        if (connectionIns) {
            getAllInConnections().forEach(node => {
                node.move(x, y)
            })
        }
    }

    function moveAbsolute(x: number, y: number, connectionIns = false) {
        const previous = [$node.x, $node.y]
        $node.x = x
        $node.y = y

        const diff = [x - previous[0], y - previous[1]]
        
        if (connectionIns) {
            getAllInConnections().forEach((node) => {
                node.move(diff[0], diff[1])
            })
        }
    }

    function getOutConnections(): INodeProxy<any>[] {
        return $project.project.nodes.filter(x => x.inputs.some(y => y['from node'] === $node.id)).map(x => NodeProxy($project, x.id))
    }

    function getAllOutConnections(): INodeProxy<any>[] {
        const nodes: INodeProxy<any>[] = []

        getOutConnections().forEach(x => {
            nodes.push(x)
            nodes.push(...x.getAllOutConnections())
        })

        return nodes
    }

    function getInConnections(): INodeProxy<any>[] {
        return $node.inputs
            .filter(x => x['from node'] >= 0)
            .map(x => NodeProxy($project, x['from node']))
    }

    function getAllInConnections(): INodeProxy<any>[] {
        const nodes: INodeProxy<any>[] = []

        getInConnections().forEach(x => {
            nodes.push(x)
            nodes.push(...x.getAllInConnections())
        })

        return nodes
    }

    function putNode(x: number, y: number): number {
        const $node = NodeProxy($project, node)
        const connections = $node.getInConnections()

        // y += (connections.length * (project.GRID_SIZE_Y * 4))

        while ($project.getNodesAt(x, y, $project.GRID_SIZE_Y / 8).length > 0) {
            y += $project.GRID_SIZE_Y
        }

        $node.node.y = y
        $node.node.x = x

        const ys: number[] = []
        const xs: number[] = []
        connections.forEach((connection) => {
            ys.push(connection.putNode(x - $project.GRID_SIZE_X, $node.node.y))
            xs.push(connection.node.x - $project.GRID_SIZE_X)
        })

        // Get highest child node
        if (ys.length > 0) $node.node.y = Math.min(...ys)

        // if (xs.length > 0) node.x = Math.max(...xs)

        return $node.node.y // Highest node
    }

    function remove() {
        $project.unregisterNode($node)
        $project.removeNode($node)
    }

    const proxy = {
        id: $node.id,
        node,
        setInputValue,
        getInputValue,
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
        putNode,
        proxy: true,
    }

    $project.registerNode($node, proxy)

    return proxy
}