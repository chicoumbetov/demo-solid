using Microsoft.EntityFrameworkCore;

namespace After;

public class ApiDbContext : DbContext
{
    public DbSet<Device> Devices { get; set; }
}
