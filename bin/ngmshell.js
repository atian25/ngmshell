#!/usr/bin/env node
var ngmshell = require('../index.js');
var program = require('commander');
var version = require('../package.json').version;

program
  .version(version)
  .option('-d, --debug', 'log debug level')

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

// repack
program
  .command('repack <apk> <zip> [dest] [tmp]')
  .description('pack zip into apk, output to dest, tmp as unpack path.')
  .action(ngmshell.repack);

// sign
program
  .command('sign <apk> [keystore] [pass]')
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

// reinstall
program
  .command('reinstall <apk> [apkName]')
  .description('install apk (uninstall first)')
  .action(function(apk, apkName){
    ngmshell.uninstall(apkName || apk);
    ngmshell.install(apk);
  });

// startup
program
  .command('startup <activity/apkName>')
  .description('startup apk by activity/apkName')
  .action(ngmshell.startup);

// check
program
  .command('check <apk/zip/dir>')
  .description('check package.json from apk/zip/dir')
  .action(ngmshell.check);

// doc
program
  .command('doc [isRemote]')
  .description('show doc')
  .action(function(isRemote){
    var open = require('open');
    var url = isRemote ? require('../package.json').homepage : 'http://10.1.73.35:8889/pages/viewpage.action?pageId=917546';
    open(url);
  });

//解析参数
program.parse(process.argv);

