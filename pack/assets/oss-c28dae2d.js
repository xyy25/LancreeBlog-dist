import { A as Api } from "./app-71dcac3d.js";
import "vue";
import "katex";
import "vue-router";
import "@vicons/carbon";
Api.prototype.getSTSToken = function() {
  return this.req.post("/sts");
};
Api.prototype.getObjectSignUrl = function(url, expire) {
  return this.req.get("/oss/sign", {
    params: {
      url: encodeURIComponent(url),
      expire
    }
  });
};
Api.prototype.getObject = function(url) {
  url = encodeURIComponent(url);
  return fetch(`${this.serverURL}/oss/get?url=${url}`).then((res) => res.arrayBuffer());
};
Api.prototype.putObject = function(id, name, file) {
  const form = new FormData();
  form.append("id", id);
  form.append("name", name);
  form.append("file", file);
  return this.req.put("/oss/put", form, {
    withCredentials: true
  });
};
