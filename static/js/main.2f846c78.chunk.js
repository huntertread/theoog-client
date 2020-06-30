(this["webpackJsonpwzrd-client"]=this["webpackJsonpwzrd-client"]||[]).push([[0],{35:function(e,t,a){e.exports=a(72)},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),s=a.n(o),l=(a(40),a(15)),c=a.n(l),i=a(29),u=a(7),m=a(10),d=a(11),p=a(6),h=a(13),g=a(12),E=a(4),f=a.n(E),v=(a(59),function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).state={username:"",password:"",validationMessage:""},r.handleChange=r.handleChange.bind(Object(p.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(p.a)(r)),r}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f()({method:"post",url:"https://api.theoog.net/login",data:{username:this.state.username.toLowerCase(),password:this.state.password}}).then((function(e){if(void 0===e.data[0])t.setState({validationMessage:"**username or password is incorrect"});else if(e.data[0]){(function(){var t=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.setUser(e.data[0].username,e.data[1].id);case 2:return t.next=4,this.props.getUserUrls();case 4:return t.next=6,this.props.setLogIn();case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}})()()}else t.setState({validationMessage:"**incorrect username or password"})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return!1===this.props.loggedIn?n.a.createElement("div",{className:"login-container"},n.a.createElement("form",{className:"login-form-content"},n.a.createElement("input",{name:"username",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleChange}),n.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),n.a.createElement("button",{onClick:this.handleSubmit},"log in")),n.a.createElement("p",{className:"unpw-validation-error"},this.state.validationMessage)):!0===this.props.loggedIn?n.a.createElement("div",{className:"logout-container"},n.a.createElement("button",{onClick:function(){return e.props.setLogIn()}},"log out")):void 0}}]),a}(r.Component)),U=(a(60),function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).state={username:"",password:"",passconfirm:"",email:"",emailconfirm:"",unError:"",emailError:"",pwError:""},r.handleChange=r.handleChange.bind(Object(p.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(p.a)(r)),r}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.get("https://api.theoog.net/getExistingUser/".concat(this.state.username.toLowerCase())).then((function(e){void 0===e.data[0]?t.state.password===t.state.passconfirm?t.state.email===t.state.emailconfirm?f.a.post("https://api.theoog.net/register",{username:t.state.username.toLowerCase(),password:t.state.password,email:t.state.email}).then((function(e){t.props.setUser(e.data[0].username,e.data[0].id),t.props.setLogIn()})).catch((function(e){console.error(e)})):(t.setState({emailError:"**emails do not match"}),t.setState({pwError:""})):(t.setState({pwError:"**passwords do not match"}),t.setState({unError:""})):t.setState({unError:"**sorry, ".concat(t.state.username," is taken")})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return!0===this.props.registered?n.a.createElement("button",{className:"register-button",onClick:this.props.setRegistered},"register"):!1===this.props.registered?n.a.createElement("div",{className:"registration-form-container"},n.a.createElement("form",{className:"registration-form-content"},n.a.createElement("h2",null,"REGISTER"),n.a.createElement("input",{name:"username",type:"text",placeholder:"desired username",value:this.state.username,onChange:this.handleChange}),n.a.createElement("p",{className:"reg-error"},this.state.unError),n.a.createElement("input",{name:"email",type:"text",placeholder:"email",value:this.state.email,onChange:this.handleChange}),n.a.createElement("input",{name:"emailconfirm",type:"text",placeholder:"confirm email",value:this.state.emailconfirm,onChange:this.handleChange}),n.a.createElement("p",{className:"reg-error"},this.state.emailError),n.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),n.a.createElement("input",{name:"passconfirm",type:"password",placeholder:"confirm password",value:this.state.passconfirm,onChange:this.handleChange}),n.a.createElement("p",{className:"reg-error"},this.state.pwError),n.a.createElement("div",{className:"register-button-container"},n.a.createElement("button",{className:"registration-button",onClick:this.handleSubmit},"submit"),n.a.createElement("button",{className:"registration-button",onClick:this.props.setRegistered},"cancel")))):void 0}}]),a}(r.Component)),b=a(8),S=a(1),N=function(e){return e.userState},O=Object(S.a)([N],(function(e){return e.loggedIn})),y=Object(S.a)([N],(function(e){return e.username})),R=Object(S.a)([N],(function(e){return e.userid})),w=Object(S.a)([N],(function(e){return e.registered})),_=Object(S.a)([N],(function(e){return e.mobileNavOpen})),T=function(e){return{type:"SET_ORIGINAL_URL",payload:e}},C=function(e){return{type:"SET_CREATE_ERROR",payload:e}},I=function(e){return e.urlState},j=Object(S.a)([I],(function(e){return e.anonUrlSubmit})),L=Object(S.a)([I],(function(e){return e.urlError})),A=Object(S.a)([I],(function(e){return e.anonUrlReturn})),k=Object(S.a)([I],(function(e){return e.urls})),M=Object(S.a)([I],(function(e){return e.owner})),x=Object(S.a)([I],(function(e){return e.originalUrl})),D=Object(S.a)([I],(function(e){return e.validationError})),G=(a(66),Object(b.b)((function(e){return{selectUserId:R(e),selectOriginalUrl:x(e),selectCreateError:D(e)}}),(function(e){return{setOriginalUrl:function(t){return e(T(t))},setCreateError:function(t){return e(C(t))}}}))((function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"create-url-container"},n.a.createElement("form",null,n.a.createElement("input",{type:"text",name:"originalurl",placeholder:"paste your url here, http or https required",value:e.selectOriginalUrl,onChange:function(t){e.setOriginalUrl(t.target.value)}}),n.a.createElement("button",{onClick:function(t){t.preventDefault(),!function(e){var t=RegExp("((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+").test(e);return!0===t&&t}(e.selectOriginalUrl)?e.setCreateError("**invalid url, must use http or https"):f.a.post("https://api.theoog.net/",{owner:e.selectUserId,originalurl:e.selectOriginalUrl}).then((function(t){e.setCreateError(""),e.getUserUrls()})).catch((function(e){console.error(e)}))}},"shorten"))),n.a.createElement("p",{className:"create-url-error"},e.selectCreateError))}))),B=(a(67),a(68),function(e){var t=e.urlproperties;return n.a.createElement("div",{className:"individual-url"},n.a.createElement("div",{className:"original-url-container"},n.a.createElement("p",null,"original url: ",n.a.createElement("em",null,t.originalurl))),n.a.createElement("div",{className:"short-url-container"},n.a.createElement("p",null,"short url: ",n.a.createElement("strong",null,"theoog.net/#",t.id)),n.a.createElement("button",{className:"copy-button",onClick:function(){return navigator.clipboard.writeText("theoog.net/#".concat(t.id))}},"copy to clipboard")))}),W=function(e){var t=e.urls;return n.a.createElement("div",{className:"existing-url-container"},t.map((function(e,t){return n.a.createElement(B,{key:t,urlproperties:e})})))},q=a(18),z=a.n(q),J=(a(69),Object(b.b)((function(e){return{selectUserLogInState:O(e),selectUserName:y(e),selectUserId:R(e),selectRegisteredState:w(e),selectMobileNavState:_(e),selectAnonUrlSubmit:j(e),selectUrlError:L(e),selectAnonUrlReturn:A(e),selectUserUrls:k(e),selectUrlOwner:M(e),selectOriginalUrl:x(e),selectCreateError:D(e)}}),(function(e){return{setLoggedInState:function(t){return e({type:"SET_LOGGED_IN_STATE",payload:t})},setUserName:function(t){return e({type:"SET_USER_NAME",payload:t})},setUserId:function(t){return e({type:"SET_USER_ID",payload:t})},setRegisteredState:function(t){return e({type:"SET_REGISTERED_STATE",payload:t})},setMobileNavState:function(t){return e({type:"SET_MOBILE_NAV_STATE",payload:t})},setAnonUrlSubmit:function(t){return e({type:"SET_ANON_URL_SUBMIT",payload:t})},setUrlError:function(t){return e({type:"SET_URL_ERROR",payload:t})},setAnonUrlReturn:function(t){return e({type:"SET_ANON_URL_RETURN",payload:t})},setUserUrls:function(t){return e({type:"SET_USER_URLS",paylaod:t})},setUrlOwner:function(t){return e({type:"SET_URL_OWNER",payload:t})},setOriginalUrl:function(t){return e(T(t))},setCreateError:function(t){return e(C(t))}}}))((function(e){var t=function(){e.setLoggedInState(!e.selectUserLogInState)},a=function(){!1===e.selectMobileNavState&&e.setMobileNavState(!e.selectMobileNavState),e.setRegisteredState(!e.selectRegisteredState)},r=function(t,a){e.setUserName("".concat(t)),e.setUserId("".concat(a)),console.log(e.selectUserName),console.log(e.selectUserId)},o=function(){f.a.get("https://api.theoog.net/getallurls/".concat(e.selectUserId)).then((function(t){e.setUserUrls(t.data.reverse())})).catch((function(e){console.error(e)}))},s=function(t){e.setAnonUrlSubmit(t.target.value)},l=function(){e.setMobileNavState(e.selectMobileNavState)},c=function(t){t.preventDefault(),!function(e){var t=RegExp("((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+").test(e);return!0===t&&t}(e.selectAnonUrlSubmit)?e.setUrlError("**invalid url, must include http:// or https://"):f.a.post("https://api.theoog.net/",{owner:e.selectUserid,originalurl:e.selectAnonUrlSubmit}).then((function(t){e.setAnonUrlReturn(t.data[0]),e.setUrlError("")}))};return n.a.createElement("div",{className:"App"},!0===e.selectUserLogInState?n.a.createElement("div",{className:"logged-in-content","test-data":"logged-in-content"},n.a.createElement("div",{className:"logged-in-header"},n.a.createElement(v,{setLogIn:t,loggedIn:e.selectUserLogInState,setUser:r,getUserUrls:o,activeUserName:e.selectUserName})),n.a.createElement(G,{getUserUrls:o,username:e.selectUserName,userid:e.selectUserId}),n.a.createElement("h1",null,e.selectUserName,"'s urls:"),n.a.createElement(W,{urls:e.selectUserUrls})):function(){var i=n.a.createElement("div",null,n.a.createElement("p",null,"You wont have access to this URL if you make another or navigate away. Make sure to copy it now!"),n.a.createElement("div",{className:"original-url-container"},n.a.createElement("p",null,"original url: ",n.a.createElement("em",null,e.selectAnonUrlReturn.originalurl))),n.a.createElement("div",{className:"short-url-container"},n.a.createElement("p",null,"your short url: ",n.a.createElement("strong",null,"theoog.net/#",e.selectAnonUrlReturn.id)),n.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText("theoog.net/#".concat(e.selectAnonUrlReturn.id))}},"copy to clipboard")));return n.a.createElement("div",{className:"logged-out-content"},n.a.createElement("div",{className:"logged-out-header"},n.a.createElement(z.a,{minDeviceWidth:500},n.a.createElement("div",{className:"header-login-register"},n.a.createElement(U,{setRegistered:a,registered:e.selectRegisteredState,setLogIn:t,setUser:r}),n.a.createElement(v,{setLogIn:t,loggedIn:e.selectUserLogInState,setUser:r,getUserUrls:o,activeUserName:e.selectUserName}))),n.a.createElement(z.a,{maxDeviceWidth:500},!0===e.selectMobileNavState?n.a.createElement("div",{className:"mobile-nav-open"},n.a.createElement("div",{className:"mobile-nav-icon-container"},n.a.createElement("i",{className:"fa fa-close",onClick:l})),n.a.createElement(U,{setRegistered:a,registered:e.selectRegisteredState,setLogIn:t,setUser:r}),n.a.createElement(v,{setLogIn:t,loggedIn:e.selectUserLogInState,setUser:r,getUserUrls:o,activeUserName:e.selectUserName})):n.a.createElement("i",{className:"fa fa-bars",onClick:l}))),n.a.createElement("img",{alt:"",src:"./images/the_oog.png"}),n.a.createElement("p",null,"The Oog is a URL shortener"),n.a.createElement("p",null,"Try it out below or ",n.a.createElement("span",{className:"create-an-account-text",onClick:a},"create an account")," to have permanent access to your shortened URLs"),n.a.createElement("form",null,n.a.createElement("input",{name:"anonUrlSubmit",className:"long-input",type:"text",placeholder:"paste your url here, http or https required",value:e.selectAnonUrlSubmit,onChange:s}),n.a.createElement("button",{onClick:c},"shorten")),n.a.createElement("p",{className:"url-validation-error"},e.selectUrlError),0!==e.selectAnonUrlReturn.length?i:null)}())}))),V=a(5),Y=a(34),$=a(31),F=a.n($),H=a(2),K={loggedIn:!1,username:"anon",userid:"1",registered:!0,mobileNavOpen:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_IN_STATE":return Object(H.a)({},e,{loggedIn:t.payload});case"SET_USER_NAME":return Object(H.a)({},e,{username:t.payload});case"SET_USER_ID":return Object(H.a)({},e,{userid:t.payload});case"SET_REGISTERED_STATE":return Object(H.a)({},e,{registered:t.payload});case"SET_MOBILE_NAV_STATE":return Object(H.a)({},e,{mobileNavOpen:t.payload});default:return e}},Q={anonUrlSubmit:"",urlError:"",anonUrlReturn:[],urls:[],owner:"1",originalurl:"",validationError:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ANON_URL_SUBMIT":return Object(H.a)({},e,{anonUrlSubmit:t.payload});case"SET_URL_ERROR":return Object(H.a)({},e,{urlError:t.payload});case"SET_ANON_URL_RETURN":return Object(H.a)({},e,{anonUrlReturn:t.payload});case"SET_USER_URLS":return Object(H.a)({},e,{urls:t.payload});case"SET_URL_OWNER":return Object(H.a)({},e,{owner:t.payload});case"SET_ORIGINAL_URL":return Object(H.a)({},e,{originalurl:t.payload});case"SET_CREATE_ERROR":return Object(H.a)({},e,{validationError:t.payload});default:return e}},Z={key:"root",storage:F.a},ee=Object(V.c)({userState:P,urlState:X}),te=Object(Y.a)(Z,ee),ae=a(32),re=a.n(ae),ne=[a(33).a];ne.push(re.a);var oe=Object(V.d)(te,V.a.apply(void 0,ne)),se=function(){return n.a.createElement("div",null,""!==window.location.hash?(function(){var e=window.location.hash.substring(1);f.a.get("https://api.theoog.net/".concat(e)).then((function(e){window.location.href=e.data[0].originalurl})).catch((function(e){console.error(e)}))}(),n.a.createElement("div",{id:"redirect-message"},"you are being redirected")):""===window.location.hash?n.a.createElement("div",null,n.a.createElement(b.a,{store:oe},n.a.createElement(J,null))):void 0)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2f846c78.chunk.js.map