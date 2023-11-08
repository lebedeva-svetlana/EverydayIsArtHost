using EverydayIsArt.Models;
using EverydayIsArt.Services;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    public class HomeController : Controller
    {
        private IArtService _artService;

        public HomeController(IArtService artService)
        {
            _artService = artService;
        }

        public async Task<IActionResult> Index()
        {
            Art art = await _artService.GetArt();
            return View(art);
        }
    }
}