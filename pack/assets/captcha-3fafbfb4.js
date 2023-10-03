import { F as Api } from "./app-e3cb9e55.js";
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
