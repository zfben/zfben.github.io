(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1484)}])},3412:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",a="server-patch",f="prefetch",i="fast-refresh",c="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(7950),a=n(7387),f=n(6982),i=n(6921),c=n(7727),s=n(1973),d=n(6216),p=n(1722),h=n(6504),y=n(634),g=n(3412),v=new Set;function b(e,t,n,r,o,u){if(u||(0,a.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let j=u.default.forwardRef(function(e,t){let n,r;let{href:f,as:v,children:j,prefetch:m=null,passHref:x,replace:P,shallow:O,scroll:C,locale:E,onClick:T,onMouseEnter:w,onTouchStart:R,legacyBehavior:M=!1,...N}=e;n=j,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let A=u.default.useContext(s.RouterContext),k=u.default.useContext(d.AppRouterContext),I=null!=A?A:k,L=!A,S=!1!==m,K=null===m?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:U,as:D}=u.default.useMemo(()=>{if(!A){let e=_(f);return{href:e,as:v?_(v):e}}let[e,t]=(0,l.resolveHref)(A,f,!0);return{href:e,as:v?(0,l.resolveHref)(A,v):t||e}},[A,f,v]),F=u.default.useRef(U),H=u.default.useRef(D);M&&(r=u.default.Children.only(n));let z=M?r&&"object"==typeof r&&r.ref:t,[G,V,J]=(0,p.useIntersection)({rootMargin:"200px"}),W=u.default.useCallback(e=>{(H.current!==D||F.current!==U)&&(J(),H.current=D,F.current=U),G(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[D,z,U,J,G]);u.default.useEffect(()=>{I&&V&&S&&b(I,U,D,{locale:E},{kind:K},L)},[D,U,V,E,S,null==A?void 0:A.locale,I,L,K]);let X={ref:W,onClick(e){M||"function"!=typeof T||T(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,l,f,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==f||f;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?u.default.startTransition(d):d()}(e,I,U,D,P,O,C,E,L)},onMouseEnter(e){M||"function"!=typeof w||w(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(S||!L)&&b(I,U,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:K},L)},onTouchStart(e){M||"function"!=typeof R||R(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(S||!L)&&b(I,U,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:K},L)}};if((0,i.isAbsoluteUrl)(D))X.href=D;else if(!M||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);X.href=t||(0,y.addBasePath)((0,c.addLocale)(D,e,null==A?void 0:A.defaultLocale))}return M?u.default.cloneElement(r,X):(0,o.jsx)("a",{...N,...X,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(9126),u="function"==typeof IntersectionObserver,l=new Map,a=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1484:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7133);var o=n(9008),u=n.n(o),l=n(1664),a=n.n(l),f=n(4298),i=n.n(f);t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,r.jsx)(i(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-0WNKPPDJC9"}),(0,r.jsx)(i(),{id:"google-analytics",strategy:"afterInteractive",children:'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",\'G-0WNKPPDJC9\')'}),(0,r.jsx)("div",{className:"w-full",style:{minHeight:"calc(100vh - 2rem)"},children:(0,r.jsx)(t,{...n})}),(0,r.jsxs)("div",{className:"text-xs text-gray-400 text-center",children:["\xa9 2007-2024\xa0",(0,r.jsx)("a",{href:"https://zfben.com",className:"text-gray-600",children:"Zfben.com"}),"\xa0All Rights Reserved.",(0,r.jsx)("br",{}),(0,r.jsx)(a(),{href:"/privacy",className:"text-gray-600",children:"Privacy Policy"})]}),(0,r.jsx)(i(),{async:!0,"data-uid":"55d011b3cc",src:"https://zfben.ck.page/55d011b3cc/index.js"})]})}},7133:function(){},9008:function(e,t,n){e.exports=n(6665)},1664:function(e,t,n){e.exports=n(3480)},4298:function(e,t,n){e.exports=n(5874)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);