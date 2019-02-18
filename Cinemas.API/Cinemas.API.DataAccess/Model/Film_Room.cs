using Cinemas.API.Core.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinemas.API.DataAccess.Model
{
    public class Film_Room : BaseModel
    {
        public DateTime ShowDate { get; set; }
        public DateTime Hour { get; set; }
        public int Price { get; set; }
        public virtual Room Rooms { get; set; }
        public virtual Film Films { get; set; }
    }
}
