using Before;

var builder = WebApplication.CreateBuilder();

var app = builder.Build();

app.MapGet("/device", (ApiDbContext context) =>
{
    var allDevices = context.Devices.ToList();

    return Results.Ok(allDevices);
});

app.MapGet("/device/{id}", (ApiDbContext context, int id) =>
{
    var device = context.Devices.FirstOrDefault(d => d.Id == id);

    if (device is null)
        return Results.NotFound();

    return Results.Ok(device);
});

app.Run();
