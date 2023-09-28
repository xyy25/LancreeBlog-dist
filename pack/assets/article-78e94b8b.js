import { E as Api } from "./app-2296c29b.js";
Api.prototype.getArticleInfo = function(id) {
  return this.req.get("/article/get", {
    params: { id }
  });
};
Api.prototype.addPageView = function(id) {
  return this.req.post("/article/pageview", {
    data: { id }
  });
};
