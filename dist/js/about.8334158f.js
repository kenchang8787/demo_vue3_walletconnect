"use strict";(self["webpackChunktest_walletconnect"]=self["webpackChunktest_walletconnect"]||[]).push([[443],{29837:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var s=n(73396),a=n(87139);const c={class:"h-full flex flex-col justify-center items-center"},r={key:0,class:"text-red-500"},d={key:1,class:"text-center"},i=(0,s.Uk)(" network: "),l={class:"capitalize"},o={class:"m-4"},u=["disabled"];function p(e,t,n,p,h,v){const w=(0,s.up)("vdapp-board");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[e.error?((0,s.wg)(),(0,s.iD)("p",r,(0,a.zw)(e.error),1)):(0,s.kq)("",!0),e.isActivated?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("p",null,(0,a.zw)(e.shortenAddress(e.address)),1),(0,s._)("p",null,(0,a.zw)(e.displayEther(e.balance))+" ETH",1),(0,s._)("p",null,[i,(0,s._)("span",l,(0,a.zw)(e.displayChainName(e.chainIdd)),1)])])):(0,s.kq)("",!0),(0,s._)("div",o,[(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.isActivated?e.disconnect():e.open()),class:"btn",disabled:"connecting"===e.status},(0,a.zw)("connected"===e.status?"Disconnect":"connecting"===e.status?"Connecting...":"Connect"),9,u)])]),(0,s.Wm)(w)],64)}var h=n(7104);const{open:v}=(0,h.$c)(),{status:w,disconnect:k,error:b}=(0,h.Os)(),{address:f,balance:_,chainId:y,isActivated:C}=(0,h.KM)();var g=(0,s.aZ)({setup(){return{displayChainName:h.Hp,displayEther:h.am,shortenAddress:h.Xn,open:v,disconnect:k}},data(){var e=y;return{status:w,error:b,address:f,balance:_,chainIdd:e,isActivated:C}}}),m=n(40089);const z=(0,m.Z)(g,[["render",p]]);var A=z}}]);
//# sourceMappingURL=about.8334158f.js.map