using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cinemas.API.DataAccess.Model;
using Cinemas.API.DataAccess.Param;
using Cinemas.API.Common.Repository;

namespace Cinemas.API.BusinessLogic.Service.Master
{
    public class FilmRoomService : IFilmRoomService
    {
        private readonly IFilmRoomRepository _filmRoomRepository;

        public FilmRoomService(IFilmRoomRepository filmRoomRepository)
        {
            _filmRoomRepository = filmRoomRepository;
        }
        public bool Delete(int? Id)
        {
            throw new NotImplementedException();
        }

        public List<FilmRoom> Get()
        {
            throw new NotImplementedException();
        }

        public FilmRoom Get(int? Id)
        {
            throw new NotImplementedException();
        }

        public bool Insert(FilmRoomParam filmRoomParam)
        {
            throw new NotImplementedException();
        }

        public bool Update(int? Id, FilmRoomParam filmRoomParam)
        {
            throw new NotImplementedException();
        }
    }
}
