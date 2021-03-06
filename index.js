#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const { execFile } = require('child_process')

const log = (msg, ctx = 'node') => console.log(`[${chalk.yellow(ctx)}] ${msg}`)

const newLine = () => console.log('\n')

const fromTemplate = () => path.join(__dirname, 'template')

const copy = (from, to) =>
  fs.copyFileSync(from, to, fs.constants.COPYFILE_EXCL)

const copyDir = (from, to) => {
  log(chalk.blue.bold(to))
  fs.mkdirSync(to)
  fs.readdirSync(from, { withFileTypes: true })
    .sort((f1, f2) => f2.isFile() - f1.isFile())
    .forEach(f => {
      const src = path.join(from, f.name)
      const dest = path.join(to, f.name)
      if (f.isDirectory()) {
        copyDir(src, dest)
      } else {
        copy(src, dest)
        log(` + ${f.name}`)
      }
    })
}

const args = process.argv.slice(2)
const project = (args.length) ? args[0] : 'example'

log(`Creating a new project ${chalk.cyan.bold(project)}`)
copyDir(fromTemplate(), project)

newLine()
log('Initializing git')
execFile('git', ['init'], {
  cwd: project
})
  .on('exit', code => {
    newLine()
    log('Creating .gitignore file')
    fs.renameSync(path.join(project, 'gitignore'), path.join(project, '.gitignore'))
  })
  .stdout.on('data', msg => log(msg, 'git'))

newLine()
log('Installing dev dependencies')
execFile('npm', ['install', '-D'], {
  cwd: project
})
  .stdout.on('data', msg => log(msg, 'npm'))
