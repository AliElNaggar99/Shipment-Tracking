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

        //Get All Shipments
        public async Task<List<ShipmentModel>> GetAllShipments()
        {
            var Shipments = await _context.Shipments.Include(s => s.Supplier).Include(s => s.PurchTeam).
                Include(s=>s.ShippingCompany).Include(s=>s.Currency).Include(s=>s.Port).Include(s=>s.Storage).
                Include(s=>s.CurrentStatus).Include(s=>s.Porker).Include(s=>s.TaxesCurrency).
                Select(x => _shipmentHandle.ShipmentHandlerToModel(x)).ToListAsync(); ;
            return Shipments;

        }


        //Get Shipments By ID
        public async Task<ActionResult<ShipmentModel>> GetShipment(int id)
        {
            var Shipment = await _context.Shipments.FindAsync(id);

            if (Shipment == null)
            {
                return _controller.NotFound();
            }


            return _shipmentHandle.ShipmentHandlerToModel(Shipment);
        }


        //Add Shipment to the Database
        public async Task<IActionResult> AddShipment(Shipment shipment)
        {
            _context.Shipments.Add(shipment);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return _controller.CreatedAtAction(nameof(GetShipment), new { id = shipment.ShipmentId }, _shipmentHandle.ShipmentHandlerToModel(shipment));
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
        public async Task<IActionResult> EditShipment(int id ,Shipment shipment)
        {
   
            try
            {
                _context.Entry(shipment).State = EntityState.Modified;
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
