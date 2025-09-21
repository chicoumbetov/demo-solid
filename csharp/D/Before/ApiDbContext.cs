using Microsoft.EntityFrameworkCore;

namespace Before;

public class ApiDbContext : DbContext
{
    public DbSet<Device> Devices { get; set; }
}
