(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(17),s=c.n(i),o=(c(23),c(8)),d=c(6),r=c(5),h=c.n(r),l=c(18),j=c(0);var u=function(e){return Object(j.jsxs)("div",{className:"todo-container add-todo-container",children:[Object(j.jsx)("input",{type:"text",className:"title",placeholder:"Title...",onChange:e.changeTitle}),Object(j.jsx)("textarea",{className:"desc",placeholder:"Description...",onChange:e.changeDesc}),Object(j.jsx)("button",{className:"submit",onClick:e.submit,children:"Add Todo"})]})};var b=function(e){return Object(j.jsxs)("div",{className:"todo-container",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("span",{children:e.desc}),Object(j.jsx)("footer",{children:Object(j.jsx)("input",{type:"checkbox",checked:e.checked,onClick:function(t){return e.changeChecked(t,e.nanoid)}})})]})};var O=function(e){return Object(j.jsxs)("div",{className:"todo-list-container",children:[e.list.map((function(t){return Object(j.jsx)(b,{nanoid:t.nanoid,title:t.title,desc:t.desc,checked:t.checked,changeChecked:e.changeChecked})})),Object(j.jsx)(u,{changeTitle:e.changeTitle,changeDesc:e.changeDesc,submit:e.submit})]})};var p=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),r=s[0],u=s[1],b=Object(n.useState)(""),p=Object(d.a)(b,2),f=p[0],x=p[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:8000/api/get-todo").then((function(e){a(e.data)}))}),[]),Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("header",{className:"app-header",children:Object(j.jsx)("h1",{children:"To-Do List"})}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(O,{submit:function(e){var t={nanoid:Object(l.a)(),title:r,desc:f,checked:!1};a([].concat(Object(o.a)(c),[t])),h.a.post("http://localhost:8000/api/add-todo",JSON.stringify(t))},changeDesc:function(e){x(e.currentTarget.value)},changeTitle:function(e){u(e.currentTarget.value)},list:c,changeChecked:function(e,t){var n=Object(o.a)(c),i=0;n.forEach((function(e,c){e.nanoid===t&&(e.checked=!e.checked,i=c)})),a(n);var s=c[i];h.a.put("http://localhost:8000"+"/api/update-todo/".concat(s.nanoid),{nanoid:s.nanoid,title:s.title,desc:s.desc,checked:s.checked})}})})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cc796730.chunk.js.map