using Cinemas.API.Core.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinemas.API.DataAccess.Model
{
    public class User : BaseModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Gender { get; set; }
        public int Phone { get; set; }
        public int Amount { get; set; }
        public string Address { get; set; }
        public virtual Religion Religions { get; set; }
        public virtual Province Provinces { get; set; }
        public virtual Regency Regencies { get; set; }
        public virtual SubDistrict SubDistricts { get; set; }
        public virtual Village Villages { get; set; }

    }
}
