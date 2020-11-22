import { addTicket } from './backlog';
import { canPerformBasicAction } from './bi';
import { fix } from './codebase';
import { applyMitigationStrategy, MITIGATION_STRATEGIES } from './mitigations';
import { analyzeImpact } from './monitoring';
import { notifyUrgentChannel } from './notifications';
import { canRollbackHelp } from './releases';

function defineProblem(complain, monitoring) {
  const issue = {
    // some black magic here
  };
  const isMitigated = () => {
    // shows whether the current problem is resolved
  };
  const isSolved = () => {
    // shows whether the underlying reason is solved
  };
  return {
    issue,
    isMitigated,
    isSolved
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
  const mitigated = false;
  if (canRollbackHelp(issue)) {
    mitigated = applyMitigationStrategy(MITIGATION_STRATEGIES.ROLLBACK); // 1. the quickest
  }
  if (!mitigated) {
    mitigated = applyMitigationStrategy(MITIGATION_STRATEGIES.DATA_FIX); // 2. second quickest but little but risky
  }
  if (!mitigated) {
    mitigated = applyMitigationStrategy(MITIGATION_STRATEGIES.HOT_FIX); // 3. takes time
  }
  return mitigated;
}

function main(complain, monitoring) {
  console.warn('Take a deep breath');

  const { issue, isMitigated, isSolved } = defineProblem(complain, monitoring);

  if (!isReallyUrgent(issue)) {
    return;
  }

  notifyUrgentChannel(); // don't try to solve urgent alone. Take at least 1 more person with you.

  let mitigationAttempt = 0;
  let MAX_MITIGATION_ATTEMPTS = MITIGATION_STRATEGIES.length;

  // the main difference between mitigation and solution
  // mitigation solves one specific use case
  // in case of urgent, it's more important
  // mitigate first, then solve
  while (!isMitigated(issue) || mitigationAttempt <= MAX_MITIGATION_ATTEMPTS) {
    mitigateUrgent(issue);
    mitigationAttempt += 1;
  }

  if (!isSolved(issue)) {
    fix() // 4. if all previous options failed
  }

  deploy();
  confirmResolution();
  notifyUrgentChannel();

}

export default main;
