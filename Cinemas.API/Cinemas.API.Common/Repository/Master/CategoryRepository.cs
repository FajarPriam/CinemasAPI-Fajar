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
    public class CategoryRepository : ICategoryRepository
    {
        bool status = false;
        MyContext myContext = new MyContext();
        public bool Delete(int? Id)
        {
            var result = 0;
            Category category = Get(Id);
            category.IsDelete = true;
            category.DeleteDate = DateTimeOffset.Now.LocalDateTime;
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

        public List<Category> Get()
        {
            var get = myContext.Categories.Where(x => x.IsDelete == false).ToList();
            return get;
        }

        public Category Get(int? Id)
        {
            Category category = myContext.Categories.Where(x => x.Id == Id).SingleOrDefault();
            return category;
        }

        public bool Insert(CategoryParam categoryParam)
        {
            var result = 0;
            var category = new Category();
            category.Name = categoryParam.Name;
            category.CreateDate = DateTimeOffset.Now.LocalDateTime;
            myContext.Categories.Add(category);
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

        public bool Update(int? Id, CategoryParam categoryParam)
        {
            var result = 0;
            var get = Get(Id);
            get.Name = categoryParam.Name;
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
