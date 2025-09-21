// Adhering to the Interface Segregation Principle (ISP)
// Interfaces are segregated so classes only implement what they need.

export interface IEnergySource {
    broadcastNetwork(): void;
}

export interface IEnergyConsumer {
    consumeEnergy(): void;
}

export interface IEnergyStorage {
    storeEnergy(): void;
}

// A SolarPanel now only implements the interface it needs, nothing else.
export class SolarPanel implements IEnergySource {
    public broadcastNetwork(): void {
        console.log("Panneau diffuse sur réseau");
    }
}

/*
*"after" code solves this perfectly by splitting the large interface into smaller, more specific ones: IEnergySource, IEnergyConsumer, and IEnergyStorage. This allows a class like SolarPanel to only implement the interface it actually needs, leading to a much cleaner and more maintainable design.
*/