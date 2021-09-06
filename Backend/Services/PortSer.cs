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
    public class PortSer: PortInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private PortHandler _handler;
        public PortSer(Import_CompanyContext context, ErrorHandler controller, PortHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Ports
        public async Task<List<PortModel>> GetAllPorts()
        {
            var ports = await _context.Ports.Select(x => _handler.PortHandlerToModel(x)).ToListAsync(); 
            return ports;

        }

        //Get Port By ID
        public async Task<ActionResult<PortModel>> GetPort(int id)
        {
            var port = await _context.Ports.FindAsync(id);

            if (port == null)
            {
                return _controller.NotFound();
            }


            return _handler.PortHandlerToModel(port);
        }


        //Add Port to the Database
        public async Task<IActionResult> AddPort(Port port)
        {
            _context.Ports.Add(port);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetPort), new { id = port.PortId }, _handler.PortHandlerToModel(port));
        }

        //Delete Port by ID
        public async Task<IActionResult> DeletePort(int id)
        {
            try
            {
                var port = await _context.Ports.FindAsync(id);
                _context.Entry(port).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }

        //Edit Port Name
        public async Task<IActionResult> EditPort(Port port)
        {
            try
            {
                _context.Entry(port).State = EntityState.Modified;
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
