(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6502"],{c11S:function(n,t,s){"use strict";var e=s("gTgX");s.n(e).a},gTgX:function(n,t,s){},ntYl:function(n,t,s){"use strict";s.r(t);var e={name:"Login",components:{LangSelect:s("ETGp").a},data:function(){return{loginForm:{username:"admin",password:"admin"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,s){!function(n){return["admin","editor"].indexOf(n.trim())>=0}(t)?s(new Error("请输入正确的用户名")):s()}}],password:[{required:!0,trigger:"blur",validator:function(n,t,s){t.length<5?s(new Error("密码不能小于5位")):s()}}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/"})}).catch(function(){n.loading=!1})})}}},o=(s("c11S"),s("wq1S"),s("KHd+")),i=Object(o.a)(e,function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[n._v(n._s(n.$t("login.title")))]),n._v(" "),s("lang-select",{staticClass:"set-language"})],1),n._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container svg-container_login"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),s("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),s("el-input",{attrs:{type:n.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),s("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[s("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("\n      "+n._s(n.$t("login.logIn"))+"\n    ")]),n._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"20px"}},[n._v(n._s(n.$t("login.username"))+" : admin")]),n._v(" "),s("span",[n._v(n._s(n.$t("login.password"))+": "+n._s(n.$t("login.any")))])]),n._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[n._v(n._s(n.$t("login.username"))+" : editor")]),n._v(" "),s("span",[n._v(n._s(n.$t("login.password"))+" : "+n._s(n.$t("login.any")))])])],1)],1)},[],!1,null,"ee1adb4c",null);i.options.__file="index.vue";t.default=i.exports},pdtc:function(n,t,s){},wq1S:function(n,t,s){"use strict";var e=s("pdtc");s.n(e).a}}]);