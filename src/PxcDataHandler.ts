/* eslint-disable @typescript-eslint/ban-ts-comment */
import data from './pxcData/compiledData.json'

// const data = data2 as Readonly<typeof data2>


export type NodeLocaleName = keyof (typeof data)['nodes'];
export type NodeInternalName = keyof (typeof data)['names'];
// @ts-ignore
export type NodeInput<T> = keyof (typeof data)['nodes'][T]['inputs'];
// @ts-ignore
export type NodeInputValue<T, V> = (typeof data)['nodes'][T]['inputs'][V]
// @ts-ignore
export type NodeOutput<T> = keyof (typeof data['nodes'])[T]['outputs'] ;
// @ts-ignore
export type NodeOutputValue<T, V> = (typeof data)['nodes'][T]['outputs'][V];


/**
1: number
2: boolean
3: color
4: surface
5: file path
6: curve
7: text
8: data?
9: exec thread
10: 3d object
11: array
12: vector path
13: particle system
14: rigid body
15: fluid domain
16: struct
17: strand
18: mesh
19: trigger action
20: atlas
21: vertex data
22: gradient
 */




export type PxcKeyedValues<T> = {
    type: number;
    keys: Array<{time: number, value: T}>
}

export type PxcNumber = number | number[];
export type PxcBoolean = boolean;
export type PxcColor = number; // Number converts to hexcolor
export type PxcSurface = number; // Number seems to be group
export type PxcGradient = string | PxcKeyedValues<PxcColor>; // JSON: "{\"type\":0,\"keys\":[{\"time\":0.0,\"value\":255.0},{\"time\":0.5234375,\"value\":11473679.0},{\"time\":1.0,\"value\":3211008.0}]}"
export type PxcString = string; 

export type PxcTranslator<E, T> = (value: E) => T;



type TypeDef<Name extends string> = {
  [key in Name]: boolean;
};

export type ValueType<X, T, V> = X extends TypeDef<'type_1'>
  ? PxcNumber
  : NodeInputValue<T, V> extends TypeDef<'type_2'>
  ? PxcBoolean
  : NodeInputValue<T, V> extends TypeDef<'type_3'>
  ? PxcColor
  : NodeInputValue<T, V> extends TypeDef<'type_4'>
  ? PxcSurface
  : NodeInputValue<T, V> extends TypeDef<'type_7'>
  ? PxcString
  : NodeInputValue<T, V> extends TypeDef<'type_22'>
  ? PxcGradient
  : unknown;


export type InputValueType<T, V> = ValueType<NodeInputValue<T, V>, T, V>;
export type OutputValueType<T, V> = ValueType<NodeOutputValue<T, V>, T, V>;

export const makeColorHex: PxcTranslator<string, PxcColor> = (hex: string) => {
    return parseInt(hex.replace('#', ''), 16)
}


// nodeLocale["Node_3D_Cone"]
function getNodeData<T extends NodeLocaleName, V extends NodeInput<T>>(
    name: T,
    input: V,
    value: InputValueType<T, V>
) {
    // ..
}

getNodeData('Gradient', 'Gradient', '')


// getNodeData('Transform', 'Output dimension type')


export function getLocaleName<T extends NodeInternalName>(
    name: T,
): NodeLocaleName {
    return data.names[name] as any
}



export function getInputKey<T extends NodeLocaleName>(type: T, input: NodeInput<T>): number {
    return (data.nodes[type]['inputs'] as any)[input].index
}

export function getOutputKey<T extends NodeLocaleName>(type: T, output: NodeOutput<T>): number {
    return (data.nodes[type]['outputs'] as any)[output].index
}


// function yy(value: any): value is {abc: 123} {
//     return true
// }

// const hello = 'ayy'

// if (yy(hello)) {
//     hello.
// }

// const x = getNodeData('Transform', '')
