import node_locale from './data/node_locale.json'
import nodes from './data/nodes.json'
import fs from 'fs'

console.log('Generating types...')


const data = {
    names: {} as any,
    nodes: {} as any,
}




Object.entries(node_locale).forEach(([key, value]) => {
    const node = (nodes as any)[value.name]

    if(!node) return
    
    const inputs: any = {}
    const outputs: any = {}

    for (let i = 0; i < value.inputs.length; i++) {
        const inputNodeLocale = value.inputs[i]

        if (!node.inputs) continue
        
        const inputNode = node.inputs[i]

        if (!inputNode) continue
        inputs[inputNodeLocale.name] = {
            type: inputNode.type,
            ['type_' + inputNode.type]: true,
            visible: inputNode.visible,
            index: i,
        }
    }

    for (let i = 0; i < value.outputs.length; i++) {
        const outputNodeLocale = value.outputs[i]
        if (!node.outputs) continue
        const outputNode = node.outputs[i]

        if (!outputNode) continue


        outputs[outputNodeLocale.name] = {
            type: outputNode.type,
            ['type_' + outputNode.type]: true,
            visible: outputNode.visible,
            index: i,
        }
    }

    data.names[key] = value.name

    data.nodes[value.name] = {
        name: key,
        inputs,
        outputs,
    }
})


// Build interface

let interfaceString = 'export interface PxcNodeData {\n'

function s(indent: number) {
    return new Array(indent * 2).fill(' ').join('')
}

Object.keys(data.nodes).forEach((nodeName: any) => {
    interfaceString += s(1) + `'${nodeName}': {\n`
    const node = data.nodes[nodeName]
    
    interfaceString += s(2) + 'inputs: {\n'
    Object.keys(node.inputs).forEach((inputName: any) => {
        const input = node.inputs[inputName]
        interfaceString += s(3) + `'${inputName}': ${input.type}\n`
    })
    interfaceString += s(2) + '}\n'

    interfaceString += s(1) + '}\n\n'
})


interfaceString += '}'

fs.writeFileSync('./src/pxcData/compiledData.json', JSON.stringify(data, null, 2))
fs.writeFileSync('./src/pxcData/PxcNodeData.d.ts', interfaceString)