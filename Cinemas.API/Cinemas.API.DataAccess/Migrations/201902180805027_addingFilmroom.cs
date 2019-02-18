namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingFilmroom : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Cinemas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Address = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Theaters_Id = c.Int(),
                        Villages_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Theaters", t => t.Theaters_Id)
                .ForeignKey("dbo.Villages", t => t.Villages_Id)
                .Index(t => t.Theaters_Id)
                .Index(t => t.Villages_Id);
            
            CreateTable(
                "dbo.Theaters",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Villages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        SubDistricts_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.SubDistricts", t => t.SubDistricts_Id)
                .Index(t => t.SubDistricts_Id);
            
            CreateTable(
                "dbo.SubDistricts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Regencies_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Regencies", t => t.Regencies_Id)
                .Index(t => t.Regencies_Id);
            
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
            
            CreateTable(
                "dbo.Provinces",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Filmrooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Films",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Rating = c.String(),
                        Poster = c.String(),
                        Synopsis = c.String(),
                        Description = c.String(),
                        Duration = c.String(),
                        Status = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Categories_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.Categories_Id)
                .Index(t => t.Categories_Id);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Religions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Seat = c.Int(nullable: false),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Cinemas_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cinemas", t => t.Cinemas_Id)
                .Index(t => t.Cinemas_Id);
            
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
                        Address = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Provinces_Id = c.Int(),
                        Regencies_Id = c.Int(),
                        Religions_Id = c.Int(),
                        SubDistricts_Id = c.Int(),
                        Villages_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Provinces", t => t.Provinces_Id)
                .ForeignKey("dbo.Regencies", t => t.Regencies_Id)
                .ForeignKey("dbo.Religions", t => t.Religions_Id)
                .ForeignKey("dbo.SubDistricts", t => t.SubDistricts_Id)
                .ForeignKey("dbo.Villages", t => t.Villages_Id)
                .Index(t => t.Provinces_Id)
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
            DropForeignKey("dbo.Users", "Provinces_Id", "dbo.Provinces");
            DropForeignKey("dbo.Rooms", "Cinemas_Id", "dbo.Cinemas");
            DropForeignKey("dbo.Films", "Categories_Id", "dbo.Categories");
            DropForeignKey("dbo.Cinemas", "Villages_Id", "dbo.Villages");
            DropForeignKey("dbo.Villages", "SubDistricts_Id", "dbo.SubDistricts");
            DropForeignKey("dbo.SubDistricts", "Regencies_Id", "dbo.Regencies");
            DropForeignKey("dbo.Regencies", "Provinces_Id", "dbo.Provinces");
            DropForeignKey("dbo.Cinemas", "Theaters_Id", "dbo.Theaters");
            DropIndex("dbo.Users", new[] { "Villages_Id" });
            DropIndex("dbo.Users", new[] { "SubDistricts_Id" });
            DropIndex("dbo.Users", new[] { "Religions_Id" });
            DropIndex("dbo.Users", new[] { "Regencies_Id" });
            DropIndex("dbo.Users", new[] { "Provinces_Id" });
            DropIndex("dbo.Rooms", new[] { "Cinemas_Id" });
            DropIndex("dbo.Films", new[] { "Categories_Id" });
            DropIndex("dbo.Regencies", new[] { "Provinces_Id" });
            DropIndex("dbo.SubDistricts", new[] { "Regencies_Id" });
            DropIndex("dbo.Villages", new[] { "SubDistricts_Id" });
            DropIndex("dbo.Cinemas", new[] { "Villages_Id" });
            DropIndex("dbo.Cinemas", new[] { "Theaters_Id" });
            DropTable("dbo.Users");
            DropTable("dbo.Rooms");
            DropTable("dbo.Religions");
            DropTable("dbo.Items");
            DropTable("dbo.Films");
            DropTable("dbo.Filmrooms");
            DropTable("dbo.Provinces");
            DropTable("dbo.Regencies");
            DropTable("dbo.SubDistricts");
            DropTable("dbo.Villages");
            DropTable("dbo.Theaters");
            DropTable("dbo.Cinemas");
            DropTable("dbo.Categories");
            DropTable("dbo.Admins");
        }
    }
}
