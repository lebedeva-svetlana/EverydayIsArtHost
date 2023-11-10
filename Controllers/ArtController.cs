using EverydayIsArt.Models;
using EverydayIsArt.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    public class ArtController : Controller
    {
        private IArtService _artService;

        public ArtController(IArtService artService)
        {
            _artService = artService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Info()
        {
            return View();
        }

        public async Task<IActionResult> Random(string source)
        {
            Art art = await _artService.GetArt();
            return View(art);
        }
    }
}