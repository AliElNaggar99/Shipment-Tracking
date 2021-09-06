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
    public class StatusSer: StatusInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private StatusHandler _handler;
        public StatusSer(Import_CompanyContext context, ErrorHandler controller, StatusHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Status
        public async Task<List<StatusModel>> GetAllStatus()
        {
            var Status = await _context.Statuses.Select(x => _handler.StatusHandlerToModel(x)).ToListAsync();
            return Status;

        }

        //Get Status By ID
        public async Task<ActionResult<StatusModel>> GetStatus(int id)
        {
            var Status = await _context.Statuses.FindAsync(id);

            if (Status == null)
            {
                return _controller.NotFound();
            }


            return _handler.StatusHandlerToModel(Status);
        }


        //Add Status to the Database
        public async Task<IActionResult> AddStatus(Status status)
        {
            _context.Statuses.Add(status);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetStatus), new { id = status.StatusId }, _handler.StatusHandlerToModel(status));
        }

        //Delete Status by ID
        public async Task<IActionResult> DeleteStatus(int id)
        {
            try
            {
                var Status = await _context.Statuses.FindAsync(id);
                _context.Entry(Status).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }

        //Edit Status Name
        public async Task<IActionResult> EditStatus(Status status)
        {
            try
            {
                _context.Entry(status).State = EntityState.Modified;
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
