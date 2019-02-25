using Cinemas.API.BusinessLogic.Services;
using Cinemas.API.DataAccess.Model;
using Cinemas.API.DataAccess.Param;
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
    public class RegistersController : ApiController
    {
        private readonly IUserService _userService;
        public RegistersController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: api/Registers
        public IEnumerable<User> Get()
        {
            return _userService.Get();
        }

        // GET: api/Registers/5
        public User Get(int id)
        {
            return _userService.Get(id);
        }

        // POST: api/Registers
        public void Post(UserParam userParam)
        {
            _userService.Insert(userParam);
        }

        // PUT: api/Registers/5
        public void Put(int id, UserParam userParam)
        {
            _userService.Update(id, userParam);
        }

        // DELETE: api/Registers/5
        public void Delete(int id)
        {
            _userService.Delete(id);
        }
    }
}
