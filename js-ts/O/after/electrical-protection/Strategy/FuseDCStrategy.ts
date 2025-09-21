// A concrete strategy for a DC Fuse.
import { IProtectionStrategy } from "./IProtectionStrategy.ts";

export class FuseDCStrategy implements IProtectionStrategy {
    public calcIn(In: number): number {
        return In + 4;
    }

    public calcBreakingCapacity(): number {
        return 4;
    }

    public checkProtection(): boolean {
        return true;
    }
}
