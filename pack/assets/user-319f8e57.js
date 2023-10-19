import { A as Api } from "./app-94e18a59.js";
import "vue";
import "katex";
import "vue-router";
import "@vicons/carbon";
Api.prototype.login = function(username, password, userAgent, captcha, keepLogin = false) {
  return this.req.post("/user/login", {
    data: {
      username,
      password,
      userAgent,
      captcha,
      keepLogin
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.regis = function(nickname, email, password, captcha) {
  return this.req.post("/user/regis", {
    data: {
      nickname,
      email,
      password,
      captcha
    }
  });
};
Api.prototype.getUserInfo = function(id) {
  return this.req.post("/user/info", {
    data: {
      id
    }
  }, {
    withCredentials: true
  });
};
Api.prototype.modifyUserInfo = function(id, field, value) {
  return this.req.post("/user/info/modify", {
    data: {
      id,
      field,
      value
    }
  }, {
    withCredentials: true
  });
};
