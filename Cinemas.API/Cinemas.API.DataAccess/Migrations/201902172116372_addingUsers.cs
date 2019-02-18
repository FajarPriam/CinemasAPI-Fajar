namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingUsers : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                        First_Name = c.String(),
                        Last_Name = c.String(),
                        Gender = c.String(),
                        Phone = c.Int(nullable: false),
                        Amount = c.Int(nullable: false),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Provices_Id = c.Int(),
                        Regencies_Id = c.Int(),
                        Religions_Id = c.Int(),
                        SubDistricts_Id = c.Int(),
                        Villages_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Provinces", t => t.Provices_Id)
                .ForeignKey("dbo.Regencies", t => t.Regencies_Id)
                .ForeignKey("dbo.Religions", t => t.Religions_Id)
                .ForeignKey("dbo.SubDistricts", t => t.SubDistricts_Id)
                .ForeignKey("dbo.Villages", t => t.Villages_Id)
                .Index(t => t.Provices_Id)
                .Index(t => t.Regencies_Id)
                .Index(t => t.Religions_Id)
                .Index(t => t.SubDistricts_Id)
                .Index(t => t.Villages_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Users", "Villages_Id", "dbo.Villages");
            DropForeignKey("dbo.Users", "SubDistricts_Id", "dbo.SubDistricts");
            DropForeignKey("dbo.Users", "Religions_Id", "dbo.Religions");
            DropForeignKey("dbo.Users", "Regencies_Id", "dbo.Regencies");
            DropForeignKey("dbo.Users", "Provices_Id", "dbo.Provinces");
            DropIndex("dbo.Users", new[] { "Villages_Id" });
            DropIndex("dbo.Users", new[] { "SubDistricts_Id" });
            DropIndex("dbo.Users", new[] { "Religions_Id" });
            DropIndex("dbo.Users", new[] { "Regencies_Id" });
            DropIndex("dbo.Users", new[] { "Provices_Id" });
            DropTable("dbo.Users");
        }
    }
}
