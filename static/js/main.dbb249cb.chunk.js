(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(90),a(91),a(6)),s=a(159),i=a(155),u=a(160),m=a(7),d=a(26),p=a(75),f=a.n(p),h=Object(d.b)({name:"auth",initialState:{isAuthenticated:!1,user:{},admin:!1},reducers:{setCurrentUser:function(e,t){e.isAuthenticated=!f()(t.payload),e.user=t.payload,e.admin="admin"===t.payload.role},logoutCurrentUser:function(e){e.isAuthenticated=!1,e.user={},localStorage.removeItem("usertoken")}}}),E=h.actions,g=E.setCurrentUser,b=E.logoutCurrentUser,v=function(e){return e.auth.user},O=function(e){return e.auth.isAuthenticated},j=function(e){return e.auth.admin},y=h.reducer,w=Object(d.b)({name:"flashMessage",initialState:{text:"",type:""},reducers:{addFlashMessage:function(e,t){e.text=t.payload.text,e.type=t.payload.type},deleteFlashMessage:function(e){e.text="",e.type=""}}}),N=w.actions,C=N.addFlashMessage,S=N.deleteFlashMessage,k=function(e){return e.flashMessage.text},x=function(e){return e.flashMessage.type},I=w.reducer,B=(a(121),a(11)),F=a.n(B);function z(e){e?F.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete F.a.defaults.headers.common.Authorization}var P=a(41);function T(e){var t=Object(m.c)(O),a=Object(m.c)(j),o=Object(m.b)(),c=Object(n.useState)(0),d=Object(l.a)(c,2),p=d[0],f=d[1];Object(n.useEffect)((function(){f(function(){var e=localStorage.getItem("usertoken");if(e){var t=Object(P.a)(e).exp;if(Date.now()>=1e3*t)return 0;var a=1e3*t-Date.now();return Math.round(a%864e5%36e5/6e4)}}())}),[]);var h=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{className:"loginButton",href:"#login",variant:"primary",size:"sm"},"Login")," "),E=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{onClick:function(){o(b()),o(C({text:"Sie wurden erfolgreich ausgeloggt.",type:"success"})),z(!1),window.location.reload()},className:"logoutButton",variant:"primary",size:"sm"},"Logout")," "),g=r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{id:"sessionCounter",variant:"outline-primary",size:"sm"},"Sitzung endet in: ",p," min")," ");return r.a.createElement(u.a,{id:"navbar",bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,{id:"logo",href:"#"},"Socializor"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Item,null,r.a.createElement(s.a.Link,{id:"posts",href:"#posts"},"Spr\xfcche")),t&&r.a.createElement(s.a.Item,null,r.a.createElement(s.a.Link,{id:"posts",href:"#messenger "},"Messenger")),!t&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{className:"registerButton",href:"#register",variant:"primary",size:"sm"},"Registrieren")," "),t&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{href:"#profile",className:"profileButton",variant:"primary",size:"sm"},"Profil")," ")),r.a.createElement(s.a,{className:"ml-auto"},t&&g,a&&r.a.createElement(s.a.Item,null,r.a.createElement(i.a,{id:"adminBtn",size:"sm",variant:"outline-danger"},"Admin"),""),t?E:h)))}a(32);function H(){var e=localStorage.getItem("usertoken"),t=Object(m.c)(O),a="";e&&t&&(a=Object(P.a)(e).firstName);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"Willkommen ",a))))}var L=a(158),M=a(156);a(140);function G(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)({}),h=Object(l.a)(f,2),E=h[0],b=h[1],v=Object(n.useState)(!1),O=Object(l.a)(v,2),j=O[0],y=O[1],w=Object(m.b)();return r.a.createElement("div",{className:"container",id:"loginContainer"},r.a.createElement("h2",{className:"brand"},"JH Reactive"),r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),y(!0),b({}),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/users/login",e).then((function(e){return localStorage.setItem("usertoken",e.data),e.data}))}({email:o,password:d}).then((function(t){t.errors?(b(t.errors),w(C({text:"Der Login war nicht erfolgreich",type:"error"}))):(w(g({email:o})),w(C({text:"Der Login war erfolgreich",type:"success"})),e.history.push("/"),setTimeout((function(){window.location.reload()}),1e3))})).finally(y(!1))},className:"loginForm",autoComplete:"off"},E.login&&r.a.createElement("div",{className:"alert alert-danger"},E.login),r.a.createElement(L.a.Group,{className:"emailField"},r.a.createElement(L.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement(L.a.Group,{className:"passwordField"},r.a.createElement(L.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(i.a,{disabled:j,type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Einloggen"),j&&r.a.createElement(M.a,{id:"loadingSpinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}function q(e){var t=r.a.createElement(i.a,null,"Test");return r.a.createElement(r.a.Fragment,null,t)}var A=a(84),D=a(8),R=a(78);a(141);function K(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),E=h[0],g=h[1],b=Object(n.useState)(""),v=Object(l.a)(b,2),O=v[0],j=v[1],y=Object(n.useState)(""),w=Object(l.a)(y,2),N=w[0],S=w[1],k=Object(n.useState)({}),x=Object(l.a)(k,2),I=x[0],B=x[1],z=Object(n.useState)(!1),P=Object(l.a)(z,2),T=P[0],H=P[1],G=Object(m.b)();return r.a.createElement("div",{className:"container",id:"registerContainer"},r.a.createElement("h2",{className:"brand"},"JH Reactive"),r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),B({}),H(!0),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/users/register",e).then((function(e){return e.data}))}({firstName:o,lastName:d,email:E,password:O,repeatPassword:N}).then((function(t){t.errors?(G(C({text:"Die Registrierung war nicht erfolgreich",type:"error"})),B(t.errors)):(G(C({text:"Die Registrierung war erfolgreich",type:"success"})),e.history.push("/login"))})).catch((function(e){console.error(e)})).finally((function(){H(!1)}))},className:"registerForm",autoComplete:"off"},I.user&&r.a.createElement("div",{className:"alert alert-danger"},I.user),I.repeatPassword&&r.a.createElement("div",{className:"alert alert-danger"},I.repeatPassword),r.a.createElement(L.a.Group,{className:"nameRow"},r.a.createElement(L.a.Row,null,r.a.createElement(R.a,null,r.a.createElement(L.a.Control,{id:"firstName",required:!0,placeholder:"Vorname",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement(R.a,null,r.a.createElement(L.a.Control,{id:"lastName",required:!0,placeholder:"Nachname",value:d,onChange:function(e){return p(e.target.value)}})))),r.a.createElement(L.a.Group,{className:"emailField"},r.a.createElement(L.a.Control,{id:"email",required:!0,type:"email",placeholder:"E-Mail-Adresse",value:E,onChange:function(e){return g(e.target.value)}})),r.a.createElement(L.a.Group,{className:"passwordField"},r.a.createElement(L.a.Control,{id:"password",required:!0,type:"password",placeholder:"Passwort",value:O,onChange:function(e){return j(e.target.value)}})),r.a.createElement(L.a.Group,{className:"passwordField"},r.a.createElement(L.a.Control,{id:"repeatPassword",required:!0,type:"password",placeholder:"Passwort wiederholen",value:N,onChange:function(e){return S(e.target.value)}})),r.a.createElement(i.a,{disabled:T,type:"submit",className:"button",variant:"primary",size:"sm",block:!0},"Registrieren"),T&&r.a.createElement(M.a,{id:"loadingSpinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}var U=a(157);function J(e){var t=Object(m.c)(v),a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(!1),d=Object(l.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(!1),E=Object(l.a)(h,2),g=E[0],b=E[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),y=j[0],w=j[1],N=Object(n.useState)(""),C=Object(l.a)(N,2),S=C[0],k=C[1],x=function(){return b(!1)};return Object(n.useEffect)((function(){localStorage.getItem("usertoken")||e.history.push("/login")})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFIL"),r.a.createElement("p",null,"Vorname: ",t.firstName),r.a.createElement("p",null,"Nachname: ",t.lastName),r.a.createElement(i.a,{onClick:function(){return b(!0)},variant:"primary",size:"sm"}," Namen \xe4ndern"),r.a.createElement(U.a,{show:g,onHide:x},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,null,"Namen \xe4ndern")),r.a.createElement(U.a.Body,null,r.a.createElement(L.a,null,r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Vorname"),r.a.createElement(L.a.Control,{placeholder:"Neuer Vorname",value:y,onChange:function(e){return w(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Nachname"),r.a.createElement(L.a.Control,{placeholder:"Neuer Nachname",value:S,onChange:function(e){return k(e.target.value)}})))),r.a.createElement(U.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:x},"Schlie\xdfen"),r.a.createElement(i.a,{variant:"primary",onClick:function(){!function(e){F.a.put("https://glacial-fortress-07261.herokuapp.com/users/updateUser/"+e.firstName+"/"+e.lastName+"/"+e.email).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}({firstName:y,lastName:S,email:t.email}),x(),setTimeout((function(){window.location.reload()}),1e3)}},"Speichern"))),r.a.createElement("p",null,"Email: ",t.email),r.a.createElement(L.a,{onSubmit:function(){f(!0);var e={};e.email=t.email,e.notification=c,function(e){return F.a.put("https://glacial-fortress-07261.herokuapp.com/users/update/"+e.email+"/"+e.notification).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}(e).finally(f(!1))}},r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{disabled:p,onClick:function(e){return s(!c)},type:"checkbox",label:"Ich will Mitteilungen erhalten"})),r.a.createElement(i.a,{size:"sm",variant:"primary",type:"submit"},"Speichern")))))}var V=a(161),W=a(46),_=a.n(W),$=a(83),Q=a.n($);a(150);function X(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)([]),h=Object(l.a)(f,2),E=h[0],g=h[1],b=Object(n.useState)([]),y=Object(l.a)(b,2),w=y[0],N=y[1],C=Object(n.useState)(!1),S=Object(l.a)(C,2),k=S[0],x=S[1],I=Object(n.useState)(!1),B=Object(l.a)(I,2),z=B[0],P=B[1],T=Object(n.useState)(!1),H=Object(l.a)(T,2),G=H[0],q=H[1],A=Object(n.useState)(!1),D=Object(l.a)(A,2),R=D[0],K=D[1],J=Object(n.useState)(""),W=Object(l.a)(J,2),$=W[0],X=W[1],Y=Object(n.useState)(""),Z=Object(l.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(l.a)(ae,2),re=(ne[0],ne[1]),oe=Object(m.c)(O),ce=Object(m.c)(v),le=Object(m.c)(j),se=ce.firstName+" "+ce.lastName;Object(n.useEffect)((function(){!function(){try{re(!0),F.a.get("https://glacial-fortress-07261.herokuapp.com/posts/fetch").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(e){return g(e.reverse())}))}finally{re(!1)}}()}),[]);var ie={backgroundImage:"url(".concat(Q.a,")")},ue=function(){return P(!1)},me=function(){return q(!1)},de=function(){return K(!1)};function pe(e){(function(e){return F.a.get("https://glacial-fortress-07261.herokuapp.com/posts/fetchComments/"+e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))})(e).then((function(e){return N(e.reverse())}))}var fe=r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{id:"createPostBtn",variant:"primary",onClick:function(){oe?K(!0):e.history.push("/login")}},"Neuer Spruch"),r.a.createElement(U.a,{show:R,onHide:de},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,null,"Einen neuen Spruch verfassen")),r.a.createElement(U.a.Body,null,r.a.createElement(L.a,{id:"postForm",autoComplete:"off"},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Control,{id:"postHeader",required:!0,placeholder:"Spruch-\xdcberschrift",onChange:function(e){return c(e.target.value)},value:o})),r.a.createElement(L.a.Group,null,r.a.createElement("textarea",{id:"postContent",required:!0,className:"form-control","aria-label":"With textarea",placeholder:"Inhalt",onChange:function(e){return p(e.target.value)},value:d})))),r.a.createElement(U.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:de},"Schlie\xdfen"),r.a.createElement(i.a,{disabled:k,variant:"primary",onClick:function(e){var t;e.preventDefault(),x(!0),function(e){return F.a.post("https://glacial-fortress-07261.herokuapp.com/posts/submit",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}({postHeader:o,postContent:d,creatorName:se,postId:_.a.generate()}).finally((function(){x(!1),window.location.reload()})),t=ce.email,F.a.post("https://glacial-fortress-07261.herokuapp.com/emails/sendemail",t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}},"Post ver\xf6ffentlichen"))),r.a.createElement(U.a,{show:z,onHide:ue},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,null,"Neuen Kommentar verfassen")),r.a.createElement(U.a.Body,null,r.a.createElement(L.a,null,r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Inhalt"),r.a.createElement(L.a.Control,{value:$,onChange:function(e){return X(e.target.value)},as:"textarea",rows:4})))),r.a.createElement(U.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:ue},"Schlie\xdfen"),r.a.createElement(i.a,{variant:"primary",onClick:function(){P(!1);var e,t={content:$,creator:se,post:ee};!function(e){F.a.post("https://glacial-fortress-07261.herokuapp.com/posts/submitComment",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}(t),e=t,F.a.post("https://glacial-fortress-07261.herokuapp.com/emails/commentNotification",e).then((function(e){return e.data})).catch((function(e){console.warn(e)}))}},"Kommentieren"))),r.a.createElement(U.a,{show:G,onHide:me},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,null,"Kommentare")),r.a.createElement(U.a.Body,null,0===w.length?r.a.createElement("p",null,"Es gibt noch keine Kommentare"):w.map((function(e){return r.a.createElement(V.a,{id:"comment",style:{width:"25rem"}},le&&r.a.createElement(i.a,{onClick:function(e){return(t=e.target.name,F.a.delete("https://glacial-fortress-07261.herokuapp.com/posts/deleteComment/"+t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))).then((function(){return window.location.reload()}));var t},id:"removeCommentBtn",name:e._id,variant:"danger",size:"sm"},"Kommentar l\xf6schen"),r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,null,"Kommentar von "+e.creator),r.a.createElement(V.a.Text,null,e.content),r.a.createElement("footer",{className:"blockquote-footer"},e.created.split("T")[0]+" "+e.created.substring(e.created.lastIndexOf("T")+1,e.created.lastIndexOf(".")))))}))),r.a.createElement(U.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:me},"Schlie\xdfen"))));return r.a.createElement("div",{style:ie,id:"outerContainer"},!(E.length>0)&&r.a.createElement(M.a,{id:"fetchSpinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{id:"container"},fe,r.a.createElement("ul",null,E.map((function(e){return r.a.createElement("div",{id:"postContainer"},r.a.createElement(V.a,{id:"singlePost",style:{width:"25rem"}},r.a.createElement(V.a.Body,null,le&&r.a.createElement(i.a,{onClick:function(e){return(t=e.target.name,F.a.delete("https://glacial-fortress-07261.herokuapp.com/posts/delete/"+t).then((function(e){return e.data})).catch((function(e){console.warn(e)}))).then((function(){return window.location.reload()}));var t},type:"submit",id:"removePostBtn",name:e._id,variant:"danger",size:"sm"},"Spruch l\xf6schen"),r.a.createElement(V.a.Title,null,e.postHeader),r.a.createElement(V.a.Subtitle,{className:"mb-2 text-muted"},"ver\xf6ffentlicht von "+e.creatorName),r.a.createElement(V.a.Text,null,e.postContent),r.a.createElement("footer",{className:"blockquote-footer"},e.created.split("T")[0]+" "+e.created.substring(e.created.lastIndexOf("T")+1,e.created.lastIndexOf("."))),oe&&r.a.createElement(i.a,{onClick:function(){pe(e.postId),q(!0)},variant:"link"},"Kommentare anzeigen"),oe&&r.a.createElement(i.a,{onClick:function(){te(e.postId),P(!0)},variant:"link"},"Kommentieren"))))})))))}var Y=a(3),Z=a.n(Y);a(151);function ee(){var e=Object(m.c)(k),t=Object(m.c)(x),a=Object(m.b)();return r.a.createElement("div",{id:"message",className:Z()("alert",{"alert-success":"success"===t,"alert-danger":"error"===t})},e&&r.a.createElement("button",{onClick:function(){a(S())},className:"close"},r.a.createElement("span",null,"\xd7")),e)}var te=function(){var e=Object(m.b)(),t=Object(m.c)(v);return Object(n.useEffect)((function(){localStorage.getItem("usertoken")&&(z(localStorage.getItem("usertoken")),t.firstName?F.a.get("https://glacial-fortress-07261.herokuapp.com/users/validateToken").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors&&(localStorage.removeItem("usertoken"),e(C({text:t.errors.tokenExpired,type:"error"})))})):F.a.get("https://glacial-fortress-07261.herokuapp.com/users/profile").then((function(e){return e.data})).catch((function(e){console.warn(e)})).then((function(t){t.errors?(localStorage.removeItem("usertoken"),e(C({text:t.errors.tokenExpired,type:"error"}))):e(g(t))})))}),[]),r.a.createElement(A.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(ee,null),r.a.createElement(D.a,{exact:!0,path:"/",component:H}),r.a.createElement(D.a,{path:"/register",component:K}),r.a.createElement(D.a,{path:"/login",component:G}),r.a.createElement(D.a,{path:"/profile",component:J}),r.a.createElement(D.a,{path:"/posts",component:X}),r.a.createElement(D.a,{path:"/messenger",component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=Object(d.b)({name:"post",initialState:{posts:[]},reducers:{addPost:function(e,t){var a={postHeader:t.payload.header,postContent:t.payload.text,postCreator:t.payload.creator,created:Date.now(),postId:_.a.generate()};e.posts.push(a)},removePost:function(e,t){var a=e.posts.indexOf((function(e){return e.postId===t.payload.postId}));e.posts.splice(a,1)}}}),ne=ae.actions,re=(ne.addPost,ne.removePost,ae.reducer),oe=Object(d.a)({reducer:{auth:y,flashMessage:I,post:re}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:oe},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a.p+"static/media/Landschaft.dcdcfa38.jpg"},85:function(e,t,a){e.exports=a(153)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.dbb249cb.chunk.js.map