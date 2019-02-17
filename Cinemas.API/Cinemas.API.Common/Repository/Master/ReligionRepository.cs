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
    public class ReligionRepository : IReligionRepository
    {
        bool status = false;
        MyContext myContext = new MyContext();
        public bool Delete(int? Id)
        {
            var result = 0;
            Religion religion = Get(Id);
            religion.IsDelete = true;
            religion.DeleteDate = DateTimeOffset.Now.LocalDateTime;
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

        public List<Religion> Get()
        {
            var get = myContext.Religions.Where(x => x.IsDelete == false).ToList();
            return get;
        }

        public Religion Get(int? Id)
        {
            Religion religion = myContext.Religions.Where(x => x.Id == Id).SingleOrDefault();
            return religion;
        }

        public bool Insert(ReligionParam religionParam)
        {
            var result = 0;
            var religion = new Religion();
            religion.Name = religionParam.Name;
            religion.CreateDate = DateTimeOffset.Now.LocalDateTime;
            myContext.Religions.Add(religion);
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

        public bool Update(int? Id, ReligionParam religionParam)
        {
            var result = 0;
            var get = Get(Id);
            get.Name = religionParam.Name;
            get.UpdateDate = DateTimeOffset.Now.LocalDateTime;
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
    }
}
