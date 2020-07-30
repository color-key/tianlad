const {spawn} = require('child_process');

const cmdStr = 'cd ./public/home && npm install --registry=https://registry.npm.taobao.org/ && npm run export-cb';
// const cmdStr = 'cd ../home && npm install && npm run export-cb';

// const reBuildHome = () => {
//   try {
//     const res = execSync(cmdStr);
//     console.log(res);
//     return {success: true};
//   } catch (error) {
//     console.log('build error:' + error);
//     return {success: false, error};
//   }
// }

const reBuildHome = () => {
  const reBuildHomeSpawn = spawn(cmdStr, [], {shell: true});
  return new Promise((resolve) => {
    reBuildHomeSpawn.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
  
    reBuildHomeSpawn.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    reBuildHomeSpawn.on('close', (code) => {
      console.log(`子进程退出，退出码 ${code}`);
      if(code !== 0){
        resolve({success: false, code, error: '异常退出'});
      }
      resolve({success: true, code});
    });
  })
}

module.exports = {
  reBuildHome,
}