"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[562],{6562:function(n,t,r){r.r(t),r.d(t,{default:function(){return O}});var e,i,o,a,c,s,d,l,p=r(2791),u=r(1413),x=r(5861),m=r(4687),h=r.n(m),b=r(168),f=r(6088),g={primary:"#2a2e70",contact:"#353a8e"},y={newContactButtonPrimary:"#2a0096",newContactButtonHover:"#3604b3",contactButtonPrimary:"#353a8e",contactButtonHover:"#2a0096"},j={primary:"#dbe3ff",dark:"#767881"},w="350ms",v="linear",k=f.Z.div(e||(e=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 30px;\n  label {\n    display: block;\n    width: 100%;\n\n    input {\n      font-size: 18px;\n      display: block;\n      padding: 21px 25px;\n      border: 1px solid ",";\n      width: 100%;\n      background-color: ",";\n      color: ",";\n\n      border-radius: 15px;\n    }\n    span {\n      display: block;\n      color: red;\n      font-size: 20px;\n      min-height: 23px;\n    }\n  }\n\n  button {\n    cursor: pointer;\n    margin-top: 30px;\n    font-size: 20px;\n    border: none;\n    border-radius: 8%/50%;\n    background-color: ",";\n    color: ",";\n    padding: 15px 20px;\n    transition: background-color "," ",";\n    :hover {\n      background-color: ",";\n    }\n  }\n"])),j.primary,g.primary,j.primary,y.newContactButtonPrimary,j.primary,w,v,y.newContactButtonHover),Z=r(5705),C=r(6727),z=r(6429),B=r.n(z),_=r(184),N=function(n){var t=n.formSubmit,r=C.Ry().shape({name:C.Z_().min(6,"Minimum input length 6 symbols").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Invalid format").required("This field is required").trim(),number:C.Z_().min(3,"Minimum input length 3 symbols").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Invalid format").required("This field is required")});function e(){return(e=(0,x.Z)(h().mark((function n(e,i){var o,a;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=i.resetForm,n.next=3,r.isValid(e);case 3:n.sent&&(a=(0,u.Z)((0,u.Z)({},e),{},{id:B().generate()}),t(a)&&o());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,_.jsx)(k,{children:(0,_.jsx)(Z.J9,{initialValues:{name:"",number:""},onSubmit:function(n,t){return e.apply(this,arguments)},validationSchema:r,children:(0,_.jsxs)(Z.l0,{children:[(0,_.jsxs)("label",{children:["Name",(0,_.jsx)(Z.gN,{type:"text",name:"name",placeholder:"Name your contact"}),(0,_.jsx)("span",{children:(0,_.jsx)(Z.Bc,{name:"name"})})]}),(0,_.jsxs)("label",{children:["Number",(0,_.jsx)(Z.gN,{type:"tel",name:"number",placeholder:"Paste or type the number"}),(0,_.jsx)("span",{children:(0,_.jsx)(Z.Bc,{name:"number"})})]}),(0,_.jsx)("button",{type:"submit",children:"Add contact"})]})})})},H=r(7692),L=f.Z.div(i||(i=(0,b.Z)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n  div {\n    position: relative;\n  }\n  h2 {\n    margin-bottom: 10px;\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    font-size: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-height: 334px;\n    overflow-y: auto;\n  }\n  label {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 25px;\n  }\n  input {\n    font-size: 18px;\n    display: block;\n    padding: 21px 25px;\n    border: 1px solid ",";\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    border-radius: 8%/50%;\n  }\n"])),j.primary,g.primary,j.primary),S=((0,f.Z)(H.wnI)(o||(o=(0,b.Z)(["\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  right: 20px;\n  top: 50%;\n  color: ",";\n  transform: translateY(-50%);\n"])),j.primary),f.Z.li(a||(a=(0,b.Z)(["\n  background-color: ",";\n  width: 100%;\n  border-radius: 15px;\n  display: flex;\n  padding: 15px 25px;\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color "," ",";\n  div {\n    max-width: 80%;\n\n    p {\n      margin: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n  button {\n    width: 43px;\n    height: 43px;\n    cursor: pointer;\n    opacity: 0;\n    transition: opacity "," ",";\n    background-color: ",";\n    border: 1px solid white;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: ",";\n    button {\n      opacity: 1;\n      transition: background-color "," ",";\n      &:hover {\n        background-color: ",";\n      }\n    }\n  }\n"])),g.contact,w,v,w,v,y.contactButtonPrimary,g.contact,w,v,y.contactButtonHover)),A=r(9126),F=function(n){var t=n.name,r=n.number,e=n.id,i=n.deleteHandler;return(0,_.jsxs)(S,{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:t}),(0,_.jsx)("p",{children:r})]}),(0,_.jsx)("button",{type:"button",onClick:function(){i(e)},children:(0,_.jsx)(A._y7,{size:"16px",color:"white"})})]})},I=r(3153),P=r(1192),T=r(7482),q=function(n){var t=n.filteredContacts,r=n.contactDeleteHandler;return(0,I.C)(P.Vc)?(0,_.jsx)(T.Z,{}):(0,_.jsx)(L,{children:(0,_.jsx)("ul",{children:t.map((function(n){return(0,_.jsx)(F,{name:n.name,number:n.number,id:n.id,deleteHandler:r},n.id)}))})})},V=r(8397),Y=f.Z.div(c||(c=(0,b.Z)(["\n  div {\n    position: relative;\n  }\n  label {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 25px;\n  }\n  input {\n    font-size: 18px;\n    display: block;\n    padding: 21px 25px;\n    border: 1px solid ",";\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    border-radius: 8%/50%;\n  }\n"])),j.primary,g.primary,j.primary),D=(0,f.Z)(H.wnI)(s||(s=(0,b.Z)(["\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  right: 20px;\n  top: 50%;\n  color: ",";\n  transform: translateY(-50%);\n"])),j.primary),K=function(n){var t=n.contactsFilter;return(0,_.jsxs)(Y,{children:[(0,_.jsx)("label",{htmlFor:"search-input",children:"Find contacts by name"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{type:"text",name:"",id:"search-input",onChange:function(n){t(n.target.value)},placeholder:"Type to find..."}),(0,_.jsx)(D,{})]})]})},M=f.Z.div(d||(d=(0,b.Z)(["\n  /* position: fixed; */\n  /* width: min(400px, 100%); */\n  background-color: ",";\n  min-height: 100%;\n  /* height: 100vh; */\n\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n    'Lucida Sans', Arial, sans-serif;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  color: #dbe3ff;\n  padding: 20px 10px;\n\n  h2 {\n    margin: 0;\n  }\n\n  .contacts-container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    column-gap: 30px;\n    margin: 0 auto;\n    .contacts-form-container {\n      width: 310px;\n    }\n    .contacts-list-container {\n      width: 310px;\n    }\n  }\n"])),g.primary),R=r(5985),$=r(6392),E=r(3458),G=(r(5462),f.Z.div(l||(l=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: 10px;\n\n  .ok-indicator {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: green;\n  }\n\n  .error-indicator {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: red;\n  }\n"])))),J=r(8966),U=function(){var n=(0,I.C)(P.Vc),t=(0,I.C)(P.by);return t?(0,_.jsx)(G,{children:(0,_.jsx)("div",{className:"error-indicator"})}):n?(0,_.jsx)(G,{children:n&&!t&&(0,_.jsx)(J.BR,{height:"20",width:"20",radius:1,color:"#4fa94d",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(0,_.jsx)(G,{children:(0,_.jsx)("div",{className:"ok-indicator"})})},O=function(){var n=(0,I.T)(),t=(0,I.C)($.zK),r=(0,I.C)(P.K2);(0,p.useEffect)((function(){n((0,E.yF)())}),[n]);var e=r.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,_.jsxs)(M,{children:[(0,_.jsx)(V.D,{}),(0,_.jsxs)("div",{className:"contacts-container",children:[(0,_.jsxs)("div",{className:"contacts-form-container",children:[(0,_.jsx)("h2",{children:"Add new contacts"}),(0,_.jsx)(N,{formSubmit:function(t){var e=t.name.toLowerCase();return r.some((function(n){return n.name.toLowerCase()===e}))?((0,R.Am)("".concat(t.name," is already in contacts.")),!1):(n((0,E.uK)({name:t.name,number:t.number})),!0)}}),(0,_.jsx)(U,{})]}),(0,_.jsxs)("div",{className:"contacts-list-container",children:[(0,_.jsx)("h2",{children:"Your contacts"}),(0,_.jsx)(K,{contactsFilter:function(t){n((0,$.a8)(t.toLowerCase()))}}),(0,_.jsx)(q,{filteredContacts:e,contactDeleteHandler:function(t){n((0,E.zY)(t))}})]})]}),(0,_.jsx)(R.Ix,{})]})}}}]);
//# sourceMappingURL=562.625e32ff.chunk.js.map