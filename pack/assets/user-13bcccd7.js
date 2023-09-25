import { D as Api } from "./app-5d65d1f1.js";
Api.prototype.login = function(username, password, keepLogin = false) {
  return this.req.post("/user/login", {
    data: {
      username,
      password,
      keepLogin
    }
  });
};
