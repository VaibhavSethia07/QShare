(this["webpackJsonpnp-problem"]=this["webpackJsonpnp-problem"]||[]).push([[0],{113:function(e,a,t){},114:function(e,a,t){},128:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(113),t(114),t(88)),i=t(68),m=t(55),u=t(48),s=t(18),p=t(161),E=t(165),f=t(166),g=t(167),h=t(168),d=t(169),b=t(170),v=t(171),j=t(177),O=t(176),y=t(179),k=t(180),S=t(174),C=t(175),N=t(67),P=t(90),A=function e(a,t,n){Object(P.a)(this,e),this.person1=a,this.person2=t,this.amount=n};function F(e,a){if(0!=a){var t=Math.floor((a-1)/2);if(e[t].first<e[a].first){var n=e[t];e[t]=e[a],e[a]=n,F(e,t)}}}function w(e,a){var t=2*a+1,n=2*a+2;if(!(t>=e.length&&n>=e.length)){var r=a;if(t<e.length&&e[t].first>e[r].first&&(r=t),n<e.length&&e[n].first>e[r].first&&(r=n),r!=a){var l=e[r];e[r]=e[a],e[a]=l,w(e,r)}}}function D(e,a,t){var n={first:a,second:t};e.push(n),F(e,e.length-1)}function x(e){return 0==e.length?{}:e[0]}function I(e){var a=e.length-1,t=e[0];e[0]=e[a],e[a]=t,e.pop(),w(e,0)}var L=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),P=Object(s.a)(c,2),F=P[0],w=P[1],L=Object(n.useState)(!1),B=Object(s.a)(L,2),M=B[0],T=B[1],z=Object(n.useState)({person1:"",person2:"",amount:""}),G=Object(s.a)(z,2),J=G[0],H=G[1],R=Object(n.useState)([]),q=Object(s.a)(R,2),K=q[0],Q=q[1],U=Object(n.useState)([]),V=Object(s.a)(U,2),W=V[0],X=V[1],Y=J.person1,Z=J.person2,$=J.amount,_=Object(n.useState)({}),ee=Object(s.a)(_,2),ae=ee[0],te=ee[1],ne=Object(n.useState)({}),re=Object(s.a)(ne,2),le=re[0],ce=re[1],oe=Object(n.useState)({}),ie=Object(s.a)(oe,2),me=ie[0],ue=ie[1],se=function(e){return function(a){H(Object(u.a)(Object(u.a)({},J),{},Object(m.a)({},e,a.target.value)))}},pe=function(){return F.map((function(e){return{id:e.name}}))},Ee=function(){return K.map((function(e){return{source:e.person1,target:e.person2,amount:e.amount}}))},fe=function(e){return e.map((function(e){return{source:e.person1,target:e.person2,amount:e.amount}}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"name-component"},r.a.createElement("div",{className:"p-name"},r.a.createElement("h2",null,"Enter Participant's name"),r.a.createElement("div",{className:"p-name-field"},r.a.createElement(k.a,{id:"outlined-basic",label:"Participant Name",variant:"outlined",value:t,disabled:M,onChange:function(e){l(e.target.value)}})),r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),w((function(e){return[{name:t}].concat(Object(i.a)(e))})),l("")}},"Add")),F&&F.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list-div"},r.a.createElement("div",{className:"list-all-names"},r.a.createElement("div",{className:"allnames"},r.a.createElement("h3",null,"Names"),F.map((function(e){return r.a.createElement("h4",{style:{color:"#3f3f3f"}}," ",e.name)}))))),r.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){T(!0)}},"Submit")):null),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement("div",{className:"form"},M&&r.a.createElement(p.a,{component:E.a,className:"table"},r.a.createElement(f.a,{"aria-label":"simple table"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{align:"center"},"Payer"),r.a.createElement(d.a,{align:"center"},"Payee"),r.a.createElement(d.a,{align:"center"},"Amount"),r.a.createElement(d.a,{align:"center"},"Add"))),r.a.createElement(b.a,null,K.length>0&&K.map((function(e){return r.a.createElement(h.a,{key:e.name},r.a.createElement(d.a,{component:"th",align:"center",scope:"row"},e.person1),r.a.createElement(d.a,{align:"center"},e.person2),r.a.createElement(d.a,{align:"center"},e.amount))})),r.a.createElement(h.a,null,r.a.createElement(d.a,{align:"center"},r.a.createElement(v.a,null,r.a.createElement(j.a,null,"Payer"),r.a.createElement(O.a,{value:Y,onChange:se("person1")},F.map((function(e){return r.a.createElement(y.a,{value:e.name},e.name)}))))),r.a.createElement(d.a,{align:"center"},r.a.createElement(v.a,null,r.a.createElement(j.a,null,"Payee"),r.a.createElement(O.a,{value:Z,onChange:se("person2")},F.map((function(e){return Y!==e.name?r.a.createElement(y.a,{value:e.name},e.name):r.a.createElement(r.a.Fragment,null)}))))),r.a.createElement(d.a,{align:"center"},r.a.createElement(v.a,null,r.a.createElement(k.a,{id:"standard-number",label:"Amount",type:"number",value:$,placeholder:"Emter Amount",onChange:se("amount"),InputLabelProps:{shrink:!0}}))),r.a.createElement(d.a,{align:"center"},r.a.createElement(S.a,{size:"small",variant:"outlined",color:"primary",onClick:function(e){""!==J.person1&&""!==J.person2&&""!==J.amount?Q([].concat(Object(i.a)(K),[J])):alert("Enter all Fields"),H(Object(u.a)(Object(u.a)({},J),{},{person1:"",person2:"",amount:""}))}},"+ ADD"))))))),K&&K.length?r.a.createElement("div",{className:"form-names"},r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(){console.log("Participants: ",F," transactions: ",K);var e={nodes:pe(),links:Ee()};te(e),ce({freezeAllDragEvents:!0,nodeHighlightBehavior:!0,node:{color:"lightgreen",highlightStrokeColor:"blue"},link:{highlightColor:"lightblue",renderLabel:!0,labelProperty:"amount"},directed:!0,height:500,width:500})}},"Submit Data"),r.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){var e,a=[],t=Object(o.a)(K);try{for(t.s();!(e=t.n()).done;){var n=e.value;a.push(new A(n.person1,n.person2,parseInt(n.amount)))}}catch(l){t.e(l)}finally{t.f()}var r=function(e){for(var a={},t=0;t<e.length;t++){var n=e[t];n.person1 in a?a[n.person1]+=n.amount:a[n.person1]=n.amount,n.person2 in a?a[n.person2]-=n.amount:a[n.person2]=0-n.amount}var r=[],l=[];for(var c in a)a[c]>0?D(r,a[c],c):a[c]<0&&D(l,-1*a[c],c);for(var o=[];r.length>0;){var i=x(r),m=x(l);I(r),I(l);var u=new A(m.second,i.second,Math.min(i.first,m.first));o.push(u),i.first>m.first?D(r,i.first-m.first,i.second):i.first<m.first&&D(l,m.first-i.first,m.second)}return o}(a);console.log("output: ",r),X(r),ue({nodes:pe(),links:fe(r)})}},"Run")):null),r.a.createElement(C.a,{item:!0,xs:6},Object.keys(ae).length&&Object.keys(le).length?r.a.createElement(N.Graph,{id:"graph-id",data:ae,config:le}):null)),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:6},W&&W.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," Simplified Transactions"),r.a.createElement(p.a,{component:E.a,className:"table"},r.a.createElement(f.a,{"aria-label":"simple table"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{align:"center"},"Payer"),r.a.createElement(d.a,{align:"center"},"Payee"),r.a.createElement(d.a,{align:"center"},"Amount"))),r.a.createElement(b.a,null,W.length&&W.map((function(e){return r.a.createElement(h.a,{key:e.name},r.a.createElement(d.a,{component:"th",align:"center",scope:"row"},e.person1),r.a.createElement(d.a,{align:"center"},e.person2),r.a.createElement(d.a,{align:"center"},e.amount))})))))):null),r.a.createElement(C.a,{item:!0,xs:6},Object.keys(me).length&&Object.keys(le).length?r.a.createElement(N.Graph,{id:"graph-id-output",data:me,config:le}):null)))};var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,181)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),M()}},[[128,1,2]]]);
//# sourceMappingURL=main.587583b5.chunk.js.map