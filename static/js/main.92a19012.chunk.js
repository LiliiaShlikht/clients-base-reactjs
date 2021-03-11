(this["webpackJsonpclient-base"]=this["webpackJsonpclient-base"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),c=a.n(s),l=(a(31),a(10)),i=a(5),d=a.n(i),b=a(16),o=a(6),j=(a(33),a(2));function h(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"border px-8 py-4",children:e.firstName}),Object(j.jsx)("td",{className:"border px-8 py-4",children:e.lastName}),Object(j.jsx)("td",{className:"border px-8 py-4",children:e.phone}),Object(j.jsx)("td",{className:"border px-8 py-4",children:Object(j.jsx)("img",{src:e.avatarUrl,alt:"",width:"80",height:"80"})}),Object(j.jsx)("td",{className:"border px-8 py-4",children:Object(j.jsx)("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded",onClick:function(){return e.changeModalState(e)},children:"Edit"})})]})}function p(e){var t=e.data;return Object(j.jsxs)("table",{className:"shadow-lg bg-white",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"bg-blue-100 border text-left px-8 py-4",children:"First Name"}),Object(j.jsx)("th",{className:"bg-blue-100 border text-left px-8 py-4",children:"Last Name"}),Object(j.jsx)("th",{className:"bg-blue-100 border text-left px-8 py-4",children:"Phone"}),Object(j.jsx)("th",{className:"bg-blue-100 border text-left px-8 py-4",children:"Avatar"}),Object(j.jsx)("th",{className:"bg-green-100 border text-left px-8 py-4",children:"Editing"})]})}),Object(j.jsx)("tbody",{children:t.map((function(t,a){return Object(j.jsx)(h,{id:t.id,firstName:t.firstName,lastName:t.lastName,phone:t.phone,avatarUrl:t.avatarUrl,changeModalState:e.changeModalState},a)}))})]})}var u,m,x=a(20),O=(a(35),a(25)),g=a(12);function f(e){var t=e.modalData,a=Object(O.a)(),r=a.register,s=a.handleSubmit,c=new g.GraphQLClient("https://test-task.expane.pro/api/graphql"),l=Object(g.gql)(u||(u=Object(b.a)(["\n    mutation AddClient(\n      $firstName: String!\n      $lastName: String!\n      $phone: String!\n      $avatarUrl: String!\n    ) {\n      addClient(\n        firstName: $firstName\n        lastName: $lastName\n        phone: $phone\n        avatarUrl: $avatarUrl\n      ) {\n        id\n      }\n    }\n  "]))),i=Object(g.gql)(m||(m=Object(b.a)(["\n    mutation UpdateClient(\n      $id: ID!\n      $firstName: String!\n      $lastName: String!\n      $phone: String!\n      $avatarUrl: String!\n    ) {\n      updateClient(\n        id: $id\n        firstName: $firstName\n        lastName: $lastName\n        phone: $phone\n        avatarUrl: $avatarUrl\n      ) {\n        id\n      }\n    }\n  "])));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{className:"addButton bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",onClick:e.changeModalState,children:"Add new client"}),e.modalState.isOpen&&Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{onSubmit:s((function(a){t.id?(console.log("Edit"),c.request(i,Object(x.a)(Object(x.a)({},a),{},{id:t.id}))):(console.log("ADD"),c.request(l,a)),e.changeModalState(a)})),children:[Object(j.jsxs)("p",{children:["First Name:"," ",Object(j.jsx)("input",{name:"firstName",type:"text",ref:r,defaultValue:t.firstName})]}),Object(j.jsxs)("p",{children:["Last Name:"," ",Object(j.jsx)("input",{name:"lastName",type:"text",ref:r,defaultValue:t.lastName})]}),Object(j.jsxs)("p",{children:["Phone:"," ",Object(j.jsx)("input",{name:"phone",type:"number",ref:r,defaultValue:t.phone})]}),Object(j.jsxs)("p",{children:["Avatar:"," ",Object(j.jsx)("textarea",{name:"avatarUrl",ref:r,defaultValue:t.avatarUrl})]}),Object(j.jsxs)("div",{className:"buttonPanel",children:[Object(j.jsx)("input",{type:"submit",className:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded"}),Object(j.jsx)("button",{className:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded",onClick:e.changeModalState,children:"Cancel"})]})]})})})]})}var N,v=a(44);var S=function(){var e=Object(v.a)("clients",Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.request)("https://test-task.expane.pro/api/graphql",Object(g.gql)(N||(N=Object(b.a)(["\n          {\n            getClients {\n              id\n              firstName\n              lastName\n              phone\n              avatarUrl\n            }\n          }\n        "]))));case 2:return t=e.sent.getClients,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),t=e.status,a=e.data,r=Object(n.useState)({isOpen:!1}),s=Object(l.a)(r,2),c=s[0],i=s[1],h=Object(n.useState)([]),u=Object(l.a)(h,2),m=u[0],x=u[1];function O(e){x(e);var t=!c.isOpen;i({isOpen:t})}return Object(j.jsx)("div",{children:"loading"===t?"Loading...":Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h1",{className:"header",children:"Client base"}),Object(j.jsx)(f,{data:a,changeModalState:O,modalState:c,modalData:m}),Object(j.jsx)(p,{data:a,changeModalState:O,modalState:c})]})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},$=a(43),C=a(24),w=new $.a;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C.a,{client:w,children:Object(j.jsx)(S,{})})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.92a19012.chunk.js.map