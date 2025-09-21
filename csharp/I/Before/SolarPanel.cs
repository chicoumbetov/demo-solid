namespace Before;

public interface IElectricalDevice
{
    void BroadcastNetwork();
    void ConsumeEnergy();
    void StoreEnergy();
}

public class Battery : IElectricalDevice
{
    public void BroadcastNetwork() { /* ... */ }
    public void ConsumeEnergy() { /* ... */ }
    public void StoreEnergy() { /* ... */ }
}
