import { A as Api } from "./app-6f3b7185.js";
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
