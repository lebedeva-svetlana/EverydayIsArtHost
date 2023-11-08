using EverydayIsArt.Models;

namespace EverydayIsArt.Services
{
    public interface IArtService
    {
        public Task<Art> GetArt();
    }
}