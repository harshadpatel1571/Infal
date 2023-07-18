namespace Infal.Service.Service;

class MenueService : GenericService<Menue>, IMenueService
{
    public MenueService(InfalDbContext context) : base(context)
    {
    }

    public async Task<IEnumerable<MenuDto>> GetAllMenue()
    {
        var menuData = await _context.Menues.ToListAsync();
        var mainMenu = menuData.Where(x => x.ParantMenuId == null).ToList();

        var finalData = mainMenu.Select(x => new MenuDto
        {
            Id = x.Id,
            ParantMenuId = x.ParantMenuId,
            Name = x.Name,
            Description = x.Description,
            Icon = x.Icon,
            Url = x.Url,
            MenuList = menuData.Where(y => y.ParantMenuId == x.Id).Select(z => new MenuDto
            {
                Id = z.Id,
                ParantMenuId = z.ParantMenuId,
                Name = z.Name,
                Description = z.Description,
                Icon = z.Icon,
                Url = z.Url,
                MenuList = menuData.Where(c => c.ParantMenuId == z.Id).Select(c => new MenuDto
                {
                    Id = c.Id,
                    ParantMenuId = c.ParantMenuId,
                    Name = c.Name,
                    Description = c.Description,
                    Icon = c.Icon,
                    Url = c.Url,
                }).ToList(),
            }).ToList(),
        }).ToList();

        return finalData;
    }
}
