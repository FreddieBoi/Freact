using System.Web;
using System.Web.Http;

namespace Freact {

    public class WebApiApplication : HttpApplication {

        protected void Application_Start() {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

    }

}
