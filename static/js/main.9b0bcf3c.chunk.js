(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(17),c=a.n(o),l=(a(76),a(77),a(144)),s=a(141),i=a(143),u=a(5),m=a(19),d=a(62),p=a.n(d),f=Object(m.b)({name:"auth",initialState:{isAuthenticated:!1,user:{},admin:!1},reducers:{setCurrentUser:function(e,t){e.isAuthenticated=!p()(t.payload),e.user=t.payload,e.admin="admin"===t.payload.role},logoutCurrentUser:function(e){e.isAuthenticated=!1,e.user={},localStorage.removeItem("usertoken")}}}),h=f.actions,g=h.setCurrentUser,E=h.logoutCurrentUser,b=function(e){return e.auth.user},v=function(e){return e.auth.isAuthenticated},j=function(e){return e.auth.admin},O=f.reducer,N=Object(m.b)({name:"flashMessage",initialState:{text:"",type:""},reducers:{addFlashMessage:function(e,t){e.text=t.payload.text,e.type=t.payload.type},deleteFlashMessage:function(e){e.text="",e.type=""}}}),w=N.actions,y=w.addFlashMessage,C=w.deleteFlashMessage,S=function(e){return e.flashMessage.text},k=function(e){return e.flashMessage.type},x=N.reducer,I=(a(107),a(14)),P=a.n(I);function F(e){e?P.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete P.a.defaults.headers.common.Authorization}function z(e){var t=Object(u.c)(v),a=Object(u.c)(j),r=Object(u.b)(),o=n.a.createElement(l.a.Item,null,n.a.createElement(s.a,{className:"loginButton",href:"#login",variant:"primary",size:"sm"},"Login")," "),c=n.a.createElement(l.a.Item,null,n.a.createElement(s.a,{onClick:function(){r(E()),r(y({text:"Sie wurden erfolgreich ausgeloggt.",type:"success"})),F(!1),window.location.reload()},className:"logoutButton",variant:"primary",size:"sm"},"Logout")," ");return n.a.createElement(i.a,{id:"navbar",bg:"light",expand:"lg"},n.a.createElement(i.a.Brand,{id:"logo",href:"#"},"React"),n.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(l.a,{className:"mr-auto"},n.a.createElement(l.a.Item,null,n.a.createElement(l.a.Link,{href:"#"},"Home")),n.a.createElement(l.a.Item,null,n.a.createElement(l.a.Link,{href:"#posts"},"Spr\xfcche")),!t&&n.a.createElement(l.a.Item,null,n.a.createElement(s.a,{className:"registerButton",href:"#register",variant:"primary",size:"sm"},"Registrieren")," "),t&&n.a.createElement(l.a.Item,null,n.a.createElement(s.a,{href:"#profile",className:"profileButton",variant:"primary",size:"sm"},"Profil")," ")),n.a.createElement(l.a,{className:"ml-auto"},a&&n.a.createElement(s.a,{id:"adminBtn",size:"sm",variant:"outline-danger"},"Admin"),t?c:o)))}a(22);var B=a(68);function M(){var e=localStorage.getItem("usertoken"),t=Object(u.c)(v),a="";e&&t&&(a=Object(B.a)(e).firstName);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"jumbotron mt-5"},n.a.createElement("div",{className:"col-sm-8 mx-auto"},n.a.createElement("h1",{className:"text-center"},"Willkommen ",a))))}var A=a(8),R=a(142);a(126);function q(e){var t=Object(r.useState)(""),a=Object(A.a)(t,2),o=a[0],c=a[1],l=Object(r.useState)(""),i=Object(A.a)(l,2),m=i[0],d=i[1],p=Object(r.useState)({}),f=Object(A.a)(p,2),h=f[0],E=f[1],b=Object(u.b)();return n.a.createElement("div",{className:"container",id:"loginContainer"},n.a.createElement("h2",{className:"brand"},"JH Reactive"),n.a.createElement(R.a,{onSubmit:function(t){t.preventDefault(),E({});var a={email:o,password:m};b(g({email:o})),function(e){return P.a.post("https://glacial-fortress-07261.herokuapp.com/users/login",e).then((function(e){return localStorage.setItem("usertoken",e.data),e.data}))}(a).then((function(t){t.errors?(E(t.errors),b(y({text:"Der Login war nicht erfolgreich",type:"error"}))):(b(y({text:"Der Login war erfolgreich",type:"success"})),e.history.push("/"))})),window.location.reload()},className:"loginForm",autoComplete:"off"},h.login&&n.a.createElement("div",{className:"alert alert-danger"},h.login),n.a.createElement(R.a.Group,{className:"emailField"},n.a.createElement(R.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:o,onChange:function(e){return c(e.target.value)}})),n.a.createElement(R.a.Group,{className:"passwordField"},n.a.createElement(R.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:m,onChange:function(e){return d(e.target.value)}})),n.a.createElement(s.a,{type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Einloggen")))}var D=a(70),G=a(6),H=a(69);a(127);function L(e){var t=Object(r.useState)(""),a=Object(A.a)(t,2),o=a[0],c=a[1],l=Object(r.useState)(""),i=Object(A.a)(l,2),m=i[0],d=i[1],p=Object(r.useState)(""),f=Object(A.a)(p,2),h=f[0],g=f[1],E=Object(r.useState)(""),b=Object(A.a)(E,2),v=b[0],j=b[1],O=Object(r.useState)(""),N=Object(A.a)(O,2),w=N[0],C=N[1],S=Object(r.useState)({}),k=Object(A.a)(S,2),x=k[0],I=k[1],F=Object(r.useState)(!1),z=Object(A.a)(F,2),B=z[0],M=z[1],q=Object(u.b)();return n.a.createElement("div",{className:"container",id:"registerContainer"},n.a.createElement("h2",{className:"brand"},"JH Reactive"),n.a.createElement(R.a,{onSubmit:function(t){t.preventDefault(),I({}),M(!0),function(e){return P.a.post("https://glacial-fortress-07261.herokuapp.com/users/register",e).then((function(e){return e.data}))}({firstName:o,lastName:m,email:h,password:v,repeatPassword:w}).then((function(t){t.errors?(q(y({text:"Die Registrierung war nicht erfolgreich",type:"error"})),I(t.errors)):(q(y({text:"Die Registrierung war erfolgreich",type:"success"})),e.history.push("/login"))})).catch((function(e){console.error(e)})).finally((function(){M(!1)}))},className:"registerForm",autoComplete:"off"},x.user&&n.a.createElement("div",{className:"alert alert-danger"},x.user),x.repeatPassword&&n.a.createElement("div",{className:"alert alert-danger"},x.repeatPassword),n.a.createElement(R.a.Group,{className:"nameRow"},n.a.createElement(R.a.Row,null,n.a.createElement(H.a,null,n.a.createElement(R.a.Control,{id:"firstName",required:!0,placeholder:"Vorname",value:o,onChange:function(e){return c(e.target.value)}})),n.a.createElement(H.a,null,n.a.createElement(R.a.Control,{id:"lastName",required:!0,placeholder:"Nachname",value:m,onChange:function(e){return d(e.target.value)}})))),n.a.createElement(R.a.Group,{className:"emailField"},n.a.createElement(R.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:h,onChange:function(e){return g(e.target.value)}})),n.a.createElement(R.a.Group,{className:"passwordField"},n.a.createElement(R.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:v,onChange:function(e){return j(e.target.value)}})),n.a.createElement(R.a.Group,{className:"passwordField"},n.a.createElement(R.a.Control,{id:"repeatPassword",required:!0,type:"password",placeholder:"Passwort wiederholen",value:w,onChange:function(e){return C(e.target.value)}})),n.a.createElement(s.a,{disabled:B,type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Registrieren")))}function J(e){var t=Object(u.c)(b);return Object(r.useEffect)((function(){localStorage.getItem("usertoken")||e.history.push("/login")})),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"jumbotron mt-5"},n.a.createElement("div",{className:"col-sm-8 mx-auto"},n.a.createElement("h1",{className:"text-center"},"PROFIL"),n.a.createElement("p",null,"Vorname: ",t.firstName),n.a.createElement("p",null,"Nachname: ",t.lastName),n.a.createElement("p",null,"Email: ",t.email),n.a.createElement("p",null,"id: ",t._id))))}var U=a(30),W=a.n(U);a(136);function T(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(""),l=Object(A.a)(c,2),i=l[0],m=l[1],d=Object(r.useState)([]),p=Object(A.a)(d,2),f=p[0],h=p[1],g=Object(r.useState)(!1),E=Object(A.a)(g,2),O=E[0],N=E[1],w=Object(u.c)(v),y=Object(u.c)(b),C=Object(u.c)(j),S=y.firstName+" "+y.lastName;Object(r.useEffect)((function(){P.a.get("https://glacial-fortress-07261.herokuapp.com/posts/fetch").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(e){return h(e.reverse())}))}),[]);var k=n.a.createElement(R.a,{id:"postForm",onSubmit:function(e){e.preventDefault(),N(!0),function(e){return P.a.post("https://glacial-fortress-07261.herokuapp.com/posts/submit",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}({postHeader:a,postContent:i,creatorName:S,postId:W.a.generate()}).finally((function(){N(!1),window.location.reload()}))},autoComplete:"off"},n.a.createElement(R.a.Group,null,n.a.createElement(R.a.Control,{id:"postHeader",required:!0,placeholder:"Spruch-\xdcberschrift",onChange:function(e){return o(e.target.value)},value:a})),n.a.createElement(R.a.Group,null,n.a.createElement("textarea",{id:"postContent",required:!0,className:"form-control","aria-label":"With textarea",placeholder:"Inhalt",onChange:function(e){return m(e.target.value)},value:i})),n.a.createElement(s.a,{disabled:O,type:"submit",id:"submitBtn",size:"sm"},"Spruch ver\xf6ffentlichen"));return n.a.createElement("div",{id:"container"},w&&k,f.length&&n.a.createElement("ul",null,f.map((function(e){return n.a.createElement("div",{id:"postContainer"},C&&n.a.createElement(s.a,{onClick:function(e){return(t=e.target.name,console.log(t),P.a.delete("https://glacial-fortress-07261.herokuapp.com/posts/delete/"+t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))).then((function(){return window.location.reload()}));var t},type:"submit",id:"removePostBtn",name:e._id,variant:"danger",size:"sm"},"Spruch l\xf6schen"),n.a.createElement("div",{id:"headerCard",class:"card-body"},e.postHeader+" (ver\xf6ffentlicht von "+e.creatorName+")"),n.a.createElement("div",{class:"card-body"},e.postContent),n.a.createElement("div",{class:"card-body"},"ver\xf6ffentlicht: "+e.created.split("T")[0]))}))))}var V=a(3),_=a.n(V);a(137);function $(){var e=Object(u.c)(S),t=Object(u.c)(k),a=Object(u.b)();return n.a.createElement("div",{id:"message",className:_()("alert",{"alert-success":"success"===t,"alert-danger":"error"===t})},e&&n.a.createElement("button",{onClick:function(){a(C())},className:"close"},n.a.createElement("span",null,"\xd7")),e)}var K=function(){var e=Object(u.b)(),t=Object(u.c)(b);return Object(r.useEffect)((function(){localStorage.getItem("usertoken")&&(F(localStorage.getItem("usertoken")),t.firstName?P.a.get("https://glacial-fortress-07261.herokuapp.com/users/validateToken").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors&&(localStorage.removeItem("usertoken"),e(y({text:t.errors.tokenExpired,type:"error"})))})):P.a.get("https://glacial-fortress-07261.herokuapp.com/users/profile").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors?(localStorage.removeItem("usertoken"),e(y({text:t.errors.tokenExpired,type:"error"}))):e(g(t))})))}),[]),n.a.createElement(D.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(z,null),n.a.createElement($,null),n.a.createElement(G.a,{exact:!0,path:"/",component:M}),n.a.createElement(G.a,{path:"/register",component:L}),n.a.createElement(G.a,{path:"/login",component:q}),n.a.createElement(G.a,{path:"/profile",component:J}),n.a.createElement(G.a,{path:"/posts",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=Object(m.b)({name:"post",initialState:{posts:[]},reducers:{addPost:function(e,t){var a={postHeader:t.payload.header,postContent:t.payload.text,postCreator:t.payload.creator,created:Date.now(),postId:W.a.generate()};e.posts.push(a)},removePost:function(e,t){var a=e.posts.indexOf((function(e){return e.postId===t.payload.postId}));e.posts.splice(a,1)}}}),X=Q.actions,Y=(X.addPost,X.removePost,Q.reducer),Z=Object(m.a)({reducer:{auth:O,flashMessage:x,post:Y}});c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,{store:Z},n.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(139)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.9b0bcf3c.chunk.js.map