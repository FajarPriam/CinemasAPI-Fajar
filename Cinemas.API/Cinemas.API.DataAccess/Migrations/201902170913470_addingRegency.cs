namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingRegency : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Regencies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Provinces_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Provinces", t => t.Provinces_Id)
                .Index(t => t.Provinces_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Regencies", "Provinces_Id", "dbo.Provinces");
            DropIndex("dbo.Regencies", new[] { "Provinces_Id" });
            DropTable("dbo.Regencies");
        }
    }
}
