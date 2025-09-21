// Low-level module: Simulates a database context.
// In a real-world scenario, this would be a full ORM or data access layer.
import { Device } from "./Device";

export class ApiDbContext {
    public devices: Device[] = [
        new Device(1, "Thermostat"),
        new Device(2, "Smart Light"),
        new Device(3, "Security Camera")
    ];

    public findById(id: number): Device | undefined {
        return this.devices.find(d => d.id === id);
    }
    
    public getAll(): Device[] {
        return this.devices;
    }
}
