using System;
using System.Collections.Generic;

namespace Infal.DB.Models;

public partial class StudentCourse
{
    public int Id { get; set; }

    public string CourseName { get; set; } = null!;

    public DateTime CourseDate { get; set; }

    public int StudentId { get; set; }

    public virtual Student IdNavigation { get; set; } = null!;
}
