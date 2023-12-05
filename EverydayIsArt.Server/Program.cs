using EverydayIsArt.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// TODO: AddCors
var anyCors = "_anyCors";
builder.Services.AddCors(options => options.AddPolicy(name: anyCors,
    policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    }
));

builder.Services.AddControllers();

builder.Services.Configure<RouteOptions>(options =>
{
    options.LowercaseUrls = true;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITretyakovService, TretyakovService>();
builder.Services.AddScoped<IHTMLService, HTMLService>();

var app = builder.Build();

app.UseDefaultFiles();
//app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(anyCors);

//app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();