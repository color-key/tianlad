const {execSync} = require('child_process'); 

const cmdStr = 'cd ./public/home && npm run export-cb';

const reBuildHome = () => {
  try {
    const res = execSync(cmdStr);
    console.log(res);
    return {success: true};
  } catch (error) {
    console.log('build error:' + error);
    return {success: false};
  }
}

module.exports = {
  reBuildHome,
}