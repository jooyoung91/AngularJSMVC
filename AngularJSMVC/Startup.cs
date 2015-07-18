using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngualMVC.Startup))]
namespace AngualMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
