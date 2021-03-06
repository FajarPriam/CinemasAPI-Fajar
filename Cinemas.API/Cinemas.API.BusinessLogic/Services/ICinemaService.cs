﻿using Cinemas.API.DataAccess.Model;
using Cinemas.API.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinemas.API.BusinessLogic.Services
{
    public interface ICinemaService
    {
        bool Insert(CinemaParam cinemaParam);
        bool Update(int? Id, CinemaParam cinemaParam);
        bool Delete(int? Id);
        List<Cinema> Get();
        Cinema Get(int? Id);
        List<Cinema> GetCinema(int? Id);

        List<Cinema> GetCinemaByTheater(int? Id);
    }
}
