namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingFilmRooms : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FilmRooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ShowDate = c.DateTime(nullable: false),
                        Hour = c.Int(nullable: false),
                        Price = c.Int(nullable: false),
                        CreateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        UpdateDate = c.DateTimeOffset(nullable: false, precision: 7),
                        DeleteDate = c.DateTimeOffset(nullable: false, precision: 7),
                        IsDelete = c.Boolean(nullable: false),
                        Films_Id = c.Int(),
                        Rooms_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Films", t => t.Films_Id)
                .ForeignKey("dbo.Rooms", t => t.Rooms_Id)
                .Index(t => t.Films_Id)
                .Index(t => t.Rooms_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.FilmRooms", "Rooms_Id", "dbo.Rooms");
            DropForeignKey("dbo.FilmRooms", "Films_Id", "dbo.Films");
            DropIndex("dbo.FilmRooms", new[] { "Rooms_Id" });
            DropIndex("dbo.FilmRooms", new[] { "Films_Id" });
            DropTable("dbo.FilmRooms");
        }
    }
}
