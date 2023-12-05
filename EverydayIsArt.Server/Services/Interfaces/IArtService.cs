using EverydayIsArt.Server.Models;

namespace EverydayIsArt.Server.Services
{
    public interface IArtService
    {
        public Task<Art> GetArt();
    }
}