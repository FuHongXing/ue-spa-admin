(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ff6a"],{eGdN:function(t,e,a){"use strict";var n=a("l/V8");a.n(n).a},kP7L:function(t,e,a){"use strict";a.r(e);var n=a("t3Un");var l={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{list:null,listLoading:!0,tableKey:0,total:null,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+index"}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,function(t){return Object(n.a)({url:"/table/list",method:"get",params:t})}(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.page=t,this.fetchData()}}},i=(a("eGdN"),a("KHd+")),s=Object(i.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.index)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.title")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.author"),width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.pageviews"),width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.status"),"class-name":"status-col",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.displaytime"),align:"center",prop:"created_at",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",[t._v(t._s(e.row.display_time))])]}}])})],1),t._v(" "),a("div",{staticClass:"app-pager"},[a("el-pagination",{attrs:{total:t.total,"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";e.default=s.exports},"l/V8":function(t,e,a){}}]);