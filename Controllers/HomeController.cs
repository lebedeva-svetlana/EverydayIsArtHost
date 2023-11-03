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
                ImageUrl = "https://upload.wikimedia.org/wikipedia/ru/5/50/%D0%9F%D0%BB%D0%B0%D1%81%D1%82%D0%BE%D0%B2._%D0%A1%D0%B5%D0%BD%D0%BE%D0%BA%D0%BE%D1%81._1945.jpg",
                SourceUrl = ""
            };

            return View(viewModel);
        }
    }
}