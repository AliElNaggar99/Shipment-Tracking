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
    public class StorageSer : StorageInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private StorageHandler _handler;
        public StorageSer(Import_CompanyContext context, ErrorHandler controller, StorageHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All Storages
        public async Task<List<StorageModel>> GetAllStorages()
        {
            var Storages = await _context.Storages.Select(x => _handler.StorageHandlerToModel(x)).ToListAsync(); 
            return Storages;

        }

        //Get Storage By ID
        public async Task<ActionResult<StorageModel>> GetStorage(int id)
        {
            var storage = await _context.Storages.FindAsync(id);

            if (storage == null)
            {
                return _controller.NotFound();
            }


            return _handler.StorageHandlerToModel(storage);
        }


        //Add Storage to the Database
        public async Task<IActionResult> AddStorage(Storage storage)
        {
            _context.Storages.Add(storage);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetStorage), new { id = storage.StorageId }, _handler.StorageHandlerToModel(storage));
        }

        //Delete Storage by ID
        public async Task<IActionResult> DeleteStorage(int id)
        {
            try
            {
                var storage = await _context.Storages.FindAsync(id);
                _context.Entry(storage).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }
        //Edit Storage Name
        public async Task<IActionResult> EditStorage(Storage storage)
        {

            try
            {
                _context.Entry(storage).State = EntityState.Modified;
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
