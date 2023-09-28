import { E as Api } from "./app-2296c29b.js";
Api.prototype.getComments = function(id, page, pageSize) {
  return this.req.get("/article/comment/get", {
    params: { id, page, pageSize }
  });
};
Api.prototype.addComment = function(id, userId, content, replyTo, replyRoot) {
  return this.req.post("/article/comment/add", {
    data: { id, userId, content, replyTo, replyRoot }
  }, { withCredentials: true });
};
Api.prototype.editComment = function(id, commentId, replyRoot, content) {
  return this.req.post("/article/comment/edit", {
    data: { id, commentId, replyRoot, content }
  }, { withCredentials: true });
};
Api.prototype.deleteComment = function(id, commentId, replyRoot) {
  return this.req.post("/article/comment/del", {
    data: { id, commentId, replyRoot }
  }, { withCredentials: true });
};
