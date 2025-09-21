// Low-level module: Another concrete implementation (e.g., Dapper).
import { Device } from "./Device";
import { IDeviceRepository } from "./IDeviceRepository";

export class DapperDeviceRepo implements IDeviceRepository {
    private devices: Device[] = [
        new Device(1, "Thermostat"),
        new Device(2, "Smart Light"),
        new Device(3, "Security Camera")
    ];

    public getAll(): Device[] {
        // In a real app, this would be a call using Dapper
        return this.devices;
    }

    public getById(id: number): Device | undefined {
        // In a real app, this would be a call using Dapper
        return this.devices.find(d => d.id === id);
    }
}
