(this.webpackJsonpsunshield=this.webpackJsonpsunshield||[]).push([[0],[,,function(e,n,t){e.exports={Wrapper:"Conditions_Wrapper__1I6QR",Small:"Conditions_Small__2U_6W",Loader:"Conditions_Loader__2w4FE",spin:"Conditions_spin__Q8Hhe"}},function(e,n,t){e.exports={TextInput:"UV_TextInput__19xt9",Button:"UV_Button__3__rh"}},,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(5),o=t.n(l),c=(t(11),function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),s=t(1),i=t(2),u=t.n(i),m=function(e){return r.a.createElement("div",{className:u.a.Wrapper},e.error&&r.a.createElement("small",{className:u.a.Small},"Please enter a valid city."),e.loading&&r.a.createElement("div",{className:u.a.Loader},"Loading..."),e.responseObj.location?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,e.responseObj.location.name)),r.a.createElement("p",null,"The UV index is currently ",e.responseObj.current.uv_index,"."),r.a.createElement("p",null,(n=e.responseObj.current.uv_index)>="0"&&n<="2"?"No need to wear sunscreen!":n>="3"&&n<="7"?"Wear sunscreen and a hat!":"Stay inside or in the shade! Wear a hat, sunglasses, and sunscreen!")):null);var n},d=t(3),p=t.n(d),h=function(){var e=Object(a.useState)({}),n=Object(s.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],d=Object(a.useState)(!1),h=Object(s.a)(d,2),E=h[0],b=h[1],f=Object(a.useState)(!1),_=Object(s.a)(f,2),v=_[0],g=_[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Find the UV index"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),0===i.length)return b(!0);b(!1),l({}),g(!0);var n=encodeURIComponent(i);fetch("http://api.weatherstack.com/current?access_key=".concat("8f950f4d94c4eafe896131015bd98d2a","&query=").concat(n)).then((function(e){return e.json()})).then((function(e){if(!e.location)throw new Error;l(e),g(!1)})).catch((function(e){b(!0),g(!1),console.log(e.message)}))}},r.a.createElement("input",{type:"text",placeholder:"Enter city",maxLength:"50",className:p.a.textInput,value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{className:p.a.Button,type:"submit"},"Get UV")),r.a.createElement(m,{responseObj:t,error:E,loading:v}))};t(12);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Sun Shield")),r.a.createElement("main",null,r.a.createElement(h,null)),r.a.createElement("footer",null,"Made by a sunscreen junkie ",r.a.createElement(c,{symbol:"\ud83e\uddf4",label:"sunscreen"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.a8240c5e.chunk.js.map