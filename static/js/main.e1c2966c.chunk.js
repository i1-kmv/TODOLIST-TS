(this["webpackJsonpi1-kmv-ts-todo"]=this["webpackJsonpi1-kmv-ts-todo"]||[]).push([[0],{102:function(e,t,a){e.exports=a(131)},107:function(e,t,a){},108:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i);a(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var c,l,s=a(174),u=a(175),d=a(176),m=a(167),f=a(133),b=a(170),O=a(178),E=a(179),T=a(177),v=a(18),p=a(14),g=a(7),j=a(60),k=a(82),h=a.n(k).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"56fad98b-2e41-4f65-9dcd-55f6906b4c63"}})),I=function(){return h.get("todo-lists")},S=function(e){return h.post("todo-lists",{title:e})},C=function(e){return h.delete("todo-lists/".concat(e))},y=function(e,t){return h.put("todo-lists/".concat(e),{title:t})},A=function(e){return h.get("todo-lists/".concat(e,"/tasks"))},D=function(e,t){return h.delete("todo-lists/".concat(e,"/tasks/").concat(t))},L=function(e,t){return h.post("todo-lists/".concat(e,"/tasks"),{title:t})},w=function(e,t,a){return h.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},P=function(e){return h.post("auth/login",e)},N=function(){return h.delete("auth/login")},R=function(){return h.get("auth/me")};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(c||(c={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var F=function(e,t){e.messages.length?t(H(e.messages[0])):t(H("Some error occurred")),t(U("failed"))},x=function(e,t){t(H(e.message?e.message:"Some error occurred")),t(U("failed"))},G={isLoggedIn:!1},K=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},M={status:"idle",error:null,isInitialized:!1},H=function(e){return{type:"APP/SET-ERROR",error:e}},U=function(e){return{type:"APP/SET-STATUS",status:e}},V=[],Z=a(35),q={},z=function(e,t,a){return function(n,o){var i=o().tasks[a].find((function(t){return t.id===e}));if(i){var r=Object(g.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},t);w(a,e,r).then((function(o){if(0===o.data.resultCode){var i=function(e,t,a){return{type:"UPDATE-TASK",model:t,todolistId:a,taskId:e}}(e,t,a);n(i)}else F(o.data,n)})).catch((function(e){x(e,n)}))}else console.warn("task not found in the state")}},B=a(171),W=a(132),Y=a(45),J=a(180),$=a(168),_=o.a.memo((function(e){var t=e.addItem,a=e.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var r=Object(n.useState)(""),c=Object(Y.a)(r,2),l=c[0],s=c[1],u=Object(n.useState)(null),d=Object(Y.a)(u,2),f=d[0],b=d[1],O=function(){""!==l.trim()?(t(l),s("")):b("Title is required")};return o.a.createElement("div",null,o.a.createElement(J.a,{variant:"outlined",disabled:i,error:!!f,value:l,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==f&&b(null),13===e.charCode&&O()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:O,disabled:i},o.a.createElement($.a,null)))})),Q=a(90),X=o.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(Y.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)(e.value),l=Object(Y.a)(c,2),s=l[0],u=l[1];return i?o.a.createElement(J.a,{value:s,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){r(!0),u(e.value)}},e.value)})),ee=a(169),te=a(182),ae=o.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?c.Completed:c.New,e.todolistId)}),[e.task.id,e.todolistId]),i=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return o.a.createElement("div",{key:e.task.id,className:e.task.status===c.Completed?"is-done":""},o.a.createElement(te.a,{checked:e.task.status===c.Completed,color:"primary",onChange:a}),o.a.createElement(X,{value:e.task.title,onChange:i}),o.a.createElement(m.a,{onClick:t},o.a.createElement(ee.a,null)))})),ne=o.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,i=Object(Q.a)(e,["demo"]);console.log("Todolist called");var r=Object(v.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=i.todolist.id,function(t){t(U("loading")),A(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}}(n,e)),t(U("succeeded"))}))});r(t)}}),[]);var l=Object(n.useCallback)((function(e){i.addTask(e,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(e){i.changeTodolistTitle(i.todolist.id,e)}),[i.todolist.id,i.changeTodolistTitle]),u=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),O=i.tasks;return"active"===i.todolist.filter&&(O=i.tasks.filter((function(e){return e.status===c.New}))),"completed"===i.todolist.filter&&(O=i.tasks.filter((function(e){return e.status===c.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(X,{value:i.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(ee.a,null))),o.a.createElement(_,{addItem:l,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,O.map((function(e){return o.a.createElement(ae,{key:e.id,task:e,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(b.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(b.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),o.a.createElement(b.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),oe=function(e){var t=e.demo,a=void 0!==t&&t,i=Object(v.c)((function(e){return e.todolists})),r=Object(v.c)((function(e){return e.tasks})),c=Object(v.c)((function(e){return e.auth.isLoggedIn})),l=Object(v.b)();Object(n.useEffect)((function(){if(!a&&c){var e=function(e){e(U("loading")),I().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data}),e(U("succeeded"))})).catch((function(t){x(t,e)}))};l(e)}}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){D(t,e).then((function(n){var o=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(o)}))}}(e,t);l(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(U("loading")),L(t,e).then((function(e){if(0===e.data.resultCode){var t=function(e){return{type:"ADD-TASK",task:e}}(e.data.data.item);a(t),a(U("succeeded"))}else F(e.data,a)})).catch((function(e){x(e,a)}))}}(e,t);l(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=z(e,{status:t},a);l(n)}),[]),m=Object(n.useCallback)((function(e,t,a){var n=z(e,{title:t},a);l(n)}),[]),f=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};l(a)}),[]),b=Object(n.useCallback)((function(e){var t,a=(t=e,function(e){e(U("loading")),e({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:"loading"}),C(t).then((function(a){e(function(e){return{type:"REMOVE-TODOLIST",id:e}}(t)),e(U("succeeded"))}))});l(a)}),[]),O=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){y(e,t).then((function(n){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}))}}(e,t);l(a)}),[]),E=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(U("loading")),S(e).then((function(e){t({type:"ADD-TODOLIST",todolist:e.data.data.item}),t(U("succeeded"))}))}}(e);l(t)}),[l]);return c?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{container:!0,style:{padding:"20px"}},o.a.createElement(_,{addItem:E})),o.a.createElement(B.a,{container:!0,spacing:3},i.map((function(e){var t=r[e.id];return o.a.createElement(B.a,{item:!0,key:e.id},o.a.createElement(W.a,{style:{padding:"10px"}},o.a.createElement(ne,{todolist:e,tasks:t,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:O,demo:a})))})))):o.a.createElement(p.a,{to:"/login"})},ie=a(184),re=a(181);function ce(e){return o.a.createElement(re.a,Object.assign({elevation:6,variant:"filled"},e))}function le(){var e=Object(v.c)((function(e){return e.app.error})),t=Object(v.b)(),a=function(e,a){"clickaway"!==a&&t(H(null))},n=null!==e;return o.a.createElement(ie.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(ce,{onClose:a,severity:"error"},e))}var se=a(52),ue=a(185),de=a(166),me=a(172),fe=a(173),be=a(89),Oe=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.auth.isLoggedIn})),a=Object(be.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:function(t){var a;e((a=t,function(e){e(U("loading")),P(a).then((function(t){0===t.data.resultCode?(e(K(!0)),e(U("succeeded"))):F(t.data,e)})).catch((function(t){x(t,e)}))}))}});return t?o.a.createElement(p.a,{to:"/"}):o.a.createElement(B.a,{container:!0,justify:"center"},o.a.createElement(B.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(ue.a,null,o.a.createElement(de.a,null,o.a.createElement("p",null,"Welcome to my ToDo application "),o.a.createElement("p",null,"Email: i1-kmv@mail.ru"),o.a.createElement("p",null,"Password: password")),o.a.createElement(me.a,null,o.a.createElement(J.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(J.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(fe.a,{label:"Remember me",control:o.a.createElement(te.a,Object.assign({name:"Remember me"},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Ee=function(e){var t=e.demo,a=void 0!==t&&t,i=Object(v.c)((function(e){return e.app.status})),r=Object(v.c)((function(e){return e.auth.isLoggedIn})),c=Object(v.c)((function(e){return e.app.isInitialized})),l=Object(v.b)();Object(n.useEffect)((function(){l((function(e){R().then((function(t){0===t.data.resultCode&&e(K(!0)),e({type:"APP/SET-IS-INITIALIZED",value:!0})}))}))}),[]);var g=Object(n.useCallback)((function(){l((function(e){e(U("loading")),N().then((function(t){0===t.data.resultCode?(e(K(!1)),e(U("succeeded"))):F(t.data,e)})).catch((function(t){x(t,e)}))}))}),[]);return c?o.a.createElement(se.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(le,null),o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(T.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),r&&o.a.createElement(b.a,{color:"inherit",onClick:g},"Log out")),"loading"===i&&o.a.createElement(O.a,null)),o.a.createElement(E.a,{fixed:!0},o.a.createElement(p.b,{path:"/login",render:function(){return o.a.createElement(Oe,null)}}),o.a.createElement(p.b,{exact:!0,path:"/",render:function(){return o.a.createElement(oe,{demo:a})}})))):o.a.createElement(s.a,{color:"secondary",style:{position:"fixed",top:"30%",left:"50%"}})},Te=a(42),ve=a(88),pe=Object(Te.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(g.a)(Object(g.a)({},e),{},Object(Z.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(g.a)(Object(g.a)({},e),{},Object(Z.a)({},t.task.todoListId,[t.task].concat(Object(j.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(g.a)(Object(g.a)({},e),{},Object(Z.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(g.a)(Object(g.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(g.a)(Object(g.a)({},e),{},Object(Z.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(g.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(g.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(g.a)(Object(g.a)({},e),{},Object(Z.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(g.a)(Object(g.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(g.a)(Object(g.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIZED":return Object(g.a)(Object(g.a)({},e),{},{isInitialized:t.value});default:return Object(g.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(g.a)(Object(g.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),ge=Object(Te.d)(pe,Object(Te.a)(ve.a));window.store=ge,r.a.render(o.a.createElement(v.a,{store:ge},o.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.e1c2966c.chunk.js.map