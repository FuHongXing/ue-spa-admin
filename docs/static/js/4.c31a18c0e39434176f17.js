webpackJsonp([4],{PUeh:function(e,s,n){var i=n("tZft");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("ab879436",i,!0)},dy4A:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("IcnI"),a={inserted:function(e,s,n){var a=s.value,t=i.a.getters&&i.a.getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=a;t.some(function(e){return r.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},t=function(e){e.directive("permission",a)};window.Vue&&(window.permission=a,Vue.use(t)),a.install=t;var r=a,o={name:"directivePermission",components:{SwitchRoles:n("v5cR").default},directives:{permission:r},data:function(){return{key:1}},methods:{handleRolesChange:function(){this.key++}}},l={render:function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),n("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n      Only\n      "),n("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this\n    ")],1),e._v(" "),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n      Only\n      "),n("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1),e._v(" "),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n      Both\n      "),n("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and\n      "),n("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1)])],1)},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(e){n("PUeh")},"data-v-9aeaeb82",null);s.default=c.exports},tZft:function(e,s,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.app-container[data-v-9aeaeb82] .permission-alert {\n  width: 320px;\n  margin-top: 30px;\n  background-color: #f0f9eb;\n  color: #67c23a;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: block;\n}\n.app-container[data-v-9aeaeb82] .permission-tag {\n  background-color: #ecf5ff;\n}\n",""])}});