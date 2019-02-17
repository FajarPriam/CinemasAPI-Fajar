namespace Cinemas.API.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingRatingCategory : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Films", "Rating", c => c.String());
            AddColumn("dbo.Films", "Categories_Id", c => c.Int());
            CreateIndex("dbo.Films", "Categories_Id");
            AddForeignKey("dbo.Films", "Categories_Id", "dbo.Categories", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Films", "Categories_Id", "dbo.Categories");
            DropIndex("dbo.Films", new[] { "Categories_Id" });
            DropColumn("dbo.Films", "Categories_Id");
            DropColumn("dbo.Films", "Rating");
        }
    }
}
