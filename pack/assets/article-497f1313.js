import{A as e}from"./app-41f66dc0.js";import"vue";import"katex";import"@vicons/carbon";e.prototype.getArticleInfo=function(t){return this.req.get("/article/get",{params:{id:t}})};e.prototype.addPageView=function(t){return this.req.post("/article/pageview",{data:{id:t}})};e.prototype.toggleArticleTrend=function(t,r,i,o){return this.req.post("/article/trend",{data:{id:t,userId:r,trend:i,add:o}},{withCredentials:!0})};
