(this.webpackJsonpsunshield=this.webpackJsonpsunshield||[]).push([[0],[,,function(e,t,n){e.exports={Wrapper:"Conditions_Wrapper__1I6QR",Small:"Conditions_Small__2U_6W",Loader:"Conditions_Loader__2w4FE",spin:"Conditions_spin__Q8Hhe"}},function(e,t,n){e.exports={TextInput:"UV_TextInput__19xt9",Button:"UV_Button__3__rh"}},,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l),c=(n(11),function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),s=n(1),i=n(2),u=n.n(i),m=function(e){return r.a.createElement("div",{className:u.a.Wrapper},e.error&&r.a.createElement("small",{className:u.a.Small},"Please enter a valid city."),e.loading&&r.a.createElement("div",{className:u.a.Loader},"Loading..."),e.responseObj.data?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,e.responseObj.data[0].city_name)),r.a.createElement("p",null,"The UV index is currently ",Math.round(e.responseObj.data[0].uv),"."),r.a.createElement("p",null,(t=e.responseObj.data[0].uv)>="0"&&t<="2"?"No need to wear sunscreen!":t>="3"&&t<="7"?"Wear sunscreen and a hat!":"Stay inside or in the shade! Wear a hat, sunglasses, and sunscreen!")):null);var t},d=n(3),p=n.n(d),h=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],d=Object(a.useState)(!1),h=Object(s.a)(d,2),b=h[0],E=h[1],f=Object(a.useState)(!1),_=Object(s.a)(f,2),v=_[0],g=_[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Find the UV index"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),0===i.length)return E(!0);E(!1),l({}),g(!0);var t=encodeURIComponent(i);fetch("https://api.weatherbit.io/v2.0/current?city=".concat(t,"&key=1bf11d2e2532422c9a82abac3344a2ec")).then((function(e){return e.json()})).then((function(e){if(e.error)throw new Error;l(e),g(!1)})).catch((function(e){E(!0),g(!1),console.log(e.message)}))}},r.a.createElement("input",{type:"text",placeholder:"Enter city",maxLength:"50",className:p.a.textInput,value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{className:p.a.Button,type:"submit"},"Get UV")),r.a.createElement(m,{responseObj:n,error:b,loading:v}))};n(12);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Sun Shield")),r.a.createElement("main",null,r.a.createElement(h,null)),r.a.createElement("footer",null,"Made by a sunscreen junkie ",r.a.createElement(c,{symbol:"\ud83e\uddf4",label:"sunscreen"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1f277bf2.chunk.js.map