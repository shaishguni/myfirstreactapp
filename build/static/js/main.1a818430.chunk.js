(this.webpackJsonpday5=this.webpackJsonpday5||[]).push([[0],{39:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},45:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=(a(44),a(45),a(3)),s=a.n(l),i=a(12),m=a(7),u=a(8),p=a(10),h=a(9),d=a(14),f=a(38),b=a(17),v=a(13),E=a.n(v),y=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!=t.payload}))});case"ADD_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},N=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return g(e,t)}))}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=y.Consumer,j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(i.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=this.state.showContactInfo;return r.a.createElement(C,null,(function(n){var c=n.dispatch;return r.a.createElement("div",{className:"card card-body mb3",style:{cursor:"pointer"}},r.a.createElement("h4",null,t.name," ",r.a.createElement("i",{onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})},className:"fa fa-sort-down fa-lg"}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t.id,c),className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(d.b,{to:"contact/edit/".concat(t.id)},r.a.createElement("i",{className:"fa fa-pencil",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),a?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t.email),r.a.createElement("li",{className:"list-group-item"},t.phone)):null)}))}}]),a}(n.Component),k=a(15),w=function(e){var t=e.name;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"})))))))};w.protoTypes={branding:a.n(k).a.object.isRequired};var x=w,S=(a(69),a(18)),T=(a(32),a(37)),A=a.n(T),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.id,s=e.onChange,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a,className:"htmlFor"},t),r.a.createElement("input",{type:o,name:a,className:A()("form-control form-control-lg",{"is-invalid":i}),id:l,placeholder:c,value:n,onChange:s}),i&&r.a.createElement("div",{className:"invalid-feedback"},"This is incorrect"))},P=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",name:"",email:"",phone:"",errors:{}},e.onSubmits=function(){var t=Object(i.a)(s.a.mark((function t(a,n){var r,c,o,l,i,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=7;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 7:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 12:if(""!==o){t.next=15;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 15:return i={email:o,name:c,phone:l},t.next=18,E.a.post("https://jsonplaceholder.typicode.com/users",i);case 18:m=t.sent,a({type:"ADD_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/"),console.log(e.state);case 23:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mg-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmits.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,type:"text",onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",type:"number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement(D,{label:"email",name:"email",placeholder:"Enter Email",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement("input",{type:"submit",value:"Add Contact",name:"submit",className:"btn btn-danger btn-block"}))))}))}}]),a}(n.Component),q=a(1),_=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Bishworaj Poudel"),r.a.createElement("p",{className:"lead"},"Simple app that helps to manage the contact."),r.a.createElement("p",{className:"text-secondary"},"Version: 1.0.0"))},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry that page does not found."))},B=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(t){return e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state.todos;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement("li",null,t+1,". ",e.title)})))}}]),a}(n.Component),F=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",name:"",email:"",phone:"",errors:{}},e.onSubmits=function(){var t=Object(i.a)(s.a.mark((function t(a,n){var r,c,o,l,i,m,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=7;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 7:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 12:if(""!==o){t.next=15;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 15:return i={name:c,email:o,phone:l},m=e.props.match.params.id,t.next=19,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(m),i);case 19:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/"),console.log(e.state);case 24:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,console.log(a.data),this.setState({name:n.name,phone:n.phone,email:n.email});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mg-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmits.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,type:"text",onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",type:"text",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement(D,{label:"email",name:"email",placeholder:"Enter Email",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement("input",{type:"submit",value:"Update Contact",name:"submit",className:"btn btn-danger btn-block"}))))}))}}]),a}(n.Component);var L=function(){return r.a.createElement(N,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,{name:"Bishworaj"}),r.a.createElement("div",{className:"container"},r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/",component:j}),r.a.createElement(q.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(q.a,{exact:!0,path:"/about",component:_}),r.a.createElement(q.a,{exact:!0,path:"/test",component:B}),r.a.createElement(q.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(q.a,{component:I}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1a818430.chunk.js.map