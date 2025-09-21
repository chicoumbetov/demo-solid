namespace After;

public interface IDeviceRepository
{
    List<Device> GetAll();

    Device? GetById(int id);
}
