export namespace PxcProject {
  export interface Project {
    nodes: Node[];
    version: number;
    global: Global;
    addon: Addon;
    preview: string;
    metadata: Metadata;
    animator: Animator;
  }

  export interface Addon {}

  export interface Animator {
    framerate: number;
    frames_total: number;
  }

  export interface Global {
    inputs: any[];
  }

  export interface Metadata {
    author: string;
    alias: string;
    file_id: number;
    contact: string;
    description: string;
    tags: any[];
    aut_id: number;
  }

  export interface Node {
    group: number;
    x: number;
    render: boolean | number;
    outputs: Output[];
    id: number;
    inputs: Input[];
    array_process?: number;
    iname: string;
    preview: boolean | number;
    attri: Attri;
    type: string;
    inspectInputs: InspectInput[];
    y: number;
    name: string;
  }

  export interface Attri {
    array_process?: number;
  }

  export interface Input {
    global_key: string;
    'from node': number;
    animators: any[];
    'shift y': number;
    'on end': number;
    sep_axis: boolean | number;
    data: any[];
    'raw value': Array<Array<number[] | boolean | number | string>>;
    anim: boolean | number;
    visible: boolean | number;
    unit: number;
    'shift x': number;
    'from index': number;
    global_use: boolean | number;
  }

  export interface InspectInput {
    global_key: string;
    'from node': number;
    animators: any[];
    'shift y': number;
    'on end': number;
    sep_axis: boolean | number;
    data: any[];
    'raw value': Array<Array<number[] | boolean | number>>;
    anim: boolean | number;
    visible: boolean | number;
    unit: number;
    'shift x': number;
    'from index': number;
    global_use: boolean | number;
  }

  export interface Output {
    visible: boolean | number;
  }
}