using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngualMVC.Controllers
{
    public class ProductsListController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}