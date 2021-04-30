module.exports = async function (context, req) {
  var siteName = process.env.WEBSITE_SITE_NAME;
  var packageUrl = process.env.WEBSITE_RUN_FROM_PACKAGE;
  var packageUrl = process.env.WEBSITE_RUN_FROM_PACKAGE;
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      text: `version:8 siteName: ${siteName} packageUrl: ${packageUrl}`
    },
  };
};
