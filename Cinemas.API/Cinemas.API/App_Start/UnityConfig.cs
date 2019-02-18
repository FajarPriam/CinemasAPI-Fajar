using Cinemas.API.BusinessLogic.Service;
using Cinemas.API.BusinessLogic.Service.Master;
using Cinemas.API.Common.Repository;
using Cinemas.API.Common.Repository.Master;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace Cinemas.API
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // this is service area
            container.RegisterType<IProvinceService, ProvinceService>();
            container.RegisterType<IRegencyService, RegencyService>();
            container.RegisterType<ICategoryService, CategoryService>();
            container.RegisterType<IFilmService, FilmService>();
            container.RegisterType<ITheaterService, TheaterService>();
            container.RegisterType<IReligionService, ReligionService>();
            container.RegisterType<ISubDistrictService, SubDistrictService>();
            container.RegisterType<IVillageService, VillageService>();
            container.RegisterType<IAdminService, AdminService>();
            container.RegisterType<IUserService, UserService>();

            // this is repository area
            container.RegisterType<IProvinceRepository, ProvinceRepository>();
            container.RegisterType<IRegencyRepository, RegencyRepository>();
            container.RegisterType<ICategoryRepository, CategoryRepository>();
            container.RegisterType<IFilmRepository, FilmRepository>();
            container.RegisterType<ITheaterRepository, TheaterRepository>();
            container.RegisterType<IReligionRepository, ReligionRepository>();
            container.RegisterType<ISubDistrictRepository, SubDistrictRepository>();
            container.RegisterType<IVillageRepository, VillageRepository>();
            container.RegisterType<IAdminRepository, AdminRepository>();
            container.RegisterType<IUserRepository, UserRepository>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}