import { analyzeImpact } from './monitoring';
import { canPerformBasicAction } from './bi';

function defineProblem(compain, monitoring) {
  const issue = {
    // some black magic here
  };
  const resolved = () => {
    // how to test whether issue is resolved
  };
  return {
    issue,
    resolved
  }
}

function isReallyUrgent(issue) {
  const impact = analyzeImpact(issue);
  if (impact >= '5% of all users' || impact >= '50% of the same company') {
    return true;
  }
  if (!canPerformBasicAction(issue)) {
    return true;
  }
  return false;
}

function solveUrgent(issue) {
}

function main(compain, monitoring) {
  console.warn('Take a deep breath');
  
  const {issue, resolved} = defineProblem(compain, monitoring);
  if (isReallyUrgent(potentialIssue)) {
    while(!resolved(issue)) {
      solveUrgent(issue);
    }
  }

  const severity = estimateSeverity(issue);
  
  switch(severity) {
    case 'high':
      break;
    case 'medium':
      break;
    case 'low':
      break;
  }
}

export default main;
