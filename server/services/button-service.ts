import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  onButtonClicked() {
    return axios.request({
      url: strapi.config.get("url"),
      method: strapi.config.get("method"),
    });
  },
});
