!function(){var t=!1,a=780,n="netlify.js";function r(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function s(e){var t;e&&(t=e.style.getPropertyValue("display"),e.style.display=t&&"block"!==t?"block":"none")}function d(e,t){var n=window.innerWidth<a?"0":"calc(50% - ".concat(390,"px)"),o=window.innerWidth<a?"100vw":"".concat(a,"px");e.style.left=n,t.style.width=o}try{function l(e){t=e,document.body.style.overflow=e?"hidden":w||""}function y(e,t,n){n&&n.postMessage({type:e,payload:t},h)}function p(e){y("NAVIGATION",document.location.pathname,e||f.contentWindow)}var u=document.querySelector("body div[data-netlify-site-id]");if(!u)return console.warn("".concat(n,": container not found."));if(window!==window.top)return r(u),0;if(!document.location.origin.includes("--"))return r(u),0;if(u.querySelector("iframe"))return console.warn("".concat(n,": frame has already mounted."));var e=u.dataset,o=e.netlifyDeployId,c=e.netlifySiteId,i=e.vcs;if(!o||!c)return console.warn("".concat(n,": required data attributes not found.")),r(u),0;u.style=["background:transparent","bottom:0","margin:0","padding:0","position:fixed","z-index:2147483647"].join(";");var e=/\.netlifystg\.app$/.test(document.location.origin)?"netlifystg":"netlify",h="https://app.".concat(e,".com"),e="/".concat("cdp").concat("netlify"==e?"":"-stg"),f=document.createElement("iframe");f.allow="microphone; camera; clipboard-write; display-capture",f.src="".concat(h).concat(e,"/?deployID=").concat(o,"&siteID=").concat(c,"&vcs=").concat(i||""),f.title="Netlify Drawer",f.style=["display:block","border:0","height:".concat(48,"px")].join(";"),(u||document.body).appendChild(f),d(u,f);var w=document.body.style.overflow;window.addEventListener("message",function(e){if(e.origin===h){var t=e.data,n=document.location,o=n.href,a=n.pathname,c=n.search,i=n.hash;switch(t.type){case"LOADED":p(e.source);break;case"TOGGLE_UI":s(u);break;case"GOTO":document.location.assign(t.payload);break;case"FULL_VIEWPORT":u.style.left="0px",f.style.height="100vh",f.style.width="100vw",l(!0);break;case"LOOM_VIEWPORT":f.style.height="220px",f.style.width="400px",l(!1);break;case"DOCK_VIEWPORT":u.style.left="0px",f.style.height="".concat(48,"px"),f.style.width="100vw",l(!1);break;case"MINI_VIEWPORT":u.style.left="calc(50% - 134px)",f.style.height="".concat(48,"px"),f.style.width="268px",l(!1);break;case"JAMDOCK_VIEWPORT":f.style.height="".concat(48,"px"),d(u,f),l(!1);break;case"LOCATION_HREF":y("LOCATION_HREF",o,e.source);break;case"LOCATION_ORIGIN":y("LOCATION_ORIGIN",document.location.origin,e.source);break;case"LOCATION_PATHNAME":y("LOCATION_PATHNAME",a+c+i,e.source);break;case"WINDOW_SIZE":y("WINDOW_SIZE",{width:window.innerWidth,height:window.innerHeight},e.source);break;case"TRANSLATE":u.style.transform="translate(".concat(t.payload.x,"px, ").concat(t.payload.y,"px)");break;case"SELF_DESTRUCT":r(u);break;case"REFRESH":window.location.reload()}}}),window.addEventListener("resize",function(){t||d(u,f)}),document.addEventListener("keydown",function(e){!e.metaKey&&!e.ctrlKey||e.shiftKey||e.altKey||"\\"!==e.key&&"Backslash"!==e.code||s(u)});var m=document.location.pathname;"function"==typeof MutationObserver?new MutationObserver(function(e){e.forEach(function(){m!==document.location.pathname&&(m=document.location.pathname,p())})}).observe(document.body,{childList:!0,subtree:!0}):(window.addEventListener("pushstate",p),window.addEventListener("popstate",p))}catch(e){console.error("".concat(n,": ").concat(e))}}();