/** A move that breaks a rule: the move is rejected, nothing changes */
export class RuleError extends Error {}

export function check(condition: unknown, message: string): asserts condition {
  if (!condition) throw new RuleError(message);
}
