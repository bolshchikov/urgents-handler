import { analyzeImpact, readLogs } from './monitoring';
import { canPerformBasicAction } from './bi';
import { notifyUrgentChannel } from './notifications';
import { canRollbackHelp, rollback } from './releases';
import { fix } from './codebase';

function defineProblem(compain, monitoring) {
  const issue = {
    // some black magic here
  };
  const mitigated = () => {
    // shows whether the current problem is resolved
  };
  const solved = () => {
    // shows whether the underlying reason is solved
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

function mitigateUrgent(issue) {
  if (canRollbackHelp(issue)) {
    return rollback();
  }
}

function main(compain, monitoring) {
  console.warn('Take a deep breath');
  
  const {issue, resolved} = defineProblem(compain, monitoring);
  
  if (isReallyUrgent(potentialIssue)) {
    notifyUrgentChannel();
    while(!mitigated(issue)) {
      mitigateUrgent(issue);
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
