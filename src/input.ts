import { getBooleanInput, getInput } from '@actions/core';
import { Inputs } from './types';

export function getGithubToken(): string | undefined {
  const envToken = process.env.GITHUB_TOKEN;
  const inputToken = getInput('GITHUB_TOKEN');
  const token = envToken ?? inputToken;
  return token;
}

export function getInputs(): Inputs {
  return {
    token: getGithubToken(),
    assemblyFile: getInput('assembly-file', { required: true }),
    increaseMajor: getBooleanInput('increase-major'),
    increaseMinor: getBooleanInput('increase-minor'),
    increaseBuild: getBooleanInput('increase-build'),
    tag: getInput('tag') || undefined,
    branch: getInput('branch') || undefined,
    makeCommit: getBooleanInput('make-commit'),
  };
}
