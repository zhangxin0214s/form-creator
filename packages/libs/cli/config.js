const gitUrl = 'direct:https://git.100tal.com/wangxiao_neirongchanpinbu_edit/fc-subject.git#master';
const subjectUrl = 'direct:https://git.100tal.com/wangxiao_neirongchanpinbu_edit/fc-basic-subject.git#master';
const templatePrompt =[
    {
        type: 'input',
        message: '开发者:',
        name: 'developer'
    },{
        type: 'input',
        message: '模板名称:',
        name: 'templateName'
    }
];
const prompt =[
    {
        name: 'dir',
        message: 'dir'
    }
];
module.exports.gitUrl = gitUrl;
module.exports.prompt = prompt;
module.exports.templateUrl = templateUrl;
module.exports.resourceUrl = resourceUrl;
module.exports.templatePrompt = templatePrompt;
module.exports.subjectUrl = subjectUrl;