using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Purch_Managment.DAL
{
    public partial class Import_CompanyContext : DbContext
    {
        public Import_CompanyContext()
        {
        }

        public Import_CompanyContext(DbContextOptions<Import_CompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ClearPorker> ClearPorkers { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<Port> Ports { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<PurchasingTeam> PurchasingTeams { get; set; }
        public virtual DbSet<Shipment> Shipments { get; set; }
        public virtual DbSet<ShipmentProduct> ShipmentProducts { get; set; }
        public virtual DbSet<ShippingCompany> ShippingCompanies { get; set; }
        public virtual DbSet<ShippmentLog> ShippmentLogs { get; set; }
        public virtual DbSet<Status> Statuses { get; set; }
        public virtual DbSet<Storage> Storages { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Import_Company;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<ClearPorker>(entity =>
            {
                entity.HasKey(e => e.PorkerId);

                entity.ToTable("Clear_Porkers");

                entity.Property(e => e.PorkerId).HasColumnName("Porker_ID");

                entity.Property(e => e.ProkerName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Proker_Name");
            });

            modelBuilder.Entity<Currency>(entity =>
            {
                entity.HasKey(e => e.CurrenId);

                entity.Property(e => e.CurrenId).HasColumnName("Curren_ID");

                entity.Property(e => e.CurrenName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Curren_Name");
            });

            modelBuilder.Entity<Port>(entity =>
            {
                entity.Property(e => e.PortId).HasColumnName("Port_ID");

                entity.Property(e => e.PortName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Port_Name");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProdId);

                entity.Property(e => e.ProdId).HasColumnName("Prod_ID");

                entity.Property(e => e.ProdName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Prod_Name");

                entity.Property(e => e.ProdPrice).HasColumnName("Prod_Price");

                entity.Property(e => e.ProdWeight).HasColumnName("Prod_Weight");
            });

            modelBuilder.Entity<PurchasingTeam>(entity =>
            {
                entity.HasKey(e => e.PurcMemId);

                entity.ToTable("Purchasing_Team");

                entity.Property(e => e.PurcMemId).HasColumnName("Purc_Mem_Id");

                entity.Property(e => e.PurcMemName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Purc_Mem_Name");
            });

            modelBuilder.Entity<Shipment>(entity =>
            {
                entity.Property(e => e.ShipmentId).HasColumnName("Shipment_Id");

                entity.Property(e => e.ActualDeliveryDate)
                    .HasColumnType("date")
                    .HasColumnName("actual_delivery_date");

                entity.Property(e => e.CurrencyId).HasColumnName("Currency_Id");

                entity.Property(e => e.CurrentStatusId).HasColumnName("Current_Status_Id");

                entity.Property(e => e.EstimatedDeliveryDate)
                    .HasColumnType("date")
                    .HasColumnName("estimated_delivery_date");

                entity.Property(e => e.PorkerId).HasColumnName("Porker_Id");

                entity.Property(e => e.PortId).HasColumnName("Port_Id");

                entity.Property(e => e.PurchTeamId).HasColumnName("Purch_Team_Id");

                entity.Property(e => e.ShippingCompanyId).HasColumnName("Shipping_Company_Id");

                entity.Property(e => e.StorageId).HasColumnName("Storage_Id");

                entity.Property(e => e.SupplierId).HasColumnName("Supplier_Id");

                entity.Property(e => e.Taxes).HasColumnName("taxes");

                entity.Property(e => e.TaxesCurrencyId).HasColumnName("taxes_Currency_Id");

                entity.Property(e => e.WayOfTransport)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("way_of_transport");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ShipmentCurrencies)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("FK_Shipments_Currencies");

                entity.HasOne(d => d.CurrentStatus)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.CurrentStatusId)
                    .HasConstraintName("FK_Shipments_Status");

                entity.HasOne(d => d.Porker)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.PorkerId)
                    .HasConstraintName("FK_Shipments_Clear_Porkers");

                entity.HasOne(d => d.Port)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.PortId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipments_Ports");

                entity.HasOne(d => d.PurchTeam)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.PurchTeamId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipments_Purchasing_Team");

                entity.HasOne(d => d.ShippingCompany)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.ShippingCompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipments_Shipping_Company");

                entity.HasOne(d => d.Storage)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.StorageId)
                    .HasConstraintName("FK_Shipments_Storages");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.SupplierId)
                    .HasConstraintName("FK_Shipments_Supplier");

                entity.HasOne(d => d.TaxesCurrency)
                    .WithMany(p => p.ShipmentTaxesCurrencies)
                    .HasForeignKey(d => d.TaxesCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipments_Currencies1");
            });

            modelBuilder.Entity<ShipmentProduct>(entity =>
            {
                entity.HasKey(e => new { e.ShipmentId, e.ProdId });

                entity.ToTable("Shipment_Products");

                entity.Property(e => e.ShipmentId).HasColumnName("Shipment_Id");

                entity.Property(e => e.ProdId).HasColumnName("Prod_Id");

                entity.Property(e => e.TotalPrice).HasColumnName("total_price");

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.ShipmentProducts)
                    .HasForeignKey(d => d.ProdId)
                    .HasConstraintName("FK_Shipment_Products_Products");

                entity.HasOne(d => d.Shipment)
                    .WithMany(p => p.ShipmentProducts)
                    .HasForeignKey(d => d.ShipmentId)
                    .HasConstraintName("FK_Shipment_Products_Shipments");
            });

            modelBuilder.Entity<ShippingCompany>(entity =>
            {
                entity.HasKey(e => e.ShCpId);

                entity.ToTable("Shipping_Company");

                entity.Property(e => e.ShCpId).HasColumnName("SH_CP_Id");

                entity.Property(e => e.ShCpName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SH_CP_Name");
            });

            modelBuilder.Entity<ShippmentLog>(entity =>
            {
                entity.HasKey(e => new { e.ShippmentId, e.StatusId });

                entity.ToTable("Shippment_logs");

                entity.Property(e => e.ShippmentId).HasColumnName("Shippment_Id");

                entity.Property(e => e.StatusId).HasColumnName("Status_Id");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("End_Date");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("Start_Date");

                entity.HasOne(d => d.Shippment)
                    .WithMany(p => p.ShippmentLogs)
                    .HasForeignKey(d => d.ShippmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shippment_logs_Shipments");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.ShippmentLogs)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK_Shippment_logs_Status");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("Status");

                entity.Property(e => e.StatusId).HasColumnName("Status_ID");

                entity.Property(e => e.StatusName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Status_Name");
            });

            modelBuilder.Entity<Storage>(entity =>
            {
                entity.Property(e => e.StorageId).HasColumnName("Storage_ID");

                entity.Property(e => e.StorageLocation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Storage_Location");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.HasKey(e => e.SpId);

                entity.ToTable("Supplier");

                entity.Property(e => e.SpId).HasColumnName("SP_ID");

                entity.Property(e => e.SpLoc)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SP_Loc");

                entity.Property(e => e.SpName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SP_Name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
