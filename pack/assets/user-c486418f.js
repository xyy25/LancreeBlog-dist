import{A as o}from"./app-de5dda1b.js";import"vue";import"katex";o.prototype.login=function(t,r,e,i,n=!1){return this.req.post("/user/login",{data:{username:t,password:r,userAgent:e,captcha:i,keepLogin:n}},{withCredentials:!0})};o.prototype.regis=function(t,r,e,i){return this.req.post("/user/regis",{data:{nickname:t,email:r,password:e,captcha:i}})};o.prototype.getUserInfo=function(t){return this.req.post("/user/info",{data:{id:t}},{withCredentials:!0})};o.prototype.modifyUserInfo=function(t,r,e){return this.req.post("/user/info/modify",{data:{id:t,field:r,value:e}},{withCredentials:!0})};
