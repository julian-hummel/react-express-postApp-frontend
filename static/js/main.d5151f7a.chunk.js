(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(89),a(90),a(6)),s=a(157),i=a(154),u=a(158),m=a(7),d=a(26),p=a(75),f=a.n(p),h=Object(d.b)({name:"auth",initialState:{isAuthenticated:!1,user:{},admin:!1},reducers:{setCurrentUser:function(e,t){e.isAuthenticated=!f()(t.payload),e.user=t.payload,e.admin="admin"===t.payload.role},logoutCurrentUser:function(e){e.isAuthenticated=!1,e.user={},localStorage.removeItem("usertoken")}}}),E=h.actions,g=E.setCurrentUser,b=E.logoutCurrentUser,v=function(e){return e.auth.user},j=function(e){return e.auth.isAuthenticated},O=function(e){return e.auth.admin},y=h.reducer,w=Object(d.b)({name:"flashMessage",initialState:{text:"",type:""},reducers:{addFlashMessage:function(e,t){e.text=t.payload.text,e.type=t.payload.type},deleteFlashMessage:function(e){e.text="",e.type=""}}}),C=w.actions,N=C.addFlashMessage,S=C.deleteFlashMessage,k=function(e){return e.flashMessage.text},x=function(e){return e.flashMessage.type},I=w.reducer,B=(a(120),a(12)),F=a.n(B);function P(e){e?F.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete F.a.defaults.headers.common.Authorization}var z=a(41);function H(e){var t=Object(m.c)(j),a=Object(m.c)(O),o=Object(m.b)(),c=Object(n.useState)(0),d=Object(l.a)(c,2),p=d[0],f=d[1];Object(n.useEffect)((function(){f(function(){var e=localStorage.getItem("usertoken");if(e){var t=Object(z.a)(e).exp;if(Date.now()>=1e3*t)return 0;var a=1e3*t-Date.now();return Math.round(a%864e5%36e5/6e4)}}())}),[]);var h=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{className:"loginButton",href:"#login",variant:"primary",size:"sm"},"Login")," "),E=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{onClick:function(){o(b()),o(N({text:"Sie wurden erfolgreich ausgeloggt.",type:"success"})),P(!1),window.location.reload()},className:"logoutButton",variant:"primary",size:"sm"},"Logout")," "),g=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{id:"sessionCounter",variant:"outline-primary",size:"sm"},"Sitzung endet in: ",p," min")," ");return r.a.createElement(u.a,{id:"navbar",bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,{id:"logo",href:"#"},"React"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Item,null,r.a.createElement(s.a.Link,{id:"posts",href:"#posts"},"Spr\xfcche")),!t&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{className:"registerButton",href:"#register",variant:"primary",size:"sm"},"Registrieren")," "),t&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{href:"#profile",className:"profileButton",variant:"primary",size:"sm"},"Profil")," ")),r.a.createElement(s.a,{className:"ml-auto"},t&&g,a&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{id:"adminBtn",size:"sm",variant:"outline-danger"},"Admin"),""),t?E:h)))}a(31);function M(){var e=localStorage.getItem("usertoken"),t=Object(m.c)(j),a="";e&&t&&(a=Object(z.a)(e).firstName);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"Willkommen ",a))))}var A=a(156);a(139);function D(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)({}),h=Object(l.a)(f,2),E=h[0],b=h[1],v=Object(n.useState)(!1),j=Object(l.a)(v,2),O=j[0],y=j[1],w=Object(m.b)();return r.a.createElement("div",{className:"container",id:"loginContainer"},r.a.createElement("h2",{className:"brand"},"JH Reactive"),r.a.createElement(A.a,{onSubmit:function(t){t.preventDefault(),y(!0),b({});var a={email:o,password:d};w(g({email:o})),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/users/login",e).then((function(e){return localStorage.setItem("usertoken",e.data),e.data}))}(a).then((function(t){t.errors?(b(t.errors),w(N({text:"Der Login war nicht erfolgreich",type:"error"}))):(w(N({text:"Der Login war erfolgreich",type:"success"})),e.history.push("/"))})).finally(y(!1)),setTimeout((function(){window.location.reload()}),1e3)},className:"loginForm",autoComplete:"off"},E.login&&r.a.createElement("div",{className:"alert alert-danger"},E.login),r.a.createElement(A.a.Group,{className:"emailField"},r.a.createElement(A.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement(A.a.Group,{className:"passwordField"},r.a.createElement(A.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(i.a,{disabled:O,type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Einloggen")))}var G=a(83),R=a(8),q=a(78);a(140);function T(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),E=h[0],g=h[1],b=Object(n.useState)(""),v=Object(l.a)(b,2),j=v[0],O=v[1],y=Object(n.useState)(""),w=Object(l.a)(y,2),C=w[0],S=w[1],k=Object(n.useState)({}),x=Object(l.a)(k,2),I=x[0],B=x[1],P=Object(n.useState)(!1),z=Object(l.a)(P,2),H=z[0],M=z[1],D=Object(m.b)();return r.a.createElement("div",{className:"container",id:"registerContainer"},r.a.createElement("h2",{className:"brand"},"JH Reactive"),r.a.createElement(A.a,{onSubmit:function(t){t.preventDefault(),B({}),M(!0),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/users/register",e).then((function(e){return e.data}))}({firstName:o,lastName:d,email:E,password:j,repeatPassword:C}).then((function(t){t.errors?(D(N({text:"Die Registrierung war nicht erfolgreich",type:"error"})),B(t.errors)):(D(N({text:"Die Registrierung war erfolgreich",type:"success"})),e.history.push("/login"))})).catch((function(e){console.error(e)})).finally((function(){M(!1)}))},className:"registerForm",autoComplete:"off"},I.user&&r.a.createElement("div",{className:"alert alert-danger"},I.user),I.repeatPassword&&r.a.createElement("div",{className:"alert alert-danger"},I.repeatPassword),r.a.createElement(A.a.Group,{className:"nameRow"},r.a.createElement(A.a.Row,null,r.a.createElement(q.a,null,r.a.createElement(A.a.Control,{id:"firstName",required:!0,placeholder:"Vorname",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement(q.a,null,r.a.createElement(A.a.Control,{id:"lastName",required:!0,placeholder:"Nachname",value:d,onChange:function(e){return p(e.target.value)}})))),r.a.createElement(A.a.Group,{className:"emailField"},r.a.createElement(A.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:E,onChange:function(e){return g(e.target.value)}})),r.a.createElement(A.a.Group,{className:"passwordField"},r.a.createElement(A.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:j,onChange:function(e){return O(e.target.value)}})),r.a.createElement(A.a.Group,{className:"passwordField"},r.a.createElement(A.a.Control,{id:"repeatPassword",required:!0,type:"password",placeholder:"Passwort wiederholen",value:C,onChange:function(e){return S(e.target.value)}})),r.a.createElement(i.a,{disabled:H,type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Registrieren")))}function K(e){var t=Object(m.c)(v),a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(!1),d=Object(l.a)(u,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){localStorage.getItem("usertoken")||e.history.push("/login")})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFIL"),r.a.createElement("p",null,"Vorname: ",t.firstName),r.a.createElement("p",null,"Nachname: ",t.lastName),r.a.createElement("p",null,"Email: ",t.email),r.a.createElement("p",null,"id: ",t._id),r.a.createElement(A.a,{onSubmit:function(){f(!0);var e={};e.email=t.email,e.notification=c,function(e){return F.a.put("https://glacial-fortress-07261.herokuapp.com/users/update/"+e.email+"/"+e.notification).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}(e).finally(f(!1))}},r.a.createElement(A.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(A.a.Check,{disabled:p,onClick:function(e){return s(!c)},type:"checkbox",label:"Ich will Mitteilungen erhalten"})),r.a.createElement(i.a,{size:"sm",variant:"primary",type:"submit"},"Speichern")))))}var L=a(155),J=a(159),U=a(46),W=a.n(U);a(149);function V(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),u=s[0],d=s[1],p=Object(n.useState)([]),f=Object(l.a)(p,2),h=f[0],E=f[1],g=Object(n.useState)([]),b=Object(l.a)(g,2),y=b[0],w=b[1],C=Object(n.useState)(!1),N=Object(l.a)(C,2),S=N[0],k=N[1],x=Object(n.useState)(!1),I=Object(l.a)(x,2),B=I[0],P=I[1],z=Object(n.useState)(!1),H=Object(l.a)(z,2),M=H[0],D=H[1],G=Object(n.useState)(!1),R=Object(l.a)(G,2),q=R[0],T=R[1],K=Object(n.useState)(""),U=Object(l.a)(K,2),V=U[0],_=U[1],$=Object(n.useState)(""),Q=Object(l.a)($,2),X=Q[0],Y=Q[1],Z=Object(m.c)(j),ee=Object(m.c)(v),te=Object(m.c)(O),ae=ee.firstName+" "+ee.lastName;Object(n.useEffect)((function(){F.a.get("https://glacial-fortress-07261.herokuapp.com/posts/fetch").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(e){return E(e.reverse())}))}),[]);var ne=function(){return P(!1)},re=function(){return D(!1)},oe=function(){return T(!1)};function ce(e){(function(e){return F.a.get("https://glacial-fortress-07261.herokuapp.com/posts/fetchComments/"+e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))})(e).then((function(e){return w(e.reverse())}))}var le=r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{id:"createPostBtn",variant:"primary",onClick:function(){return T(!0)}},"Neuer Spruch"),r.a.createElement(L.a,{show:q,onHide:oe},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Einen neuen Spruch verfassen")),r.a.createElement(L.a.Body,null,r.a.createElement(A.a,{id:"postForm",autoComplete:"off"},r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Control,{id:"postHeader",required:!0,placeholder:"Spruch-\xdcberschrift",onChange:function(e){return o(e.target.value)},value:a})),r.a.createElement(A.a.Group,null,r.a.createElement("textarea",{id:"postContent",required:!0,className:"form-control","aria-label":"With textarea",placeholder:"Inhalt",onChange:function(e){return d(e.target.value)},value:u})))),r.a.createElement(L.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:oe},"Schlie\xdfen"),r.a.createElement(i.a,{disabled:S,variant:"primary",onClick:function(e){var t;e.preventDefault(),k(!0),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/posts/submit",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}({postHeader:a,postContent:u,creatorName:ae,postId:W.a.generate()}).finally((function(){k(!1),window.location.reload()})),t=ee.email,F.a.post("https://glacial-fortress-07261.herokuapp.com/emails/sendemail",t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}},"Post ver\xf6ffentlichen"))),r.a.createElement(L.a,{show:B,onHide:ne},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Neuen Kommentar verfassen")),r.a.createElement(L.a.Body,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"Inhalt"),r.a.createElement(A.a.Control,{value:V,onChange:function(e){return _(e.target.value)},as:"textarea",rows:4})))),r.a.createElement(L.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:ne},"Schlie\xdfen"),r.a.createElement(i.a,{variant:"primary",onClick:function(){P(!1),function(e){F.a.post("https://glacial-fortress-07261.herokuapp.com/posts/submitComment",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}({content:V,creator:ae,post:X})}},"Kommentieren"))),r.a.createElement(L.a,{show:M,onHide:re},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Kommentare")),r.a.createElement(L.a.Body,null,0===y.length?r.a.createElement("p",null,"Es gibt noch keine Kommentare"):y.map((function(e){return r.a.createElement(J.a,{id:"comment",style:{width:"25rem"}},r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,"Kommentar von "+e.creator),r.a.createElement(J.a.Text,null,e.content)))}))),r.a.createElement(L.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:re},"Schlie\xdfen"))));return r.a.createElement("div",{id:"container"},Z&&le,h.length&&r.a.createElement("ul",null,h.map((function(e){return r.a.createElement("div",{id:"postContainer"},te&&r.a.createElement(i.a,{onClick:function(e){return(t=e.target.name,F.a.delete("https://glacial-fortress-07261.herokuapp.com/posts/delete/"+t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))).then((function(){return window.location.reload()}));var t},type:"submit",id:"removePostBtn",name:e._id,variant:"danger",size:"sm"},"Spruch l\xf6schen"),r.a.createElement("div",{id:"headerCard",class:"card-body"},e.postHeader+" (ver\xf6ffentlicht von "+e.creatorName+")"),r.a.createElement("div",{class:"card-body"},e.postContent),r.a.createElement("div",{class:"card-body"},"ver\xf6ffentlicht: "+e.created.split("T")[0]+("Julian Hummel"===e.creatorName?" (admin)":" (user)")),r.a.createElement("div",{class:"card-body"},Z&&r.a.createElement(i.a,{onClick:function(){ce(e.postId),D(!0)},variant:"link"},"Kommentare anzeigen"),Z&&r.a.createElement(i.a,{onClick:function(){Y(e.postId),P(!0)},variant:"link"},"Kommentieren")))}))))}var _=a(3),$=a.n(_);a(150);function Q(){var e=Object(m.c)(k),t=Object(m.c)(x),a=Object(m.b)();return r.a.createElement("div",{id:"message",className:$()("alert",{"alert-success":"success"===t,"alert-danger":"error"===t})},e&&r.a.createElement("button",{onClick:function(){a(S())},className:"close"},r.a.createElement("span",null,"\xd7")),e)}var X=function(){var e=Object(m.b)(),t=Object(m.c)(v);return Object(n.useEffect)((function(){localStorage.getItem("usertoken")&&(P(localStorage.getItem("usertoken")),t.firstName?F.a.get("https://glacial-fortress-07261.herokuapp.com/users/validateToken").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors&&(localStorage.removeItem("usertoken"),e(N({text:t.errors.tokenExpired,type:"error"})))})):F.a.get("https://glacial-fortress-07261.herokuapp.com/users/profile").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors?(localStorage.removeItem("usertoken"),e(N({text:t.errors.tokenExpired,type:"error"}))):e(g(t))})))}),[]),r.a.createElement(G.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement(Q,null),r.a.createElement(R.a,{exact:!0,path:"/",component:M}),r.a.createElement(R.a,{path:"/register",component:T}),r.a.createElement(R.a,{path:"/login",component:D}),r.a.createElement(R.a,{path:"/profile",component:K}),r.a.createElement(R.a,{path:"/posts",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=Object(d.b)({name:"post",initialState:{posts:[]},reducers:{addPost:function(e,t){var a={postHeader:t.payload.header,postContent:t.payload.text,postCreator:t.payload.creator,created:Date.now(),postId:W.a.generate()};e.posts.push(a)},removePost:function(e,t){var a=e.posts.indexOf((function(e){return e.postId===t.payload.postId}));e.posts.splice(a,1)}}}),Z=Y.actions,ee=(Z.addPost,Z.removePost,Y.reducer),te=Object(d.a)({reducer:{auth:y,flashMessage:I,post:ee}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:te},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(152)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.d5151f7a.chunk.js.map