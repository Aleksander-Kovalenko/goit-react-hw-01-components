(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},11:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},17:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a,c,i,r,d,s,o,l,b,p,j,u=t(1),x=t.n(u),f=t(5),O=t.n(f),m=(t(17),t(0)),h=function(e){var n=e.text;return Object(m.jsx)("h1",{children:n})},y=t(6),g=t.n(y),v=t(2),w=t(3),k=w.a.div(a||(a=Object(v.a)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 320px;\n  margin: 50px auto 50px auto;\n  text-align: center;\n"]))),U=w.a.img(c||(c=Object(v.a)(["\n  display: block;\n  padding-top: 10px;\n  width: 100%;\n  border-radius: 50% 50%;\n"]))),J=w.a.span(i||(i=Object(v.a)(["\n  color: grey;\n  font-size: 18px;\n"]))),T=w.a.p(r||(r=Object(v.a)(["\n  font-size: 22px;\n  font-weight: bold;\n  color: black;\n"]))),N=w.a.ul(d||(d=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  list-style: none;\n"]))),S=w.a.li(s||(s=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid grey;\n  border-bottom: none;\n  background-color: beige;\n"]))),G=w.a.span(o||(o=Object(v.a)(["\n  color: black;\n"]))),L=function(e){var n=e.username,t=e.tag,a=e.location,c=e.avatar,i=e.stats;return Object(m.jsxs)(k,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(U,{src:c,alt:n}),Object(m.jsx)(T,{children:n}),Object(m.jsx)("p",{children:t}),Object(m.jsx)("p",{children:a})]}),Object(m.jsxs)(N,{children:[Object(m.jsxs)(S,{children:[Object(m.jsx)(J,{children:"Followers"}),Object(m.jsx)(G,{children:i.followers})]}),Object(m.jsxs)(S,{children:[Object(m.jsx)(J,{children:"Views"}),Object(m.jsx)(G,{children:i.views})]}),Object(m.jsxs)(S,{children:[Object(m.jsx)(J,{children:"Likes"}),Object(m.jsx)(G,{children:i.likes})]})]})]},t)},A=function(e){return e.events.map((function(e){return Object(m.jsx)(L,{username:e.username,tag:e.tag,location:e.location,avatar:e.avatar,stats:e.stats},e.tag)}))};L.propTypes={events:g.a.array};var C,D,M,P,z,R,F=w.a.li(l||(l=Object(v.a)(["\n  padding: 5px;\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  }\n"]))),K=w.a.span(b||(b=Object(v.a)(["\n  margin-right: 10px;\n  margin-left: 10px;\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border-radius: 50% 50%;\n  border: 1px solid #000;\n\n  background-color: ",";\n"])),(function(e){switch(e.isOnline){case!0:return"green";case!1:return"red";default:return"transparent"}})),W=w.a.img(p||(p=Object(v.a)(["\n  display: inline-block;\n  width: 100px;\n"]))),Y=w.a.p(j||(j=Object(v.a)(["\n  margin-left: 20px;\n  font-size: 18px;\n"]))),B=function(e){var n=e.id,t=e.isOnline,a=e.avatar,c=e.name;return Object(m.jsxs)(F,{children:[Object(m.jsx)(K,{isOnline:t}),Object(m.jsx)(W,{src:a,alt:c}),Object(m.jsx)(Y,{children:c})]},n)},E=w.a.ul(C||(C=Object(v.a)(["\n  margin: 0;\n  padding: 15px 0;\n  list-style-type: none;\n"]))),H=function(e){var n=e.events;return Object(m.jsx)(E,{children:n.map((function(e){return Object(m.jsx)(B,{isOnline:e.isOnline,avatar:e.avatar,name:e.name},e.id)}))})},I=w.a.tbody(D||(D=Object(v.a)(["\n  width: 50%;\n\n  &:nth-of-type(odd) {\n    background-color: #f2f2f2;\n  }\n"]))),X=function(e){var n=e.id,t=e.type,a=e.amount,c=e.currency;return Object(m.jsx)(I,{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:a}),Object(m.jsx)("td",{children:c.slice(0,3)})]})},n)},q=function(e){var n=e.events;return Object(m.jsxs)("table",{className:"transaction-history",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Currency"})]})}),n.map((function(e){return Object(m.jsx)(X,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))]})},V=w.a.li(M||(M=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),Q=w.a.span(P||(P=Object(v.a)(["\n  font-size: 18px;\n  font-width: 500px;\n"]))),Z=function(e){var n=e.id,t=e.label,a=e.percentage;return Object(m.jsxs)(V,{children:[Object(m.jsx)(Q,{children:t}),Object(m.jsx)("span",{children:a})]},n)},$=w.a.section(z||(z=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 250px;\n  border: 1px solid grey;\n"]))),_=w.a.ul(R||(R=Object(v.a)(["\n  margin: 0;\n  padding: 0 0 10px 0;\n  display: flex;\n"]))),ee=function(e){var n=e.title,t=e.data;return Object(m.jsxs)($,{children:[n&&Object(m.jsx)("h2",{className:"title",children:n}),Object(m.jsx)(_,{children:t.map((function(e){return Object(m.jsx)(Z,{label:e.label,percentage:e.percentage},e.id)}))})]})},ne=t(8),te=t(9),ae=t(10),ce=t(11),ie=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{text:"Task-1"}),Object(m.jsx)(A,{events:ne}),Object(m.jsx)(h,{text:"Task-2"}),Object(m.jsx)(ee,{data:te,title:"Upload stats"}),Object(m.jsx)(h,{text:"Task-3"}),Object(m.jsx)(H,{events:ae}),Object(m.jsx)(h,{text:"Task-4"}),Object(m.jsx)(q,{events:ce})]})};O.a.render(Object(m.jsx)(x.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}]')},9:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')}},[[24,1,2]]]);
//# sourceMappingURL=main.dc4fe9c1.chunk.js.map