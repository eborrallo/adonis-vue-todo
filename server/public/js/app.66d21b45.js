(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"17ea":function(t,e,r){"use strict";var n=r("c5d2"),a=r.n(n);a.a},"19bf":function(t,e,r){},2044:function(t,e,r){},"22c7":function(t,e,r){},"2cfd":function(t,e,r){"use strict";var n=r("e07e"),a=r.n(n);a.a},"3e4b":function(t,e,r){"use strict";var n=r("bbfb"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d"),r("bf40");var n=r("31bd"),a=r("ce5b"),o=r.n(a),i=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:t.dark}},[r("Navigation"),r("Toolbar"),r("router-view"),r("v-footer",{attrs:{fixed:t.footer.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},c=[],l=r("be94"),u=r("2f62"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":t.primaryDrawer.clipped}},[r("v-toolbar-side-icon",{class:{"hidden-md-and-up":!t.isLoggedIn},on:{click:function(e){return e.stopPropagation(),t.setDrawler(e)}}}),r("v-toolbar-title",{staticClass:"mr-4"},[r("v-btn",{attrs:{to:"/",fla:"",exactt:""}},[t._v("\n            VUE TODO\n        ")])],1),r("v-toolbar-items",[t.isLoggedIn?r("v-btn",{attrs:{flat:"",to:"/projects"}},[r("v-icon",{staticClass:"mr-2"},[t._v("playlist_add_check")]),t._v("\n            Projects\n        ")],1):t._e()],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.isLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/register"}},[r("v-icon",{staticClass:"mr-2"},[t._v("account_box")]),t._v("\n            Register\n        ")],1),t.isLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/login"}},[r("v-icon",{staticClass:"mr-2"},[t._v("fingerprint")]),t._v("\n            Login\n        ")],1),t.isLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.logout}},[r("v-icon",{staticClass:"mr-2"},[t._v("exit_to_app")]),t._v("\n            Logout\n        ")],1):t._e(),t.isLoggedIn?r("v-btn",{attrs:{flat:"",to:"/settings"}},[r("v-icon",{staticClass:"mr-2"},[t._v("settings")]),t._v("\n            Settings\n        ")],1):t._e()],1)],1)},p=[],f={props:["clipped-left"],computed:Object(l["a"])({},Object(u["c"])("authentication",["isLoggedIn"]),Object(u["e"])("layout",["primaryDrawer"])),methods:Object(l["a"])({},Object(u["b"])("authentication",["logout"]),Object(u["d"])("layout",["setDrawler"]))},v=f,m=(r("60f8"),r("2877")),g=Object(m["a"])(v,d,p,!1,null,null,null);g.options.__file="Toolbar.vue";var b=g.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{class:{"hidden-md-and-up":!t.isLoggedIn},attrs:{permanent:"permanent"===t.primaryDrawer.type,temporary:"temporary"===t.primaryDrawer.type,clipped:t.primaryDrawer.clipped,floating:t.primaryDrawer.floating,"mini-variant":t.primaryDrawer.mini,absolute:"",overflow:"",app:""},model:{value:t.primaryDrawer.model,callback:function(e){t.$set(t.primaryDrawer,"model",e)},expression:"primaryDrawer.model"}},[r("v-list",{staticClass:"pa-1"},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),r("v-list-tile-content",[r("v-list-tile-title",[t._v("John Leider")])],1)],1)],1),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},[r("v-divider"),t._l(t.items,function(e){return r("v-list-tile",{key:e.title,on:{click:function(t){}}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)},_=[],h={computed:Object(l["a"])({},Object(u["c"])("authentication",["isLoggedIn"]),Object(u["e"])("layout",["primaryDrawer","items"])),methods:Object(l["a"])({},Object(u["b"])("authentication",["logout"]))},k=h,w=(r("9028"),Object(m["a"])(k,j,_,!1,null,null,null));w.options.__file="Navigation.vue";var y=w.exports,E={components:{Toolbar:b,Navigation:y},computed:Object(l["a"])({},Object(u["e"])("layout",["dark","drawers","primaryDrawer","footer"]))},x=E,P=(r("5c0b"),Object(m["a"])(x,s,c,!1,null,null,null));P.options.__file="App.vue";var O=P.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{attrs:{flat:"",dense:"",dark:"",color:"red"}},[r("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")])],1),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2",staticStyle:{"background-color":"gray"}},[t._t("default",[t._v("No slot content defined.")])],2)],1)},C=[],D={props:{title:String}},$=D,N=(r("645c"),Object(m["a"])($,T,C,!1,null,null,null));N.options.__file="Panel.vue";var L=N.exports,M=r("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("Projects")],1),t.currentProject?r("v-flex",{staticClass:"pl-4",attrs:{xs8:""}},[r("Tasks")],1):t._e()],1)],1)},I=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Panel",{attrs:{title:"Projects"}},[t._l(t.projects,function(e){return r("div",{key:e.id,staticClass:"project mt-2"},[r("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.title},on:{onInput:function(r){t.setProjectTitle({project:e,title:r})},onClick:function(r){t.projectClicked(e)},onEdit:function(r){t.setEditMode(e)},onSave:function(r){t.saveProject(e)},onDelete:function(r){t.deleteProject(e)}}})],1)}),r("CreateRecord",{attrs:{placeholder:"My project name....",value:t.newProjectName},on:{onInput:t.setNewProjectName,create:t.createProject}})],2)},F=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{placeholder:t.placeholder,value:t.value},on:{input:function(e){t.$emit("onInput",e)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("create")}}})],1),r("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[r("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"red"},on:{click:function(e){t.$emit("create")}}},[r("v-icon",{staticClass:"mr-2"},[t._v("add_circle")]),t._v("\n      Create\n    ")],1)],1)],1)},U=[],J={props:["placeholder","value"]},Y=J,H=(r("da8b"),Object(m["a"])(Y,A,U,!1,null,null,null));H.options.__file="CreateRecord.vue";var q=H.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[t._t("default"),t.isEditMode?t._e():r("span",{on:{click:function(e){t.$emit("onClick")}}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t.isEditMode?r("v-text-field",{attrs:{autofocus:"",value:t.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("onSave")},input:function(e){t.$emit("onInput",e)}}}):t._e()],2),r("v-flex",{staticClass:"text-xs-right",attrs:{xs3:""}},[t.isEditMode?t._e():r("v-icon",{on:{click:function(e){t.$emit("onEdit")}}},[t._v("\n      edit\n    ")]),t.isEditMode?r("v-icon",{on:{click:function(e){t.$emit("onSave")}}},[t._v("\n      check\n    ")]):t._e(),r("v-icon",{on:{click:function(e){t.$emit("onDelete")}}},[t._v("\n      delete\n    ")])],1)],1)},B=[],V={props:["isEditMode","title","record"]},G=V,K=(r("c93e"),Object(m["a"])(G,z,B,!1,null,null,null));K.options.__file="EditableRecord.vue";var Q=K.exports,W={mounted:function(){this.fetchProjects()},components:{CreateRecord:q,EditableRecord:Q},computed:Object(l["a"])({},Object(u["e"])("projects",["newProjectName","projects"])),methods:Object(l["a"])({projectClicked:function(t){this.setCurrentProject(t),this.fetchTasksForProject(t)}},Object(u["d"])("projects",["setNewProjectName","setEditMode","setProjectTitle","setCurrentProject"]),Object(u["b"])("projects",["createProject","fetchProjects","saveProject","deleteProject"]),Object(u["b"])("tasks",["fetchTasksForProject"]))},X=W,Z=(r("f6ca"),Object(m["a"])(X,S,F,!1,null,null,null));Z.options.__file="Projects.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Panel",{attrs:{title:"Tasks"}},[t._l(t.tasks,function(e){return r("div",{key:e.id,staticClass:"tasks mt-2"},[r("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.description},on:{onInput:function(r){t.setTaskDescription({task:e,description:r})},onEdit:function(r){t.setEditMode(e)},onSave:function(r){t.saveTask(e)},onDelete:function(r){t.deleteTask(e)}}},[r("v-icon",{on:{click:function(r){t.checkClicked(e)}}},[t._v("\n        "+t._s(e.completed?"check_box":"check_box_outline_blank")+"\n      ")])],1)],1)}),r("CreateRecord",{attrs:{placeholder:"I need to...",value:t.newTaskName},on:{onInput:t.setNewTaskName,create:t.createTask}})],2)},rt=[],nt={components:{CreateRecord:q,EditableRecord:Q},computed:Object(l["a"])({},Object(u["e"])("tasks",["tasks","newTaskName"])),methods:Object(l["a"])({},Object(u["b"])("tasks",["createTask","deleteTask","saveTask"]),Object(u["d"])("tasks",["setNewTaskName","setTaskDescription","setEditMode","toggleCompleted"]),{checkClicked:function(t){this.toggleCompleted(t),this.saveTask(t)}})},at=nt,ot=(r("17ea"),Object(m["a"])(at,et,rt,!1,null,null,null));ot.options.__file="Tasks.vue";var it=ot.exports,st={components:{Projects:tt,Tasks:it},mounted:function(){if(!this.isLoggedIn)return Mt.push("/login")},computed:Object(l["a"])({},Object(u["e"])("projects",["currentProject"]),Object(u["c"])("authentication",["isLoggedIn"]))},ct=st,lt=Object(m["a"])(ct,R,I,!1,null,null,null);lt.options.__file="Projects.vue";var ut=lt.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",fluid:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("h1",[t._v("Login")]),r("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.loginEmail},on:{input:t.setLoginEmail}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.loginPassword},on:{input:t.setLoginPassword}}),r("v-alert",{attrs:{type:"error",value:t.loginError}},[t._v("\n                    "+t._s(t.loginError)+"\n                ")]),r("v-btn",{on:{click:t.login}},[r("v-icon",{staticClass:"mr-2",attrs:{teal:""}},[t._v("fingerprint")]),t._v("\n                    Login\n                ")],1)],1)],1)],1)],1)},pt=[],ft={computed:Object(l["a"])({},Object(u["e"])("authentication",["loginEmail","loginPassword","loginError"])),methods:Object(l["a"])({},Object(u["d"])("authentication",["setLoginEmail","setLoginPassword"]),Object(u["b"])("authentication",["login"]))},vt=ft,mt=(r("d6db"),Object(m["a"])(vt,dt,pt,!1,null,null,null));mt.options.__file="Login.vue";var gt=mt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("h1",[t._v("Register")]),r("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.registerEmail},on:{input:t.setRegisterEmail}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.registerPassword},on:{input:t.setRegisterPassword}}),r("v-alert",{attrs:{type:"error",value:t.registerError}},[t._v("\n                    "+t._s(t.registerError)+"\n                ")]),r("v-btn",{on:{click:t.register}},[r("v-icon",{staticClass:"mr-2"},[t._v("account_circle")]),t._v("\n                    Register\n                ")],1)],1)],1)],1)],1)},jt=[],_t={computed:Object(l["a"])({},Object(u["e"])("authentication",["registerEmail","registerPassword","registerError"])),methods:Object(l["a"])({},Object(u["d"])("authentication",["setRegisterEmail","setRegisterPassword"]),Object(u["b"])("authentication",["register"]))},ht=_t,kt=(r("2cfd"),Object(m["a"])(ht,bt,jt,!1,null,null,null));kt.options.__file="Register.vue";var wt=kt.exports,yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs10:""}},[r("v-card",[r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("span",[t._v("Scheme")]),r("v-switch",{attrs:{primary:"",label:"Dark"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("span",[t._v("Drawer")]),r("v-radio-group",{attrs:{column:""},model:{value:t.primaryDrawer.type,callback:function(e){t.$set(t.primaryDrawer,"type",e)},expression:"primaryDrawer.type"}},t._l(t.drawers,function(t){return r("v-radio",{key:t,attrs:{primary:"",label:t,value:t.toLowerCase()}})})),r("v-switch",{attrs:{label:"Clipped",primary:""},model:{value:t.primaryDrawer.clipped,callback:function(e){t.$set(t.primaryDrawer,"clipped",e)},expression:"primaryDrawer.clipped"}}),r("v-switch",{attrs:{label:"Floating",primary:""},model:{value:t.primaryDrawer.floating,callback:function(e){t.$set(t.primaryDrawer,"floating",e)},expression:"primaryDrawer.floating"}}),r("v-switch",{attrs:{label:"Mini",primary:""},model:{value:t.primaryDrawer.mini,callback:function(e){t.$set(t.primaryDrawer,"mini",e)},expression:"primaryDrawer.mini"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("span",[t._v("Footer")]),r("v-switch",{attrs:{label:"Fixed",primary:""},model:{value:t.footer.fixed,callback:function(e){t.$set(t.footer,"fixed",e)},expression:"footer.fixed"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{flat:""}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)},Et=[],xt={methods:{},computed:Object(l["a"])({},Object(u["e"])("layout",["primaryDrawer","footer","drawers"]),{dark:{set:function(t){this.$store.commit("layout/setDark",t)},get:function(){return this.$store.state.layout.dark}}})},Pt=xt,Ot=(r("3e4b"),Object(m["a"])(Pt,yt,Et,!1,null,null,null));Ot.options.__file="Settings.vue";var Tt=Ot.exports,Ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{staticClass:"page",attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:"720"}})},Dt=[],$t=(r("cccb"),{}),Nt=Object(m["a"])($t,Ct,Dt,!1,null,null,null);Nt.options.__file="Home.vue";var Lt=Nt.exports;i["default"].use(M["a"]);var Mt=new M["a"]({routes:[{path:"/",name:"home",component:Lt},{path:"/projects",name:"projects",component:ut},{path:"/login",name:"login",component:gt},{path:"/register",name:"register",component:wt},{path:"/settings",name:"settings",component:Tt}]}),Rt=r("0e44"),It=r("bc3a"),St=r.n(It),Ft=function(){return St.a.create({baseURL:Ht.state.baseUrl,timeout:5e3,headers:{Authorization:"Bearer ".concat(Ht.state.authentication.token)}})},At={namespaced:!0,state:{registerEmail:"hello YOOOO",registerPassword:"world",registerError:null,loginEmail:"hello YOOOO",loginPassword:"world",loginError:null,token:null},actions:{logout:function(t){var e=t.commit;e("setToken",null),Mt.push("/login")},register:function(t){var e=t.commit,r=t.state;return e("setRegisterError",null),Ft().post("/auth/register",{email:r.registerEmail,password:r.registerPassword}).then(function(t){var r=t.data;e("setToken",r.token),Mt.push("/")}).catch(function(){e("setRegisterError","An error has occured trying to create your account.")})},login:function(t){var e=t.commit,r=t.state;return e("setLoginError",null),Ft().post("/auth/login",{email:r.loginEmail,password:r.loginPassword}).then(function(t){var r=t.data;console.log("login..."),e("setToken",r.token),Mt.push("/")}).catch(function(t){console.log(t),e("setLoginError","An error has occured trying to login.")})}},getters:{isLoggedIn:function(t){return!!t.token}},mutations:{setToken:function(t,e){t.token=e},setRegisterError:function(t,e){t.registerError=e},setRegisterEmail:function(t,e){t.registerEmail=e},setRegisterPassword:function(t,e){t.registerPassword=e},setLoginError:function(t,e){t.loginError=e},setLoginEmail:function(t,e){t.loginEmail=e},setLoginPassword:function(t,e){t.loginPassword=e}}},Ut={namespaced:!0,state:{projects:[],currentProject:null,newProjectName:null},actions:{saveProject:function(t,e){var r=t.commit;return Ft().patch("projects/".concat(e.id),e).then(function(){r("unsetEditMode",e)})},deleteProject:function(t,e){var r=t.commit;return Ft().delete("projects/".concat(e.id)).then(function(){r("removeProject",e)})},fetchProjects:function(t){var e=t.commit;return Ft().get("/projects").then(function(t){var r=t.data;e("setProjects",r)})},createProject:function(t){var e=t.commit,r=t.state;return Ft().post("/projects",{title:r.newProjectName}).then(function(t){var r=t.data;e("appendProject",r),e("setNewProjectName",null)})}},getters:{},mutations:{setCurrentProject:function(t,e){t.currentProject=e},setNewProjectName:function(t,e){t.newProjectName=e},appendProject:function(t,e){t.projects.push(e)},setProjects:function(t,e){t.projects=e},setProjectTitle:function(t,e){var r=e.project,n=e.title;r.title=n},setEditMode:function(t,e){i["default"].set(e,"isEditMode",!0)},unsetEditMode:function(t,e){i["default"].set(e,"isEditMode",!1)},removeProject:function(t,e){t.projects.splice(t.projects.indexOf(e),1)}}},Jt={namespaced:!0,state:{tasks:[],newTaskName:null},actions:{saveTask:function(t,e){var r=t.commit;return Ft().patch("tasks/".concat(e.id),e).then(function(){r("unsetEditMode",e)})},deleteTask:function(t,e){var r=t.commit;return Ft().delete("tasks/".concat(e.id)).then(function(){r("removeTask",e)})},fetchTasksForProject:function(t,e){var r=t.commit;return Ft().get("projects/".concat(e.id,"/tasks")).then(function(t){var e=t.data;r("setTasks",e)})},createTask:function(t){var e=t.commit,r=t.state,n=t.rootState;return Ft().post("/projects/".concat(n.projects.currentProject.id,"/tasks"),{description:r.newTaskName}).then(function(t){var r=t.data;e("appendTask",r),e("setNewTaskName",null)})}},getters:{},mutations:{setTasks:function(t,e){t.tasks=e},setNewTaskName:function(t,e){t.newTaskName=e},appendTask:function(t,e){t.tasks.push(e)},setTaskDescription:function(t,e){var r=e.task,n=e.description;r.description=n},setEditMode:function(t,e){i["default"].set(e,"isEditMode",!0)},unsetEditMode:function(t,e){i["default"].set(e,"isEditMode",!1)},removeTask:function(t,e){t.tasks.splice(t.tasks.indexOf(e),1)},toggleCompleted:function(t,e){e.completed=!e.completed}}},Yt={namespaced:!0,state:{dark:!0,drawers:["Permanent","Persistent","Temporary"],primaryDrawer:{model:!1,type:"persistent",clipped:!0,floating:!1,mini:!1},footer:{fixed:!0},items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"},{title:"Role and Permisions",icon:"vpn_key"},{title:"Users",icon:"person"}]},actions:{},getters:{},mutations:{setDrawler:function(t){t.primaryDrawer.model=!t.primaryDrawer.model},setDark:function(t,e){t.dark=e}}};i["default"].use(u["a"]);var Ht=new u["a"].Store({strict:!1,state:{baseUrl:"127.0.0.1:3333/api"},modules:{authentication:At,projects:Ut,tasks:Jt,layout:Yt},mutations:{},actions:{},plugins:[Object(Rt["a"])()]});i["default"].config.productionTip=!1,i["default"].use(o.a),Object(n["sync"])(Ht,Mt),i["default"].component("Panel",L),new i["default"]({router:Mt,store:Ht,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},"60f8":function(t,e,r){"use strict";var n=r("632e"),a=r.n(n);a.a},"632e":function(t,e,r){},"645c":function(t,e,r){"use strict";var n=r("88a4"),a=r.n(n);a.a},"88a4":function(t,e,r){},9028:function(t,e,r){"use strict";var n=r("2044"),a=r.n(n);a.a},a9e7:function(t,e,r){},bbfb:function(t,e,r){},c5d2:function(t,e,r){},c93e:function(t,e,r){"use strict";var n=r("eedd"),a=r.n(n);a.a},cccb:function(t,e,r){"use strict";var n=r("d563"),a=r.n(n);a.a},d563:function(t,e,r){},d6db:function(t,e,r){"use strict";var n=r("a9e7"),a=r.n(n);a.a},da8b:function(t,e,r){"use strict";var n=r("19bf"),a=r.n(n);a.a},e07e:function(t,e,r){},eedd:function(t,e,r){},f6ca:function(t,e,r){"use strict";var n=r("22c7"),a=r.n(n);a.a}});
//# sourceMappingURL=app.66d21b45.js.map