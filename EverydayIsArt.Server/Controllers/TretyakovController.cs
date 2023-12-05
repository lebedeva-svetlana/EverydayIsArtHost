using EverydayIsArt.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    [ApiController]
    [Route("random/[controller]")]
    public class TretyakovController(ITretyakovService artService) : ArtController(artService)
    {
    }
}