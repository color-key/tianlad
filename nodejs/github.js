const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `607c44573836d390ba22b42ab6bcf9e229156900` });

const baseOption = {
  owner: 'color-key',
  repo: 'tianlad'
}

const findLatestRun = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/actions/runs", {
    ...baseOption,
    branch: 'web',
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
  console.log(response);
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
    const res = await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
      ...baseOption,
      workflow_id: workflow.id,
      ref: 'web'
    })
    return res;
  }
  return workflow;
}

module.exports = {
  run,
  rerun
}