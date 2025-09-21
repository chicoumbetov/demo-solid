// A concrete strategy for a High-Voltage (HV) Breaker.
// This new class extends the functionality without modifying existing code.
import { IProtectionStrategy } from "./IProtectionStrategy.ts";

export class BreakerHVStrategy implements IProtectionStrategy {
    public calcIn(In: number): number {
        return In + 5;
    }

    public calcBreakingCapacity(): number {
        return 5;
    }

    public checkProtection(): boolean {
        return true;
    }
}
