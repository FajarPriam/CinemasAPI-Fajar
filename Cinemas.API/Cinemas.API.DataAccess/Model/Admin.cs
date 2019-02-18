using Cinemas.API.Core.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinemas.API.DataAccess.Model
{
    public class Admin : BaseModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
