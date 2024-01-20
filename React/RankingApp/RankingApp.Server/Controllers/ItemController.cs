using Microsoft.AspNetCore.Mvc;
using RankingApp.Server.Data.Models;

namespace RankingApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> items = new[]
        {
            new ItemModel{Id = 1, Title = "The GodFather", ImageId = 1, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 2, Title = "Highlander", ImageId = 2, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 3, Title = "The Last of the Mohicans", ImageId = 3, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 4, Title = "Police Academy 6", ImageId = 5, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 5, Title = "Rear Window", ImageId = 6, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 6, Title = "Road House", ImageId = 7, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 7, Title = "The Shawshank Redemption", ImageId = 8, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 8, Title = "Star Treck IV", ImageId = 9, Ranking = 0, ItemType = 1 },
            new ItemModel{ Id = 9, Title = "Superman 4", ImageId = 10, Ranking = 0, ItemType = 1 },
        };

        public ItemModel[] Get(int itemType)
            => items.Where(i => i.ItemType == itemType).ToArray();

    }
}
