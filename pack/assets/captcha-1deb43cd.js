import { A as Api } from "./app-71dcac3d.js";
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
