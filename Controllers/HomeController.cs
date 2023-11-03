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
                Text = "Текст",
                ImageUrl = "",
                SourceUrl = ""
            };

            return View(viewModel);
        }
    }
}