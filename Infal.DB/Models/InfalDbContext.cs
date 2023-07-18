using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Infal.DB.Models;

public partial class InfalDbContext : DbContext
{
    public InfalDbContext()
    {
    }

    public InfalDbContext(DbContextOptions<InfalDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Menue> Menues { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<StudentCourse> StudentCourses { get; set; }

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
