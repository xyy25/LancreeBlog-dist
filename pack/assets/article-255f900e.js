import { D as Api } from "./app-5d65d1f1.js";
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
