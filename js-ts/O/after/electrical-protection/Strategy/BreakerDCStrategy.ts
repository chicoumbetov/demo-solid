import { IProtectionStrategy } from "./IProtectionStrategy.ts";

export class BreakerDCStrategy implements IProtectionStrategy {
    public calcIn(In: number): number {
        return In + 2;
    }

    public calcBreakingCapacity(): number {
        return 2;
    }

    public checkProtection(): boolean {
        return true;
    }
}
