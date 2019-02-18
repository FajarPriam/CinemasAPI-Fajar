namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changePictiruToString : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Films", "Poster", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Films", "Poster", c => c.Binary());
        }
    }
}
