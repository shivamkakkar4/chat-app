(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(66),i=n.n(a),r=(n(76),n(20)),o=n(2),j=n(13),l=(n(77),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],u=i[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"Join"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("input",{placeholder:"Room",className:"joinInput",type:"text",onChange:function(e){u(e.target.value)}})]}),Object(l.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},m=n(71),b=n(68),h=n.n(b),O=n(69),d=n.n(O),A=(n(118),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="),x=(n(119),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"onlineIcon",src:A,alt:"online icon"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon"})})})]})}),p=n(70),g=n.n(p),f=(n(141),n(39)),v=n.n(f),N=function(e){var t=e.message,n=t.text,s=t.user,c=!1;return s===e.name.trim().toLowerCase()&&(c=!0),c?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:"you"}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:v.a.emojify(n)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:v.a.emojify(n)})}),Object(l.jsx)("p",{className:"sentText pl-10 ",children:s})]})},C=(n(142),function(e){var t=e.messages,n=e.name;return Object(l.jsx)(g.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(N,{message:e,name:n})},t)}))})}),I=(n(143),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),S=(n(144),function(e){var t=e.users;return Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Realtime Chat Application"," ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(l.jsxs)("h2",{children:["Created with React, Express, Node and Socket.IO"," ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2764\ufe0f"})]}),Object(l.jsxs)("h2",{children:[Object(l.jsx)("a",{className:"github",href:"https://github.com/shivamkakkar4/chat-app",target:"_blank",children:"Github Repo"}),Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2b05\ufe0f"})]})]}),t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"People Online:"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[t,Object(l.jsx)("img",{alt:"Online Icon",src:A})]},t)}))})})]}):null]})}),k={"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]},y=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),O=b[0],A=b[1],p=Object(c.useState)(""),g=Object(j.a)(p,2),f=g[0],v=g[1],N=Object(c.useState)(""),y=Object(j.a)(N,2),R=y[0],E=y[1],w=Object(c.useState)([]),B=Object(j.a)(w,2),M=B[0],U=B[1],Q="https://shivamkakkar-chat-app.herokuapp.com/",Y=Object(o.e)();Object(c.useEffect)((function(){var e=h.a.parse(t.search),n=e.name,c=e.room;return s=d.a.connect(Q,k),r(n),A(c),s.emit("join",{name:n,room:c},(function(e){e&&(alert(e),Y.push("/"))})),function(){s.disconnect()}}),[Q,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){U([].concat(Object(m.a)(M),[e]))})),s.on("roomData",(function(e){var t=e.users;v(t)}))}),[M,f]);return console.log(R,M),Object(l.jsxs)("div",{className:"outerContainer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{room:O}),Object(l.jsx)(C,{messages:M,name:i}),Object(l.jsx)(I,{message:R,setMessage:E,sendMessage:function(e){e.preventDefault(),R&&s.emit("sendMessage",R,(function(){E("")}))}})]}),Object(l.jsx)(S,{users:f})]})},R=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/Chat",exact:!0,component:y})]})};i.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))},76:function(e,t,n){},77:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.3277efe0.chunk.js.map