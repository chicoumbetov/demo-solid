// The IProtectionStrategy interface, which defines the contract for all protection strategies.
// This is the key abstraction that enables OCP.
export interface IProtectionStrategy {
    calcIn(In: number): number;
    calcBreakingCapacity(): number;
    checkProtection(): boolean;
}
