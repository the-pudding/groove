function f(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}class p extends Map{constructor(n,e=c){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),n!=null)for(const[s,h]of n)this.set(s,h)}get(n){return super.get(i(this,n))}has(n){return super.has(i(this,n))}set(n,e){return super.set(u(this,n),e)}delete(n){return super.delete(o(this,n))}}function i({_intern:t,_key:n},e){const s=n(e);return t.has(s)?t.get(s):e}function u({_intern:t,_key:n},e){const s=n(e);return t.has(s)?t.get(s):(t.set(s,e),e)}function o({_intern:t,_key:n},e){const s=n(e);return t.has(s)&&(e=t.get(s),t.delete(s)),e}function c(t){return t!==null&&typeof t=="object"?t.valueOf():t}function r(t,n,e){this.k=t,this.x=n,this.y=e}r.prototype={constructor:r,scale:function(t){return t===1?this:new r(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new r(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new r(1,0,0);r.prototype;export{p as I,f as d};
