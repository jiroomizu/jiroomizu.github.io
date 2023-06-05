import{c as S,P as Z}from"../chunks/Paragraph.674ce13a.js";import{S as D,i as P,s as O,k as d,a as w,l as g,m as k,c as E,h,n as _,b as m,D as p,H as B,q as $,r as y,J as Q,u as T,K as W,y as j,z as N,L,A,g as b,v as X,d as v,f as Y,B as C,e as q,M as x,N as ee}from"../chunks/index.c026b681.js";function te({fetch:c}){const e=`{
      getAllPosts {
        id
        title
        link
        content
        tags {
          tag {
            name
          }
        }
        categories {
          category {
            name
          }
        }
      }
    }`;return{posts:(async()=>await(await(await(await c(S.apiURL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})})).json()).data.getAllPosts).map(r=>(r.categoriesStr=r.categories.map(s=>s.category.name),r.tagsStr=r.tags.map(s=>s.tag.name),r)))()}}const de=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function z(c,e,a){const t=c.slice();return t[2]=e[a],t[4]=a,t}function H(c,e,a){const t=c.slice();return t[5]=e[a],t[4]=a,t}function I(c){let e,a,t,l=[],n=new Map,o=c[0];const i=r=>r[5];for(let r=0;r<o.length;r+=1){let s=H(c,o,r),f=i(s);n.set(f,l[r]=J(f,s))}return{c(){e=d("dl"),a=d("dt"),t=$("Contribution:");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=g(r,"DL",{class:!0});var s=k(e);a=g(s,"DT",{class:!0});var f=k(a);t=y(f,"Contribution:"),f.forEach(h);for(let u=0;u<l.length;u+=1)l[u].l(s);s.forEach(h),this.h()},h(){_(a,"class","tags__title svelte-1304bhd"),_(e,"class","tags svelte-1304bhd")},m(r,s){m(r,e,s),p(e,a),p(a,t);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(r,s){s&1&&(o=r[0],l=Q(l,s,i,1,r,o,n,e,W,J,null,H))},d(r){r&&h(e);for(let s=0;s<l.length;s+=1)l[s].d()}}}function J(c,e){let a,t=e[5]+"",l,n;return{key:c,first:null,c(){a=d("dd"),l=$(t),this.h()},l(o){a=g(o,"DD",{"data-index":!0,class:!0});var i=k(a);l=y(i,t),i.forEach(h),this.h()},h(){_(a,"data-index",n=e[4]),_(a,"class","tags__definition svelte-1304bhd"),this.first=a},m(o,i){m(o,a,i),p(a,l)},p(o,i){e=o,i&1&&t!==(t=e[5]+"")&&T(l,t),i&1&&n!==(n=e[4])&&_(a,"data-index",n)},d(o){o&&h(a)}}}function K(c){let e,a,t,l=[],n=new Map,o=c[1];const i=r=>r[2];for(let r=0;r<o.length;r+=1){let s=z(c,o,r),f=i(s);n.set(f,l[r]=R(f,s))}return{c(){e=d("dl"),a=d("dt"),t=$("Tools:");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=g(r,"DL",{class:!0});var s=k(e);a=g(s,"DT",{class:!0});var f=k(a);t=y(f,"Tools:"),f.forEach(h);for(let u=0;u<l.length;u+=1)l[u].l(s);s.forEach(h),this.h()},h(){_(a,"class","tags__title svelte-1304bhd"),_(e,"class","tags svelte-1304bhd")},m(r,s){m(r,e,s),p(e,a),p(a,t);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(r,s){s&2&&(o=r[1],l=Q(l,s,i,1,r,o,n,e,W,R,null,z))},d(r){r&&h(e);for(let s=0;s<l.length;s+=1)l[s].d()}}}function R(c,e){let a,t=e[2]+"",l,n;return{key:c,first:null,c(){a=d("dd"),l=$(t),this.h()},l(o){a=g(o,"DD",{"data-index":!0,class:!0});var i=k(a);l=y(i,t),i.forEach(h),this.h()},h(){_(a,"data-index",n=e[4]),_(a,"class","tags__definition svelte-1304bhd"),this.first=a},m(o,i){m(o,a,i),p(a,l)},p(o,i){e=o,i&2&&t!==(t=e[2]+"")&&T(l,t),i&2&&n!==(n=e[4])&&_(a,"data-index",n)},d(o){o&&h(a)}}}function le(c){let e,a,t=c[0].length>0&&I(c),l=c[1].length>0&&K(c);return{c(){e=d("div"),t&&t.c(),a=w(),l&&l.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=k(e);t&&t.l(o),a=E(o),l&&l.l(o),o.forEach(h),this.h()},h(){_(e,"class","row svelte-1304bhd")},m(n,o){m(n,e,o),t&&t.m(e,null),p(e,a),l&&l.m(e,null)},p(n,[o]){n[0].length>0?t?t.p(n,o):(t=I(n),t.c(),t.m(e,a)):t&&(t.d(1),t=null),n[1].length>0?l?l.p(n,o):(l=K(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:B,o:B,d(n){n&&h(e),t&&t.d(),l&&l.d()}}}function ae(c,e,a){let{categories:t=[]}=e,{tags:l=[]}=e;return c.$$set=n=>{"categories"in n&&a(0,t=n.categories),"tags"in n&&a(1,l=n.tags)},[t,l]}class se extends D{constructor(e){super(),P(this,e,ae,le,O,{categories:0,tags:1})}}function U(c){let e;function a(n,o){return n[0].link?ie:ne}let t=a(c),l=t(c);return{c(){e=d("h2"),l.c(),this.h()},l(n){e=g(n,"H2",{class:!0});var o=k(e);l.l(o),o.forEach(h),this.h()},h(){_(e,"class","block__heading svelte-e1w8in")},m(n,o){m(n,e,o),l.m(e,null)},p(n,o){t===(t=a(n))&&l?l.p(n,o):(l.d(1),l=t(n),l&&(l.c(),l.m(e,null)))},d(n){n&&h(e),l.d()}}}function ne(c){let e=c[0].title+"",a;return{c(){a=$(e)},l(t){a=y(t,e)},m(t,l){m(t,a,l)},p(t,l){l&1&&e!==(e=t[0].title+"")&&T(a,e)},d(t){t&&h(a)}}}function ie(c){let e,a=c[0].title+"",t,l,n;return{c(){e=d("a"),t=$(a),this.h()},l(o){e=g(o,"A",{class:!0,href:!0,title:!0});var i=k(e);t=y(i,a),i.forEach(h),this.h()},h(){_(e,"class","block__anchor svelte-e1w8in"),_(e,"href",l=c[0].link),_(e,"title",n=`To ${c[0].title}`)},m(o,i){m(o,e,i),p(e,t)},p(o,i){i&1&&a!==(a=o[0].title+"")&&T(t,a),i&1&&l!==(l=o[0].link)&&_(e,"href",l),i&1&&n!==(n=`To ${o[0].title}`)&&_(e,"title",n)},d(o){o&&h(e)}}}function V(c){let e,a;return e=new se({props:{categories:c[0].categoriesStr,tags:c[0].tagsStr}}),{c(){j(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){A(e,t,l),a=!0},p(t,l){const n={};l&1&&(n.categories=t[0].categoriesStr),l&1&&(n.tags=t[0].tagsStr),e.$set(n)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function oe(c){let e,a,t,l,n,o,i=!!c[0].title&&U(c);t=new Z({props:{content:c[0].content}});let r=(c[0].categoriesStr.length>0||c[0].tagsStr.length>0)&&V(c);return{c(){e=d("section"),i&&i.c(),a=w(),j(t.$$.fragment),l=w(),r&&r.c(),this.h()},l(s){e=g(s,"SECTION",{class:!0});var f=k(e);i&&i.l(f),a=E(f),N(t.$$.fragment,f),l=E(f),r&&r.l(f),f.forEach(h),this.h()},h(){_(e,"class",n=L(c[2][c[1]]?`block block--${c[2][c[1]]}`:"block")+" svelte-e1w8in")},m(s,f){m(s,e,f),i&&i.m(e,null),p(e,a),A(t,e,null),p(e,l),r&&r.m(e,null),o=!0},p(s,[f]){s[0].title?i?i.p(s,f):(i=U(s),i.c(),i.m(e,a)):i&&(i.d(1),i=null);const u={};f&1&&(u.content=s[0].content),t.$set(u),s[0].categoriesStr.length>0||s[0].tagsStr.length>0?r?(r.p(s,f),f&1&&b(r,1)):(r=V(s),r.c(),b(r,1),r.m(e,null)):r&&(X(),v(r,1,1,()=>{r=null}),Y()),(!o||f&2&&n!==(n=L(s[2][s[1]]?`block block--${s[2][s[1]]}`:"block")+" svelte-e1w8in"))&&_(e,"class",n)},i(s){o||(b(t.$$.fragment,s),b(r),o=!0)},o(s){v(t.$$.fragment,s),v(r),o=!1},d(s){s&&h(e),i&&i.d(),C(t),r&&r.d()}}}function re(c,e,a){let{data:t={id:0,title:"",link:"",content:"",categoriesStr:[],tagsStr:[]}}=e;const l={narrow:"narrow",default:null};let n;return t.title?t||(n="default"):n="narrow",c.$$set=o=>{"data"in o&&a(0,t=o.data)},[t,n,l]}class ce extends D{constructor(e){super(),P(this,e,re,oe,O,{data:0})}}function F(c,e,a){const t=c.slice();return t[1]=e[a],t}function G(c){let e,a;return e=new ce({props:{data:c[1]}}),{c(){j(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){A(e,t,l),a=!0},p(t,l){const n={};l&1&&(n.data=t[1]),e.$set(n)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function fe(c){let e,a,t,l,n;document.title=e=S.siteName;let o=c[0].posts,i=[];for(let s=0;s<o.length;s+=1)i[s]=G(F(c,o,s));const r=s=>v(i[s],1,1,()=>{i[s]=null});return{c(){a=d("meta"),t=w();for(let s=0;s<i.length;s+=1)i[s].c();l=q(),this.h()},l(s){const f=x("svelte-1esbn4y",document.head);a=g(f,"META",{name:!0,content:!0}),f.forEach(h),t=E(s);for(let u=0;u<i.length;u+=1)i[u].l(s);l=q(),this.h()},h(){_(a,"name","description"),_(a,"content",S.shortDesc)},m(s,f){p(document.head,a),m(s,t,f);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(s,f);m(s,l,f),n=!0},p(s,[f]){if((!n||f&0)&&e!==(e=S.siteName)&&(document.title=e),f&1){o=s[0].posts;let u;for(u=0;u<o.length;u+=1){const M=F(s,o,u);i[u]?(i[u].p(M,f),b(i[u],1)):(i[u]=G(M),i[u].c(),b(i[u],1),i[u].m(l.parentNode,l))}for(X(),u=o.length;u<i.length;u+=1)r(u);Y()}},i(s){if(!n){for(let f=0;f<o.length;f+=1)b(i[f]);n=!0}},o(s){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)v(i[f]);n=!1},d(s){h(a),s&&h(t),ee(i,s),s&&h(l)}}}function ue(c,e,a){let{data:t}=e;return c.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class ge extends D{constructor(e){super(),P(this,e,ue,fe,O,{data:0})}}export{ge as component,de as universal};
