import { A as Api } from "./app-87b15710.js";
Api.prototype.getRecentComments = function(userId) {
  return this.req.post("/article/comment/recent", {
    data: {
      id: userId
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.removeRecentComments = function(userId, commentIds, likeUserIds) {
  return this.req.post("/article/comment/recent/del", {
    data: {
      id: userId,
      commentIds,
      likeUserIds
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.getComments = function(id, sortBy, page, pageSize) {
  return this.req.get("/article/comment/get", {
    params: {
      id,
      sortBy,
      page,
      pageSize
    }
  });
};
Api.prototype.addComment = function(id, userId, content, meta, replyTo, replyUserId, replyRoot) {
  return this.req.post("/article/comment/add", {
    data: {
      id,
      userId,
      content,
      meta,
      replyTo,
      replyUserId,
      replyRoot
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.editComment = function(id, commentId, replyRoot, content) {
  return this.req.post("/article/comment/edit", {
    data: {
      id,
      commentId,
      replyRoot,
      content
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.updateComment = function(id, commentId, commentUserId, replyRoot, field, value) {
  return this.req.post("/article/comment/update", {
    data: {
      id,
      commentId,
      commentUserId,
      replyRoot,
      field,
      value
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.deleteComment = function(id, replyUserId, commentId, replyRoot) {
  return this.req.post("/article/comment/del", {
    data: {
      id,
      replyUserId,
      commentId,
      replyRoot
    }
  }, {
    withCredentials: true
  });
};
