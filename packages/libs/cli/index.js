#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const runCmdTest = require('./cmd');
const nodeCmd = require('node-cmd');
const Version = require('./package.json');
const {gitUrl,prompt,templatePrompt,templateUrl,resourceUrl,subjectUrl} = require('./config');
program.version(Version.version, '-v, --version')
    .command('init <name>')
    .action((name) => {
        if(!fs.existsSync(name)){
                const spinner = ora('正在下载模板...');
                spinner.start();
                download(gitUrl,name,{clone:true},(err) => {
                    if(err){
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    }else{
                        spinner.succeed();
                        console.log(chalk.blue(`https://formcreator.jiaoyanyun.com`));
                        console.log(chalk.blue(`从form-creator导出制作好的表单json数据`));
                        console.log(chalk.blue(`$ npm run dev --dir=${name}`));
                        console.log(symbols.success, chalk.green('项目初始化完成'));
                        runCmdTest(name);
                    }
                })
        }else{
            console.log(symbols.error, chalk.red('目录已存在'))
        }
    });

program.version(Version.version, '-v, --version')
    .command('creator <name>')
    .action((name) => {
        if(!fs.existsSync('src/subject'+name)){
            inquirer.prompt(templatePrompt).then((e) => {
                const spinner = ora('🚀🚀🚀 正在下载题目编辑页基础模板...');
                spinner.start();
                download(subjectUrl,'src/subject/'+name,{clone:true},(err) => {
                    if(err){
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    }else{
                        spinner.succeed();
                        const myConfig = `public/${name}/json/config.json`;
                        let time = new Date();
                        const configData = {
                                "version":"1.0.0",
                                "developer":e.developer,
                                "templateName":e.templateName,
                                "time":time.getFullYear()+"."+(time.getMonth()+1)+"."+time.getUTCDate()+"-"+time.getHours()+":"+time.getMinutes()
                        }
                        if(fs.existsSync(myConfig)){
                            fs.writeFileSync(myConfig, JSON.stringify(configData));
                        }
                    }
                })
            })      
        }else{
            console.log(symbols.error, chalk.red('该题目编辑页已存在'));
        }
    });
program.parse(process.argv);