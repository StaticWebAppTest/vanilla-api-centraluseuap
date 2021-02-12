module.exports = async function (context, req) {
  var siteName = process.env.WEBSITE_SITE_NAME;
  var packageUrl = process.env.WEBSITE_RUN_FROM_PACKAGE;
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      text: `siteName: ${siteName} packageUrl: ${packageUrl}`
    },
  };
};
