function E(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function Y(){return Object.create(null)}function C(t){t.forEach(nt)}function H(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Jt(t,e,n,i){if(t){const s=it(t,e,n,i);return t[0](s)}}function it(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Qt(t,e,n,i,s,l){if(s){const r=it(e,n,i,l);t.p(r,s)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t,e,n){return t.set(n),e}function Xt(t){return t&&H(t.destroy)?t.destroy:E}const st=typeof window<"u";let gt=st?()=>window.performance.now():()=>Date.now(),Q=st?t=>requestAnimationFrame(t):E;const S=new Set;function rt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Q(rt)}function wt(t){let e;return S.size===0&&Q(rt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let q=!1;function bt(){q=!0}function xt(){q=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:$t(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function ot(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=V("style");return Nt(ct(t),e),e.sheet}function Nt(t,e){return ot(t.head||t,e),e.sheet}function At(t,e){if(q){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){q&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function te(){return X(" ")}function ee(){return X("")}function Z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){Ct(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function se(t,e,n){return ut(t,e,n,V)}function re(t,e,n){return ut(t,e,n,kt)}function Mt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function oe(t){return Mt(t," ")}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e??""}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let O;function jt(){if(O===void 0){O=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{O=!0}}return O}function ae(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=V("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=jt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=Z(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=Z(i.contentWindow,"resize",e)}),ot(t,i),()=>{(s||l&&i.contentWindow)&&l(),U(i)}}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function _e(t,e){return new t(e)}const L=new Map;let W=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:Et(e),rules:{}};return L.set(t,n),n}function tt(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Dt(f)}_${o}`,h=ct(t),{stylesheet:a,rules:_}=L.get(h)||Tt(h,t);_[d]||(_[d]=!0,a.insertRule(`@keyframes ${d} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,W+=1,d}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Pt())}function Pt(){Q(()=>{W||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),L.clear())})}let D;function z(t){D=t}function F(){if(!D)throw new Error("Function called outside component initialization");return D}function he(t){F().$$.on_mount.push(t)}function me(t){F().$$.after_update.push(t)}function pe(t,e){return F().$$.context.set(t,e),e}function ye(t){return F().$$.context.get(t)}const k=[],et=[],P=[],J=[],at=Promise.resolve();let K=!1;function ft(){K||(K=!0,at.then(dt))}function ge(){return ft(),at}function B(t){P.push(t)}function we(t){J.push(t)}const I=new Set;let A=0;function dt(){if(A!==0)return;const t=D;do{try{for(;A<k.length;){const e=k[A];A++,z(e),Rt(e.$$)}}catch(e){throw k.length=0,A=0,e}for(z(null),k.length=0,A=0;et.length;)et.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];I.has(n)||(I.add(n),n())}P.length=0}while(k.length);for(;J.length;)J.pop()();K=!1,I.clear(),z(t)}function Rt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let j;function Lt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(zt(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function be(){x={r:0,c:[],p:x}}function xe(){x.r||C(x.c),x=x.p}function _t(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function $e(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function f(){u&&Ot(t,u)}function d(a,_){const p=a.b-r;return _*=Math.abs(p),{a:r,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=ht,tick:g=E,css:$}=l||Bt,N={start:gt()+_,b:a};a||(N.group=x,x.r+=1),o||c?c=N:($&&(f(),u=tt(t,r,a,p,_,y,$)),a&&g(0,1),o=d(N,p),B(()=>G(t,a,"start")),wt(v=>{if(c&&v>c.start&&(o=d(c,p),c=null,G(t,o.b,"start"),$&&(f(),u=tt(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),G(t,o.b,"end"),c||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;r=o.a+o.d*y(M/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){H(l)?Lt().then(()=>{l=l(s),h(a)}):h(a)},end(){f(),o=c=null}}}function ve(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function Ee(t,e,n,i,s,l,r,o,c,u,f,d){let h=t.length,a=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map;for(_=a;_--;){const m=d(s,l,_),w=n(m);let b=r.get(w);b?i&&b.p(m,e):(b=u(w,m),b.c()),g.set(w,y[_]=b),w in p&&$.set(w,Math.abs(_-p[w]))}const N=new Set,v=new Set;function M(m){_t(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],b=m.key,T=w.key;m===w?(f=m.first,h--,a--):g.has(T)?!r.has(b)||N.has(b)?M(m):v.has(T)?h--:$.get(b)>$.get(T)?(v.add(b),M(m)):(N.add(T),h--):(c(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)M(y[a-1]);return y}function Ne(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(nt).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),l.forEach(B)}function qt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(k.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,l,r,o=[-1]){const c=D;z(t);const u=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Y(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...a)=>{const _=a.length?a[0]:h;return u.ctx&&s(u.ctx[d],u.ctx[d]=_)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](_),f&&Ft(t,d)),h}):[],u.update(),f=!0,C(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const d=St(e.target);u.fragment&&u.fragment.l(d),d.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&_t(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),xt(),dt()}z(c)}class Ce{$destroy(){qt(this,1),this.$destroy=E}$on(e,n){if(!H(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{we as $,qt as A,ge as B,E as C,At as D,Jt as E,Qt as F,Ut as G,Kt as H,Gt as I,de as J,Zt as K,Z as L,ht as M,fe as N,B as O,$e as P,ye as Q,Ee as R,Ce as S,C as T,ve as U,Vt as V,kt as W,re as X,ae as Y,pe as Z,Ne as _,te as a,Xt as a0,H as a1,le as a2,ie as a3,Yt as b,oe as c,xe as d,ee as e,_t as f,be as g,U as h,Se as i,me as j,V as k,se as l,St as m,ne as n,he as o,ue as p,X as q,Mt as r,It as s,Wt as t,ce as u,et as v,_e as w,Ae as x,ke as y,Ht as z};
