const path = require('path')
const { sortDependencies, installDependencies, runLintFix, printMessage } = require('./utils')

module.exports = {
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
      required: false,
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
  complete (data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
  // 自定义的 Handlebars 辅助函数
  helpers: {
  }
}
