import { IProtectionStrategy } from "./IProtectionStrategy.ts";

export class BreakerStrategy implements IProtectionStrategy {
    public calcIn(In: number): number {
        return In + 1;
    }

    public calcBreakingCapacity(): number {
        return 1;
    }

    public checkProtection(): boolean {
        return true;
    }
}
