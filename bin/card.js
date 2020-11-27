#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Mateu Aguiló Bosch /'),
  'handle': chalk.cyan('e0ipso'),
  'work': chalk.white('Senior Developer at Lullabot'),
  'github': chalk.cyan('https://github.com/e0ipso'),
  'web': chalk.cyan('https://mateuaguilo.com'),
  'drupal': chalk.cyan('https://drupal.org/u/e0ipso'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelDrupal': chalk.white.bold('    Drupal:'),
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var githubing = `${data.labelGitHub}  ${data.github}`
var webing = `${data.labelWeb}  ${data.web}`
var drupaling = `${data.labelDrupal}  ${data.drupal}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + newline + githubing + newline + drupaling + newline + webing

console.log(chalk.green(boxen(output, options)))
