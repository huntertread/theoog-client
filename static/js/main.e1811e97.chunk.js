(this["webpackJsonpwzrd-client"]=this["webpackJsonpwzrd-client"]||[]).push([[0],{21:function(e,t,a){e.exports=a(53)},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),i=(a(26),a(8)),l=a(4),c=a(5),u=a(1),h=a(7),m=a(6),d=a(9),p=a.n(d),g=a(3),v=a.n(g);a(46);v.a.defaults.baseurl="https://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333";var b=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",validationMessage:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.get("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/getExistingUser/".concat(this.state.username.toLowerCase())).then((function(e){void 0===e.data[0]?t.setState({validationMessage:"**username or password is incorrect"}):e.data[0].password===p()(t.state.password)?(t.props.setUser(e.data[0].username,e.data[0].id),t.props.setLogIn(),t.props.getAllUrls()):t.setState({validationMessage:"**incorrect username or password"})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return!1===this.props.loggedIn?r.a.createElement("div",{className:"login-container"},r.a.createElement("input",{name:"username",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"log in"),r.a.createElement("p",{className:"unpw-validation-error"},this.state.validationMessage)):!0===this.props.loggedIn?r.a.createElement("div",{className:"logout-container"},r.a.createElement("p",null,"hey there, ".concat(this.props.activeUserName,"!")),r.a.createElement("button",{onClick:function(){return e.props.setLogIn()}},"log out")):void 0}}]),a}(n.Component),E=(a(47),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",passconfirm:"",email:"",emailconfirm:"",unError:"",emailError:"",pwError:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.get("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/getExistingUser/".concat(this.state.username.toLowerCase())).then((function(e){void 0===e.data[0]?t.state.password===t.state.passconfirm?t.state.email===t.state.emailconfirm?v.a.post("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/register",{username:t.state.username.toLowerCase(),password:p()(t.state.password),email:t.state.email}).then((function(e){t.props.setUser(e.data[0].username,e.data[0].id),t.props.setLogIn()})).catch((function(e){console.error(e)})):(t.setState({emailError:"**emails do not match"}),t.setState({pwError:""})):(t.setState({pwError:"**passwords do not match"}),t.setState({unError:""})):t.setState({unError:"**sorry, ".concat(t.state.username," is taken")})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return!0===this.props.registered?r.a.createElement("button",{className:"register-button",onClick:this.props.setRegistered},"register"):!1===this.props.registered?r.a.createElement("div",{className:"registration-form-container"},r.a.createElement("form",{className:"registration-form-content"},r.a.createElement("h2",null,"REGISTER"),r.a.createElement("input",{name:"username",type:"text",placeholder:"desired username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("p",{className:"reg-error"},this.state.unError),r.a.createElement("input",{name:"email",type:"text",placeholder:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("input",{name:"emailconfirm",type:"text",placeholder:"confirm email",value:this.state.emailconfirm,onChange:this.handleChange}),r.a.createElement("p",{className:"reg-error"},this.state.emailError),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("input",{name:"passconfirm",type:"password",placeholder:"confirm password",value:this.state.passconfirm,onChange:this.handleChange}),r.a.createElement("p",{className:"reg-error"},this.state.pwError),r.a.createElement("button",{className:"registration-button",onClick:this.handleSubmit},"submit"),r.a.createElement("button",{className:"registration-button",onClick:this.props.setRegistered},"cancel"))):void 0}}]),a}(n.Component)),f=(a(48),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={owner:n.props.userid,originalurl:"",urlnickname:"",validationError:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.checkValidUrl=n.checkValidUrl.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"checkValidUrl",value:function(e){var t=RegExp("((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+").test(e);return!0===t&&t}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.checkValidUrl(this.state.originalurl)?v.a.post("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/",{owner:this.state.owner,originalurl:this.state.originalurl}).then((function(e){t.setState({validationError:""}),t.props.getAllUrls()})).catch((function(e){console.error(e)})):this.setState({validationError:"**invalid url, must use http or https"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"create-url-container"},r.a.createElement("input",{type:"text",name:"originalurl",placeholder:"paste your url here, http or https required",value:this.state.originalurl,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"shorten")),r.a.createElement("p",{className:"create-url-error"},this.state.validationError))}}]),a}(n.Component)),w=(a(49),a(50),function(e){var t=e.urlproperties;return r.a.createElement("div",{className:"individual-url"},r.a.createElement("p",null,"original url: ",r.a.createElement("em",null,t.originalurl)),r.a.createElement("p",null,"short url: ",r.a.createElement("strong",null,"theoog.net/#",t.id)),r.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText("theoog.net/#".concat(t.id))}},"copy to clipboard"))}),k=function(e){var t=e.urls;return r.a.createElement("div",{className:"existing-url-container"},t.map((function(e,t){return r.a.createElement(w,{key:t,urlproperties:e})})))},O=(a(51),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={isOpen:!1},e.setIsOpen=e.setIsOpen.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"setIsOpen",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return!1===this.state.isOpen?r.a.createElement("div",{className:"footer-container"},r.a.createElement("button",{onClick:this.setIsOpen},"about")):!0===this.state.isOpen?r.a.createElement("div",{className:"footer-container"},r.a.createElement("button",{onClick:this.setIsOpen},"close"),r.a.createElement("h3",null,"The Oog is a personal project developed by Hunter Treadaway"),r.a.createElement("h3",null,"Learn more about this project and Hunter's other work by visiting ",r.a.createElement("a",{href:"https://huntertread.com/#project-section",target:"blank"},"huntertread.com")),r.a.createElement("h3",null,"Get in touch with Hunter at huntertread@gmail.com")):void 0}}]),a}(n.Component)),U=(a(52),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={loggedIn:!1,username:"anon",userid:"1",registered:!0,createdAnon:!1,anonUrlSubmit:"",urlError:"",anonUrlReturn:[],urls:[]},e.setLogIn=e.setLogIn.bind(Object(u.a)(e)),e.setRegistered=e.setRegistered.bind(Object(u.a)(e)),e.setUser=e.setUser.bind(Object(u.a)(e)),e.getAllUrls=e.getAllUrls.bind(Object(u.a)(e)),e.submitAnon=e.submitAnon.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.hashUrl=e.hashUrl.bind(Object(u.a)(e)),e.getRedirect=e.getRedirect.bind(Object(u.a)(e)),e.checkValidUrl=e.checkValidUrl.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"setLogIn",value:function(){this.setState({loggedIn:!this.state.loggedIn})}},{key:"setRegistered",value:function(){this.setState({registered:!this.state.registered})}},{key:"setUser",value:function(e,t){this.setState({username:e,userid:t})}},{key:"getRedirect",value:function(){var e=window.location.hash.substring(1);v.a.get("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/".concat(e)).then((function(t){console.log(e),console.log(t.data),window.location.href=t.data[0].originalurl})).catch((function(e){console.error(e)}))}},{key:"getAllUrls",value:function(){var e=this;v.a.get("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/getallurls/".concat(this.state.userid)).then((function(t){e.setState({urls:t.data.reverse()})})).catch((function(e){console.error(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"hashUrl",value:function(e){return p()(e)}},{key:"checkValidUrl",value:function(e){var t=RegExp("((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+").test(e);return!0===t&&t}},{key:"submitAnon",value:function(e){var t=this;if(e.preventDefault(),this.checkValidUrl(this.state.anonUrlSubmit)){var a=this.hashUrl(this.state.anonUrlSubmit);v.a.post("http://ec2-54-151-33-195.us-west-1.compute.amazonaws.com:3333/",{owner:this.state.userid,originalurl:this.state.anonUrlSubmit,shorturl:a}).then((function(e){t.setState({anonUrlReturn:e.data[0]}),t.setState({urlError:""})}))}else this.setState({urlError:"**invalid url, must include http:// or https://"})}},{key:"componentDidMount",value:function(){""!==window.location.hash&&this.getRedirect()}},{key:"render",value:function(){var e,t=this;if(!0===this.state.loggedIn)e=r.a.createElement("div",{className:"logged-in-content"},r.a.createElement("div",{className:"logged-in-header"},r.a.createElement(b,{setLogIn:this.setLogIn,loggedIn:this.state.loggedIn,setUser:this.setUser,getAllUrls:this.getAllUrls,activeUserName:this.state.username})),r.a.createElement(f,{getAllUrls:this.getAllUrls,username:this.state.username,userid:this.state.userid}),r.a.createElement("h1",null,this.state.username,"'s urls:"),r.a.createElement(k,{urls:this.state.urls}));else if(!1===this.state.loggedIn){var a;0!==this.state.anonUrlReturn.length&&(a=r.a.createElement("div",null,r.a.createElement("p",null,"You wont have access to this URL if you make another or navigate away. Make sure to copy it now!"),r.a.createElement("p",null,"original url: ",this.state.anonUrlReturn.originalurl),r.a.createElement("p",null,"your short url: ",r.a.createElement("strong",null,"localhost:3000/#",this.state.anonUrlReturn.id)),r.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText("theoog.net/#".concat(t.state.anonUrlReturn.id))}},"copy to clipboard"))),e=r.a.createElement("div",{className:"logged-out-content"},r.a.createElement("div",{className:"logged-out-header"},r.a.createElement("div",{className:"header-logo"},r.a.createElement("p",null,"THE OOG")),r.a.createElement("div",{className:"header-login-register"},r.a.createElement(E,{setRegistered:this.setRegistered,registered:this.state.registered,setLogIn:this.setLogIn,setUser:this.setUser}),r.a.createElement(b,{setLogIn:this.setLogIn,loggedIn:this.state.loggedIn,setUser:this.setUser,getAllUrls:this.getAllUrls,activeUserName:this.state.username}))),r.a.createElement("img",{alt:"",src:"https://cdn1.vectorstock.com/i/1000x1000/36/85/caveman-with-club-vector-163685.jpg"}),r.a.createElement("p",null,"A URL shortener. Takes any URL and creates a shorter redirect."),r.a.createElement("p",null,"Try it out!"),r.a.createElement("form",null,r.a.createElement("input",{name:"anonUrlSubmit",className:"long-input",type:"text",placeholder:"paste your url here, http or https required",value:this.state.anonUrlSubmit,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.submitAnon},"shorten")),r.a.createElement("p",{className:"url-validation-error"},this.state.urlError),a)}return r.a.createElement("div",{className:"App"},e,r.a.createElement(O,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e1811e97.chunk.js.map