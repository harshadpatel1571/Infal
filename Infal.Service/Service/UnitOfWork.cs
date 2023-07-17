namespace Infal.Service.Service;

public class UnitOfWork : IUnitOfWork
{
    private GenricDemoContext _context;
    public UnitOfWork(GenricDemoContext context)
    {
        _context = context;
        EmployeeService = new EmployeeService(context);
        MenueService = new MenueService(context);
    }

    public IEmployeeService EmployeeService { get; private set; }
    public IMenueService MenueService { get; private set; }

    public void Dispose()
    {
        _context.Dispose();
    }
    public int Save()
    {
        return _context.SaveChanges();
    }

}
