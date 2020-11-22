import { analyzeImpact } from './monitoring';
import { canPerformBasicAction } from './bi';
import { notifyUrgentChannel } from './notifications';
import { canRollbackHelp, rollback } from './releases';
import { hotfix, fix } from './codebase';
import { addTicket } from './backlog';
import { MITIGATION_STRATEGIES, applyMitigationStrategy } from './mitigations';

function defineProblem(compain, monitoring) {
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

function main(compain, monitoring) {
  console.warn('Take a deep breath');
  
  const {issue, isMitigated, isSolved} = defineProblem(compain, monitoring);
  
  if (isReallyUrgent(potentialIssue)) {
    notifyUrgentChannel();

    let mitigationAttempt = 0;
    let MAX_MITIGATION_ATTEMPTS = MITIGATION_STRATEGIES.length;
    
    while(!isMitigated(issue) || mitigationAttempt <= MAX_MITIGATION_ATTEMPTS) {
      mitigateUrgent(issue);
      mitigationAttempt += 1;
    }
    
    if (!isSolved(issue)) {
      try {
        fix() // 4. if all previous options failed
      }
      catch (ooops) {
        addTicket(issue);
      }
    }
  }
}

export default main;
