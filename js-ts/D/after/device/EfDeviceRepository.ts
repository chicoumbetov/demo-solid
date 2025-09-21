// Low-level module: Concrete implementation using a mock ORM (e.g., Entity Framework).
import { Device } from "./Device";
import { IDeviceRepository } from "./IDeviceRepository";

export class EfDeviceRepository implements IDeviceRepository {
    private devices: Device[] = [
        new Device(1, "Thermostat"),
        new Device(2, "Smart Light"),
        new Device(3, "Security Camera")
    ];

    public getAll(): Device[] {
        // In a real app, this would be a call to a DbContext
        return this.devices;
    }

    public getById(id: number): Device | undefined {
        // In a real app, this would be a call to a DbContext
        return this.devices.find(d => d.id === id);
    }
}
