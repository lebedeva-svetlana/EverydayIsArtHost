using EverydayIsArt.Server.Models;

namespace EverydayIsArt.Server.Services
{
    public class AllService : IAllService
    {
        private List<IArtService> _services = new();

        public AllService(ITretyakovService tretyakovService, IVamService vamService)
        {
            _services.Add(tretyakovService);
            _services.Add(vamService);
        }

        public async Task<Art> GetArt()
        {
            int index = new Random().Next(0, _services.Count);
            return await _services[index].GetArt();
        }
    }
}