import { PxcProject } from './../types/Project'

const VERSION = 1440

export function ProjectFactory(nodes?: PxcProject.Node[]): PxcProject.Project {
    const p: PxcProject.Project = {
        nodes: nodes ?? [],
        version: VERSION,
        global: {
            inputs: [],
        },
        addon: {},
        preview: '',
        metadata: {
            author: 'Kelpy (Generated)',
            alias: '',
            file_id: 0,
            contact: 'Discord @anti.team',
            description: '',
            tags: [],
            aut_id: 0,
        },
        animator: {
            framerate: 30,
            frames_total: 30,
        },
    }

    return p
}