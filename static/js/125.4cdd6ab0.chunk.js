"use strict";(self.webpackChunkcra_deploy=self.webpackChunkcra_deploy||[]).push([[125,668],{9125:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(32),s=t(4402),u=t(657),c=t(8668),i=t(5671),o=t(3144),a=t(7757),h=t.n(a),l=t(4098),f=new(function(){function n(){var e=this;(0,i.Z)(this,n),this.num=1,this.users=[],this.setCount=function(){e.num++},this.reset=function(){e.num=1},this.addUser=function(){e.users=e.users.concat({name:"qin"})},(0,l.ky)(this)}return(0,o.Z)(n,[{key:"userCount",get:function(){return this.users.length}},{key:"getUsers",value:h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.resolve([{name:"John"},{name:"Jane"}]);case 3:this.users=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error("fetch users error",n.t0);case 9:case"end":return n.stop()}}),n,this,[[0,6]])}))}]),n}()),d=t(6871),k=t(184);function p(){var n=(0,c.useCount)(),e=n.count,t=n.add,i=(0,d.s0)(),o=(0,r.fv)((function(){return f})),a=function(){t()};return(0,s.Z)((function(){o.getUsers()})),(0,u.Z)((function(){o.reset()})),(0,k.jsx)(r.Qj,{children:function(){return(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{children:"this is Page1 component!"}),(0,k.jsxs)("p",{children:["data from store: ",o.num]}),e,(0,k.jsx)("button",{onClick:a,children:"click"}),(0,k.jsx)("button",{onClick:o.setCount,children:"change name"}),(0,k.jsx)("button",{onClick:o.addUser,children:"Add user"}),(0,k.jsxs)("p",{children:["user \u603b\u4eba\u6570\uff1a",o.userCount]}),(0,k.jsx)("ul",{children:o.users.map((function(n,e){var t=n.name;return(0,k.jsx)("li",{children:t},e)}))}),(0,k.jsx)("button",{onClick:function(){i("/page2")},children:"to page2"})]})}})}},8668:function(n,e,t){t.r(e),t.d(e,{useCount:function(){return u}});var r=t(8152),s=t(2791);function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(0,s.useState)(n),t=(0,r.Z)(e,2),u=t[0],c=t[1],i=(0,s.useCallback)((function(){c((function(n){return n+1}))}),[]),o=(0,s.useCallback)((function(){c(n)}),[n]);return{count:u,add:i,reset:o}}}}]);
//# sourceMappingURL=125.4cdd6ab0.chunk.js.map