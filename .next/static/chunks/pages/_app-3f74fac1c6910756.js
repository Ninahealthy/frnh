(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9653)}])},3515:function(e,t){"use strict";t.Z={src:"/_next/static/media/young-woman.eac1583c.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX31tDt0steQjj85ODnu7R4W1LgxMD+7ur4yMfwyb7rzMaYfXPCp5vJsKW9npX229aHZFhoTkaahYHbvb26lpKsintMMCb//PvPraeRcGqsiIHdtq9DJhmRbFvXwbiTamYvFg4NVof5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBhQHAIBAEsMMed+pC95+yCWJxuV+cIxzEOo2JsAurIQdiMhI4K15vDKziYKplK1UFK1/SellBz9024fwPa8QDDZfjncIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(2648).Z,a=n(1598).Z,s=n(7273).Z,l=a(n(7294)),o=r(n(2636)),c=n(7757),u=n(3735),d=n(3341);n(4210);var h=r(n(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,r,a,s,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}function x(e){let[t,n]=l.version.split("."),i=parseInt(t,10),r=parseInt(n,10);return i>18||18===i&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:o,className:c,imgStyle:u,blurStyle:d,isLazy:h,fetchPriority:f,fill:m,placeholder:g,loading:v,srcString:j,config:b,unoptimized:w,loader:_,onLoadRef:y,onLoadingCompleteRef:A,setBlurComplete:C,setShowAltText:E,onLoad:k,onError:N}=e,S=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=h?"lazy":v,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,x(f),{loading:v,width:a,height:r,decoding:"async","data-nimg":m?"fill":"1",className:c,style:i({},u,d)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&p(e,j,g,y,A,C,w))},[j,g,y,A,C,N,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,j,g,y,A,C,w)},onError:e=>{E(!0),"blur"===g&&C(!0),N&&N(e)}})))}),j=l.forwardRef((e,t)=>{let n,r;var a,{src:p,sizes:j,unoptimized:b=!1,priority:w=!1,loading:_,className:y,quality:A,width:C,height:E,fill:k,style:N,onLoad:S,onLoadingComplete:z,placeholder:I="empty",blurDataURL:M,fetchPriority:R,layout:P,objectFit:O,objectPosition:B,lazyBoundary:D,lazyRoot:H}=e,F=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(d.ImageConfigContext),T=l.useMemo(()=>{let e=f||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[L]),q=F,X=q.loader||h.default;delete q.loader;let W="__next_img_default"in X;if(W){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=X;X=t=>{let{config:n}=t,i=s(t,["config"]);return e(i)}}if(P){"fill"===P&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(N=i({},N,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!j&&(j=t)}let Y="",V=g(C),K=g(E);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,M=M||e.blurDataURL,Y=e.src,!k){if(V||K){if(V&&!K){let t=V/e.width;K=Math.round(e.height*t)}else if(!V&&K){let t=K/e.height;V=Math.round(e.width*t)}}else V=e.width,K=e.height}}let J=!w&&("lazy"===_||void 0===_);(!(p="string"==typeof p?p:Y)||p.startsWith("data:")||p.startsWith("blob:"))&&(b=!0,J=!1),T.unoptimized&&(b=!0),W&&p.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0),w&&(R="high");let[U,Z]=l.useState(!1),[G,Q]=l.useState(!1),$=g(A),ee=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:B}:{},G?{}:{color:"transparent"},N),et="blur"===I&&M&&!U?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:K,blurWidth:n,blurHeight:r,blurDataURL:M,objectFit:ee.objectFit}),'")')}:{},en=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:s,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,s),u=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,i)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:n,quality:a,width:o[u]})}}({config:T,src:p,unoptimized:b,width:V,quality:$,sizes:j,loader:X}),ei=p,er=l.useRef(S);l.useEffect(()=>{er.current=S},[S]);let ea=l.useRef(z);l.useEffect(()=>{ea.current=z},[z]);let es=i({isLazy:J,imgAttributes:en,heightInt:K,widthInt:V,qualityInt:$,className:y,imgStyle:ee,blurStyle:et,loading:_,config:T,fetchPriority:R,fill:k,unoptimized:b,placeholder:I,loader:X,srcString:ei,onLoadRef:er,onLoadingCompleteRef:ea,setBlurComplete:Z,setShowAltText:Q},q);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},es,{ref:t})),w?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src,imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:q.crossOrigin},x(R)))):null)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:s}=e,l=i||t,o=r||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(5893),r=n(5675),a=n.n(r),s=n(3515);let l={width:100,height:100};function o(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("author",{children:[(0,i.jsx)("strong",{children:"About Author"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(a(),{src:s.Z,alt:"Nina Bernard",style:l,sizes:"30vw"}),(0,i.jsx)("br",{}),"Salut! C'est Nina, le visage derri\xe8re NinaHealthy.com ! Ici Je partage des choses que nous pouvons tous trouver adapt\xe9es et b\xe9n\xe9fiques dans notre propre vie quotidienne. Les choses dont j’\xe9cris sont g\xe9n\xe9ralement l\xe9g\xe8res et agr\xe9ables \xe0 lire. J’aime \xe9crire sur la beaut\xe9, la vie, le drame, et tout ce qui suscite mon int\xe9r\xeat.",(0,i.jsx)("br",{}),"Suivez-moi sur pinterest pour des id\xe9es de repas v\xe9g\xe9taliens gratuits, des recettes et des astuces pour Healthy-girl."]})]})})}function c(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("footer",{children:[(0,i.jsxs)("p",{children:["Toute information publi\xe9e sur ce site n'a pas pour intention ou ne sous-entend pas de se substituer \xe0 un conseil m\xe9dical professionnel, un diagnostic ou un traitement.",(0,i.jsx)("br",{})," Tout le contenu, y compris le texte, les graphiques, les images et les informations, contenus ou disponibles via ce site sont destin\xe9s uniquement \xe0 des fins d'information g\xe9n\xe9rale.",(0,i.jsx)("br",{})," Vous ne devriez prendre aucune action avant de consulter un professionnel de la sant\xe9.",(0,i.jsx)("br",{}),"\xa9 ninahealthy.com 2020 - 2023"]}),(0,i.jsx)("social",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.pinterest.fr/INinaBernard/",target:"_blank",children:(0,i.jsx)("img",{src:"/pinterest.svg",alt:"pinterest icon",width:50,height:50})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com",target:"_blank",children:(0,i.jsx)("img",{src:"/instagram.svg",alt:"instagram icon",width:50,height:50})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.youtube.com",target:"_blank",children:(0,i.jsx)("img",{src:"/youtube.svg",alt:"youtube icon",width:60,height:60})})})]})}),(0,i.jsx)("footernav",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/Privacy-policy",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/Terms-and-conditions",children:"Terms And Conditions"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/Important-disclaimer",children:"Important Disclaimer"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/Contact",children:"Contact"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/About-me",children:"About"})})]})})]})})}var u=n(7294),d=n(5244),h=n.n(d);function f(){let[e,t]=(0,u.useState)(!1),n=()=>t(!e);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("header",{className:h().header,children:(0,i.jsxs)("nav",{className:h().navbar,children:[(0,i.jsx)("a",{className:h().navlogo,href:"/",children:(0,i.jsx)("em",{children:"NH\uD83D\uDC9A"})}),(0,i.jsxs)("ul",{className:!1===e?h().navmenu:h().navmenu+" "+h().active,children:[(0,i.jsx)("li",{className:h().navitem,children:(0,i.jsx)("a",{className:!1===e?h().navlink:h().navlink+" "+h().active,onClick:n,href:"/",children:(0,i.jsx)("em",{children:"Actualit\xe9s"})})}),(0,i.jsx)("li",{className:h().navitem,children:(0,i.jsx)("a",{className:!1===e?h().navlink:h().navlink+" "+h().active,onClick:n,href:"/Nutrition",children:(0,i.jsx)("em",{children:"Nutrition"})})}),(0,i.jsx)("li",{className:h().navitem,children:(0,i.jsx)("a",{className:!1===e?h().navlink:h().navlink+" "+h().active,onClick:n,href:"/Fitness",children:(0,i.jsx)("em",{children:"Fitness"})})}),(0,i.jsx)("li",{className:h().navitem,children:(0,i.jsx)("a",{className:!1===e?h().navlink:h().navlink+" "+h().active,onClick:n,href:"/Bien-etre",children:(0,i.jsx)("em",{children:"Bien-\xeatre"})})}),(0,i.jsx)("li",{className:h().navitem,children:(0,i.jsx)("a",{className:!1===e?h().navlink:h().navlink+" "+h().active,onClick:n,href:"/Beauty",children:(0,i.jsx)("em",{children:"Beauty"})})})]}),(0,i.jsxs)("button",{className:!1===e?h().hamburger:h().hamburger+" "+h().active,onClick:n,children:[(0,i.jsx)("span",{className:h().bar}),(0,i.jsx)("span",{className:h().bar}),(0,i.jsx)("span",{className:h().bar})]})]})})})}n(3814);var m=n(9008),g=n.n(m);function p(){let[e,t]=(0,u.useState)(!1),n=()=>{document.cookie="consent=true; max-age=2592000; path=/",t(!0)};return(0,u.useEffect)(()=>{let e=document.cookie.split(";").find(e=>e.trim().startsWith("consent="));if(e){let n=e.split("=")[1];"true"===n&&t(!0)}},[]),(0,i.jsx)("consent",{children:e?(0,i.jsx)("text",{}):(0,i.jsxs)("button",{className:"button-consent",onClick:n,children:["Ce site utilise des cookies pour am\xe9liorer votre exp\xe9rience utilisateur et fournir du contenu personnalis\xe9.",(0,i.jsx)("strong",{children:(0,i.jsx)("em",{children:" J'accepte"})})]})})}function x(e){let{Component:t,pageProps:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g(),{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,i.jsx)(f,{}),(0,i.jsx)(t,{...n}),(0,i.jsx)(o,{}),(0,i.jsx)(c,{}),(0,i.jsx)(p,{})]})}},3814:function(){},5244:function(e){e.exports={header:"Header_header__VYZ3G",navbar:"Header_navbar__Qt0Y4",hamburger:"Header_hamburger__fRP_j",bar:"Header_bar__YqXdy",navmenu:"Header_navmenu__KM6Gi",navitem:"Header_navitem___mjug",navlink:"Header_navlink__LbXMl",navlogo:"Header_navlogo__wX0wO",active:"Header_active__EB8lX"}},9008:function(e,t,n){e.exports=n(2636)},5675:function(e,t,n){e.exports=n(3740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);