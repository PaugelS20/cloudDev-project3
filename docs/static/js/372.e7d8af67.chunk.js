/*! For license information please see 372.e7d8af67.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproject4=self.webpackChunkproject4||[]).push([[372],{372:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>f,shadow:()=>c});var n=o(883),a=o(909);const r=t=>document.querySelector("".concat(t,".ion-cloned-element")),c=t=>t.shadowRoot||t,l=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const a of n){const t=a.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=a.querySelector("ion-back-button"),r=a.classList.contains("buttons-collapse"),c="start"===a.slot||""===a.slot;if(null!==n&&c&&(r&&o&&e||!r))return n}return null},i=(t,e,o,a,l,s,i,d,f)=>{var y,u;const p=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),b=e?"right":"left",g=e?"left":"right",h=e?"right":"left";let S=1,q=1,T="scale(".concat(q,")");const x="scale(1)";if(s&&i){const t=(null===(y=s.textContent)||void 0===y?void 0:y.trim())===(null===(u=d.textContent)||void 0===u?void 0:u.trim());S=f.width/i.width,q=(f.height-m)/i.height,T=t?"scale(".concat(S,", ").concat(q,")"):"scale(".concat(q,")")}const v=c(a).querySelector("ion-icon").getBoundingClientRect(),X="".concat(e?v.width/2-(v.right-l.right):l.left-v.width/2,"px"),E=e?"-".concat(window.innerWidth-l.right,"px"):"".concat(l.left,"px"),A="".concat(f.top,"px"),C="".concat(l.top,"px"),w=[{offset:0,transform:"translate3d(".concat(X,", ").concat(A,", 0)")},{offset:1,transform:"translate3d(".concat(E,", ").concat(C,", 0)")}],k=[{offset:0,transform:"translate3d(".concat(E,", ").concat(C,", 0)")},{offset:1,transform:"translate3d(".concat(X,", ").concat(A,", 0)")}],B=o?k:w,P=o?[{offset:0,opacity:1,transform:x},{offset:1,opacity:0,transform:T}]:[{offset:0,opacity:0,transform:T},{offset:1,opacity:1,transform:x}],R=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],W=(0,n.c)(),L=(0,n.c)(),N=(0,n.c)(),z=r("ion-back-button"),j=c(z).querySelector(".button-text"),D=c(z).querySelector("ion-icon");z.text=a.text,z.mode=a.mode,z.icon=a.icon,z.color=a.color,z.disabled=a.disabled,z.style.setProperty("display","block"),z.style.setProperty("position","fixed"),L.addElement(D),W.addElement(j),N.addElement(z),N.beforeStyles({position:"absolute",top:"0px",[h]:"0px"}).beforeAddWrite((()=>{a.style.setProperty("display","none"),z.style.setProperty(b,p)})).afterAddWrite((()=>{a.style.setProperty("display",""),z.style.setProperty("display","none"),z.style.removeProperty(b)})).keyframes(B),W.beforeStyles({"transform-origin":"".concat(b," top")}).keyframes(P),L.beforeStyles({"transform-origin":"".concat(g," center")}).keyframes(R),t.addAnimation([W,L,N])},d=(t,e,o,a,c,l,s,i,d)=>{var f,y;const u=e?"right":"left",p=e?"calc(100% - ".concat(c.right,"px)"):"".concat(c.left,"px"),b="".concat(c.top,"px");let g=e?"-".concat(window.innerWidth-s.right-8,"px"):"".concat(s.x+8,"px"),h=.5;const S="scale(1)";let q="scale(".concat(h,")");if(i&&d){g=e?"-".concat(window.innerWidth-d.right-8,"px"):"".concat(d.x-8,"px");const t=(null===(f=i.textContent)||void 0===f?void 0:f.trim())===(null===(y=a.textContent)||void 0===y?void 0:y.trim()),o=d.width/l.width;h=d.height/(l.height-m),q=t?"scale(".concat(o,", ").concat(h,")"):"scale(".concat(h,")")}const T=s.top+s.height/2,x=c.height*h/2,v="".concat(T-x,"px"),X=[{offset:0,opacity:0,transform:"translate3d(".concat(g,", ").concat(v,", 0) ").concat(q)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat("0px",", ").concat(b,", 0) ").concat(S)}],E=[{offset:0,opacity:.99,transform:"translate3d(".concat("0px",", ").concat(b,", 0) ").concat(S)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(g,", ").concat(v,", 0) ").concat(q)}],A=o?X:E,C=r("ion-title"),w=(0,n.c)();C.innerText=a.innerText,C.size=a.size,C.color=a.color,w.addElement(C),w.beforeStyles({"transform-origin":"".concat(u," top"),height:"".concat(c.height,"px"),display:"",position:"relative",[u]:p}).beforeAddWrite((()=>{a.style.setProperty("opacity","0")})).afterAddWrite((()=>{a.style.setProperty("opacity",""),C.style.setProperty("display","none")})).keyframes(A),t.addAnimation(w)},f=(t,e)=>{var o;try{const r="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",u=.8,p="rtl"===t.ownerDocument.dir,b=p?"-99.5%":"99.5%",g=p?"33%":"-33%",h=e.enteringEl,S=e.leavingEl,q="back"===e.direction,T=h.querySelector(":scope > ion-content"),x=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=h.querySelectorAll(":scope > ion-header > ion-toolbar"),X=(0,n.c)(),E=(0,n.c)();if(X.addElement(h).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||r).fill("both").beforeRemoveClass("ion-page-invisible"),S&&null!==t&&void 0!==t){const e=(0,n.c)();e.addElement(t),X.addAnimation(e)}if(T||0!==v.length||0!==x.length?(E.addElement(T),E.addElement(x)):E.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(E),q?E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")).fromTo(f,u,1):E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),T){const t=c(T).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),a=(0,n.c)(),r=(0,n.c)(),c=(0,n.c)();a.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),c.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),a.addAnimation([r,c]),E.addAnimation([a])}}const A=h.querySelector("ion-header.header-collapse-condense"),{forward:C,backward:w}=((t,e,o,n,a)=>{const r=s(n,o),f=l(a),m=l(n),y=s(a,o),u=null!==r&&null!==f&&!o,p=null!==m&&null!==y&&o;if(u){const n=f.getBoundingClientRect(),a=r.getBoundingClientRect(),l=c(r).querySelector(".button-text"),s=null===l||void 0===l?void 0:l.getBoundingClientRect(),m=c(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,a,l,s),i(t,e,o,r,a,l,s,f,m)}else if(p){const n=m.getBoundingClientRect(),a=y.getBoundingClientRect(),r=c(y).querySelector(".button-text"),l=null===r||void 0===r?void 0:r.getBoundingClientRect(),s=c(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,s,a,r,l),i(t,e,o,y,a,r,l,m,s)}return{forward:u,backward:p}})(X,p,q,h,S);if(v.forEach((t=>{const e=(0,n.c)();e.addElement(t),X.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const a=(0,n.c)(),r=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive");let i;i=q?r.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e})):r.filter((t=>!t.classList.contains("buttons-collapse"))),a.addElement(i);const d=(0,n.c)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=(0,n.c)();m.addElement(c(t).querySelector(".toolbar-background"));const u=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&u.addElement(h),e.addAnimation([o,a,d,m,u]),a.fromTo(f,.01,1),d.fromTo(f,.01,1),q)s||o.fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")),u.fromTo(f,.01,1);else{A||o.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),m.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?m.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),C||u.fromTo(f,.01,1),h&&!C){const t=(0,n.c)();t.addElement(c(h).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),S){const t=(0,n.c)(),e=S.querySelector(":scope > ion-content"),o=S.querySelectorAll(":scope > ion-header > ion-toolbar"),r=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==r.length?(t.addElement(e),t.addElement(r)):t.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(t),q){t.beforeClearStyles([f]).fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)");const e=(0,a.g)(S);X.afterAddWrite((()=>{"normal"===X.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).fromTo(f,1,u);if(e){const o=c(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),a=o.querySelector(".transition-shadow"),r=(0,n.c)(),c=(0,n.c)(),l=(0,n.c)();r.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),c.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),l.addElement(a).beforeClearStyles([f]).fromTo(f,.7,.03),r.addAnimation([c,l]),t.addAnimation([r])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const a=(0,n.c)(),r=t.querySelectorAll("ion-buttons,[menuToggle]"),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive"),i=Array.from(r).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e}));a.addElement(i);const d=(0,n.c)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&d.addElement(u);const b=(0,n.c)();b.addElement(c(t).querySelector(".toolbar-background"));const h=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&h.addElement(S),e.addAnimation([o,a,d,h,b]),X.addAnimation(e),h.fromTo(f,.99,0),a.fromTo(f,.99,0),d.fromTo(f,.99,0),q){s||o.fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?b.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),S&&!w){const t=(0,n.c)();t.addElement(c(S).querySelector(".button-text")).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat((p?-124:124)+"px",")")),e.addAnimation(t)}}else s||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).afterClearStyles([m,f]),h.afterClearStyles([f]),o.afterClearStyles([f]),a.afterClearStyles([f])}))}return X}catch(r){throw r}},m=10}}]);
//# sourceMappingURL=372.e7d8af67.chunk.js.map