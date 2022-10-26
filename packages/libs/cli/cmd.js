const chalk = require('chalk');
const ora = require('ora');
let nodeCmd = require('node-cmd');
function runCmdTest(dir) {
    const spinner = ora('cnpm install ...');
    spinner.start();
    nodeCmd.get(
        'cd '+dir+'&& cnpm install',
        function(err, data, stderr){
            if(err){
                spinner.fail();
            }else{
                spinner.succeed();
                console.log(data);
                console.log(`Successfully created project ${dir}`);
                console.log('Get started with the following commands:');
                console.log(chalk.blue(`$ cd ${dir}`));
                console.log(chalk.blue(`$ xeditor create <project name>`));
            }
        }
    );
    nodeCmd.run('cnpm install');
}
module.exports = runCmdTest;