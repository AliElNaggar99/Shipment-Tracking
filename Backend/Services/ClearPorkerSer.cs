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
    public class ClearPorkerSer : ClearPorkerInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private ClearPorkerHandler _handler;
        public int PorkerId { get; set; }
        public string ProkerName { get; set; }

        public ClearPorkerSer(Import_CompanyContext context , ErrorHandler controller , ClearPorkerHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }

         public ClearPorkerSer()
          {
           
          }
        //Get All Porkers
        public async Task<List<ClearPorkerModel>> GetAllClearPorker()
        {
            var clearPorker = await _context.ClearPorkers.Select(x => _handler.ClearPorkerHandlerToModel(x)).ToListAsync();

            return clearPorker;

        }

        //Get Poker By ID
        public async Task<ActionResult<ClearPorkerModel>> GetClearPorker(int id)
        {
            var ClearPorker = await _context.ClearPorkers.FindAsync(id);

            if (ClearPorker == null)
            {
                return _controller.NotFound();
            }

           
            return _handler.ClearPorkerHandlerToModel(ClearPorker);
        }

        //Add Porker to the Database
        public async Task<IActionResult> AddClearPorker(ClearPorker clearProker)
        {
            var clearPorkerDB = new ClearPorker {
                PorkerId = clearProker.PorkerId,
                 ProkerName = clearProker.ProkerName
            };

            _context.ClearPorkers.Add(clearPorkerDB);
            await _context.SaveChangesAsync();

            return _controller.CreatedAtAction(nameof(GetClearPorker),new { id = clearProker.PorkerId }, _handler.ClearPorkerHandlerToModel(clearPorkerDB));
        }

        //Delete Porker by ID
        public async Task<IActionResult> DeleteClearPorker(int id)
        {
            var clearProker = await _context.ClearPorkers.FindAsync(id);

            if (clearProker == null)
            {
                return _controller.NotFound();
            }

            _context.ClearPorkers.Remove(clearProker);
            await _context.SaveChangesAsync();

            return _controller.NoContent();
        }


        //Edit Porker Name
        public async Task<IActionResult> EditPorkerName(int id, ClearPorker clearPorker)
        {
           /* if (id != clearPorker.PorkerId)
            {
                return _controller.BadRequest();
            }
*/
            var clearPorkerDB = await _context.ClearPorkers.FindAsync(id);

            if(clearPorkerDB == null)
            {
                return _controller.NotFound();
            }

            clearPorkerDB.ProkerName = clearPorker.ProkerName;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!ClearPorkerExists(id))
            {
                  return _controller.NotFound();
              
            }

            return _controller.NoContent();
        }
        public bool ClearPorkerExists(int id) => _context.ClearPorkers.Any(e => e.PorkerId == id);

    }
}
