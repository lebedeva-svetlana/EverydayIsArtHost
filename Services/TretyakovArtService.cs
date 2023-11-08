using EverydayIsArt.Models;

namespace EverydayIsArt.Services
{
    public class TretyakovArtService : IArtService
    {
        private readonly IConfiguration _config;
        private readonly IHTMLService _htmlService;

        public TretyakovArtService(IHTMLService htmlService, IConfiguration config)
        {
            _config = config;
            _htmlService = htmlService;
        }

        public async Task<Art> GetArt()
        {
            //string objectUrl = await GetSourceUrl();
            string objectUrl = "https://my.tretyakov.ru/app/masterpiece/123107";
            object htmlDocument = await _htmlService.GetHTMLDocument(objectUrl);

            Art art = new()
            {
                Description = GetDescription(htmlDocument),
                Title = GetTitle(htmlDocument),
                ImageUrl = GetImageUrl(htmlDocument),
                SourceUrl = objectUrl,
                SourceUrlText = _config.GetValue<string>("SourceUrlText:Tretyakov")
            };

            return art;
        }

        private IList<string>? GetPart(object htmlDocument, string selector)
        {
            if (!_htmlService.IsNodeExists(htmlDocument, selector))
            {
                return null;
            }

            return _htmlService.NormalizeNodesInnerText(_htmlService.GetNodesInnerText(htmlDocument, selector));
        }

        private IList<string>? GetAuthorPart(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtAuthor");
            return GetPart(htmlDocument, selector);
        }

        private string? GetDatePart(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtName");
            if (!_htmlService.IsNodeExists(htmlDocument, selector))
            {
                return null;
            }

            return _htmlService.NormalizeNodeInnerText(_htmlService.GetNodesInnerText(htmlDocument, selector)[1]);
        }

        private IList<DescriptionGroup>? GetDescription(object htmlDocument)
        {
            List<DescriptionGroup> description = new();

            var datePart = GetDatePart(htmlDocument);
            if (datePart is not null)
            {
                description.Add(new DescriptionGroup(datePart));
            }

            var authorPart = GetAuthorPart(htmlDocument);
            if (authorPart is not null)
            {
                description.Add(new DescriptionGroup(authorPart));
            }

            var mediumPart = GetMeduimPart(htmlDocument);
            if (mediumPart is not null)
            {
                description.Add(new DescriptionGroup(mediumPart));
            }

            var descriptionPart = GetDescriptionPart(htmlDocument);
            if (descriptionPart is not null)
            {
                for (int i = 0; i < descriptionPart.Count; ++i)
                {
                    description.Add(new DescriptionGroup(descriptionPart[i]));
                }
            }

            if (description.Count == 0)
            {
                return null;
            }

            return description;
        }

        private IList<string>? GetDescriptionPart(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtDesciption");
            return GetPart(htmlDocument, selector);
        }

        private string GetGalleryUrl()
        {
            string url = _config.GetValue<string>("URL:Tretyakov:Gallery");
            int end = _config.GetValue<int>("ObjectsNumber:Tretyakov:Gallery") + 1;
            return url + new Random().Next(1, end);
        }

        private string GetImageUrl(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtImage");
            return _htmlService.GetAttributeValue(htmlDocument, selector, "src");
        }

        private IList<string>? GetMeduimPart(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtMedium");
            return GetPart(htmlDocument, selector);
        }

        private async Task<string> GetSourceUrl()
        {
            int end = _config.GetValue<int>("ObjectsNumber:Tretyakov:Art") + 1;
            string selector = _config.GetValue<string>("Selector:Tretyakov:GalleryObject").Replace("{number}", new Random().Next(1, end).ToString());

            object htmlDocument = await _htmlService.GetHTMLDocument(GetGalleryUrl());
            string href = _htmlService.GetAttributeValue(htmlDocument, selector, "href");

            return Path.Combine(_config.GetValue<string>("URL:Tretyakov:Base"), href).ToString();
        }

        private string GetTitle(object htmlDocument)
        {
            string selector = _config.GetValue<string>("Selector:Tretyakov:ArtName");
            return _htmlService.NormalizeNodeInnerText(_htmlService.GetNodesInnerText(htmlDocument, selector)[0]);
        }
    }
}