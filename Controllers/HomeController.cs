using EverydayIsArt.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace EverydayIsArt.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        public IActionResult Index()
        {
            PostViewModel viewModel = new()
            {
                Title = "Заголовок",
                Description = "Текст",
                ImageUrl = "https://w.wiki/8259",
                SourceUrl = ""
            };

            return View(viewModel);
        }
    }
}