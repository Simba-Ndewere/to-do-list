(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"body,\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 2fr 8fr;\n    grid-template-rows: 1fr 8fr;\n    grid-template-areas: \"nav todo\"\n        \"nav display\";\n    height: 100%;\n    width: 100%;\n    font-family: 'Quicksand', sans-serif;\n}\n\n.todo {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.menu {\n    cursor: pointer;\n    display: none;\n    margin-top: 10px;\n}\n\n.name {\n    font-family: 'Arial', sans-serif;\n    font-size: 2.5em;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n    margin: 0;\n    padding: 10px 0;\n    line-height: 1.2;\n    letter-spacing: 1px;\n}\n\n\n.home-name,\n.to-do-name,\n.folders-name {\n    font-family: 'Arial', sans-serif;\n    font-size: 25px;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n    margin: 0;\n    padding: 10px 0;\n    line-height: 1.2;\n    letter-spacing: 1px;\n}\n\n\n.nav {\n    grid-area: nav;\n    background-color: #40bcd8;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 120px;\n}\n\n.close {  \n    float: right;\n    height: 40px;\n    padding: 10px;\n    width: 30px;\n    height: 30px;\n}\n\n.mobHome:hover,\n.mob-to-do:hover,\n.mob-folders:hover,\n.close:hover {\n    transform: scale(1.10);\n    -webkit-transform: scale(1.10);\n    -ms-transform: scale(1.10);\n    cursor: pointer;\n}\n\n.home:hover,\n.folders:hover,\n.to-do:hover {\n    transform: scale(1.10);\n    -webkit-transform: scale(1.10);\n    -ms-transform: scale(1.10);\n    cursor: pointer;\n}\n\n.menu:hover {\n    transform: scale(1.10);\n    -webkit-transform: scale(1.10);\n    -ms-transform: scale(1.10);\n    cursor: pointer;\n}\n\n.nav-cont {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30%;\n    gap: 40px;\n}\n\n.home,\n.folders,\n.to-do {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.home {\n    cursor: pointer;\n}\n\n.folders {\n    cursor: pointer;\n}\n\n.to-do {\n    cursor: pointer;\n}\n\n\n.display {\n    grid-area: display;\n}\n\n.mobileModal {\n    padding: 20px;\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n    margin-top: 60px;\n    font-family: 'Arial', sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n    line-height: 1.2;\n    letter-spacing: 1px;\n}\n\n.mobileModalContainer {\n    position: fixed;\n    top: 0;\n    transition: left 0.3s ease;\n    z-index: 1000;\n    overflow-y: auto;\n    height: 100vh;\n    min-width: 200px;\n    background-color: #40bcd8;\n}\n\n.mob-nameList {\n    font-size: 20px;\n}\n\n.mobHome,\n.mob-to-do,\n.mob-folders {\n    display: flex;\n    gap: 10px;\n\n}\n\n@media (min-width: 280px) and (max-width:790px) {\n    .name {\n        font-size: 25px;\n    }\n\n    .menu {\n        display: block;\n    }\n\n    .nav {\n        display: none;\n    }\n\n    .container {\n        grid-template-columns: 2fr;\n        grid-template-rows: 1fr 8fr;\n        grid-template-areas: \"todo\"\n            \"display\";\n    }\n\n}",""]);const d=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=o.base?s[0]+o.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=o(n,r),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),d=t(659),s=t.n(d),c=t(56),l=t.n(c),p=t(540),m=t.n(p),u=t(113),f=t.n(u),h=t(523),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=t.p+"8f316578a9db8e0cd93c.png",b=t.p+"8c51fd21feb4ab9c2b62.png",y=t.p+"9b43511cfdb989f73e3a.png",x=t.p+"485ec0bbb9f3dd856644.png",w=()=>{const n=document.body,e=document.createElement("div");e.classList.add("close");const t=new Image;t.height=30,t.width=30,t.src=x,e.appendChild(t);const o=document.createElement("div");o.classList.add("mobileModalContainer");const r=document.createElement("div");return r.classList.add("mobileModal"),r.appendChild((()=>{document.createElement("div").classList.add("mobileModal");const n=document.createElement("div");n.classList.add("mobHome");const e=document.createElement("div");e.classList.add("mobIcon");const t=new Image;t.height=20,t.width=20,t.src=v,e.appendChild(t);const o=document.createElement("div");return o.classList.add("mobName"),o.textContent="Home",n.appendChild(e),n.appendChild(o),n})()),r.appendChild((()=>{const n=document.createElement("div");n.classList.add("mob-to-do");const e=document.createElement("div");e.classList.add("mob-to-do-Icon");const t=new Image;t.height=20,t.width=20,t.src=b,e.appendChild(t);const o=document.createElement("div");return o.classList.add("mob-to-do-name"),o.textContent="To Do's",n.appendChild(e),n.appendChild(o),n})()),r.appendChild((()=>{const n=document.createElement("div");n.classList.add("mob-folders");const e=document.createElement("div");e.classList.add("mob-foldersIcon");const t=new Image;t.height=20,t.width=20,t.src=y,e.appendChild(t);const o=document.createElement("div");return o.classList.add("mob-folders-name"),o.textContent="Folders",n.appendChild(e),n.appendChild(o),n})()),o.appendChild(e),o.appendChild(r),e.addEventListener("click",(()=>{n.removeChild(o)})),o},C=t.p+"9aa91e76276f89ed8baa.png",E=t.p+"8f316578a9db8e0cd93c.png",I=t.p+"8c51fd21feb4ab9c2b62.png",L=t.p+"9b43511cfdb989f73e3a.png";window.onload=()=>{(()=>{const n=document.querySelector(".menu"),e=new Image;e.height=30,e.width=30,e.src=C,n.appendChild(e);const t=document.querySelector(".homeIcon"),o=new Image;o.height=30,o.width=30,o.src=E,t.appendChild(o);const r=document.querySelector(".to-do-Icon"),a=new Image;a.height=30,a.width=30,a.src=I,r.appendChild(a);const i=document.querySelector(".foldersIcon"),d=new Image;d.height=30,d.width=30,d.src=L,i.appendChild(d)})()},document.querySelector(".menu").addEventListener("click",(()=>{S()}));const S=()=>{const n=w();document.body.appendChild(n)}})();