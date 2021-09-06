using Purch_Managment.DAL;
using Purch_Managment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Purch_Managment.Handlers
{
    public class StorageHandler
    {
        private readonly Import_CompanyContext _context;
        public StorageHandler(Import_CompanyContext context)
        {
            _context = context;
        }

        public StorageModel StorageHandlerToModel(Storage storage) =>
           new StorageModel
           {
               StorageId = storage.StorageId,
               StorageLocation = storage.StorageLocation
           };
    }
}
