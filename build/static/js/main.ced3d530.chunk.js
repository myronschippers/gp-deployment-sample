(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(80)},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(40),c=a.n(s),l=a(14),o=a(7),i=a(43),u=(a(54),Object(l.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},d=Object(l.c)({errors:u,loginMode:m,user:p}),E=a(5),h=a.n(E),b=a(6),g=a(22),f=a.n(g),v=h.a.mark(y),O=h.a.mark(w),N=h.a.mark(R);function y(e){var t;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,f.a.post("api/user/login",e.payload,t);case 6:return a.next=8,Object(b.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(b.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(b.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}},v,null,[[0,10]])}function w(e){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,f.a.post("api/user/logout",t);case 4:return e.next=6,Object(b.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},O,null,[[0,8]])}function R(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("LOGIN",y);case 2:return e.next=4,Object(b.c)("LOGOUT",w);case 4:case"end":return e.stop()}},N)}var j=R,_=h.a.mark(T),I=h.a.mark(S);function T(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,f.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(b.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(b.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(b.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},_,null,[[0,11]])}function S(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("REGISTER",T);case 2:case"end":return e.stop()}},I)}var x=S,C=h.a.mark(k),L=h.a.mark(G);function k(){var e,t;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,f.a.get("api/user",e);case 4:return t=a.sent,a.next=7,Object(b.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}},C,null,[[0,9]])}function G(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("FETCH_USER",k);case 2:case"end":return e.stop()}},L)}var A=G,F=h.a.mark(D);function D(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([j(),x(),A()]);case 2:case"end":return e.stop()}},F)}var U=a(15),M=a(16),P=a(18),q=a(17),z=a(19),H=a(20),W=a(21),B=Object(o.b)()(function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),J=(a(74),function(e){return{store:e}}),V=Object(o.b)(J)(function(e){var t="/login";return e.store.user.id&&(t="/admin"),r.a.createElement("div",{className:"nav"},r.a.createElement(H.b,{to:"/"},r.a.createElement("h2",{className:"nav-title"},"Prime Solo Project")),r.a.createElement("div",{className:"nav-right"},r.a.createElement(H.b,{className:"nav-link",to:t},e.store.user.id?"Welcome":"Login / Register"),e.store.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H.b,{className:"nav-link",to:"/info"},"Info Page"),r.a.createElement(B,{className:"nav-link"})),r.a.createElement(H.b,{className:"nav-link",to:"/about"},"About")))}),X=(a(76),function(){return r.a.createElement("footer",null,"\xa9 Prime Digital Academy")}),Y=a(44),K=a(28),Q=(a(77),function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(q.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(K.a)({},e,t.target.value))}},a}return Object(z.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.store.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.store.errors.loginMessage),r.a.createElement("form",{className:"loginPanel",onSubmit:this.login},r.a.createElement("h1",{className:"loginPanel-hd"},"Login"),r.a.createElement("div",{className:"loginPanel-fields"},r.a.createElement("label",{className:"fieldSet",htmlFor:"username"},r.a.createElement("span",{className:"fieldSet-label"},"Username:"),r.a.createElement("input",{className:"fieldSet-input",type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")})),r.a.createElement("label",{className:"fieldSet",htmlFor:"password"},r.a.createElement("span",{className:"fieldSet-label"},"Password:"),r.a.createElement("input",{className:"fieldSet-input",type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",{className:"loginPanel-action"},r.a.createElement("input",{className:"btn btn_sizeMin",type:"submit",name:"submit",value:"Log In"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")))}}]),t}(n.Component)),Z=Object(o.b)(J)(Q),$=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(q.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(K.a)({},e,t.target.value))}},a}return Object(z.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.store.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.store.errors.registrationMessage),r.a.createElement("form",{className:"loginPanel",onSubmit:this.registerUser},r.a.createElement("h1",{className:"loginPanel-hd"},"Register User"),r.a.createElement("div",{className:"loginPanel-fields"},r.a.createElement("label",{className:"fieldSet",htmlFor:"username"},r.a.createElement("span",{className:"fieldSet-label"},"Username:"),r.a.createElement("input",{className:"fieldSet-input",type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")})),r.a.createElement("label",{className:"fieldSet",htmlFor:"password"},r.a.createElement("span",{className:"fieldSet-label"},"Password:"),r.a.createElement("input",{className:"fieldSet-input",type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",{className:"loginPanel-action"},r.a.createElement("input",{className:"btn btn_sizeMin",type:"submit",name:"submit",value:"Register"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(n.Component),ee=Object(o.b)(J)($),te=Object(o.b)(J)(function(e){var t,a=e.component,n=e.store,s=e.redirect,c=Object(Y.a)(e,["component","store","redirect"]),l=n.user.id&&s;return t=n.user.id?a:"login"===n.loginMode?Z:ee,r.a.createElement(r.a.Fragment,null,l?r.a.createElement(W.a,{exact:!0,from:c.path,to:s}):r.a.createElement(W.b,Object.assign({},c,{component:t})))}),ae=(a(78),function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(q.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(e){a.props.history.push("/login")},a}return Object(z.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-col grid-col_8"},r.a.createElement("div",{className:"vr vr_2x"},r.a.createElement("img",{src:"/images/hanging-in-there.jpg",alt:"Teddy Bear hanging on clothes line."})),r.a.createElement("h2",null,"Welcome to My App!"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat libero nec mauris dignissim accumsan. Sed malesuada suscipit erat, eu vulputate ante aliquam ut. Nunc vel semper ante, nec sodales nibh. Morbi molestie viverra placerat. Sed massa dolor, vehicula ut porttitor a, luctus vitae risus. Sed sed rutrum enim. Sed quis dolor accumsan, pellentesque dolor non, dictum lacus. Phasellus dictum luctus dolor et feugiat. Vestibulum egestas orci in feugiat venenatis. Integer congue metus et metus fringilla, ut ultricies massa rhoncus. Etiam id volutpat mi."),r.a.createElement("p",null,"Etiam sit amet placerat nulla. Suspendisse accumsan eros sed faucibus venenatis. Cras at mi et eros euismod vestibulum eu sit amet ex. Cras pretium porttitor libero vitae commodo. Duis fringilla lorem vitae pretium accumsan. Aenean mattis eu libero vitae pellentesque. Donec fermentum semper mauris, sed ullamcorper risus consequat sed. Maecenas quis tempus libero.")),r.a.createElement("div",{className:"grid-col grid-col_4"},r.a.createElement("h3",null,"Mastering the App"),r.a.createElement("ul",null,r.a.createElement("li",null,"Do this thing."),r.a.createElement("li",null,'Try out feature "X".'),r.a.createElement("li",null,"Tell a friend about your experience.")),r.a.createElement("p",null,"Login to access your own account."),r.a.createElement("button",{className:"btn btn_sizeFull",onClick:this.onLogin},"Login")))}}]),t}(n.Component)),ne=Object(o.b)(J)(ae),re=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"This about page is for anyone to read!")))},se=Object(o.b)(J)(function(e){return r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Welcome, ",e.store.user.username,"!"),r.a.createElement("p",null,"Your ID is: ",e.store.user.id),r.a.createElement(B,{className:"log-in"}))}),ce=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Info Page"))},le=(a(79),function(e){function t(){return Object(U.a)(this,t),Object(P.a)(this,Object(q.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(H.a,null,r.a.createElement("div",{className:"site-hd"},r.a.createElement(V,null)),r.a.createElement("div",{className:"site-bd"},r.a.createElement("div",{className:"container"},r.a.createElement(W.d,null,r.a.createElement(W.b,{exact:!0,path:"/",component:ne}),r.a.createElement(te,{exact:!0,path:"/login",redirect:"/admin",component:Z}),r.a.createElement(W.b,{exact:!0,path:"/about",component:re}),r.a.createElement(te,{exact:!0,path:"/admin",component:se}),r.a.createElement(te,{exact:!0,path:"/info",component:ce}),r.a.createElement(W.b,{render:function(){return r.a.createElement("h1",null,"404")}})))),r.a.createElement("div",{className:"site-ft"},r.a.createElement(X,null)))}}]),t}(n.Component)),oe=Object(o.b)(J)(le),ie=Object(i.a)(),ue=[ie],me=Object(l.e)(d,l.a.apply(void 0,ue));ie.run(D),c.a.render(r.a.createElement(o.a,{store:me},r.a.createElement(oe,null)),document.getElementById("react-root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ced3d530.chunk.js.map