import{c as V,m as G,o as v,s as R,t as T}from"./chunk-HNE7D7Y7.js";import{G as M,H as l,J as D,N as x,O as N,Q as $,Ra as U,S as k,V as m,Y as P,a,i as w,l as A,la as E,ma as p,oa as f,qa as o,ra as h,x as d,xa as g,z as I}from"./chunk-PWY5XFB5.js";var ne={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},y="__@ngrx/effects_create__";function Be(e,r={}){let t=r.functional?e:e(),n=a(a({},ne),r);return Object.defineProperty(t,y,{value:n}),t}function re(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(y)?e[n][y].hasOwnProperty("dispatch"):!1).map(n=>{let i=e[n][y];return a({propertyName:n},i)})}function oe(e){return re(e)}function K(e){return Object.getPrototypeOf(e)}function se(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function L(e){return typeof e=="function"}function H(e){return e.filter(L)}function ie(e){return e instanceof f||L(e)}function fe(e,r,t){let n=K(e),s=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,u=oe(e).map(({propertyName:c,dispatch:_,useEffectsErrorHandler:S})=>{let b=typeof e[c]=="function"?e[c]():e[c],C=S?t(b,r):b;return _===!1?C.pipe(N()):C.pipe(P()).pipe(d(te=>({effect:e[c],notification:te,propertyName:c,sourceName:s,sourceInstance:e})))});return M(...u)}var ce=10;function Y(e,r,t=ce){return e.pipe(D(n=>(r&&r.handleError(n),t<=1?e:Y(e,r,t-1))))}var ze=(()=>{class e extends w{constructor(t){super(),t&&(this.source=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}static{this.\u0275fac=function(n){return new(n||e)(o(G))}}static{this.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ke(...e){return l(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var J=new f("@ngrx/effects Internal Root Guard"),F=new f("@ngrx/effects User Provided Effects"),j=new f("@ngrx/effects Internal Root Effects"),X=new f("@ngrx/effects Internal Root Effects Instances"),B=new f("@ngrx/effects Internal Feature Effects"),Z=new f("@ngrx/effects Internal Feature Effects Instance Groups"),ue=new f("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Y}),q="@ngrx/effects/init",Le=V(q);function ae(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!de(t)&&r.handleError(new Error(`Effect ${le(e)} dispatched an invalid action: ${Ee(t)}`))}}function de(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function le({propertyName:e,sourceInstance:r,sourceName:t}){let n=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function Ee(e){try{return JSON.stringify(e)}catch{return e}}var pe="ngrxOnIdentifyEffects";function he(e){return O(e,pe)}var ge="ngrxOnRunEffects";function ve(e){return O(e,ge)}var Fe="ngrxOnInitEffects";function ye(e){return O(e,Fe)}function O(e,r){return e&&r in e&&typeof e[r]=="function"}var Q=(()=>{class e extends A{constructor(t,n){super(),this.errorHandler=t,this.effectsErrorHandler=n}addEffects(t){this.next(t)}toActions(){return this.pipe(m(t=>se(t)?K(t):t),I(t=>t.pipe(m(Se))),I(t=>{let n=t.pipe(k(s=>Ie(this.errorHandler,this.effectsErrorHandler)(s)),d(s=>(ae(s,this.errorHandler),s.notification)),l(s=>s.kind==="N"&&s.value!=null),$()),i=t.pipe(x(1),l(ye),d(s=>s.ngrxOnInitEffects()));return M(n,i)}))}static{this.\u0275fac=function(n){return new(n||e)(o(U),o(ue))}}static{this.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Se(e){return he(e)?e.ngrxOnIdentifyEffects():""}function Ie(e,r){return t=>{let n=fe(t,e,r);return ve(t)?t.ngrxOnRunEffects(n):n}}var W=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,n){this.effectSources=t,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(n){return new(n||e)(o(Q),o(v))}}static{this.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ee=(()=>{class e{constructor(t,n,i,s,u,c,_){this.sources=t,n.start();for(let S of s)t.addEffects(S);i.dispatch({type:q})}addEffects(t){this.sources.addEffects(t)}static{this.\u0275fac=function(n){return new(n||e)(o(Q),o(W),o(v),o(X),o(R,8),o(T,8),o(J,8))}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=p({})}}return e})(),Me=(()=>{class e{constructor(t,n,i,s){let u=n.flat();for(let c of u)t.addEffects(c)}static{this.\u0275fac=function(n){return new(n||e)(o(ee),o(Z),o(R,8),o(T,8))}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=p({})}}return e})(),Ye=(()=>{class e{static forFeature(...t){let n=t.flat(),i=H(n);return{ngModule:Me,providers:[i,{provide:B,multi:!0,useValue:n},{provide:F,multi:!0,useValue:[]},{provide:Z,multi:!0,useFactory:z,deps:[B,F]}]}}static forRoot(...t){let n=t.flat(),i=H(n);return{ngModule:ee,providers:[i,{provide:j,useValue:[n]},{provide:J,useFactory:me},{provide:F,multi:!0,useValue:[]},{provide:X,useFactory:z,deps:[j,F]}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=p({})}}return e})();function z(e,r){let t=[];for(let n of e)t.push(...n);for(let n of r)t.push(...n);return t.map(n=>ie(n)?h(n):n)}function me(){let e=h(W,{optional:!0,skipSelf:!0}),r=h(j,{self:!0});if(!(r.length===1&&r[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}export{Be as a,ze as b,Ke as c,Ye as d};