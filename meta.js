modules.export = {
  // 收集用户自定义数据
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A vue 2.x + vue-cli 3 project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint-standard to lint your code?',
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm'
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no'
        }
      ]
    }
  },
  // 根据条件过滤文件
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint'
  },
  // 模板渲染完成后的回调函数
  complete () {
  },
  // 自定义的 Handlebars 辅助函数
  helpers: {
  }
}
