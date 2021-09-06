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
    public class PurchasingTeamSer:PurchasingTeamInterface
    {
        private readonly Import_CompanyContext _context;
        private readonly ErrorHandler _controller;
        private PurchasingTeamHandler _handler;
        public PurchasingTeamSer(Import_CompanyContext context, ErrorHandler controller, PurchasingTeamHandler handler)
        {
            _context = context;
            _controller = controller;
            _handler = handler;
        }


        //Get All PurchasingTeam
        public async Task<List<PurchasingTeamModel>> GetAllPurchasingTeams()
        {
            var PA = await _context.PurchasingTeams.Select(x => _handler.PurchasingTeamHandlerToModel(x)).ToListAsync(); 
            return PA;

        }

        //Get PurchasingTeam By ID
        public async Task<ActionResult<PurchasingTeamModel>> GetPurchasingTeam(int id)
        {
            var PA = await _context.PurchasingTeams.FindAsync(id);

            if (PA == null)
            {
                return _controller.NotFound();
            }


            return _handler.PurchasingTeamHandlerToModel(PA);
        }


        //Add PurchasingTeam to the Database
        public async Task<IActionResult> AddPurchasingTeam(PurchasingTeam PA)
        {
            _context.PurchasingTeams.Add(PA);
            await _context.SaveChangesAsync();
            return _controller.CreatedAtAction(nameof(GetAllPurchasingTeams), new { id = PA.PurcMemId }, _handler.PurchasingTeamHandlerToModel(PA));
        }

        //Delete PurchasingTeam by ID
        public async Task<IActionResult> DeletePurchasingTeam(int id)
        {
            try
            {
                var PA = await _context.PurchasingTeams.FindAsync(id);
                _context.Entry(PA).State = EntityState.Deleted;
                _context.SaveChanges();
                return _controller.StatusCode(200);
            }
            catch (Exception ex)
            {
                return _controller.NotFound();

            }
        }

        //Edit PurchasingTeam Name
        public async Task<IActionResult> EditPurchasingTeam(PurchasingTeam PA)
        {
            try
            {
                _context.Entry(PA).State = EntityState.Modified;
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
