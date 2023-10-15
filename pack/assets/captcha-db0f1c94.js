import { A as Api } from "./app-87b15710.js";
Api.prototype.getCaptcha = function() {
  return this.req.get("/captcha");
};
Api.prototype.validateCaptcha = function(key, dots, remove = false) {
  return this.req.post("/captcha", {
    captcha: {
      key,
      dots,
      remove
    }
  });
};
