
namespace After;

public class EfDeviceRepository : IDeviceRepository
{
    private readonly ApiDbContext apiDbContext;

    public EfDeviceRepository(ApiDbContext apiDbContext)
    {
        this.apiDbContext = apiDbContext;
    }

    public List<Device> GetAll()
    {
        return apiDbContext.Devices.ToList();
    }

    public Device? GetById(int id)
    {
        return apiDbContext.Devices.FirstOrDefault(x => x.Id == id);
    }
}
