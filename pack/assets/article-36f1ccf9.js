import { A as Api } from "./app-ba3a1878.js";
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
Api.prototype.toggleArticleTrend = function(id, userId, trend, add) {
  return this.req.post("/article/trend", {
    data: { id, userId, trend, add }
  }, { withCredentials: true });
};
