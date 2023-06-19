// import { Input } from '../types/Project'
import { PxcProject } from './../types/Project'

export function RawValueFactory(value: any) {
    const time = 0
    const easing = [[0, 1], [0, 0], 0, 0]

    return [time, value, ...easing]
}

export function InputFactory(options: {
  from?: number;
  value: any;
}): PxcProject.Input {
    const input: PxcProject.Input = {
        global_key: '',
        'from node': options.from ?? -1,
        animators: [],
        'shift y': 0,
        'on end': 0,
        sep_axis: 0,
        data: [],
        'raw value': [RawValueFactory(options.value)],
        anim: 0,
        visible: true,
        unit: 0,
        'shift x': 0,
        'from index': options.from ? 0 : -1,
        global_use: false,
    }

    return input
}