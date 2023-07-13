namespace Infal.DB.Contaxt;

public class InfalContext : DbContext
{
    public InfalContext(DbContextOptions options) : base(options) { }
    public DbSet<Employee> Employee { get; set; }

}
