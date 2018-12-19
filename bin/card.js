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
  'twitter': chalk.cyan('https://twitter.com/e0ipso'),
  'github': chalk.cyan('https://github.com/e0ipso'),
  'linkedin': chalk.cyan('https://linkedin.com/in/mateuaguilobosch'),
  'web': chalk.cyan('https://humanbits.es'),
  'web2': chalk.cyan('https://mateuaguilo.com'),
  'drupal': chalk.cyan('https://drupal.org/u/e0ipso'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelWeb2': chalk.white.bold('           '),
  'labelDrupal': chalk.white.bold('    Drupal:'),
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var webing2 = `${data.labelWeb2}  ${data.web2}`
var drupaling = `${data.labelDrupal}  ${data.drupal}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + drupaling + newline + webing + newline + webing2

console.log(chalk.green(boxen(output, options)))
