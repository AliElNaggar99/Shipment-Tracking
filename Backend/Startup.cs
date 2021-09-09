using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Purch_Managment.DAL;
using Purch_Managment.Services;
using Purch_Managment.Handlers;
using Purch_Managment.Interfaces;
using Purch_Managment.Controllers;

namespace Purch_Managment
{
    public class Startup
    {
       //readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsApi",
                    builder => builder.WithOrigins("http://localhost:4200", "http://mywebsite.com")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
            });
            services.AddScoped<Import_CompanyContext, Import_CompanyContext>();
            services.AddScoped<ClearPorkerHandler, ClearPorkerHandler>();
            services.AddScoped<ClearPorkerSer, ClearPorkerSer>();
            services.AddScoped<ErrorHandler, ErrorHandler>();
            services.AddScoped<ShipmentHandler, ShipmentHandler>();
            services.AddScoped<ShipmentSer, ShipmentSer>();
            services.AddScoped<CurrencyHandler, CurrencyHandler>();
            services.AddScoped<CurrencySer, CurrencySer>();
            services.AddScoped<PortHandler, PortHandler>();
            services.AddScoped<PortSer, PortSer>();
            services.AddScoped<ProductHandler, ProductHandler>();
            services.AddScoped<ProductSer, ProductSer>();
            services.AddScoped<StorageHandler, StorageHandler>();
            services.AddScoped<StorageSer, StorageSer>();
            services.AddScoped<PurchasingTeamHandler, PurchasingTeamHandler>();
            services.AddScoped<PurchasingTeamSer, PurchasingTeamSer>();
            services.AddScoped<SupplierHandler, SupplierHandler>();
            services.AddScoped<SupplierSer, SupplierSer>();
            services.AddScoped<StatusHandler, StatusHandler>();
            services.AddScoped<StatusSer, StatusSer>();
            services.AddScoped<ShippingCompanyHandler, ShippingCompanyHandler>();
            services.AddScoped<ShippingCompanySer, ShippingCompanySer>();
            services.AddScoped<ShipmentLogsHandlers, ShipmentLogsHandlers>();
            services.AddScoped<ShipmentLogsSer, ShipmentLogsSer>();
            services.AddScoped<ShipmentProductsHandler, ShipmentProductsHandler>();
            services.AddScoped<ShipmentProductsSer, ShipmentProductsSer>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("CorsApi");
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
          
        }
    }
}
