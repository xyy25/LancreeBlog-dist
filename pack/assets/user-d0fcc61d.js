import { D as Api } from "./app-998d8359.js";
Api.prototype.login = function(username, password, keepLogin = false) {
  return this.req.post("/user/login", {
    data: {
      username,
      password,
      keepLogin
    }
  });
};
