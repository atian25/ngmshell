#!/usr/bin/env node
var ngmshell = require('../index.js');
var program = require('commander');

program
  .version('0.0.1')
  .option('-d, --debug', 'log debug level')
  .option('-c, --config <path>', 'set config path [./deploy.conf]')
  .option('-T, --no-tests', 'ignore test hook')

// zip
program
  .command('zip <archive> <src>')
  .description('zip src to archive')
  .action(ngmshell.zip);

// unzip
program
  .command('unzip <archive> <dest> [remove=false]')
  .description('unzip archive to dest')
  .action(ngmshell.unzip);

// unpack
program
  .command('unpack <apk> <dest>')
  .description('unpack apk to dest')
  .action(ngmshell.unpack);

// pack
program
  .command('pack <apk> <src>')
  .description('pack src to apk')
  .action(ngmshell.pack);

// sign
program
  .command('sign <apk> <keystore> <pass>')
  .description('sign apk with keystore/pass')
  .action(ngmshell.sign);

// devices
program
  .command('devices')
  .description('list android devices')
  .action(ngmshell.devices);

// install
program
  .command('install <apk>')
  .description('install apk by path')
  .action(ngmshell.install);

// uninstall
program
  .command('uninstall <apkName>')
  .description('uninstall apk by apkName')
  .action(ngmshell.uninstall);

// startup
program
  .command('startup <activity/apkName>')
  .description('startup apk by activity/apkName')
  .action(ngmshell.startup);

// checkPackage
program
  .command('check <apk/zip>')
  .description('check package.json from apk/zip')
  .action(ngmshell.checkPackage);

//解析参数
program.parse(process.argv);

