(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{6534:function(){!function(){"use strict";function e(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function l(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())},!0),l(),e.addEventListener("focus",function(e){var n,r,u;i(e.target)&&(t||(r=(n=e.target).type,"INPUT"===(u=n.tagName)&&o[r]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(e.target)},!0),e.addEventListener("blur",function(e){if(i(e.target)){var t;(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},4441:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return d}});let o="refresh",i="navigate",a="restore",u="server-patch",l="prefetch",s="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7361:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(6213),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(3219),o=r._(n(2784)),i=n(38),a=n(5571),u=n(8613),l=n(8318),s=n(4077),c=n(9994),d=n(6415),f=n(9190),m=n(7361),p=n(5299),v=n(4441),y=new Set;function b(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(y.has(i))return;y.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function h(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:y,children:g,prefetch:x=null,passHref:E,replace:_,shallow:j,scroll:L,locale:N,onClick:C,onMouseEnter:k,onTouchStart:w,legacyBehavior:O=!1,...T}=e;n=g,O&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let A=o.default.useContext(c.RouterContext),S=o.default.useContext(d.AppRouterContext),M=null!=A?A:S,P=!A,R=!1!==x,I=null===x?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:G,as:B}=o.default.useMemo(()=>{if(!A){let e=h(u);return{href:e,as:y?h(y):e}}let[e,t]=(0,i.resolveHref)(A,u,!0);return{href:e,as:y?(0,i.resolveHref)(A,y):t||e}},[A,u,y]),F=o.default.useRef(G),K=o.default.useRef(B);O&&(r=o.default.Children.only(n));let U=O?r&&"object"==typeof r&&r.ref:t,[D,W,z]=(0,f.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(K.current!==B||F.current!==G)&&(z(),K.current=B,F.current=G),D(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[B,U,G,z,D]);o.default.useEffect(()=>{M&&W&&R&&b(M,G,B,{locale:N},{kind:I},P)},[B,G,W,N,R,null==A?void 0:A.locale,M,P,I]);let V={ref:H,onClick(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,i,u,l,s,c){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let m=()=>{let e=null==l||l;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:u,locale:s,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})};c?o.default.startTransition(m):m()}(e,M,G,B,_,j,L,N,P)},onMouseEnter(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&(R||!P)&&b(M,G,B,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:I},P)},onTouchStart(e){O||"function"!=typeof w||w(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&(R||!P)&&b(M,G,B,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:I},P)}};if((0,l.isAbsoluteUrl)(B))V.href=B;else if(!O||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==N?N:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,m.getDomainLocale)(B,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);V.href=t||(0,p.addBasePath)((0,s.addLocale)(B,e,null==A?void 0:A.defaultLocale))}return O?o.default.cloneElement(r,V):o.default.createElement("a",{...T,...V},n)}),x=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(2784),o=n(2120),i="function"==typeof IntersectionObserver,a=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),m=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},u.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,f.current]);let p=(0,r.useCallback)(()=>{d(!1)},[]);return[m,c,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7729:function(e,t,n){e.exports=n(5487)},9097:function(e,t,n){e.exports=n(9938)},9456:function(e,t,n){"use strict";n.d(t,{XQ:function(){return o}});var r=n(1053);function o(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},6092:function(e,t,n){"use strict";n.d(t,{z:function(){return v}});var r=n(2784),[o,i]=(0,n(9165).k)({strict:!1,name:"ButtonGroupContext"}),a=n(4496),u=n(1053),l=n(2322);function s(e){let{children:t,className:n,...o}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,u.cx)("chakra-button__icon",n);return(0,l.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:s,children:i})}s.displayName="ButtonIcon";var c=n(1540);function d(e){let{label:t,placement:n,spacing:o="0.5rem",children:i=(0,l.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...f}=e,m=(0,u.cx)("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?o:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,p,o]);return(0,l.jsx)(a.m.div,{className:m,...f,__css:v,children:i})}d.displayName="ButtonSpinner";var f=n(9058),m=n(1982),p=n(4586),v=(0,f.G)((e,t)=>{let n=i(),o=(0,m.mq)("Button",{...n,...e}),{isDisabled:s=null==n?void 0:n.isDisabled,isLoading:c,isActive:f,children:v,leftIcon:b,rightIcon:h,loadingText:g,iconSpacing:x="0.5rem",type:E,spinner:_,spinnerPlacement:j="start",className:L,as:N,...C}=(0,p.Lr)(e),k=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:w,type:O}=function(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}(N),T={rightIcon:h,leftIcon:b,iconSpacing:x,children:v};return(0,l.jsxs)(a.m.button,{ref:function(...e){return(0,r.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,w),as:N,type:null!=E?E:O,"data-active":(0,u.PB)(f),"data-loading":(0,u.PB)(c),__css:k,className:(0,u.cx)("chakra-button",L),...C,disabled:s||c,children:[c&&"start"===j&&(0,l.jsx)(d,{className:"chakra-button__spinner--start",label:g,placement:"start",spacing:x,children:_}),c?g||(0,l.jsx)(a.m.span,{opacity:0,children:(0,l.jsx)(y,{...T})}):(0,l.jsx)(y,{...T}),c&&"end"===j&&(0,l.jsx)(d,{className:"chakra-button__spinner--end",label:g,placement:"end",spacing:x,children:_})]})});function y(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(s,{marginEnd:o,children:t}),r,n&&(0,l.jsx)(s,{marginStart:o,children:n})]})}v.displayName="Button"},7443:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var r=n(9058),o=n(2322),i=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:i,...a}=e;return(0,o.jsx)("img",{width:n,height:r,ref:t,alt:i,...a})});i.displayName="NativeImage";var a=n(6140),u=n(2784),l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,s=n(4496),c=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:c,srcSet:d,align:f,fit:m,loading:p,ignoreFallback:v,crossOrigin:y,fallbackStrategy:b="beforeLoadOrError",referrerPolicy:h,...g}=e,x=void 0!==n||void 0!==r,E=null!=p||v||!x,_=function(e){let{loading:t,src:n,srcSet:r,onLoad:o,onError:i,crossOrigin:l,sizes:s,ignoreFallback:c}=e,[d,f]=(0,u.useState)("pending");(0,u.useEffect)(()=>{f(n?"loading":"pending")},[n]);let m=(0,u.useRef)(),p=(0,u.useCallback)(()=>{if(!n)return;v();let e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{v(),f("loaded"),null==o||o(e)},e.onerror=e=>{v(),f("failed"),null==i||i(e)},m.current=e},[n,l,r,s,o,i,t]),v=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,a.G)(()=>{if(!c)return"loading"===d&&p(),()=>{v()}},[d,p,c]),c?"loaded":d}({...e,crossOrigin:y,ignoreFallback:E}),j=l(_,b),L={ref:t,objectFit:m,objectPosition:f,...E?g:function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(g,["onError","onLoad"])};return j?r||(0,o.jsx)(s.m.img,{as:i,className:"chakra-image__placeholder",src:n,...L}):(0,o.jsx)(s.m.img,{as:i,src:c,srcSet:d,crossOrigin:y,loading:p,referrerPolicy:h,className:"chakra-image",...L})});c.displayName="Image"},930:function(e,t,n){"use strict";n.d(t,{x:function(){return Text}});var r=n(9058),o=n(1982),i=n(4586),a=n(4496),u=n(1053),l=n(2322),Text=(0,r.G)(function(e,t){let n=(0,o.mq)("Text",e),{className:r,align:s,decoration:c,casing:d,...f}=(0,i.Lr)(e),m=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(a.m.p,{ref:t,className:(0,u.cx)("chakra-text",e.className),...m,...f,__css:n})});Text.displayName="Text"},9117:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(8995),o=n(9058),i=n(2322),a=(0,o.G)((e,t)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));a.displayName="HStack"},2822:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(4496),o=n(9058),i=n(2322),a=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)(function(e,t){let{axis:n="both",...o}=e;return(0,i.jsx)(r.m.div,{ref:t,__css:u[n],...o,position:"absolute"})})},1082:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(9058),o=n(1982),i=n(4586),a=n(4496),u=n(1053),l=n(2322),s=(0,r.G)(function(e,t){let n=(0,o.mq)("Link",e),{className:r,isExternal:s,...c}=(0,i.Lr)(e);return(0,l.jsx)(a.m.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,u.cx)("chakra-link",r),...c,__css:n})});s.displayName="Link"},1803:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(9058),o=n(4496),i=n(2322),a=(0,r.G)(function(e,t){let{templateAreas:n,gap:r,rowGap:a,columnGap:u,column:l,row:s,autoFlow:c,autoRows:d,templateRows:f,autoColumns:m,templateColumns:p,...v}=e;return(0,i.jsx)(o.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:a,gridColumnGap:u,gridAutoColumns:m,gridColumn:l,gridRow:s,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:f,gridTemplateColumns:p},...v})});a.displayName="Grid";var u=n(1148),l=n(8929),s=n(9456),c=(0,r.G)(function(e,t){let{columns:n,spacingX:r,spacingY:o,spacing:c,minChildWidth:d,...f}=e,m=(0,u.F)(),p=d?(0,s.XQ)(d,e=>{let t=(0,l.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(m);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,s.XQ)(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,i.jsx)(a,{ref:t,gap:c,columnGap:r,rowGap:o,templateColumns:p,...f})});c.displayName="SimpleGrid"},7993:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(8995),o=n(9058),i=n(2322),a=(0,o.G)((e,t)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},8535:function(e,t,n){"use strict";n.d(t,{xu:function(){return a}});var r=n(4496),o=n(9058),i=n(2322),a=(0,r.m)("div");a.displayName="Box";var u=(0,o.G)(function(e,t){let{size:n,centerContent:r=!0,...o}=e;return(0,i.jsx)(a,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});u.displayName="Square",(0,o.G)(function(e,t){let{size:n,...r}=e;return(0,i.jsx)(u,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},8995:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(4496),o=n(2322),i=e=>(0,o.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});i.displayName="StackItem";var a=n(9456),u=n(2784),l=n(1053),s=(0,n(9058).G)((e,t)=>{let{isInline:n,direction:s,align:c,justify:d,spacing:f="0.5rem",wrap:m,children:p,divider:v,className:y,shouldWrapChildren:b,...h}=e,g=n?"row":null!=s?s:"column",x=(0,u.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,a.XQ)(n,e=>r[e])}})({spacing:f,direction:g}),[f,g]),E=!!v,_=!b&&!E,j=(0,u.useMemo)(()=>{let e=u.Children.toArray(p).filter(e=>(0,u.isValidElement)(e));return _?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,a=n+1===e.length,l=(0,o.jsx)(i,{children:t},r),s=b?l:t;if(!E)return s;let c=(0,u.cloneElement)(v,{__css:x});return(0,o.jsxs)(u.Fragment,{children:[s,a?null:c]},r)})},[v,x,E,_,b,p]),L=(0,l.cx)("chakra-stack",y);return(0,o.jsx)(r.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:d,flexDirection:g,flexWrap:m,gap:E?void 0:f,className:L,...h,children:j})});s.displayName="Stack"}}]);