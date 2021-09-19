using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Purch_Managment.DAL;
using Purch_Managment.Handlers;
using Purch_Managment.Interfaces;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Services
{
    public class ShipmentSer: ShipmentInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ShipmentHandler _shipmentHandle;
        public ShipmentSer(Import_CompanyContext context, ErrorHandler controller, ShipmentHandler shipmentHandle)
        {
            _context = context;
            _controller = controller;
            _shipmentHandle = shipmentHandle;
        }

        //Get All ShipmentsId only
        public async Task<List<int>> GetAllShipmentsIds()
        {
            var Shipments = await _context.Shipments.Select(x => x.ShipmentId).ToListAsync();
            return Shipments;

        }

        //Get All Shipments
        public async Task<List<ShipmentModel>> GetAllShipments()
        {
            var Shipments = await _context.Shipments.Include(s => s.Supplier).Include(s => s.PurchTeam).
                Include(s=>s.ShippingCompany).Include(s=>s.Currency).Include(s=>s.Port).Include(s=>s.Storage).
                Include(s=>s.CurrentStatus).Include(s=>s.Porker).Include(s=>s.TaxesCurrency).
                Select(x => _shipmentHandle.ShipmentHandlerToModel(x)).ToListAsync(); 
            return Shipments;

        }


        //Get Shipments By ID
        public async Task<ActionResult<ShipmentModel>> GetShipment(int id)
        {
            var Shipment = await _context.Shipments.Include(s => s.Supplier).Include(s => s.PurchTeam).
                Include(s => s.ShippingCompany).Include(s => s.Currency).Include(s => s.Port).Include(s => s.Storage).
                Include(s => s.CurrentStatus).Include(s => s.Porker).Include(s => s.TaxesCurrency).FirstOrDefaultAsync(i => i.ShipmentId == id); 

            if (Shipment == null)
            {
                return _controller.NotFound();
            }


            return _shipmentHandle.ShipmentHandlerToModel(Shipment);
        }


        //Add Shipment to the Database
        public async Task<IActionResult> AddShipment(Shipment shipment)
        {
            try
            {
                _context.Shipments.Add(shipment);
                ShippmentLog ShipmentLog = new ShippmentLog();
                _context.SaveChanges();
                //Make a  new log for the created shipment with status of created
                // and time equal current time;
                ShipmentLog.ShippmentId = shipment.ShipmentId;
                ShipmentLog.StatusId = shipment.CurrentStatusId;
                ShipmentLog.StartDate = DateTime.Now;
                ShipmentLog.EndDate = DateTime.Now;
                _context.ShippmentLogs.Add(ShipmentLog);
                await _context.SaveChangesAsync();
                return _controller.StatusCode(200);
            }
            catch(Exception ex)
            {
                return _controller.StatusCode(404);
            }
        }

        //Delete Shipment by ID
        public async Task<IActionResult> DeleteShipment(int id)
        {
            try
            {
                var Shipment = await _context.Shipments.FindAsync(id);
                _context.Entry(Shipment).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
/*
            _context.Shipments.Remove(Shipment);
            await _context.SaveChangesAsync();*/

            //return _controller.NoContent();
        }

        //Edit Shipment Name
        public async Task<IActionResult> EditShipment(Shipment shipment)
        {
            try
            {
                var oldShipment =  _context.Shipments.Find(shipment.ShipmentId);
                int oldStatus = oldShipment.CurrentStatusId;
                _context.Entry(oldShipment).State = EntityState.Detached;
                _context.Entry(shipment).State = EntityState.Modified;
                if(oldStatus != shipment.CurrentStatusId)
                {
                    //Change the log of the status

                    var updateOldStatusDate =  _context.ShippmentLogs.Where(i => i.ShippmentId == shipment.ShipmentId).OrderBy(x =>x.LogId).Last();

                    updateOldStatusDate.EndDate = DateTime.Now;
                    //Make a  new log for the created shipment with status of created
                    // and time equal current time;
                    ShippmentLog ShipmentLog = new ShippmentLog();
                    ShipmentLog.ShippmentId = shipment.ShipmentId;
                    ShipmentLog.StatusId = shipment.CurrentStatusId;
                    ShipmentLog.StartDate = DateTime.Now;
                    ShipmentLog.EndDate = DateTime.Now;
                    _context.ShippmentLogs.Add(ShipmentLog);
                }

                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex) 
            {
                return _controller.NotFound();

            }
           

        }

        public bool ShipmentExists(int id) => _context.Shipments.Any(e => e.ShipmentId == id);
    }
}
