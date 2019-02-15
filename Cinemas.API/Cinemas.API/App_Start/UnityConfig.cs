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

            // this is repository area
            container.RegisterType<IProvinceRepository, ProvinceRepository>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}