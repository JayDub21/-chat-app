(this["webpackJsonpsocket.io-chat"]=this["webpackJsonpsocket.io-chat"]||[]).push([[0],{108:function(e,t){},114:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(9),i=a.n(c),l=(a(78),a(79),a(25)),s=a(144),m=a(147),u=a(35),d=a(149),h=a(150),g=a(151),f=a(154),E=a(152),p=a(153),v=a(32),b=a(64),x=a(61),y=a(62),w=a.n(y),C=o.a.createContext(),k={listing1:[{from:"",msg:""}],listing2:[{from:"",msg:""}]};function N(e,t){var a=t.payload,n=a.from,r=a.msg,o=a.listing;switch(t.type){case"RECEIVE_MESSAGE":return Object(x.a)({},e,Object(v.a)({},o,[].concat(Object(b.a)(e[o]),[{from:n,msg:r}])));default:return e}}function j(e){n.emit("chat message",e)}function O(e){var t=o.a.useReducer(N,k),a=Object(l.a)(t,2),r=a[0],c=a[1];n||(n=w()(":3002")).on("chat message",(function(e){c({type:"RECEIVE_MESSAGE",payload:e}),console.log(e)}));var i="Justin"+Math.random(100).toFixed(2);return o.a.createElement(C.Provider,{value:{allChats:r,sendChatAction:j,user:i}}," ",e.children)}var S=Object(s.a)((function(e){return{root:{margin:"50px",padding:e.spacing(3,2)},flex:{display:"flex",alignItems:"center"},listingCard:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},chatBox:{width:"85%"},btn:{width:"15%"}}}));function A(){var e=S(),t=o.a.useContext(C),a=t.allChats,n=t.sendChatAction,r=t.user;console.log({allChats:a});var c=Object.keys(a),i=o.a.useState(c[0]),s=Object(l.a)(i,2),v=s[0],b=s[1],x=o.a.useState(""),y=Object(l.a)(x,2),w=y[0],k=y[1];return o.a.createElement("div",null,o.a.createElement(m.a,{className:e.root},o.a.createElement(u.a,{variant:"h4",component:"h4"},"Chat App"),o.a.createElement(u.a,{variant:"h5",component:"h5"},v),o.a.createElement("div",{className:e.flex},o.a.createElement("div",{className:e.listingCard},o.a.createElement(d.a,null,c.map((function(e){return o.a.createElement(h.a,{onClick:function(e){return b(e.target.innerText)},key:e,button:!0},o.a.createElement(g.a,{primary:e}))})))),o.a.createElement("div",{className:e.chatWindow},a[v].map((function(t,a){return o.a.createElement("div",{className:e.flex,key:a},o.a.createElement(f.a,{label:t.from,className:e.chip}),o.a.createElement(u.a,{variant:"body1",gutterBottom:!0},t.msg))})))),o.a.createElement("div",{className:e.flex},o.a.createElement(p.a,{label:"Send a chat",className:e.chatBox,value:w,onChange:function(e){return k(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(console.log("enter was pressed"),n({from:r,msg:w,listing:v}),k(""))}}),o.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){n({from:r,msg:w,listing:v}),k("")}},"Send"))))}var B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null,o.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(114)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.6de0f3fe.chunk.js.map