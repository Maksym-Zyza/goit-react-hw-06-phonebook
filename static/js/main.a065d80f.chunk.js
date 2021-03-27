(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},13:function(t,e,n){t.exports={wrapper:"Filter_wrapper__IqOjQ",label:"Filter_label__3DcZT",name:"Filter_name__pSTfl",input:"Filter_input__2DoVp"}},14:function(t,e,n){t.exports={listItem:"ContactList_listItem__29Cbr",name:"ContactList_name__2WLgA",namber:"ContactList_namber__xUfTY",btn:"ContactList_btn__1Xk4q"}},17:function(t,e,n){t.exports={wrapper:"App_wrapper__2Rh_f",title:"App_title__-GfWs",subtitle:"App_subtitle__2-DpX"}},46:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(15),i=n.n(s),o=n(31),l=n(6),u=n(7),b=Object(u.b)("Contact/add"),m=Object(u.b)("Contact/delete"),j=Object(u.b)("Contact/filter"),p=n(13),d=n.n(p),f=n(1),h=Object(l.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(j(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:d.a.wrapper,children:Object(f.jsxs)("label",{className:d.a.label,children:[Object(f.jsx)("span",{className:d.a.name,children:"Find contacts by name"}),Object(f.jsx)("input",{className:d.a.input,type:"text",name:"name",value:e,onChange:n})]})})})),O=n(14),_=n.n(O),x=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},v=Object(l.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:x(n,a)}}),(function(t){return{onDelBtnClick:function(e){return t(m(e))}}}))((function(t){var e=t.contacts,n=t.onDelBtnClick;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:_.a.listItem,children:[Object(f.jsxs)("span",{className:_.a.name,children:[t.name,":"]}),Object(f.jsx)("span",{className:_.a.namber,children:t.number}),Object(f.jsx)("button",{className:_.a.btn,type:"button",id:t.id,onClick:function(t){return n(t.target.id)},children:"Delete"})]},t.id)}))})})),C=n(9),g=n(26),N=n(27),y=n(33),w=n(32),k=n(54),F=n(10),S=n.n(F),D=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(g.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handelChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value;t.setState((n={},Object(C.a)(n,c,r),Object(C.a)(n,"id",Object(k.a)()),n))},t.resetForm=function(){t.setState({name:"",number:""})},t.handleSabmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(t.props.contacts.some((function(t){return t.name===a})))return alert('Name "'.concat(a,'" already exists, please enter another name.'));t.props.onSubmit({name:a,number:c,id:Object(k.a)()}),t.resetForm()},t}return Object(N.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:S.a.form,autoComplete:"off",onSubmit:this.handleSabmit,children:[Object(f.jsxs)("label",{className:S.a.label,children:["Name:",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handelChange,className:S.a.input})]}),Object(f.jsxs)("label",{className:S.a.label,children:["Number:",Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handelChange,className:S.a.input})]}),Object(f.jsx)("button",{type:"submit",className:S.a.btn,children:"Add contact"})]})})})}}]),n}(c.Component),A=Object(l.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(b(e))}}}))(D),L=n(17),I=n.n(L),B=Object(l.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}))((function(t){var e=t.contacts;return Object(f.jsxs)("div",{className:I.a.wrapper,children:[Object(f.jsx)("h1",{className:I.a.title,children:"Phonebook"}),Object(f.jsx)(A,{}),Object(f.jsx)("h2",{className:I.a.subtitle,children:"Contacts"}),e.length>1&&Object(f.jsx)(h,{}),Object(f.jsx)(v,{})]})})),T=(n(45),n(46),n(28)),q=n(16),z=n(29),J=n.n(z),W=n(3),X="counter/Increment",E="counter/Decrement",G=Object(W.c)({value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case X:return t+a;case E:return t-a;default:return t}},step:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return t}}),M=Object(u.c)([],(a={},Object(C.a)(a,b,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(C.a)(a,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),P=Object(u.c)("",Object(C.a)({},j,(function(t,e){return e.payload}))),Q=Object(W.c)({items:M,filter:P}),R=n(8),U=n(30),V=n.n(U),Y=[].concat(Object(q.a)(Object(u.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[J.a]),Z={key:"contacts",storage:V.a,blacklist:["filter"]},H=Object(u.a)({reducer:{counter:G,contacts:Object(R.g)(Z,Q)},middleware:Y,devTools:!1}),K=Object(R.h)(H);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l.a,{store:H,children:Object(f.jsx)(T.a,{loading:null,persistor:K,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(B,{})})})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a065d80f.chunk.js.map