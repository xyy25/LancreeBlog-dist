import { F as Api } from "./app-04e719f4.js";
Api.prototype.getRecentComments = function(userId) {
  return this.req.post("/article/comment/recent", {
    data: { id: userId }
  });
};
Api.prototype.getComments = function(id, sortBy, page, pageSize) {
  return this.req.get("/article/comment/get", {
    params: { id, sortBy, page, pageSize }
  });
};
Api.prototype.addComment = function(id, userId, content, meta, replyTo, replyUserId, replyRoot) {
  return this.req.post("/article/comment/add", {
    data: { id, userId, content, meta, replyTo, replyUserId, replyRoot }
  }, { withCredentials: true });
};
Api.prototype.editComment = function(id, commentId, replyRoot, content) {
  return this.req.post("/article/comment/edit", {
    data: { id, commentId, replyRoot, content }
  }, { withCredentials: true });
};
Api.prototype.updateComment = function(id, commentId, commentUserId, replyRoot, field, value) {
  return this.req.post("/article/comment/update", {
    data: { id, commentId, commentUserId, replyRoot, field, value }
  }, { withCredentials: true });
};
Api.prototype.deleteComment = function(id, commentId, replyRoot) {
  return this.req.post("/article/comment/del", {
    data: { id, commentId, replyRoot }
  }, { withCredentials: true });
};
