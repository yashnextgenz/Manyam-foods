import { cpSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const sourceStatic = path.join(rootDir, '.next', 'static')
const targetStatic = path.join(rootDir, '.next', 'standalone', '.next')
const sourcePublic = path.join(rootDir, 'public')
const targetPublic = path.join(rootDir, '.next', 'standalone')

if (existsSync(sourceStatic)) {
  mkdirSync(targetStatic, { recursive: true })
  cpSync(sourceStatic, targetStatic, { recursive: true })
}

if (existsSync(sourcePublic)) {
  mkdirSync(targetPublic, { recursive: true })
  cpSync(sourcePublic, targetPublic, { recursive: true })
}
