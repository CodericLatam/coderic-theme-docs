const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const { data } = await octokit.request('GET /orgs/{org}/members', {
  org: owner,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

console.dir(data);