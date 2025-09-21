// Violation of the Interface Segregation Principle (ISP)
// The IElectricalDevice interface is too "fat", forcing implementing
// classes to include methods they don't need.

export interface IElectricalDevice {
    broadcastNetwork(): void;
    consumeEnergy(): void;
    storeEnergy(): void;
}

// A SolarPanel shouldn't have to implement consume and store methods.
// This is a violation of ISP.
export class SolarPanel implements IElectricalDevice {
    public broadcastNetwork(): void {
        console.log("Panneau diffuse sur réseau");
    }

    public consumeEnergy(): void {
        throw new Error("A solar panel cannot consume energy!");
    }

    public storeEnergy(): void {
        throw new Error("A solar panel cannot store energy!");
    }
}

/*
* in the "before" the IElectricalDevice interface is a "fat" interface—it contains methods that are not relevant to all classes that might implement it. A Battery can consume, store, and broadcast energy, so it fits the interface. However, a SolarPanel should only broadcast energy; forcing it to implement ConsumeEnergy and StoreEnergy is a violation of ISP. The principle states that no client should be forced to depend on methods it does not use.

*"after" code solves this perfectly by splitting the large interface into smaller, more specific ones: IEnergySource, IEnergyConsumer, and IEnergyStorage. This allows a class like SolarPanel to only implement the interface it actually needs, leading to a much cleaner and more maintainable design.
*/