using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Infal.DB.Models;

public partial class GenricDemoContext : DbContext
{
    public GenricDemoContext()
    {
    }

    public GenricDemoContext(DbContextOptions<GenricDemoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Menue> Menues { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<StudentCourse> StudentCourses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.;Database=GenricDemo;MultipleActiveResultSets=true;Trusted_Connection=true;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.ToTable("Employee");

            entity.Property(e => e.EmailId)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.EmpId)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.MobileNo)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(150)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Menue>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_Menu");

            entity.Property(e => e.Description)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Icon)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Url)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.ParantMenu).WithMany(p => p.InverseParantMenu)
                .HasForeignKey(d => d.ParantMenuId)
                .HasConstraintName("FK_Menu_Menu");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.ToTable("Student");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.MobileNo)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(150)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StudentCourse>(entity =>
        {
            entity.ToTable("StudentCourse");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CourseDate).HasColumnType("datetime");
            entity.Property(e => e.CourseName)
                .HasMaxLength(150)
                .IsUnicode(false);

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.StudentCourse)
                .HasForeignKey<StudentCourse>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_StudentCourse_Student");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
