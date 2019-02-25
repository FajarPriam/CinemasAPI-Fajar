using Cinemas.API.BusinessLogic.Services;
using Cinemas.API.DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Cinemas.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginsController : ApiController
    {
        private readonly IAdminService _adminService;

        public LoginsController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        public Admin Login(string Username, string Password)
        {
            return _adminService.Login(Username, Password);
        }

        //// GET: api/Logins
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/Logins/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Logins
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Logins/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Logins/5
        //public void Delete(int id)
        //{
        //}
    }
}
