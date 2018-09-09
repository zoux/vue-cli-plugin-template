const isManually = answers => answers.preset === 'manually'

module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'Please pick a preset:',
    choices: [
      { name: 'Default', value: 'default' },
      { name: 'Manually select features', value: 'manually' }
    ]
  },
  {
    when: isManually,
    type: 'checkbox',
    name: 'features',
    //  (Press <space> to select, <a> to toggle all, <i> to invert selection)
    message: 'Check the features needed for your project:',
    choices: [
      { name: 'scss-bem', value: 'scss-bem', checked: true },
      { name: 'iconfont', value: 'iconfont', checked: true }
    ]
  }
]
