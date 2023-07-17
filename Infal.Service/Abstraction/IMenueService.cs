namespace Infal.Service.Abstraction;

public interface IMenueService : IGenericService<Menue>
{
    Task<IEnumerable<MenuDto>> GetAllMenue();
}
