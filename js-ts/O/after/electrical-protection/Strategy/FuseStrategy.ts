import { IProtectionStrategy } from "./IProtectionStrategy.ts";

export class FuseStrategy implements IProtectionStrategy {
    public calcIn(In: number): number {
        return In + 3;
    }

    public calcBreakingCapacity(): number {
        return 3;
    }

    public checkProtection(): boolean {
        return true;
    }
}
