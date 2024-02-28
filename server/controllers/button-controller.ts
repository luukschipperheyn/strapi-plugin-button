import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    strapi.plugin("button").service("buttonService").onButtonClicked();
    ctx.body = "button clicked";
  },
});
