import { Project } from './types/Project'
import fs from 'fs'

export function loadProject(file: string): Project {
    const raw = fs.readFileSync(file, 'utf-8')
    const project = JSON.parse(raw) as Project

    return project
}