namespace Infal.Service.Dto;

public class MenuDto
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Icon { get; set; } = string.Empty;

    public string Url { get; set; } = string.Empty;

    public int? ParantMenuId { get; set; }

    public List<MenuDto>? MenuList { get; set; }
}
