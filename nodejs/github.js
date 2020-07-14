const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `7fb0bf60deb24f4ac351c17345dc9bdab9e0f976` });

const baseOption = {
  owner: 'color-key',
  repo: 'tianlad',
  branch: 'production',
}

const findLatestRun = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/actions/runs", {
    ...baseOption,
    status: 'success',
    per_page: 1,
    page: 1,
  });
  if(response.status === 200 && response.data.workflow_runs[0]){
    const run = response.data.workflow_runs[0];
    return run;
  }else{
    return null;
  }
}

const findWorkflow = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
    ...baseOption,
    per_page: 2,
    page: 1,
  })
  if(response.status === 200){
    const filterWorkflows = response.data.workflows.filter((item) => item.name === 'Manually triggered workflow');
    const workflow = filterWorkflows[0] || null;
    return workflow;
  }else{
    return null;
  }
}

const rerun = async () => {
  const run = await findLatestRun();
  if(run){
    const response = await octokit.request('POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun', {
      ...baseOption,
      run_id: run.id
    })
    console.log(response);
  }
}

const run = async () => {
  const workflow = await findWorkflow();
  if(workflow){
    await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
      ...baseOption,
      workflow_id: workflow.id,
      ref: 'web'
    })
  }
}

module.exports = {
  run,
  rerun
}