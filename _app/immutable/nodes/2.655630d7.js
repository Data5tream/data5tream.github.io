import{S as F,i as N,s as z,k as w,q as R,a as j,l as E,m as x,r as G,h as d,c as q,n as f,b as y,C as p,u as W,D as B,J as X,y as A,z as C,A as H,g as P,v as ue,f as fe,d as T,B as O,K as he,L as ge,M as de,N as U,O as me,P as ee,Q as te,R as ve,T as _e}from"../chunks/index.30a7b676.js";function le(i,e,s){const t=i.slice();return t[5]=e[s],t}function se(i){let e,s=i[5].name+"",t,l,a;return{c(){e=w("span"),t=R(s),l=j(),this.h()},l(o){e=E(o,"SPAN",{class:!0});var c=x(e);t=G(c,s),l=q(c),c.forEach(d),this.h()},h(){f(e,"class",a="rounded-full border px-1.5 text-xs "+i[5].classes)},m(o,c){y(o,e,c),p(e,t),p(e,l)},p(o,c){c&16&&s!==(s=o[5].name+"")&&W(t,s),c&16&&a!==(a="rounded-full border px-1.5 text-xs "+o[5].classes)&&f(e,"class",a)},d(o){o&&d(e)}}}function re(i){let e,s;return{c(){e=w("a"),s=R("Source"),this.h()},l(t){e=E(t,"A",{class:!0,href:!0});var l=x(e);s=G(l,"Source"),l.forEach(d),this.h()},h(){f(e,"class","btn svelte-rc0diq"),f(e,"href",i[3])},m(t,l){y(t,e,l),p(e,s)},p(t,l){l&8&&f(e,"href",t[3])},d(t){t&&d(e)}}}function ae(i){let e,s;return{c(){e=w("a"),s=R("More info"),this.h()},l(t){e=E(t,"A",{class:!0,href:!0});var l=x(e);s=G(l,"More info"),l.forEach(d),this.h()},h(){f(e,"class","btn svelte-rc0diq"),f(e,"href",i[2])},m(t,l){y(t,e,l),p(e,s)},p(t,l){l&4&&f(e,"href",t[2])},d(t){t&&d(e)}}}function pe(i){let e,s,t,l,a,o,c,u,m,r,D,n,b,h=i[4],$=[];for(let g=0;g<h.length;g+=1)$[g]=se(le(i,h,g));let k=i[3]&&re(i),_=i[2]&&ae(i);return{c(){e=w("div"),s=w("header"),t=R(i[0]),l=j(),a=w("article"),o=w("p"),c=R(i[1]),u=j(),m=w("footer"),r=w("div");for(let g=0;g<$.length;g+=1)$[g].c();D=j(),n=w("div"),k&&k.c(),b=j(),_&&_.c(),this.h()},l(g){e=E(g,"DIV",{class:!0});var I=x(e);s=E(I,"HEADER",{class:!0});var S=x(s);t=G(S,i[0]),S.forEach(d),l=q(I),a=E(I,"ARTICLE",{class:!0});var M=x(a);o=E(M,"P",{});var v=x(o);c=G(v,i[1]),v.forEach(d),M.forEach(d),u=q(I),m=E(I,"FOOTER",{class:!0});var V=x(m);r=E(V,"DIV",{class:!0});var J=x(r);for(let Q=0;Q<$.length;Q+=1)$[Q].l(J);J.forEach(d),D=q(V),n=E(V,"DIV",{class:!0});var L=x(n);k&&k.l(L),b=q(L),_&&_.l(L),L.forEach(d),V.forEach(d),I.forEach(d),this.h()},h(){f(s,"class","svelte-rc0diq"),f(a,"class","svelte-rc0diq"),f(r,"class","flex gap-1 items-end"),f(n,"class","flex gap-2"),f(m,"class","svelte-rc0diq"),f(e,"class","border border-brand-200 rounded text-left flex flex-col")},m(g,I){y(g,e,I),p(e,s),p(s,t),p(e,l),p(e,a),p(a,o),p(o,c),p(e,u),p(e,m),p(m,r);for(let S=0;S<$.length;S+=1)$[S]&&$[S].m(r,null);p(m,D),p(m,n),k&&k.m(n,null),p(n,b),_&&_.m(n,null)},p(g,[I]){if(I&1&&W(t,g[0]),I&2&&W(c,g[1]),I&16){h=g[4];let S;for(S=0;S<h.length;S+=1){const M=le(g,h,S);$[S]?$[S].p(M,I):($[S]=se(M),$[S].c(),$[S].m(r,null))}for(;S<$.length;S+=1)$[S].d(1);$.length=h.length}g[3]?k?k.p(g,I):(k=re(g),k.c(),k.m(n,b)):k&&(k.d(1),k=null),g[2]?_?_.p(g,I):(_=ae(g),_.c(),_.m(n,null)):_&&(_.d(1),_=null)},i:B,o:B,d(g){g&&d(e),X($,g),k&&k.d(),_&&_.d()}}}function be(i,e,s){let{title:t}=e,{desc:l}=e,{link:a}=e,{source:o}=e,{tags:c}=e;return i.$$set=u=>{"title"in u&&s(0,t=u.title),"desc"in u&&s(1,l=u.desc),"link"in u&&s(2,a=u.link),"source"in u&&s(3,o=u.source),"tags"in u&&s(4,c=u.tags)},[t,l,a,o,c]}class $e extends F{constructor(e){super(),N(this,e,be,pe,z,{title:0,desc:1,link:2,source:3,tags:4})}}function we(i){let e,s;return{c(){e=w("h2"),s=R(i[0]),this.h()},l(t){e=E(t,"H2",{class:!0});var l=x(e);s=G(l,i[0]),l.forEach(d),this.h()},h(){f(e,"class","py-4 px-2 text-3xl sm:text-4xl tracking-wide text-center")},m(t,l){y(t,e,l),p(e,s)},p(t,[l]){l&1&&W(s,t[0])},i:B,o:B,d(t){t&&d(e)}}}function Ee(i,e,s){let{title:t="Section title"}=e;return i.$$set=l=>{"title"in l&&s(0,t=l.title)},[t]}class Y extends F{constructor(e){super(),N(this,e,Ee,we,z,{title:0})}}function ie(i,e,s){const t=i.slice();return t[1]=e[s],t}function ne(i){let e,s;const t=[i[1]];let l={};for(let a=0;a<t.length;a+=1)l=he(l,t[a]);return e=new $e({props:l}),{c(){A(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,o){H(e,a,o),s=!0},p(a,o){const c=o&1?ge(t,[de(a[1])]):{};e.$set(c)},i(a){s||(P(e.$$.fragment,a),s=!0)},o(a){T(e.$$.fragment,a),s=!1},d(a){O(e,a)}}}function ke(i){let e,s,t,l,a,o,c,u;t=new Y({props:{title:"Open Source projects"}});let m=i[0],r=[];for(let n=0;n<m.length;n+=1)r[n]=ne(ie(i,m,n));const D=n=>T(r[n],1,1,()=>{r[n]=null});return{c(){e=w("div"),s=w("div"),A(t.$$.fragment),l=j(),a=w("div"),o=w("div"),c=w("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=E(n,"DIV",{class:!0});var b=x(e);s=E(b,"DIV",{class:!0});var h=x(s);C(t.$$.fragment,h),h.forEach(d),b.forEach(d),l=q(n),a=E(n,"DIV",{class:!0});var $=x(a);o=E($,"DIV",{class:!0});var k=x(o);c=E(k,"DIV",{class:!0});var _=x(c);for(let g=0;g<r.length;g+=1)r[g].l(_);_.forEach(d),k.forEach(d),$.forEach(d),this.h()},h(){f(s,"class","container mx-auto"),f(e,"class","bg-brand-1000 text-white"),f(c,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-0"),f(o,"class","container mx-auto py-4"),f(a,"class","bg-brand-50")},m(n,b){y(n,e,b),p(e,s),H(t,s,null),y(n,l,b),y(n,a,b),p(a,o),p(o,c);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(c,null);u=!0},p(n,[b]){if(b&1){m=n[0];let h;for(h=0;h<m.length;h+=1){const $=ie(n,m,h);r[h]?(r[h].p($,b),P(r[h],1)):(r[h]=ne($),r[h].c(),P(r[h],1),r[h].m(c,null))}for(ue(),h=m.length;h<r.length;h+=1)D(h);fe()}},i(n){if(!u){P(t.$$.fragment,n);for(let b=0;b<m.length;b+=1)P(r[b]);u=!0}},o(n){T(t.$$.fragment,n),r=r.filter(Boolean);for(let b=0;b<r.length;b+=1)T(r[b]);u=!1},d(n){n&&d(e),O(t),n&&d(l),n&&d(a),X(r,n)}}}function Ie(i){return[[{title:"Simple Status Page",desc:"Simple status page written in Rust and Svelte",link:"",source:"https://github.com/Data5tream/simple-status-page",tags:[{name:"Rust",classes:"border-transparent bg-orange-300"},{name:"Svelte",classes:"border-transparent bg-orange-500 text-white"},{name:"WIP",classes:"border-amber-500 text-amber-500"}]},{title:"Monolog web viewer",desc:"View monolog log files in the browser",link:"https://data5tream.github.io/monolog-web-viewer/",source:"https://github.com/Data5tream/monolog-web-viewer",tags:[{name:"Svelte",classes:"border-transparent bg-orange-500 text-white"},{name:"WIP",classes:"border-amber-500 text-amber-500"}]},{title:"HQ Invoice",desc:"Generate an itemized list from HelloHQ reporting CSV",link:"https://data5tream.github.io/hq-invoice/",source:"https://github.com/Data5tream/hq-invoice",tags:[{name:"Vue",classes:"border-transparent bg-green-400"}]}]]}class xe extends F{constructor(e){super(),N(this,e,Ie,ke,z,{})}}function oe(i,e,s){const t=i.slice();return t[1]=e[s],t}function ce(i){let e,s;return{c(){e=w("img"),this.h()},l(t){e=E(t,"IMG",{src:!0,title:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){U(e.src,s=De+i[1].url)||f(e,"src",s),f(e,"title",i[1].title),f(e,"alt",i[1].title),f(e,"width","42"),f(e,"height","42"),f(e,"class","svelte-82d5ux")},m(t,l){y(t,e,l)},p:B,d(t){t&&d(e)}}}function Se(i){let e,s,t,l,a;s=new Y({props:{title:"Languages"}});let o=i[0],c=[];for(let u=0;u<o.length;u+=1)c[u]=ce(oe(i,o,u));return{c(){e=w("div"),A(s.$$.fragment),t=j(),l=w("div");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var m=x(e);C(s.$$.fragment,m),t=q(m),l=E(m,"DIV",{class:!0});var r=x(l);for(let D=0;D<c.length;D+=1)c[D].l(r);r.forEach(d),m.forEach(d),this.h()},h(){f(l,"class","flex justify-center flex-wrap gap-2"),f(e,"class","container mx-auto")},m(u,m){y(u,e,m),H(s,e,null),p(e,t),p(e,l);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(l,null);a=!0},p(u,[m]){if(m&1){o=u[0];let r;for(r=0;r<o.length;r+=1){const D=oe(u,o,r);c[r]?c[r].p(D,m):(c[r]=ce(D),c[r].c(),c[r].m(l,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=o.length}},i(u){a||(P(s.$$.fragment,u),a=!0)},o(u){T(s.$$.fragment,u),a=!1},d(u){u&&d(e),O(s),X(c,u)}}}const De="https://raw.githubusercontent.com/devicons/devicon/master/icons/";function Ve(i){return[[{url:"javascript/javascript-original.svg",title:"JavaScript"},{url:"mysql/mysql-original.svg",title:"MySQL"},{url:"php/php-original.svg",title:"PHP"},{url:"postgresql/postgresql-plain.svg",title:"PostgreSQL"},{url:"python/python-original.svg",title:"python"},{url:"rust/rust-plain.svg",title:"Rust"},{url:"sass/sass-original.svg",title:"SASS"},{url:"svelte/svelte-original.svg",title:"Svelte"},{url:"typescript/typescript-original.svg",title:"TypeScript"},{url:"vuejs/vuejs-original.svg",title:"Vue"}]]}class ye extends F{constructor(e){super(),N(this,e,Ve,Se,z,{})}}function je(i){let e,s,t,l,a,o,c,u,m,r,D,n,b,h,$,k;return s=new Y({props:{title:"Links"}}),{c(){e=w("div"),A(s.$$.fragment),t=j(),l=w("div"),a=w("a"),o=w("img"),u=j(),m=w("a"),r=w("img"),n=j(),b=w("a"),h=w("img"),this.h()},l(_){e=E(_,"DIV",{class:!0});var g=x(e);C(s.$$.fragment,g),t=q(g),l=E(g,"DIV",{class:!0});var I=x(l);a=E(I,"A",{href:!0});var S=x(a);o=E(S,"IMG",{src:!0,alt:!0}),S.forEach(d),u=q(I),m=E(I,"A",{href:!0});var M=x(m);r=E(M,"IMG",{src:!0,alt:!0}),M.forEach(d),n=q(I),b=E(I,"A",{href:!0});var v=x(b);h=E(v,"IMG",{src:!0,alt:!0}),v.forEach(d),I.forEach(d),g.forEach(d),this.h()},h(){U(o.src,c="https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white")||f(o,"src",c),f(o,"alt","Mastodon badge"),f(a,"href","https://mastodon.online/@data5tream"),U(r.src,D="https://img.shields.io/badge/Matrix-black?style=for-the-badge&logo=matrix&logoColor=white")||f(r,"src",D),f(r,"alt","Matrix badge"),f(m,"href","https://matrix.to/#/@data5tream:chat.blueignis.es"),U(h.src,$="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white")||f(h,"src",$),f(h,"alt","LinkedIn badge"),f(b,"href","https://linkedin.com/in/simonstbarth"),f(l,"class","flex justify-center gap-2"),f(e,"class","container sm:mx-auto")},m(_,g){y(_,e,g),H(s,e,null),p(e,t),p(e,l),p(l,a),p(a,o),p(l,u),p(l,m),p(m,r),p(l,n),p(l,b),p(b,h),k=!0},p:B,i(_){k||(P(s.$$.fragment,_),k=!0)},o(_){T(s.$$.fragment,_),k=!1},d(_){_&&d(e),O(s)}}}class qe extends F{constructor(e){super(),N(this,e,null,je,z,{})}}const{window:K}=_e;function Me(i){let e=!1,s=()=>{e=!1},t,l,a,o,c,u,m,r,D,n,b,h,$,k,_,g,I,S,M;return me(i[2]),n=new xe({}),$=new ye({}),g=new qe({}),{c(){l=w("div"),a=w("div"),o=w("img"),u=j(),m=w("button"),r=R("↓"),D=j(),A(n.$$.fragment),b=j(),h=w("div"),A($.$$.fragment),k=j(),_=w("div"),A(g.$$.fragment),this.h()},l(v){l=E(v,"DIV",{class:!0});var V=x(l);a=E(V,"DIV",{});var J=x(a);o=E(J,"IMG",{alt:!0,class:!0,src:!0}),J.forEach(d),u=q(V),m=E(V,"BUTTON",{class:!0});var L=x(m);r=G(L,"↓"),L.forEach(d),V.forEach(d),D=q(v),C(n.$$.fragment,v),b=q(v),h=E(v,"DIV",{class:!0});var Q=x(h);C($.$$.fragment,Q),Q.forEach(d),k=q(v),_=E(v,"DIV",{class:!0});var Z=x(_);C(g.$$.fragment,Z),Z.forEach(d),this.h()},h(){f(o,"alt","BlueIgnis logo"),f(o,"class","w-64"),U(o.src,c="/blueignis_logo.svg")||f(o,"src",c),f(m,"class","pointer svelte-1luce7m"),ee(m,"animate-bounce",i[0]<128),f(l,"class","landing-container svelte-1luce7m"),f(h,"class","bg-brand-1000 text-white pb-8"),f(_,"class","bg-brand-50 pb-8")},m(v,V){y(v,l,V),p(l,a),p(a,o),p(l,u),p(l,m),p(m,r),y(v,D,V),H(n,v,V),y(v,b,V),y(v,h,V),H($,h,null),y(v,k,V),y(v,_,V),H(g,_,null),I=!0,S||(M=[te(K,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),i[2]()}),te(m,"click",i[1])],S=!0)},p(v,[V]){V&1&&!e&&(e=!0,clearTimeout(t),scrollTo(K.pageXOffset,v[0]),t=setTimeout(s,100)),(!I||V&1)&&ee(m,"animate-bounce",v[0]<128)},i(v){I||(P(n.$$.fragment,v),P($.$$.fragment,v),P(g.$$.fragment,v),I=!0)},o(v){T(n.$$.fragment,v),T($.$$.fragment,v),T(g.$$.fragment,v),I=!1},d(v){v&&d(l),v&&d(D),O(n,v),v&&d(b),v&&d(h),O($),v&&d(k),v&&d(_),O(g),S=!1,ve(M)}}}function Pe(i,e,s){let t;const l=()=>{window.scroll({left:0,top:window.innerHeight,behavior:"smooth"})};function a(){s(0,t=K.pageYOffset)}return[t,l,a]}class Le extends F{constructor(e){super(),N(this,e,Pe,Me,z,{})}}export{Le as component};
