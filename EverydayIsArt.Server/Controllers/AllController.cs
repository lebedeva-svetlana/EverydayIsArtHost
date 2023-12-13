using EverydayIsArt.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    [ApiController]
    [Route("random/[controller]")]
    public class AllController(IAllService artService, ILogger<ArtController> logger) : ArtController(artService, logger)
    {
    }
}