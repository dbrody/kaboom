const chalk = require('chalk');

const errorLog = (error) => {
    const eLog = chalk.red(error)
    console.log(eLog)
}

module.exports = {
    errorLog
}