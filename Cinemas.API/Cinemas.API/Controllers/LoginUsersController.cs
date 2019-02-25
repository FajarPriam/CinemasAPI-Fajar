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
    public class LoginUsersController : ApiController
    {
        private readonly IUserService _userService;
        public LoginUsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public User Login(string username, string password)
        {
            return _userService.Login(username, password);
        }

        //// GET: api/LoginUsers
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/LoginUsers/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/LoginUsers
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/LoginUsers/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/LoginUsers/5
        //public void Delete(int id)
        //{
        //}
    }
}
