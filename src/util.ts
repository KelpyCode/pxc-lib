import { PxcProject } from './types/Project'

import fs from 'fs'

export function loadProject(file: string): PxcProject.Project {
    const raw = fs.readFileSync(file, 'utf-8')
    const project = JSON.parse(raw) as PxcProject.Project

    return project
}
