(this["webpackJsonptest-to-do-list"]=this["webpackJsonptest-to-do-list"]||[]).push([[0],{16:function(e,t,a){},28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=(a(33),a(9)),s=function(e){var t=e.title,a=e.done,n=e.category,r=e.id,l=e.deleteTask,o=e.completeTask;return c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h5",{className:"card-header"},t),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},n),a?c.a.createElement("button",{className:"btn btn-secondary mr-3",onClick:function(){return o(n,t,!1,r)}},"Deshacer"):c.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return o(n,t,!0,r)}},"Completar"),c.a.createElement("button",{href:"a",className:"btn btn-danger",onClick:function(){return l(r)}},"Eliminar")))},i=(a(16),a(11)),m=a.n(i),u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),u=i[0],d=i[1],E=function(){m.a.get("https://hiromi-test.firebaseio.com/task.json").then((function(e){r(e.data),console.log(e.data),f(e.data)})).then((function(e){return console.log(a)})).catch((function(e){return alert(e)}))},f=function(e){r(Object.keys(e).map((function(t){return e[t]}))),d(Object.keys(e).map((function(t){return e[t]})))},b=function(e){m.a.delete("https://hiromi-test.firebaseio.com/task/".concat(e,".json")).then((function(){return E()})).catch((function(e){return alert(e)}))};return Object(n.useEffect)((function(){console.log("Soy useEffect"),E(),console.log(a)}),[]),c.a.createElement("div",null,c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container pt-4"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;console.log("tasks",a),console.log("buscando",t),d(a.filter((function(e){return e.category.includes(t)}))),console.log("filtradas",u)}}),u?u.map((function(e){return c.a.createElement(s,{key:e.id,id:e.id,title:e.title,done:e.done,category:e.category,deleteTask:b})})):c.a.createElement("h1",null,"No hay resultados")),c.a.createElement("button",{onClick:function(){return console.log(a)}},"CLICK")))},d=a(8),E=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},c.a.createElement("div",{className:"container"},c.a.createElement(d.b,{className:"navbar-brand text-white",to:"/"},"Lista de Tareas")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(d.b,{className:"nav-link text-white bg-primary",activeClassName:"text-secondary",to:"/crear"},"Agregar Tarea +",c.a.createElement("span",{className:"sr-only"},"(current)"))))))},f=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Soy el contenedor contacto"))},b=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"CONTENEDOR PARA NOSOTROS"))},p=function(e){var t=e.createTask,a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"title"},"Tarea"),c.a.createElement("input",{onChange:function(e){console.log(e.target.value),s(e.target.value)},type:"text",className:"form-control",id:"title"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"category"},"Categor\xeda"),c.a.createElement("input",{onChange:function(e){d(e.target.value)},type:"text",className:"form-control",id:"category"})),c.a.createElement("button",{onClick:function(){t(l,u)},className:"btn btn-primary"},"Agregar")))},g=a(1),v=function(){var e=Object(g.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container pt-4"},c.a.createElement(p,{createTask:function(t,a){var n={category:a,title:t,done:!1};m.a.post("https://hiromi-test.firebaseio.com/task.json",n).then((function(t){return e.push("/")})).catch((function(e){return console.log(e)}))}}))))};var h=function(){return c.a.createElement(d.a,null,c.a.createElement(E,null),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/",component:u}),c.a.createElement(g.a,{exact:!0,path:"/contacto",component:f}),c.a.createElement(g.a,{exact:!0,path:"/nosotros",component:b}),c.a.createElement(g.a,{exact:!0,path:"/crear",component:v})))};a(56);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ee7775f2.chunk.js.map