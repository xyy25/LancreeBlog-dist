import { D as Api } from "./app-5d65d1f1.js";
Api.prototype.getComments = function(id, page, pageSize) {
  return this.req.get("/article/comment/get", {
    params: { id, page, pageSize }
  });
};
Api.prototype.addComment = function(id, userId, content, replyTo, replyRoot) {
  return this.req.post("/article/comment/add", {
    data: { id, userId, content, replyTo, replyRoot }
  });
};
Api.prototype.editComment = function(id, commentId, replyRoot, content) {
  return this.req.post("/article/comment/edit", {
    data: { id, commentId, replyRoot, content }
  });
};
Api.prototype.deleteComment = function(id, commentId, replyRoot) {
  return this.req.post("/article/comment/del", {
    data: { id, commentId, replyRoot }
  });
};
