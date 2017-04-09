using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MaterialDemo.Startup))]
namespace MaterialDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
