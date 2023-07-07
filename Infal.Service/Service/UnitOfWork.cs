namespace Infal.Service.Service;

public class UnitOfWork : IUnitOfWork
{
    private InfalContext _context;
    public UnitOfWork(InfalContext context)
    {
        _context = context;
        EmployeeService = new EmployeeService(context);
    }

    public IEmployeeService EmployeeService { get; private set; }

    public void Dispose()
    {
        _context.Dispose();
    }
    public int Save()
    {
        return _context.SaveChanges();
    }

}
