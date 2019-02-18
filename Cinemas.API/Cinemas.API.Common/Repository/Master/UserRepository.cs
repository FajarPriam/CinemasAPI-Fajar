using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cinemas.API.DataAccess.Model;
using Cinemas.API.DataAccess.Param;
using Cinemas.API.DataAccess.Context;

namespace Cinemas.API.Common.Repository.Master
{
    public class UserRepository : IUserRepository
    {
        MyContext myContext = new MyContext();
        Village village = new Village();
        bool status = true;
        public bool Delete(int? Id)
        {
            var result = 0;
            User user = Get(Id);
            user.IsDelete = true;
            user.DeleteDate = DateTimeOffset.Now.LocalDateTime;
            result = myContext.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<User> Get()
        {
            var get = myContext.Users.Where(x => x.IsDelete == false).ToList();
            return get;
        }

        public User Get(int? Id)
        {
            User user = myContext.Users.Where(x => x.Id == Id).SingleOrDefault();
            return user;
        }

        public bool Insert(UserParam userParam)
        {
            var result = 0;
            var user = new User();
            user.Username = userParam.Username;
            user.Password = userParam.Password;
            user.First_Name = userParam.First_Name;
            user.Last_Name = userParam.Last_Name;
            user.Gender = userParam.Gender;
            user.Phone = userParam.Phone;
            user.Amount = userParam.Amount;
            user.Address = userParam.Address;
            user.Religions = myContext.Religions.Find(userParam.Religions_Id);
            user.Provinces = myContext.Provinces.Find(userParam.Provinces_Id);
            user.Regencies = myContext.Regencies.Find(userParam.Regencies_Id);
            user.SubDistricts = myContext.SubDistricts.Find(userParam.SubDistricts_Id);
            user.Villages = myContext.Villages.Find(userParam.Villages_Id);
            user.CreateDate = DateTimeOffset.Now.LocalDateTime;
            myContext.Users.Add(user);
            result = myContext.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Update(int? Id, UserParam userParam)
        {
            var result = 0;
            User getUser = Get(Id);
            getUser.Username = userParam.Username;
            getUser.Password = userParam.Password;
            getUser.First_Name = userParam.First_Name;
            getUser.Last_Name = userParam.Last_Name;
            getUser.Gender = userParam.Gender;
            getUser.Phone = userParam.Phone;
            getUser.Amount = userParam.Amount;
            getUser.Address = userParam.Address;
            getUser.Religions = myContext.Religions.Find(userParam.Religions_Id);
            getUser.Provinces = myContext.Provinces.Find(userParam.Provinces_Id);
            getUser.Regencies = myContext.Regencies.Find(userParam.Regencies_Id);
            getUser.SubDistricts = myContext.SubDistricts.Find(userParam.SubDistricts_Id);
            getUser.Villages = myContext.Villages.Find(userParam.Villages_Id);
            getUser.UpdateDate = DateTimeOffset.Now.LocalDateTime;
            result = myContext.SaveChanges();

            if (result > 0)
            {
                status = true;
            }
            return status;
        }
    }
}
