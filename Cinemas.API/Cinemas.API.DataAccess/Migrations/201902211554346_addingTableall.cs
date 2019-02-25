namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingTableall : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BuyTickets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        FilmRooms_Id = c.Int(),
                        Reservations_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.FilmRooms", t => t.FilmRooms_Id)
                .ForeignKey("dbo.Reservations", t => t.Reservations_Id)
                .Index(t => t.FilmRooms_Id)
                .Index(t => t.Reservations_Id);
            
            CreateTable(
                "dbo.OrderProducts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Quantity = c.Int(nullable: false),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        Products_Id = c.Int(),
                        Reservations_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Products", t => t.Products_Id)
                .ForeignKey("dbo.Reservations", t => t.Reservations_Id)
                .Index(t => t.Products_Id)
                .Index(t => t.Reservations_Id);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Variety = c.String(),
                        Description = c.String(),
                        Image = c.String(),
                        Price = c.Int(nullable: false),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        Restaurants_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurants_Id)
                .Index(t => t.Restaurants_Id);
            
            CreateTable(
                "dbo.Restaurants",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        Cinemas_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cinemas", t => t.Cinemas_Id)
                .Index(t => t.Cinemas_Id);
            
            AddColumn("dbo.Films", "Poster", c => c.String());
            AddColumn("dbo.Users", "FirstName", c => c.String());
            AddColumn("dbo.Users", "LastName", c => c.String());
            AddColumn("dbo.Users", "Email", c => c.String());
            AddColumn("dbo.Users", "SecretQuestion", c => c.String());
            AddColumn("dbo.Users", "SecretAnswer", c => c.String());
            AlterColumn("dbo.Films", "Duration", c => c.Int(nullable: false));
            AlterColumn("dbo.Users", "Phone", c => c.String());
            DropColumn("dbo.Films", "PosterPath");
            DropColumn("dbo.Users", "First_Name");
            DropColumn("dbo.Users", "Last_Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "Last_Name", c => c.String());
            AddColumn("dbo.Users", "First_Name", c => c.String());
            AddColumn("dbo.Films", "PosterPath", c => c.String());
            DropForeignKey("dbo.OrderProducts", "Reservations_Id", "dbo.Reservations");
            DropForeignKey("dbo.OrderProducts", "Products_Id", "dbo.Products");
            DropForeignKey("dbo.Products", "Restaurants_Id", "dbo.Restaurants");
            DropForeignKey("dbo.Restaurants", "Cinemas_Id", "dbo.Cinemas");
            DropForeignKey("dbo.BuyTickets", "Reservations_Id", "dbo.Reservations");
            DropForeignKey("dbo.BuyTickets", "FilmRooms_Id", "dbo.FilmRooms");
            DropIndex("dbo.Restaurants", new[] { "Cinemas_Id" });
            DropIndex("dbo.Products", new[] { "Restaurants_Id" });
            DropIndex("dbo.OrderProducts", new[] { "Reservations_Id" });
            DropIndex("dbo.OrderProducts", new[] { "Products_Id" });
            DropIndex("dbo.BuyTickets", new[] { "Reservations_Id" });
            DropIndex("dbo.BuyTickets", new[] { "FilmRooms_Id" });
            AlterColumn("dbo.Users", "Phone", c => c.Int(nullable: false));
            AlterColumn("dbo.Films", "Duration", c => c.String());
            DropColumn("dbo.Users", "SecretAnswer");
            DropColumn("dbo.Users", "SecretQuestion");
            DropColumn("dbo.Users", "Email");
            DropColumn("dbo.Users", "LastName");
            DropColumn("dbo.Users", "FirstName");
            DropColumn("dbo.Films", "Poster");
            DropTable("dbo.Restaurants");
            DropTable("dbo.Products");
            DropTable("dbo.OrderProducts");
            DropTable("dbo.BuyTickets");
        }
    }
}
