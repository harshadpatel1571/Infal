using System;
using System.Collections.Generic;

namespace Infal.DB.Models;

public partial class Menue
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Url { get; set; }

    public string? Description { get; set; }

    public string? Icon { get; set; }

    public int? ParantMenuId { get; set; }

    public virtual ICollection<Menue> InverseParantMenu { get; set; } = new List<Menue>();

    public virtual Menue? ParantMenu { get; set; }
}
