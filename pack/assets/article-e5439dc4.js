import { A as Api } from "./app-fa9793f0.js";
import "vue";
import "katex";
import "vue-router";
import "@vicons/carbon";
Api.prototype.getArticleInfo = function(id) {
  return this.req.get("/article/get", {
    params: {
      id
    }
  });
};
Api.prototype.addPageView = function(id) {
  return this.req.post("/article/pageview", {
    data: {
      id
    }
  });
};
Api.prototype.toggleArticleTrend = function(id, userId, trend, add) {
  return this.req.post("/article/trend", {
    data: {
      id,
      userId,
      trend,
      add
    }
  }, {
    withCredentials: true
  });
};
