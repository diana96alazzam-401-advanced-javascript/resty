(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),o=(a(15),a(1)),c=a(2),i=a(4),u=a(3),h=(a(16),a(17),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"RESTy"))}),m=a(5),d=a.n(m),p=a(9),E=(a(19),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),!n.state.url||!n.state.method){e.next=16;break}return a={url:n.state.url,method:n.state.method},"","",n.setState({request:a,url:"",method:""}),e.next=9,fetch(a.url);case 9:return r=e.sent,e.next=12,r.json();case 12:s=e.sent,n.props.handler(r,s),e.next=17;break;case 16:alert("missing information");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeURL=function(e){var t=e.target.value;n.setState({url:t})},n.handleChangeMethod=function(e){var t=e.target.id;n.setState({method:t})},n.props=e,n.state={url:"",method:"",request:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("span",null,"URL: "),r.a.createElement("input",{id:"textInput",name:"url",type:"text",onChange:this.handleChangeURL,className:this.state.url?this.state.url:""}),r.a.createElement("button",{type:"submit"},this.props.prompt)),r.a.createElement("label",{className:"methods"},r.a.createElement("span",{name:"method",className:"GET"===this.state.method?"active":"",id:"GET",onClick:this.handleChangeMethod},"GET"),r.a.createElement("span",{name:"method",className:"POST"===this.state.method?"active":"",id:"POST",onClick:this.handleChangeMethod},"POST"),r.a.createElement("span",{name:"method",className:"PUT"===this.state.method?"active":"",id:"PUT",onClick:this.handleChangeMethod},"PUT"),r.a.createElement("span",{name:"method",className:"DELETE"===this.state.method?"active":"",id:"DELETE",onClick:this.handleChangeMethod},"DELETE")))}}]),a}(r.a.Component)),f=a(6),v=a.n(f);a(20);var b=function(e){return r.a.createElement("div",{id:"resultsDiv"},r.a.createElement("section",{className:"results"},r.a.createElement("span",null,"Headers"),r.a.createElement(v.a,{id:"headersID",src:e.headers,theme:"shapeshifter:inverted"}),r.a.createElement("span",null,"Response"),r.a.createElement(v.a,{id:"responseID",src:e.response,theme:"shapeshifter:inverted"})))},g=(a(21),function(){return r.a.createElement("footer",null,"\xa9 2020 Diana Alazzam")}),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlerForm=function(e,t){var a={headers:e,response:t};n.setState({count:t.count,results:a})},n.state={count:0,results:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(E,{prompt:"GO!",handler:this.handlerForm}),r.a.createElement(b,{response:this.state.results,headers:this.state.results.headers})),r.a.createElement(g,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f724ee63.chunk.js.map