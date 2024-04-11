(function(){"use strict";var e={6660:function(e,t,a){var n=a(3751),r=a(641);const o={class:"container"};function l(e,t,a,n,l,s){const i=(0,r.g2)("Header"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(i),(0,r.bF)(u)])}const s=["src"];function i(e,t,a,n,o,l){return(0,r.uX)(),(0,r.CE)("header",null,[(0,r.Lk)("img",{src:o.image},null,8,s)])}var u={name:"Header",data(){return{image:a(3153)}}},p=a(6262);const c=(0,p.A)(u,[["render",i],["__scopeId","data-v-02a58494"]]);var f=c,m={name:"app",components:{Header:f}};const g=(0,p.A)(m,[["render",l]]);var d=g,v=a(5220);const k={class:"search"},h=(0,r.Lk)("h1",null," Track Player Stats",-1),b={class:"form-group"},L=(0,r.Lk)("label",{for:"platform"}," Platform ",-1),y=(0,r.Lk)("option",{value:"psn"}," Playstation",-1),D=(0,r.Lk)("option",{value:"xbl"}," XBOX",-1),_=(0,r.Lk)("option",{value:"origin"}," PC",-1),C=[y,D,_],O={class:"form-group"},X=(0,r.Lk)("label",{for:"gamertag"}," Gamertag ",-1),E=(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("input",{type:"submit",value:"Submit",class:"btn"})],-1);function S(e,t,a,o,l,s){return(0,r.uX)(),(0,r.CE)("section",k,[h,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,r.Lk)("div",b,[L,(0,r.bo)((0,r.Lk)("select",{name:"platform",id:"platform","onUpdate:modelValue":t[0]||(t[0]=e=>l.platform=e)},C,512),[[n.u1,l.platform]])]),(0,r.Lk)("div",O,[X,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.gamertag=e),id:"gamertag",placeholder:"Origin ID, XBOX, OR PSN"},null,512),[[n.Jo,l.gamertag]])]),E],32)])}a(4114);var P={name:"Search",data(){return{platform:"psn",gamertag:""}},beforeCreate(){document.body.className="body-bg-image"},methods:{onSubmit(){this.gamertag?this.$router.push(`/profile/${this.platform}/${this.gamertag}`):console.log("Please enter ")}}};const W=(0,p.A)(P,[["render",S]]);var w=W,x=a(33);const j=e=>((0,r.Qi)("data-v-05e155c8"),e=e(),(0,r.jt)(),e),A={key:0},Q=j((()=>(0,r.Lk)("h3",null," Loading...",-1))),$=[Q],I={key:1},V={key:2,class:"container"},F={class:"gamertag"},T=["src"],U={class:"grid"},N=["src"],B=j((()=>(0,r.Lk)("h4",null,"Current Legend",-1))),G={key:0},H=j((()=>(0,r.Lk)("h4",null,"Season 5 Wins",-1))),M={key:1},J=j((()=>(0,r.Lk)("h4",null,"Apex Level",-1))),K={key:2},R=j((()=>(0,r.Lk)("h4",null,"Lifetime Kills",-1))),q={key:3},z=j((()=>(0,r.Lk)("h4",null,"Damage Done",-1)));function Y(e,t,a,n,o,l){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("section",null,[o.loading?((0,r.uX)(),(0,r.CE)("div",A,$)):(0,r.Q3)("",!0),o.error?((0,r.uX)(),(0,r.CE)("div",I,[(0,r.Lk)("h1",null,(0,x.v_)(o.error),1),(0,r.bF)(s,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)(" Go back ")])),_:1})])):(0,r.Q3)("",!0),o.profileData?((0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("h1",F,[(0,r.Lk)("img",{src:o.profileData.platformInfo.avatarUrl,alt:"",class:"platform-avatar"},null,8,T),(0,r.eW)(" "+(0,x.v_)(o.profileData.platformInfo.platformUserId),1)]),(0,r.Lk)("div",U,[(0,r.Lk)("div",null,[(0,r.Lk)("img",{src:o.profileData.segments[1].metadata.imageUrl,alt:""},null,8,N)]),(0,r.Lk)("div",null,[(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[B,(0,r.Lk)("p",null,(0,x.v_)(o.profileData.metadata.activeLegendName),1)]),o.profileData.segments[0].stats.season5Wins?((0,r.uX)(),(0,r.CE)("li",G,[H,(0,r.Lk)("p",null,[(0,r.eW)((0,x.v_)(o.profileData.segments[0].stats.season5Wins.displayValue)+" ",1),(0,r.Lk)("span",null,"("+(0,x.v_)(o.profileData.segments[0].stats.season5Wins.percentile)+")",1)])])):(0,r.Q3)("",!0),o.profileData.segments[0].stats.level?((0,r.uX)(),(0,r.CE)("li",M,[J,(0,r.Lk)("p",null,[(0,r.eW)((0,x.v_)(o.profileData.segments[0].stats.level.displayValue)+" ",1),(0,r.Lk)("span",null,"("+(0,x.v_)(o.profileData.segments[0].stats.level.percentile)+"%)",1)])])):(0,r.Q3)("",!0),o.profileData.segments[0].stats.kills?((0,r.uX)(),(0,r.CE)("li",K,[R,(0,r.Lk)("p",null,[(0,r.eW)((0,x.v_)(o.profileData.segments[0].stats.kills.displayValue)+" ",1),(0,r.Lk)("span",null,"("+(0,x.v_)(o.profileData.segments[0].stats.kills.percentile)+"%)",1)])])):(0,r.Q3)("",!0),o.profileData.segments[0].stats.damage?((0,r.uX)(),(0,r.CE)("li",q,[z,(0,r.Lk)("p",null,[(0,r.eW)((0,x.v_)(o.profileData.segments[0].stats.damage.displayValue)+" ",1),(0,r.Lk)("span",null,"("+(0,x.v_)(o.profileData.segments[0].stats.damage.percentile)+"%)",1)])])):(0,r.Q3)("",!0)])])]),(0,r.bF)(s,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)(" Go Back ")])),_:1})])):(0,r.Q3)("",!0)])}var Z=a(1250),ee={name:"Profile",data(){return{loading:!1,error:null,profileData:null}},beforeCreate(){document.body.className="body-bg-no-image"},async created(){this.loading=!0;try{const e=await Z.A.get(`/api/v2/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`);this.profileData=e.data.data,console.log(this.profileData),this.loading=!1}catch(e){this.loading=!1,this.error=e.response.data.message}}};const te=(0,p.A)(ee,[["render",Y],["__scopeId","data-v-05e155c8"]]);var ae=te;const ne=(0,v.aE)({history:(0,v.LA)(),routes:[{path:"/",name:"search",component:w},{path:"/profile/:platform/:gamertag",name:"profile",component:ae}]});var re=ne,oe=a(8113);const le=(0,n.Ef)(d);le.use(oe.Ay,{autoClose:3e3}),le.use(re),le.mount("#app")},3153:function(e,t,a){e.exports=a.p+"img/logo.4f7febc9.png"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var l=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],o=e[p][2];for(var s=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(p--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[n,r,o]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,l=n[0],s=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var p=i(a)}for(t&&t(n);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(6660)}));n=a.O(n)})();
//# sourceMappingURL=app.b167406f.js.map