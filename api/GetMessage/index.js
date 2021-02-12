module.exports = async function (context, req) {
  var siteName = 
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      websiteName: process.env.WEBSITE_SITE_NAME,
      package: process.env.WEBSITE_RUN_FROM_PACKAGE,
      version: process.env.FUNCTIONS_EXTENSION_VERSION,
      runtime: process.env.FUNCTIONS_WORKER_RUNTIME
    },
  };
};
