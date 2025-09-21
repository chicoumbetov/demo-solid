// Abstraction: The high-level module now depends on this interface.
import { Device } from "./Device";

export interface IDeviceRepository {
    getAll(): Device[];
    getById(id: number): Device | undefined;
}
