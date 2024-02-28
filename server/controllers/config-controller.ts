import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  const getConfigForProperty = (property: string) =>
    strapi.plugin("button").config(property);

  return {
    index(ctx) {
      console.log("config controller");
      ctx.body = {
        url: getConfigForProperty("url"),
        method: getConfigForProperty("method"),
        name: getConfigForProperty("name"),
        buttonName: getConfigForProperty("buttonName"),
      };
    },
  };
};
