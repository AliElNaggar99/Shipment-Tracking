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
    public class ShipmentLogsSer : ShipmentLogsInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ShipmentLogsHandlers _handler;
        public ShipmentLogsSer(Import_CompanyContext context, ErrorHandler controller, ShipmentLogsHandlers handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All ShipmentLogs
        public async Task<List<ShipmentLogsModel>> GetAllShipmentLogs()
        {
            var logs = await _context.ShippmentLogs.Include(s=>s.Status).Select(x => _handler.ShipmentLogsHandlerToModel(x)).ToListAsync();
            return logs;

        }

        //Get ShipmentLogs By shipmetn ID
        public async Task<ActionResult<IEnumerable<ShipmentLogsModel>>> GetShipmentLog(int id)
        {
            var log = await _context.ShippmentLogs.Include(s =>s.Status).Where(x => x.ShippmentId == id).Select(x => _handler.ShipmentLogsHandlerToModel(x)).ToListAsync();

            if (log == null || !log.Any())
            {
                return _controller.NotFound();
            }
            return log;
        }


        //Add ShipmentLogs to the Database
        public async Task<IActionResult> AddShipmentLog(ShippmentLog log)
        {
            _context.ShippmentLogs.Add(log);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetShipmentLog), new { id = log.ShippmentId }, _handler.ShipmentLogsHandlerToModel(log));
        }

        //Delete ShipmentLogs by ID
        public async Task<IActionResult> DeleteShipmentLog(ShippmentLog logSh)
        {
            try
            {
                var log = await _context.ShippmentLogs.FindAsync(logSh.ShippmentId,logSh.StatusId);
                _context.Entry(log).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit ShipmentLogs Name
        public async Task<IActionResult> EditShipmentLog(ShippmentLog log)
        {

            try
            {
                _context.Entry(log).State = EntityState.Modified;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
    }
}
