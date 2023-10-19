import { A as Api } from "./app-31c05f4c.js";
import "vue";
import "katex";
import "vue-router";
import "@vicons/carbon";
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
