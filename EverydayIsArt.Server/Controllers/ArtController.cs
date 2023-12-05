using EverydayIsArt.Server.Models;
using EverydayIsArt.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    public class ArtController : ControllerBase
    {
        private IArtService _artService;

        public ArtController(IArtService artService)
        {
            _artService = artService;
        }

        [HttpGet]
        public async Task<ActionResult<Art>> GetArt()
        {
            return new JsonResult(await _artService.GetArt());
        }
    }
}