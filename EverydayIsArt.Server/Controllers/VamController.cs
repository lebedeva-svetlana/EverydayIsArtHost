using EverydayIsArt.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    [ApiController]
    [Route("random/[controller]")]
    public class VamController(IVamService artService, ILogger<ArtController> logger) : ArtController(artService, logger)
    {
    }
}