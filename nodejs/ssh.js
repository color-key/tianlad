const {execSync} = require('child_process'); 

// const cmdStr = 'cd ./public/home && npm install --registry=https://registry.npm.taobao.org/ && npm run export-cb';
const cmdStr = 'cd ../home && npm install && npm run export-cb';

const reBuildHome = () => {
  try {
    const res = execSync(cmdStr);
    console.log(res);
    return {success: true};
  } catch (error) {
    console.log('build error:' + error);
    return {success: false, error};
  }
}

module.exports = {
  reBuildHome,
}