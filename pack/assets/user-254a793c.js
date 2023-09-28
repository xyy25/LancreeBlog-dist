import { E as Api } from "./app-2296c29b.js";
Api.prototype.login = function(username, password, userAgent, keepLogin = false) {
  return this.req.post("/user/login", {
    data: {
      username,
      password,
      userAgent,
      keepLogin
    }
  }, { withCredentials: true });
};
Api.prototype.regis = function(nickname, email, password) {
  return this.req.post("/user/regis", {
    data: {
      nickname,
      email,
      password
    }
  });
};
