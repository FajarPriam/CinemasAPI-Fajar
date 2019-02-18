using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinemas.API.DataAccess.Param
{
    public class UserParam
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Gender { get; set; }
        public int Phone { get; set; }
        public int Amount { get; set; }
        public string Address { get; set; }
        public int Religions_Id { get; set; }
        public int Provinces_Id { get; set; }
        public int Regencies_Id { get; set; }
        public int SubDistricts_Id { get; set; }
        public int Villages_Id { get; set; }
    }
}
