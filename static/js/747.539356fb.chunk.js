"use strict";(self.webpackChunkcra_deploy=self.webpackChunkcra_deploy||[]).push([[747,668],{9747:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(32),s=t(4402),u=t(657),o=t(8668),c=t(5671),i=t(3144),a=t(7757),d=t.n(a),l=t(4098),h=t(1413),f=t(5987),v=t(4569),p=["channel","method"],C={NODE_ENV:"production",PUBLIC_URL:"/cra-deploy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_MOCK,k=t.n(v)().create({baseURL:"local"===C?"http://localhost:3000":"",timeout:5e3});k.interceptors.response.use((function(n){if(200===(null===n||void 0===n?void 0:n.status)||304===(null===n||void 0===n?void 0:n.status))return n.data}));var m=function(n){var e=n.channel,t=n.method,r=void 0===t?"GET":t,s=(0,f.Z)(n,p);return k.request((0,h.Z)({url:e,method:r},s))},x=new(function(){function n(){var e=this;(0,c.Z)(this,n),this.num=1,this.users=[],this.setCount=function(){e.num++},this.reset=function(){e.num=1},this.addUser=function(){e.users=e.users.concat({name:"qin"})},(0,l.ky)(this)}return(0,i.Z)(n,[{key:"userCount",get:function(){return this.users.length}},{key:"getUsers",value:d().mark((function n(){return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m({channel:"/users"});case 3:this.users=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error("fetch users error",n.t0);case 9:case"end":return n.stop()}}),n,this,[[0,6]])}))}]),n}()),_=t(6871),j=t(184);function b(){var n=(0,o.useCount)(),e=n.count,t=n.add,c=(0,_.s0)(),i=(0,r.fv)((function(){return x})),a=function(){t()};return(0,s.Z)((function(){i.getUsers()})),(0,u.Z)((function(){i.reset()})),(0,j.jsx)(r.Qj,{children:function(){return(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"this is Page1 component!"}),(0,j.jsxs)("p",{children:["data from store: ",i.num]}),e,(0,j.jsx)("button",{onClick:a,children:"click"}),(0,j.jsx)("button",{onClick:i.setCount,children:"change name"}),(0,j.jsx)("button",{onClick:i.addUser,children:"Add user"}),(0,j.jsxs)("p",{children:["user \u603b\u4eba\u6570\uff1a",i.userCount]}),(0,j.jsx)("ul",{children:i.users.map((function(n,e){var t=n.name;return(0,j.jsx)("li",{children:t},e)}))}),(0,j.jsx)("button",{onClick:function(){c("/page2")},children:"to page2"})]})}})}},8668:function(n,e,t){t.r(e),t.d(e,{useCount:function(){return u}});var r=t(8152),s=t(2791);function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(0,s.useState)(n),t=(0,r.Z)(e,2),u=t[0],o=t[1],c=(0,s.useCallback)((function(){o((function(n){return n+1}))}),[]),i=(0,s.useCallback)((function(){o(n)}),[n]);return{count:u,add:c,reset:i}}}}]);
//# sourceMappingURL=747.539356fb.chunk.js.map