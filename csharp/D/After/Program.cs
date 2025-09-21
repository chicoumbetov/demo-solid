using After;

var builder = WebApplication.CreateBuilder();

builder.Services.AddDbContext<ApiDbContext>();
builder.Services.AddScoped<IDeviceRepository, EfDeviceRepository>();

var app = builder.Build();

app.MapGet("/device", (IDeviceRepository repo) =>
{
    return Results.Ok(repo.GetAll());
});

app.MapGet("/device/{id}", (IDeviceRepository repo, int id) =>
{
    var device = repo.GetById(id);

    if (device is null)
        return Results.NotFound();

    return Results.Ok(device);
});

app.Run();