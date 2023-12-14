using EverydayIsArt.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    [ApiController]
    [Route("random/[controller]")]
    public class MetmuseumController(IMetmuseumService artService, ILogger<ArtController> logger) : ArtController(artService, logger)
    {
    }
}