module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      apiToken: "xpQF5xophPSWAamedT6aWHWd",
      appFilter: "apointoo-backend",
      teamFilter: "hugo-moreira-de-carvalhos-projects",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});