import{S as N,i as z,s as J,k as w,q as A,a as y,l as E,m as k,r as H,h as f,c as q,n as v,b as S,D as p,u as F,C as G,J as W,x as M,y as C,z as Q,f as T,g as ue,d as fe,t as L,A as R,K as de,L as he,M as ge,N as ce,O as me,P as Z,Q as ee,R as ve,T as _e}from"../../chunks/index-35cf8b5b.js";function te(i,e,l){const t=i.slice();return t[5]=e[l],t}function le(i){let e,l=i[5].name+"",t,s,a;return{c(){e=w("span"),t=A(l),s=y(),this.h()},l(u){e=E(u,"SPAN",{class:!0});var r=k(e);t=H(r,l),s=q(r),r.forEach(f),this.h()},h(){v(e,"class",a="rounded-full border px-1.5 text-xs "+i[5].classes)},m(u,r){S(u,e,r),p(e,t),p(e,s)},p(u,r){r&16&&l!==(l=u[5].name+"")&&F(t,l),r&16&&a!==(a="rounded-full border px-1.5 text-xs "+u[5].classes)&&v(e,"class",a)},d(u){u&&f(e)}}}function se(i){let e,l;return{c(){e=w("a"),l=A("Source"),this.h()},l(t){e=E(t,"A",{class:!0,href:!0});var s=k(e);l=H(s,"Source"),s.forEach(f),this.h()},h(){v(e,"class","btn svelte-1aegdpa"),v(e,"href",i[3])},m(t,s){S(t,e,s),p(e,l)},p(t,s){s&8&&v(e,"href",t[3])},d(t){t&&f(e)}}}function ie(i){let e,l;return{c(){e=w("a"),l=A("More info"),this.h()},l(t){e=E(t,"A",{class:!0,href:!0});var s=k(e);l=H(s,"More info"),s.forEach(f),this.h()},h(){v(e,"class","btn svelte-1aegdpa"),v(e,"href",i[2])},m(t,s){S(t,e,s),p(e,l)},p(t,s){s&4&&v(e,"href",t[2])},d(t){t&&f(e)}}}function pe(i){let e,l,t,s,a,u,r,o,d,n,x,c,b,g=i[4],_=[];for(let h=0;h<g.length;h+=1)_[h]=le(te(i,g,h));let I=i[3]&&se(i),$=i[2]&&ie(i);return{c(){e=w("div"),l=w("header"),t=A(i[0]),s=y(),a=w("article"),u=w("p"),r=A(i[1]),o=y(),d=w("footer"),n=w("div");for(let h=0;h<_.length;h+=1)_[h].c();x=y(),c=w("div"),I&&I.c(),b=y(),$&&$.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var V=k(e);l=E(V,"HEADER",{class:!0});var D=k(l);t=H(D,i[0]),D.forEach(f),s=q(V),a=E(V,"ARTICLE",{class:!0});var P=k(a);u=E(P,"P",{});var m=k(u);r=H(m,i[1]),m.forEach(f),P.forEach(f),o=q(V),d=E(V,"FOOTER",{class:!0});var j=k(d);n=E(j,"DIV",{class:!0});var U=k(n);for(let B=0;B<_.length;B+=1)_[B].l(U);U.forEach(f),x=q(j),c=E(j,"DIV",{class:!0});var O=k(c);I&&I.l(O),b=q(O),$&&$.l(O),O.forEach(f),j.forEach(f),V.forEach(f),this.h()},h(){v(l,"class","svelte-1aegdpa"),v(a,"class","svelte-1aegdpa"),v(n,"class","flex gap-1 items-end"),v(c,"class","flex gap-2"),v(d,"class","svelte-1aegdpa"),v(e,"class","border border-brand-200 rounded text-left flex flex-col")},m(h,V){S(h,e,V),p(e,l),p(l,t),p(e,s),p(e,a),p(a,u),p(u,r),p(e,o),p(e,d),p(d,n);for(let D=0;D<_.length;D+=1)_[D].m(n,null);p(d,x),p(d,c),I&&I.m(c,null),p(c,b),$&&$.m(c,null)},p(h,[V]){if(V&1&&F(t,h[0]),V&2&&F(r,h[1]),V&16){g=h[4];let D;for(D=0;D<g.length;D+=1){const P=te(h,g,D);_[D]?_[D].p(P,V):(_[D]=le(P),_[D].c(),_[D].m(n,null))}for(;D<_.length;D+=1)_[D].d(1);_.length=g.length}h[3]?I?I.p(h,V):(I=se(h),I.c(),I.m(c,b)):I&&(I.d(1),I=null),h[2]?$?$.p(h,V):($=ie(h),$.c(),$.m(c,null)):$&&($.d(1),$=null)},i:G,o:G,d(h){h&&f(e),W(_,h),I&&I.d(),$&&$.d()}}}function be(i,e,l){let{title:t}=e,{desc:s}=e,{link:a}=e,{source:u}=e,{tags:r}=e;return i.$$set=o=>{"title"in o&&l(0,t=o.title),"desc"in o&&l(1,s=o.desc),"link"in o&&l(2,a=o.link),"source"in o&&l(3,u=o.source),"tags"in o&&l(4,r=o.tags)},[t,s,a,u,r]}class $e extends N{constructor(e){super(),z(this,e,be,pe,J,{title:0,desc:1,link:2,source:3,tags:4})}}function we(i){let e,l;return{c(){e=w("h2"),l=A(i[0]),this.h()},l(t){e=E(t,"H2",{class:!0});var s=k(e);l=H(s,i[0]),s.forEach(f),this.h()},h(){v(e,"class","py-4 text-4xl tracking-wide text-center")},m(t,s){S(t,e,s),p(e,l)},p(t,[s]){s&1&&F(l,t[0])},i:G,o:G,d(t){t&&f(e)}}}function Ee(i,e,l){let{title:t="Section title"}=e;return i.$$set=s=>{"title"in s&&l(0,t=s.title)},[t]}class X extends N{constructor(e){super(),z(this,e,Ee,we,J,{title:0})}}function re(i,e,l){const t=i.slice();return t[1]=e[l],t}function ae(i){let e,l;const t=[i[1]];let s={};for(let a=0;a<t.length;a+=1)s=de(s,t[a]);return e=new $e({props:s}),{c(){M(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,u){Q(e,a,u),l=!0},p(a,u){const r=u&1?he(t,[ge(a[1])]):{};e.$set(r)},i(a){l||(T(e.$$.fragment,a),l=!0)},o(a){L(e.$$.fragment,a),l=!1},d(a){R(e,a)}}}function ke(i){let e,l,t,s,a,u,r,o;t=new X({props:{title:"Open Source projects"}});let d=i[0],n=[];for(let c=0;c<d.length;c+=1)n[c]=ae(re(i,d,c));const x=c=>L(n[c],1,1,()=>{n[c]=null});return{c(){e=w("div"),l=w("div"),M(t.$$.fragment),s=y(),a=w("div"),u=w("div"),r=w("div");for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var b=k(e);l=E(b,"DIV",{class:!0});var g=k(l);C(t.$$.fragment,g),g.forEach(f),b.forEach(f),s=q(c),a=E(c,"DIV",{class:!0});var _=k(a);u=E(_,"DIV",{class:!0});var I=k(u);r=E(I,"DIV",{class:!0});var $=k(r);for(let h=0;h<n.length;h+=1)n[h].l($);$.forEach(f),I.forEach(f),_.forEach(f),this.h()},h(){v(l,"class","container mx-auto"),v(e,"class","bg-brand-1000 text-white"),v(r,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-0"),v(u,"class","container mx-auto py-4"),v(a,"class","bg-brand-50")},m(c,b){S(c,e,b),p(e,l),Q(t,l,null),S(c,s,b),S(c,a,b),p(a,u),p(u,r);for(let g=0;g<n.length;g+=1)n[g].m(r,null);o=!0},p(c,[b]){if(b&1){d=c[0];let g;for(g=0;g<d.length;g+=1){const _=re(c,d,g);n[g]?(n[g].p(_,b),T(n[g],1)):(n[g]=ae(_),n[g].c(),T(n[g],1),n[g].m(r,null))}for(ue(),g=d.length;g<n.length;g+=1)x(g);fe()}},i(c){if(!o){T(t.$$.fragment,c);for(let b=0;b<d.length;b+=1)T(n[b]);o=!0}},o(c){L(t.$$.fragment,c),n=n.filter(Boolean);for(let b=0;b<n.length;b+=1)L(n[b]);o=!1},d(c){c&&f(e),R(t),c&&f(s),c&&f(a),W(n,c)}}}function Ie(i){return[[{title:"HQ Invoice",desc:"Generate an itemized list from HelloHQ reporting CSV",link:"https://data5tream.github.io/hq-invoice/",source:"https://github.com/Data5tream/hq-invoice",tags:[{name:"Vue",classes:"border-transparent bg-green-400"}]},{title:"Monolog web viewer",desc:"View monolog log files in the browser",link:"https://data5tream.github.io/monolog-web-viewer/",source:"https://github.com/Data5tream/monolog-web-viewer",tags:[{name:"Svelte",classes:"border-transparent bg-orange-500 text-white"},{name:"WIP",classes:"border-amber-500 text-amber-500"}]}]]}class De extends N{constructor(e){super(),z(this,e,Ie,ke,J,{})}}function ne(i,e,l){const t=i.slice();return t[1]=e[l],t}function oe(i){let e,l;return{c(){e=w("img"),this.h()},l(t){e=E(t,"IMG",{src:!0,title:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){ce(e.src,l=je+i[1].url)||v(e,"src",l),v(e,"title",i[1].title),v(e,"alt",i[1].title),v(e,"width","42"),v(e,"height","42"),v(e,"class","svelte-1xg27b")},m(t,s){S(t,e,s)},p:G,d(t){t&&f(e)}}}function Ve(i){let e,l,t,s,a;l=new X({props:{title:"Languages"}});let u=i[0],r=[];for(let o=0;o<u.length;o+=1)r[o]=oe(ne(i,u,o));return{c(){e=w("div"),M(l.$$.fragment),t=y(),s=w("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var d=k(e);C(l.$$.fragment,d),t=q(d),s=E(d,"DIV",{class:!0});var n=k(s);for(let x=0;x<r.length;x+=1)r[x].l(n);n.forEach(f),d.forEach(f),this.h()},h(){v(s,"class","flex justify-center gap-2"),v(e,"class","container mx-auto")},m(o,d){S(o,e,d),Q(l,e,null),p(e,t),p(e,s);for(let n=0;n<r.length;n+=1)r[n].m(s,null);a=!0},p(o,[d]){if(d&1){u=o[0];let n;for(n=0;n<u.length;n+=1){const x=ne(o,u,n);r[n]?r[n].p(x,d):(r[n]=oe(x),r[n].c(),r[n].m(s,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=u.length}},i(o){a||(T(l.$$.fragment,o),a=!0)},o(o){L(l.$$.fragment,o),a=!1},d(o){o&&f(e),R(l),W(r,o)}}}const je="https://raw.githubusercontent.com/devicons/devicon/master/icons/";function xe(i){return[[{url:"javascript/javascript-original.svg",title:"JavaScript"},{url:"mysql/mysql-original.svg",title:"MySQL"},{url:"php/php-original.svg",title:"PHP"},{url:"postgresql/postgresql-plain.svg",title:"PostgreSQL"},{url:"python/python-original.svg",title:"python"},{url:"rust/rust-plain.svg",title:"Rust"},{url:"sass/sass-original.svg",title:"SASS"},{url:"svelte/svelte-original.svg",title:"Svelte"},{url:"typescript/typescript-original.svg",title:"TypeScript"},{url:"vuejs/vuejs-original.svg",title:"Vue"}]]}class Se extends N{constructor(e){super(),z(this,e,xe,Ve,J,{})}}function ye(i){let e,l,t,s,a,u;return l=new X({props:{title:"Links"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),s=w("div"),a=A("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid assumenda consectetur deleniti dicta, dolorum eius explicabo impedit libero modi nisi perferendis quaerat ratione reiciendis similique sunt veniam voluptatibus."),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=k(e);C(l.$$.fragment,o),t=q(o),s=E(o,"DIV",{class:!0});var d=k(s);a=H(d,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid assumenda consectetur deleniti dicta, dolorum eius explicabo impedit libero modi nisi perferendis quaerat ratione reiciendis similique sunt veniam voluptatibus."),d.forEach(f),o.forEach(f),this.h()},h(){v(s,"class","flex justify-center gap-2"),v(e,"class","container mx-auto")},m(r,o){S(r,e,o),Q(l,e,null),p(e,t),p(e,s),p(s,a),u=!0},p:G,i(r){u||(T(l.$$.fragment,r),u=!0)},o(r){L(l.$$.fragment,r),u=!1},d(r){r&&f(e),R(l)}}}class qe extends N{constructor(e){super(),z(this,e,null,ye,J,{})}}const{window:K}=_e;function Te(i){let e=!1,l=()=>{e=!1},t,s,a,u,r,o,d,n,x,c,b,g,_,I,$,h,V,D,P;return me(i[2]),c=new De({}),_=new Se({}),h=new qe({}),{c(){s=w("div"),a=w("div"),u=w("img"),o=y(),d=w("button"),n=A("↓"),x=y(),M(c.$$.fragment),b=y(),g=w("div"),M(_.$$.fragment),I=y(),$=w("div"),M(h.$$.fragment),this.h()},l(m){s=E(m,"DIV",{class:!0});var j=k(s);a=E(j,"DIV",{});var U=k(a);u=E(U,"IMG",{alt:!0,class:!0,src:!0}),U.forEach(f),o=q(j),d=E(j,"BUTTON",{class:!0});var O=k(d);n=H(O,"↓"),O.forEach(f),j.forEach(f),x=q(m),C(c.$$.fragment,m),b=q(m),g=E(m,"DIV",{class:!0});var B=k(g);C(_.$$.fragment,B),B.forEach(f),I=q(m),$=E(m,"DIV",{class:!0});var Y=k($);C(h.$$.fragment,Y),Y.forEach(f),this.h()},h(){v(u,"alt","BlueIgnis logo"),v(u,"class","w-64"),ce(u.src,r="/blueignis_logo.svg")||v(u,"src",r),v(d,"class","pointer svelte-1luce7m"),Z(d,"animate-bounce",i[0]<128),v(s,"class","landing-container svelte-1luce7m"),v(g,"class","bg-brand-1000 text-white pb-8"),v($,"class","bg-brand-50 pb-8")},m(m,j){S(m,s,j),p(s,a),p(a,u),p(s,o),p(s,d),p(d,n),S(m,x,j),Q(c,m,j),S(m,b,j),S(m,g,j),Q(_,g,null),S(m,I,j),S(m,$,j),Q(h,$,null),V=!0,D||(P=[ee(K,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),i[2]()}),ee(d,"click",i[1])],D=!0)},p(m,[j]){j&1&&!e&&(e=!0,clearTimeout(t),scrollTo(K.pageXOffset,m[0]),t=setTimeout(l,100)),(!V||j&1)&&Z(d,"animate-bounce",m[0]<128)},i(m){V||(T(c.$$.fragment,m),T(_.$$.fragment,m),T(h.$$.fragment,m),V=!0)},o(m){L(c.$$.fragment,m),L(_.$$.fragment,m),L(h.$$.fragment,m),V=!1},d(m){m&&f(s),m&&f(x),R(c,m),m&&f(b),m&&f(g),R(_),m&&f(I),m&&f($),R(h),D=!1,ve(P)}}}function Le(i,e,l){let t;const s=()=>{window.scroll({left:0,top:window.innerHeight,behavior:"smooth"})};function a(){l(0,t=K.pageYOffset)}return[t,s,a]}class Ae extends N{constructor(e){super(),z(this,e,Le,Te,J,{})}}export{Ae as default};
