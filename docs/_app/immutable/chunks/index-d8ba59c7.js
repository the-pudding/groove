function E(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function U(){return Object.create(null)}function C(t){t.forEach(Y)}function q(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Wt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function It(t,e,n,i,s,u){if(s){const r=Z(e,n,i,u);t.p(r,s)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Kt(t,e,n){return t.set(n),e}function Qt(t){return t&&q(t.destroy)?t.destroy:E}const tt=typeof window<"u";let mt=tt?()=>window.performance.now():()=>Date.now(),K=tt?t=>requestAnimationFrame(t):E;const k=new Set;function et(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(et)}function pt(t){let e;return k.size===0&&K(et),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let F=!1;function yt(){F=!0}function gt(){F=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:$t(1,s,h=>e[n[h]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(r[c],f)}}function wt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=st("style");return vt(nt(t),e),e.sheet}function vt(t,e){return wt(t.head||t,e),e.sheet}function Et(t,e){if(F){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){F&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Xt(){return Q(" ")}function Yt(){return Q("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t){return t===""?null:+t}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){St(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ot(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ne(t,e,n){return ot(t,e,n,st)}function ie(t,e,n){return ot(t,e,n,Nt)}function kt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function se(t){return kt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ue(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const u=s.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(s)):u===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ae(t,e){return new t(e)}const z=new Map;let B=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:bt(e),rules:{}};return z.set(t,n),n}function V(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);l+=y*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Mt(f)}_${o}`,h=nt(t),{stylesheet:a,rules:d}=z.get(h)||jt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,B+=1,_}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Tt())}function Tt(){K(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&it(e)}),z.clear())})}let T;function D(t){T=t}function O(){if(!T)throw new Error("Function called outside component initialization");return T}function fe(t){O().$$.on_mount.push(t)}function _e(t){O().$$.after_update.push(t)}function de(t){O().$$.on_destroy.push(t)}function he(t,e){return O().$$.context.set(t,e),e}function me(t){return O().$$.context.get(t)}const S=[],X=[],R=[],I=[],ct=Promise.resolve();let J=!1;function lt(){J||(J=!0,ct.then(ut))}function pe(){return lt(),ct}function H(t){R.push(t)}function ye(t){I.push(t)}const W=new Set;let A=0;function ut(){if(A!==0)return;const t=T;do{try{for(;A<S.length;){const e=S[A];A++,D(e),Ot(e.$$)}}catch(e){throw S.length=0,A=0,e}for(D(null),S.length=0,A=0;X.length;)X.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];W.has(n)||(W.add(n),n())}R.length=0}while(S.length);for(;I.length;)I.pop()();J=!1,W.clear(),D(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let j;function Pt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const L=new Set;let w;function ge(){w={r:0,c:[],p:w}}function $e(){w.r||C(w.c),w=w.p}function at(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),w.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Lt={duration:0};function xe(t,e,n,i){const s={direction:"both"};let u=e(t,n,s),r=i?0:1,o=null,c=null,l=null;function f(){l&&Dt(t,l)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ft,tick:g=E,css:b}=u||Lt,N={start:mt()+d,b:a};a||(N.group=w,w.r+=1),o||c?c=N:(b&&(f(),l=V(t,r,a,p,d,y,b)),a&&g(0,1),o=_(N,p),H(()=>G(t,a,"start")),pt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,G(t,o.b,"start"),b&&(f(),l=V(t,r,o.b,o.duration,0,y,u.css))),o){if(v>=o.end)g(r=o.b,1-r),G(t,o.b,"end"),c||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;r=o.a+o.d*y(M/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){q(u)?Pt().then(()=>{u=u(s),h(a)}):h(a)},end(){f(),o=c=null}}}function we(t,e){Rt(t,1,1,()=>{e.delete(t.key)})}function be(t,e,n,i,s,u,r,o,c,l,f,_){let h=t.length,a=u.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,b=new Map;for(d=a;d--;){const m=_(s,u,d),$=n(m);let x=r.get($);x?i&&x.p(m,e):(x=l($,m),x.c()),g.set($,y[d]=x),$ in p&&b.set($,Math.abs(d-p[$]))}const N=new Set,v=new Set;function M(m){at(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],x=m.key,P=$.key;m===$?(f=m.first,h--,a--):g.has(P)?!r.has(x)||N.has(x)?M(m):v.has(P)?h--:b.get(x)>b.get(P)?(v.add(x),M(m)):(N.add(P),h--):(c($,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)M(y[a-1]);return y}function ve(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ee(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(Y).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),u.forEach(H)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(S.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,s,u,r,o=[-1]){const c=T;D(t);const l=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&Ht(t,_)),h}):[],l.update(),f=!0,C(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){yt();const _=At(e.target);l.fragment&&l.fragment.l(_),_.forEach(it)}else l.fragment&&l.fragment.c();e.intro&&at(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),gt(),ut()}D(c)}class Se{$destroy(){Bt(this,1),this.$destroy=E}$on(e,n){if(!q(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,Bt as A,pe as B,E as C,Et as D,Wt as E,It as F,Jt as G,Gt as H,Ft as I,ue as J,Vt as K,Zt as L,ft as M,Nt as N,ie as O,le as P,H as Q,xe as R,Se as S,me as T,be as U,we as V,_t as W,mt as X,pt as Y,C as Z,he as _,Xt as a,ve as a0,ye as a1,Kt as a2,Qt as a3,q as a4,oe as a5,ee as a6,Ut as b,se as c,$e as d,Yt as e,at as f,ge as g,it as h,Ae as i,_e as j,st as k,ne as l,At as m,te as n,fe as o,ce as p,Q as q,kt as r,qt as s,Rt as t,re as u,X as v,ae as w,Ee as x,Ne as y,zt as z};