import { analyzeImpact } from 'monitoring';
import { canPerformBasicAction } from 'bi';

function defineProblem(compain, monitoring) {
  // some black magic going on here
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

function urgentHandler(compain, monitoring) {
  const potentialIssue = defineProblem(compain, monitoring);
  if (isReallyUrgent(potentialIssue)) {}
}

export default urgentHandler;
