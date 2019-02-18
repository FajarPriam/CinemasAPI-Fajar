namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fixingProvinces : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Users", name: "Provices_Id", newName: "Provinces_Id");
            RenameIndex(table: "dbo.Users", name: "IX_Provices_Id", newName: "IX_Provinces_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Users", name: "IX_Provinces_Id", newName: "IX_Provices_Id");
            RenameColumn(table: "dbo.Users", name: "Provinces_Id", newName: "Provices_Id");
        }
    }
}
