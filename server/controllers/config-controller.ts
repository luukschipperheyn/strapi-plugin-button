import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  const getConfigForProperty = (property: string) =>
    strapi.plugin("button").config(property);

  return {
    index(ctx) {
      console.log("config controller");
      ctx.body = {
        name: getConfigForProperty("name"),
        buttons: getConfigForProperty("buttons"),
      };
    },
  };
};
