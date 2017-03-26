webpackJsonp([28,61],{86:function(t,e,i){/*!
	 * Cropper.js v1.0.0-beta.1
	 * https://github.com/fengyuanchen/cropperjs
	 *
	 * Copyright (c) 2017 Fengyuan Chen
	 * Released under the MIT license
	 *
	 * Date: 2017-01-21T12:28:26.786Z
	 */
!function(e,i){t.exports=i()}(this,function(){"use strict";function t(t){return nt.call(t).slice(8,-1).toLowerCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function i(t){return"undefined"==typeof t}function o(t){return"object"===("undefined"==typeof t?"undefined":Z(t))&&null!==t}function a(t){if(!o(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&pt.call(i,"isPrototypeOf")}catch(t){return!1}}function r(e){return"function"===t(e)}function n(e){return Array.isArray?Array.isArray(e):"array"===t(e)}function p(t){return"string"==typeof t&&(t=t.trim?t.trim():t.replace(et,"$1")),t}function c(t,i){if(t&&r(i)){var a=void 0;if(n(t)||e(t.length)){var p=t.length;for(a=0;a<p&&i.call(t,t[a],a,t)!==!1;a++);}else o(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)})}return t}function h(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e[0]===!0,r=a?e[1]:e[0];return o(r)&&e.length>1&&(e.shift(),e.forEach(function(t){o(t)&&Object.keys(t).forEach(function(e){a&&o(r[e])?h(!0,r[e],t[e]):r[e]=t[e]})})),r}function s(t,e){for(var i=arguments.length,o=Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];return function(){for(var i=arguments.length,a=Array(i),r=0;r<i;r++)a[r]=arguments[r];return t.apply(e,o.concat(a))}}function d(t,i){var o=t.style;c(i,function(t,i){tt.test(i)&&e(t)&&(t+="px"),o[i]=t})}function l(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function u(t,i){if(e(t.length))return void c(t,function(t){u(t,i)});if(t.classList)return void t.classList.add(i);var o=p(t.className);o?o.indexOf(i)<0&&(t.className=o+" "+i):t.className=i}function m(t,i){return e(t.length)?void c(t,function(t){m(t,i)}):t.classList?void t.classList.remove(i):void(t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function f(t,i,o){return e(t.length)?void c(t,function(t){f(t,i,o)}):void(o?u(t,i):m(t,i))}function g(t){return t.replace(Q,"$1-$2").toLowerCase()}function v(t,e){return o(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+g(e))}function w(t,e,i){o(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-"+g(e),i)}function x(t,e){if(o(t[e]))delete t[e];else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=null}else t.removeAttribute("data-"+g(e))}function b(t,e,i){var o=p(e).split(K);return o.length>1?void c(o,function(e){b(t,e,i)}):void(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i))}function y(t,e,i,o){var a=p(e).split(K),r=i;return a.length>1?void c(a,function(e){y(t,e,i)}):(o&&(i=function(){for(var o=arguments.length,a=Array(o),n=0;n<o;n++)a[n]=arguments[n];return b(t,e,i),r.apply(t,a)}),void(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)))}function M(t,e,o){if(t.dispatchEvent){var a=void 0;return r(Event)&&r(CustomEvent)?a=i(o)?new Event(e,{bubbles:!0,cancelable:!0}):new CustomEvent(e,{detail:o,bubbles:!0,cancelable:!0}):i(o)?(a=document.createEvent("Event"),a.initEvent(e,!0,!0)):(a=document.createEvent("CustomEvent"),a.initCustomEvent(e,!0,!0,o)),t.dispatchEvent(a)}return!t.fireEvent||t.fireEvent("on"+e)}function C(t){var i=t||window.event;if(i.target||(i.target=i.srcElement||document),!e(i.pageX)&&e(i.clientX)){var o=t.target.ownerDocument||document,a=o.documentElement,r=o.body;i.pageX=i.clientX+((a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0)),i.pageY=i.clientY+((a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0))}return i}function D(t){var e=document.documentElement,i=t.getBoundingClientRect();return{left:i.left+((window.scrollX||e&&e.scrollLeft||0)-(e&&e.clientLeft||0)),top:i.top+((window.scrollY||e&&e.scrollTop||0)-(e&&e.clientTop||0))}}function B(t,e){return t.getElementsByTagName(e)}function k(t,e){return t.getElementsByClassName?t.getElementsByClassName(e):t.querySelectorAll("."+e)}function A(t){return document.createElement(t)}function T(t,e){t.appendChild(e)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function L(t){var e=t.match(J);return e&&(e[1]!==location.protocol||e[2]!==location.hostname||e[3]!==location.port)}function W(t){var e="timestamp="+(new Date).getTime();return t+(t.indexOf("?")===-1?"?":"&")+e}function E(t,e){if(t.naturalWidth&&!at)return void e(t.naturalWidth,t.naturalHeight);var i=A("img");i.onload=function(){e(this.width,this.height)},i.src=t.src}function z(t){var i=[],o=t.translateX,a=t.translateY,r=t.rotate,n=t.scaleX,p=t.scaleY;e(o)&&0!==o&&i.push("translateX("+o+"px)"),e(a)&&0!==a&&i.push("translateY("+a+"px)"),e(r)&&0!==r&&i.push("rotate("+r+"deg)"),e(n)&&1!==n&&i.push("scaleX("+n+")"),e(p)&&1!==p&&i.push("scaleY("+p+")");var c=i.length?i.join(" "):"none";return{WebkitTransform:c,msTransform:c,transform:c}}function Y(t,e){var i=Math.abs(t.degree)%180,o=(i>90?180-i:i)*Math.PI/180,a=Math.sin(o),r=Math.cos(o),n=t.width,p=t.height,c=t.aspectRatio,h=void 0,s=void 0;return e?(h=n/(r+a/c),s=h/c):(h=n*r+p*a,s=n*a+p*r),{width:h,height:s}}function O(t,i){var o=A("canvas"),a=o.getContext("2d"),r=0,n=0,p=i.naturalWidth,c=i.naturalHeight,h=i.rotate,s=i.scaleX,d=i.scaleY,l=e(s)&&e(d)&&(1!==s||1!==d),u=e(h)&&0!==h,m=u||l,f=p*Math.abs(s||1),g=c*Math.abs(d||1),v=void 0,w=void 0,x=void 0;return l&&(v=f/2,w=g/2),u&&(x=Y({width:f,height:g,degree:h}),f=x.width,g=x.height,v=f/2,w=g/2),o.width=f,o.height=g,m&&(r=-p/2,n=-c/2,a.save(),a.translate(v,w)),u&&a.rotate(h*Math.PI/180),l&&a.scale(s,d),a.drawImage(t,Math.floor(r),Math.floor(n),Math.floor(p),Math.floor(c)),m&&a.restore(),o}function N(t,e,i){var o="",a=e;for(i+=e;a<i;a++)o+=ct(t.getUint8(a));return o}function R(t){var e=new DataView(t),i=e.byteLength,o=void 0,a=void 0,r=void 0,n=void 0,p=void 0,c=void 0,h=void 0,s=void 0,d=void 0,l=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(d=2;d<i;){if(255===e.getUint8(d)&&225===e.getUint8(d+1)){h=d;break}d++}if(h&&(a=h+4,r=h+10,"Exif"===N(e,a,4)&&(c=e.getUint16(r),p=18761===c,(p||19789===c)&&42===e.getUint16(r+2,p)&&(n=e.getUint32(r+4,p),n>=8&&(s=r+n)))),s)for(i=e.getUint16(s,p),l=0;l<i;l++)if(d=s+12*l+2,274===e.getUint16(d,p)){d+=8,o=e.getUint16(d,p),at&&e.setUint16(d,1,p);break}return o}function I(t){var e=t.replace(G,""),i=atob(e),o=i.length,a=new ArrayBuffer(o),r=new Uint8Array(a),n=void 0;for(n=0;n<o;n++)r[n]=i.charCodeAt(n);return a}function S(t){var e=new Uint8Array(t),i=e.length,o="",a=void 0;for(a=0;a<i;a++)o+=ct(e[a]);return"data:image/jpeg;base64,"+btoa(o)}function U(t,e){var i=t.pageX,o=t.pageY,a={endX:i,endY:o};return e?a:h({startX:i,startY:o},a)}function j(t){var e=h({},t),i=[];return c(t,function(t,o){delete e[o],c(e,function(e){var o=Math.abs(t.startX-e.startX),a=Math.abs(t.startY-e.startY),r=Math.abs(t.endX-e.endX),n=Math.abs(t.endY-e.endY),p=Math.sqrt(o*o+a*a),c=Math.sqrt(r*r+n*n),h=(c-p)/p;i.push(h)})}),i.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),i[0]}function P(t){var e=0,i=0,o=0;return c(t,function(t){var a=t.startX,r=t.startY;e+=a,i+=r,o+=1}),e/=o,i/=o,{pageX:e,pageY:i}}var _={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},$=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),q=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},G=/^data:([^;]+);base64,/,Q=/([a-z\d])([A-Z])/g,J=/^(https?:)\/\/([^:\/?#]+):?(\d*)/i,K=/\s+/,tt=/^(width|height|left|top|marginLeft|marginTop)$/,et=/^\s+(.*)\s+$/,it=/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i,ot="undefined"!=typeof window?window.navigator:null,at=ot&&it.test(ot.userAgent),rt=Object.prototype,nt=rt.toString,pt=rt.hasOwnProperty,ct=(Array.prototype.slice,String.fromCharCode),ht={render:function(){var t=this;t.initContainer(),t.initCanvas(),t.initCropBox(),t.renderCanvas(),t.cropped&&t.renderCropBox()},initContainer:function(){var t=this,e=t.options,i=t.element,o=t.container,a=t.cropper,r="cropper-hidden",n=void 0;u(a,r),m(i,r),t.containerData=n={width:Math.max(o.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(o.offsetHeight,Number(e.minContainerHeight)||100)},d(a,{width:n.width,height:n.height}),u(i,r),m(a,r)},initCanvas:function(){var t=this,e=t.options.viewMode,i=t.containerData,o=t.imageData,a=90===Math.abs(o.rotate),r=a?o.naturalHeight:o.naturalWidth,n=a?o.naturalWidth:o.naturalHeight,p=r/n,c=i.width,s=i.height;i.height*p>i.width?3===e?c=i.height*p:s=i.width/p:3===e?s=i.width/p:c=i.height*p;var d={naturalWidth:r,naturalHeight:n,aspectRatio:p,width:c,height:s};d.oldLeft=d.left=(i.width-c)/2,d.oldTop=d.top=(i.height-s)/2,t.canvasData=d,t.limited=1===e||2===e,t.limitCanvas(!0,!0),t.initialImageData=h({},o),t.initialCanvasData=h({},d)},limitCanvas:function(t,e){var i=this,o=i.options,a=o.viewMode,r=i.containerData,n=i.canvasData,p=n.aspectRatio,c=i.cropBoxData,h=i.cropped&&c;if(t){var s=Number(o.minCanvasWidth)||0,d=Number(o.minCanvasHeight)||0;a>1?(s=Math.max(s,r.width),d=Math.max(d,r.height),3===a&&(d*p>s?s=d*p:d=s/p)):a>0&&(s?s=Math.max(s,h?c.width:0):d?d=Math.max(d,h?c.height:0):h&&(s=c.width,d=c.height,d*p>s?s=d*p:d=s/p)),s&&d?d*p>s?d=s/p:s=d*p:s?d=s/p:d&&(s=d*p),n.minWidth=s,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(a){var l=r.width-n.width,u=r.height-n.height;n.minLeft=Math.min(0,l),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,l),n.maxTop=Math.max(0,u),h&&i.limited&&(n.minLeft=Math.min(c.left,c.left+(c.width-n.width)),n.minTop=Math.min(c.top,c.top+(c.height-n.height)),n.maxLeft=c.left,n.maxTop=c.top,2===a&&(n.width>=r.width&&(n.minLeft=Math.min(0,l),n.maxLeft=Math.max(0,l)),n.height>=r.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=r.width,n.maxTop=r.height},renderCanvas:function(t){var e=this,i=e.canvasData,o=e.imageData,a=o.rotate,r=void 0,n=void 0;e.rotated&&(e.rotated=!1,n=Y({width:o.width,height:o.height,degree:a}),r=n.width/n.height,r!==i.aspectRatio&&(i.left-=(n.width-i.width)/2,i.top-=(n.height-i.height)/2,i.width=n.width,i.height=n.height,i.aspectRatio=r,i.naturalWidth=o.naturalWidth,i.naturalHeight=o.naturalHeight,a%180&&(n=Y({width:o.naturalWidth,height:o.naturalHeight,degree:a}),i.naturalWidth=n.width,i.naturalHeight=n.height),e.limitCanvas(!0,!1))),(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),e.limitCanvas(!1,!0),i.oldLeft=i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.oldTop=i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),d(e.canvas,h({width:i.width,height:i.height},z({translateX:i.left,translateY:i.top}))),e.renderImage(),e.cropped&&e.limited&&e.limitCropBox(!0,!0),t&&e.output()},renderImage:function(t){var e=this,i=e.canvasData,o=e.imageData,a=void 0,r=void 0,n=void 0,p=void 0;o.rotate&&(r=Y({width:i.width,height:i.height,degree:o.rotate,aspectRatio:o.aspectRatio},!0),n=r.width,p=r.height,a={width:n,height:p,left:(i.width-n)/2,top:(i.height-p)/2}),h(o,a||{width:i.width,height:i.height,left:0,top:0}),d(e.image,h({width:o.width,height:o.height},z(h({translateX:o.left,translateY:o.top},o)))),t&&e.output()},initCropBox:function(){var t=this,e=t.options,i=e.aspectRatio,o=Number(e.autoCropArea)||.8,a=t.canvasData,r={width:a.width,height:a.height};i&&(a.height*i>a.width?r.height=r.width/i:r.width=r.height*i),t.cropBoxData=r,t.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*o),r.height=Math.max(r.minHeight,r.height*o),r.oldLeft=r.left=a.left+(a.width-r.width)/2,r.oldTop=r.top=a.top+(a.height-r.height)/2,t.initialCropBoxData=h({},r)},limitCropBox:function(t,e){var i=this,o=i.options,a=o.aspectRatio,r=i.containerData,n=i.canvasData,p=i.cropBoxData,c=i.limited;if(t){var h=Number(o.minCropBoxWidth)||0,s=Number(o.minCropBoxHeight)||0,d=Math.min(r.width,c?n.width:r.width),l=Math.min(r.height,c?n.height:r.height);h=Math.min(h,r.width),s=Math.min(s,r.height),a&&(h&&s?s*a>h?s=h/a:h=s*a:h?s=h/a:s&&(h=s*a),l*a>d?l=d/a:d=l*a),p.minWidth=Math.min(h,d),p.minHeight=Math.min(s,l),p.maxWidth=d,p.maxHeight=l}e&&(c?(p.minLeft=Math.max(0,n.left),p.minTop=Math.max(0,n.top),p.maxLeft=Math.min(r.width,n.left+n.width)-p.width,p.maxTop=Math.min(r.height,n.top+n.height)-p.height):(p.minLeft=0,p.minTop=0,p.maxLeft=r.width-p.width,p.maxTop=r.height-p.height))},renderCropBox:function(){var t=this,e=t.options,i=t.containerData,o=t.cropBoxData;(o.width>o.maxWidth||o.width<o.minWidth)&&(o.left=o.oldLeft),(o.height>o.maxHeight||o.height<o.minHeight)&&(o.top=o.oldTop),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),t.limitCropBox(!1,!0),o.oldLeft=o.left=Math.min(Math.max(o.left,o.minLeft),o.maxLeft),o.oldTop=o.top=Math.min(Math.max(o.top,o.minTop),o.maxTop),e.movable&&e.cropBoxMovable&&w(t.face,"action",o.width===i.width&&o.height===i.height?"move":"all"),d(t.cropBox,h({width:o.width,height:o.height},z({translateX:o.left,translateY:o.top}))),t.cropped&&t.limited&&t.limitCanvas(!0,!0),t.disabled||t.output()},output:function(){var t=this;t.preview(),t.complete&&M(t.element,"crop",t.getData())}},st="preview",dt={initPreview:function(){var t=this,e=t.options.preview,i=A("img"),o=t.crossOrigin,a=o?t.crossOriginUrl:t.url;if(o&&(i.crossOrigin=o),i.src=a,T(t.viewBox,i),t.image2=i,e){var r=e.querySelector?[e]:document.querySelectorAll(e);t.previews=r,c(r,function(t){var e=A("img");w(t,st,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),o&&(e.crossOrigin=o),e.src=a,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',X(t),T(t,e)})}},resetPreview:function(){c(this.previews,function(t){var e=v(t,st);d(t,{width:e.width,height:e.height}),t.innerHTML=e.html,x(t,st)})},preview:function(){var t=this,e=t.imageData,i=t.canvasData,o=t.cropBoxData,a=o.width,r=o.height,n=e.width,p=e.height,s=o.left-i.left-e.left,l=o.top-i.top-e.top;t.cropped&&!t.disabled&&(d(t.image2,h({width:n,height:p},z(h({translateX:-s,translateY:-l},e)))),c(t.previews,function(t){var i=v(t,st),o=i.width,c=i.height,u=o,m=c,f=1;a&&(f=o/a,m=r*f),r&&m>c&&(f=c/r,u=a*f,m=c),d(t,{width:u,height:m}),d(B(t,"img")[0],h({width:n*f,height:p*f},z(h({translateX:-s*f,translateY:-l*f},e))))}))}},lt="undefined"!=typeof window?window.PointerEvent:null,ut=lt?"pointerdown":"touchstart mousedown",mt=lt?"pointermove":"touchmove mousemove",ft=lt?" pointerup pointercancel":"touchend touchcancel mouseup",gt="wheel mousewheel DOMMouseScroll",vt="dblclick",wt="resize",xt="cropstart",bt="cropmove",yt="cropend",Mt="crop",Ct="zoom",Dt={bind:function(){var t=this,e=t.options,i=t.element,o=t.cropper;r(e.cropstart)&&y(i,xt,e.cropstart),r(e.cropmove)&&y(i,bt,e.cropmove),r(e.cropend)&&y(i,yt,e.cropend),r(e.crop)&&y(i,Mt,e.crop),r(e.zoom)&&y(i,Ct,e.zoom),y(o,ut,t.onCropStart=s(t.cropStart,t)),e.zoomable&&e.zoomOnWheel&&y(o,gt,t.onWheel=s(t.wheel,t)),e.toggleDragModeOnDblclick&&y(o,vt,t.onDblclick=s(t.dblclick,t)),y(document,mt,t.onCropMove=s(t.cropMove,t)),y(document,ft,t.onCropEnd=s(t.cropEnd,t)),e.responsive&&y(window,wt,t.onResize=s(t.resize,t))},unbind:function(){var t=this,e=t.options,i=t.element,o=t.cropper;r(e.cropstart)&&b(i,xt,e.cropstart),r(e.cropmove)&&b(i,bt,e.cropmove),r(e.cropend)&&b(i,yt,e.cropend),r(e.crop)&&b(i,Mt,e.crop),r(e.zoom)&&b(i,Ct,e.zoom),b(o,ut,t.onCropStart),e.zoomable&&e.zoomOnWheel&&b(o,gt,t.onWheel),e.toggleDragModeOnDblclick&&b(o,vt,t.onDblclick),b(document,mt,t.onCropMove),b(document,ft,t.onCropEnd),e.responsive&&b(window,wt,t.onResize)}},Bt=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,kt={resize:function(){var t=this,e=t.options.restore,i=t.container,o=t.containerData;if(!t.disabled&&o){var a=i.offsetWidth/o.width,r=void 0,n=void 0;1===a&&i.offsetHeight===o.height||(e&&(r=t.getCanvasData(),n=t.getCropBoxData()),t.render(),e&&(t.setCanvasData(c(r,function(t,e){r[e]=t*a})),t.setCropBoxData(c(n,function(t,e){n[e]=t*a}))))}},dblclick:function(){var t=this;t.disabled||t.setDragMode(l(t.dragBox,"cropper-crop")?"move":"crop")},wheel:function(t){var e=this,i=C(t),o=Number(e.options.wheelZoomRatio)||.1,a=1;e.disabled||(i.preventDefault(),e.wheeling||(e.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),i.deltaY?a=i.deltaY>0?1:-1:i.wheelDelta?a=-i.wheelDelta/120:i.detail&&(a=i.detail>0?1:-1),e.zoom(-a*o,i)))},cropStart:function(t){var e=this;if(!e.disabled){var i=e.options,o=e.pointers,a=C(t),r=void 0;if(a.changedTouches?c(a.changedTouches,function(t){o[t.identifier]=U(t)}):o[a.pointerId||0]=U(a),r=Object.keys(o).length>1&&i.zoomable&&i.zoomOnTouch?"zoom":v(a.target,"action"),Bt.test(r)){if(M(e.element,"cropstart",{originalEvent:a,action:r})===!1)return;a.preventDefault(),e.action=r,e.cropping=!1,"crop"===r&&(e.cropping=!0,u(e.dragBox,"cropper-modal"))}}},cropMove:function(t){var e=this,i=e.action;if(!e.disabled&&i){var o=e.pointers,a=C(t);a.preventDefault(),M(e.element,"cropmove",{originalEvent:a,action:i})!==!1&&(a.changedTouches?c(a.changedTouches,function(t){h(o[t.identifier],U(t,!0))}):h(o[a.pointerId||0],U(a,!0)),e.change(a))}},cropEnd:function(t){var e=this,i=e.action;if(!e.disabled&&i){var o=e.pointers,a=C(t);a.preventDefault(),a.changedTouches?c(a.changedTouches,function(t){delete o[t.identifier]}):delete o[a.pointerId||0],Object.keys(o).length||(e.action=""),e.cropping&&(e.cropping=!1,f(e.dragBox,"cropper-modal",e.cropped&&this.options.modal)),M(e.element,"cropend",{originalEvent:a,action:i})}}},At="e",Tt="w",Ht="s",Xt="n",Lt="se",Wt="sw",Et="ne",zt="nw",Yt={change:function(t){var e=this,i=e.options,o=e.containerData,a=e.canvasData,r=e.cropBoxData,n=i.aspectRatio,p=e.action,h=r.width,s=r.height,d=r.left,l=r.top,u=d+h,f=l+s,g=0,v=0,w=o.width,x=o.height,b=!0,y=void 0;!n&&t.shiftKey&&(n=h&&s?h/s:1),e.limited&&(g=r.minLeft,v=r.minTop,w=g+Math.min(o.width,a.width,a.left+a.width),x=v+Math.min(o.height,a.height,a.top+a.height));var M=e.pointers,C=M[Object.keys(M)[0]],B={x:C.endX-C.startX,y:C.endY-C.startY};switch(n&&(B.X=B.y*n,B.Y=B.x/n),p){case"all":d+=B.x,l+=B.y;break;case At:if(B.x>=0&&(u>=w||n&&(l<=v||f>=x))){b=!1;break}h+=B.x,n&&(s=h/n,l-=B.Y/2),h<0&&(p=Tt,h=0);break;case Xt:if(B.y<=0&&(l<=v||n&&(d<=g||u>=w))){b=!1;break}s-=B.y,l+=B.y,n&&(h=s*n,d+=B.X/2),s<0&&(p=Ht,s=0);break;case Tt:if(B.x<=0&&(d<=g||n&&(l<=v||f>=x))){b=!1;break}h-=B.x,d+=B.x,n&&(s=h/n,l+=B.Y/2),h<0&&(p=At,h=0);break;case Ht:if(B.y>=0&&(f>=x||n&&(d<=g||u>=w))){b=!1;break}s+=B.y,n&&(h=s*n,d-=B.X/2),s<0&&(p=Xt,s=0);break;case Et:if(n){if(B.y<=0&&(l<=v||u>=w)){b=!1;break}s-=B.y,l+=B.y,h=s*n}else B.x>=0?u<w?h+=B.x:B.y<=0&&l<=v&&(b=!1):h+=B.x,B.y<=0?l>v&&(s-=B.y,l+=B.y):(s-=B.y,l+=B.y);h<0&&s<0?(p=Wt,s=0,h=0):h<0?(p=zt,h=0):s<0&&(p=Lt,s=0);break;case zt:if(n){if(B.y<=0&&(l<=v||d<=g)){b=!1;break}s-=B.y,l+=B.y,h=s*n,d+=B.X}else B.x<=0?d>g?(h-=B.x,d+=B.x):B.y<=0&&l<=v&&(b=!1):(h-=B.x,d+=B.x),B.y<=0?l>v&&(s-=B.y,l+=B.y):(s-=B.y,l+=B.y);h<0&&s<0?(p=Lt,s=0,h=0):h<0?(p=Et,h=0):s<0&&(p=Wt,s=0);break;case Wt:if(n){if(B.x<=0&&(d<=g||f>=x)){b=!1;break}h-=B.x,d+=B.x,s=h/n}else B.x<=0?d>g?(h-=B.x,d+=B.x):B.y>=0&&f>=x&&(b=!1):(h-=B.x,d+=B.x),B.y>=0?f<x&&(s+=B.y):s+=B.y;h<0&&s<0?(p=Et,s=0,h=0):h<0?(p=Lt,h=0):s<0&&(p=zt,s=0);break;case Lt:if(n){if(B.x>=0&&(u>=w||f>=x)){b=!1;break}h+=B.x,s=h/n}else B.x>=0?u<w?h+=B.x:B.y>=0&&f>=x&&(b=!1):h+=B.x,B.y>=0?f<x&&(s+=B.y):s+=B.y;h<0&&s<0?(p=zt,s=0,h=0):h<0?(p=Wt,h=0):s<0&&(p=Et,s=0);break;case"move":e.move(B.x,B.y),b=!1;break;case"zoom":e.zoom(j(M),t),b=!1;break;case"crop":if(!B.x||!B.y){b=!1;break}y=D(e.cropper),d=C.startX-y.left,l=C.startY-y.top,h=r.minWidth,s=r.minHeight,B.x>0?p=B.y>0?Lt:Et:B.x<0&&(d-=h,p=B.y>0?Wt:zt),B.y<0&&(l-=s),e.cropped||(m(e.cropBox,"cropper-hidden"),e.cropped=!0,e.limited&&e.limitCropBox(!0,!0))}b&&(r.width=h,r.height=s,r.left=d,r.top=l,e.action=p,e.renderCropBox()),c(M,function(t){t.startX=t.endX,t.startY=t.endY})}},Ot={crop:function(){var t=this;return t.ready&&!t.disabled&&(t.cropped||(t.cropped=!0,t.limitCropBox(!0,!0),t.options.modal&&u(t.dragBox,"cropper-modal"),m(t.cropBox,"cropper-hidden")),t.setCropBoxData(t.initialCropBoxData)),t},reset:function(){var t=this;return t.ready&&!t.disabled&&(t.imageData=h({},t.initialImageData),t.canvasData=h({},t.initialCanvasData),t.cropBoxData=h({},t.initialCropBoxData),t.renderCanvas(),t.cropped&&t.renderCropBox()),t},clear:function(){var t=this;return t.cropped&&!t.disabled&&(h(t.cropBoxData,{left:0,top:0,width:0,height:0}),t.cropped=!1,t.renderCropBox(),t.limitCanvas(),t.renderCanvas(),m(t.dragBox,"cropper-modal"),u(t.cropBox,"cropper-hidden")),t},replace:function(t,e){var i=this;return!i.disabled&&t&&(i.isImg&&(i.element.src=t),e?(i.url=t,i.image.src=t,i.ready&&(i.image2.src=t,c(i.previews,function(e){B(e,"img")[0].src=t}))):(i.isImg&&(i.replaced=!0),i.options.data=null,i.load(t))),i},enable:function(){var t=this;return t.ready&&(t.disabled=!1,m(t.cropper,"cropper-disabled")),t},disable:function(){var t=this;return t.ready&&(t.disabled=!0,u(t.cropper,"cropper-disabled")),t},destroy:function(){var t=this,e=t.element,i=t.image;return t.loaded?(t.isImg&&t.replaced&&(e.src=t.originalUrl),t.unbuild(),m(e,"cropper-hidden")):t.isImg?b(e,"load",t.start):i&&H(i),x(e,"cropper"),t},move:function(t,e){var o=this,a=o.canvasData;return o.moveTo(i(t)?t:a.left+Number(t),i(e)?e:a.top+Number(e))},moveTo:function(t,o){var a=this,r=a.canvasData,n=!1;return i(o)&&(o=t),t=Number(t),o=Number(o),a.ready&&!a.disabled&&a.options.movable&&(e(t)&&(r.left=t,n=!0),e(o)&&(r.top=o,n=!0),n&&a.renderCanvas(!0)),a},zoom:function(t,e){var i=this,o=i.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,i.zoomTo(o.width*t/o.naturalWidth,e)},zoomTo:function(t,e){var i=this,o=i.options,a=i.canvasData,r=a.width,n=a.height,p=a.naturalWidth,c=a.naturalHeight;if(t=Number(t),t>=0&&i.ready&&!i.disabled&&o.zoomable){var h=p*t,s=c*t;if(M(i.element,"zoom",{originalEvent:e,oldRatio:r/p,ratio:h/p})===!1)return i;if(e){var d=i.pointers,l=D(i.cropper),u=d&&Object.keys(d).length?P(d):{pageX:e.pageX,pageY:e.pageY};a.left-=(h-r)*((u.pageX-l.left-a.left)/r),a.top-=(s-n)*((u.pageY-l.top-a.top)/n)}else a.left-=(h-r)/2,a.top-=(s-n)/2;a.width=h,a.height=s,i.renderCanvas(!0)}return i},rotate:function(t){var e=this;return e.rotateTo((e.imageData.rotate||0)+Number(t))},rotateTo:function(t){var i=this;return t=Number(t),e(t)&&i.ready&&!i.disabled&&i.options.rotatable&&(i.imageData.rotate=t%360,i.rotated=!0,i.renderCanvas(!0)),i},scale:function(t,o){var a=this,r=a.imageData,n=!1;return i(o)&&(o=t),t=Number(t),o=Number(o),a.ready&&!a.disabled&&a.options.scalable&&(e(t)&&(r.scaleX=t,n=!0),e(o)&&(r.scaleY=o,n=!0),n&&a.renderImage(!0)),a},scaleX:function(t){var i=this,o=i.imageData.scaleY;return i.scale(t,e(o)?o:1)},scaleY:function(t){var i=this,o=i.imageData.scaleX;return i.scale(e(o)?o:1,t)},getData:function(t){var e=this,i=e.options,o=e.imageData,a=e.canvasData,r=e.cropBoxData,n=void 0,p=void 0;return e.ready&&e.cropped?(p={x:r.left-a.left,y:r.top-a.top,width:r.width,height:r.height},n=o.width/o.naturalWidth,c(p,function(e,i){e/=n,p[i]=t?Math.round(e):e})):p={x:0,y:0,width:0,height:0},i.rotatable&&(p.rotate=o.rotate||0),i.scalable&&(p.scaleX=o.scaleX||1,p.scaleY=o.scaleY||1),p},setData:function(t){var i=this,o=i.options,n=i.imageData,p=i.canvasData,c={},h=void 0,s=void 0,d=void 0;return r(t)&&(t=t.call(i.element)),i.ready&&!i.disabled&&a(t)&&(o.rotatable&&e(t.rotate)&&t.rotate!==n.rotate&&(n.rotate=t.rotate,i.rotated=h=!0),o.scalable&&(e(t.scaleX)&&t.scaleX!==n.scaleX&&(n.scaleX=t.scaleX,s=!0),e(t.scaleY)&&t.scaleY!==n.scaleY&&(n.scaleY=t.scaleY,s=!0)),h?i.renderCanvas():s&&i.renderImage(),d=n.width/n.naturalWidth,e(t.x)&&(c.left=t.x*d+p.left),e(t.y)&&(c.top=t.y*d+p.top),e(t.width)&&(c.width=t.width*d),e(t.height)&&(c.height=t.height*d),i.setCropBoxData(c)),i},getContainerData:function(){var t=this;return t.ready?t.containerData:{}},getImageData:function(){var t=this;return t.loaded?t.imageData:{}},getCanvasData:function(){var t=this,e=t.canvasData,i={};return t.ready&&c(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var i=this,o=i.canvasData,n=o.aspectRatio;return r(t)&&(t=t.call(i.element)),i.ready&&!i.disabled&&a(t)&&(e(t.left)&&(o.left=t.left),e(t.top)&&(o.top=t.top),e(t.width)?(o.width=t.width,o.height=t.width/n):e(t.height)&&(o.height=t.height,o.width=t.height*n),i.renderCanvas(!0)),i},getCropBoxData:function(){var t=this,e=t.cropBoxData,i=void 0;return t.ready&&t.cropped&&(i={left:e.left,top:e.top,width:e.width,height:e.height}),i||{}},setCropBoxData:function(t){var i=this,o=i.cropBoxData,n=i.options.aspectRatio,p=void 0,c=void 0;return r(t)&&(t=t.call(i.element)),i.ready&&i.cropped&&!i.disabled&&a(t)&&(e(t.left)&&(o.left=t.left),e(t.top)&&(o.top=t.top),e(t.width)&&t.width!==o.width&&(p=!0,o.width=t.width),e(t.height)&&t.height!==o.height&&(c=!0,o.height=t.height),n&&(p?o.height=o.width/n:c&&(o.width=o.height*n)),i.renderCropBox()),i},getCroppedCanvas:function(t){var e=this;if(!e.ready||!window.HTMLCanvasElement)return null;if(!e.cropped)return O(e.image,e.imageData);a(t)||(t={});var i=e.getData(),o=i.width,r=i.height,n=o/r,p=void 0,c=void 0,h=void 0;a(t)&&(p=t.width,c=t.height,p?(c=p/n,h=p/o):c&&(p=c*n,h=c/r));var s=Math.floor(p||o),d=Math.floor(c||r),l=A("canvas"),u=l.getContext("2d");l.width=s,l.height=d,t.fillColor&&(u.fillStyle=t.fillColor,u.fillRect(0,0,s,d));var m=function(){var t=O(e.image,e.imageData),a=t.width,n=t.height,p=e.canvasData,c=[t],s=i.x+p.naturalWidth*(Math.abs(i.scaleX||1)-1)/2,d=i.y+p.naturalHeight*(Math.abs(i.scaleY||1)-1)/2,l=void 0,u=void 0,m=void 0,f=void 0,g=void 0,v=void 0;return s<=-o||s>a?s=l=m=g=0:s<=0?(m=-s,s=0,l=g=Math.min(a,o+s)):s<=a&&(m=0,l=g=Math.min(o,a-s)),l<=0||d<=-r||d>n?d=u=f=v=0:d<=0?(f=-d,d=0,u=v=Math.min(n,r+d)):d<=n&&(f=0,u=v=Math.min(r,n-d)),c.push(Math.floor(s),Math.floor(d),Math.floor(l),Math.floor(u)),h&&(m*=h,f*=h,g*=h,v*=h),g>0&&v>0&&c.push(Math.floor(m),Math.floor(f),Math.floor(g),Math.floor(v)),c}();return u.drawImage.apply(u,q(m)),l},setAspectRatio:function(t){var e=this,o=e.options;return e.disabled||i(t)||(o.aspectRatio=Math.max(0,t)||NaN,e.ready&&(e.initCropBox(),e.cropped&&e.renderCropBox())),e},setDragMode:function(t){var e=this,i=e.options,o=e.dragBox,a=e.face,r=void 0,n=void 0;return e.loaded&&!e.disabled&&(r="crop"===t,n=i.movable&&"move"===t,t=r||n?t:"none",w(o,"action",t),f(o,"cropper-crop",r),f(o,"cropper-move",n),i.cropBoxMovable||(w(a,"action",t),f(a,"cropper-crop",r),f(a,"cropper-move",n))),e}},Nt="cropper",Rt=Nt+"-hidden",It="error",St="load",Ut="ready",jt="crop",Pt=/^data:/,_t=/^data:image\/jpeg.*;base64,/,Vt=void 0,Zt=function(){function t(e,i){F(this,t);var o=this;o.element=e,o.options=h({},_,a(i)&&i),o.loaded=!1,o.ready=!1,o.complete=!1,o.rotated=!1,o.cropped=!1,o.disabled=!1,o.replaced=!1,o.limited=!1,o.wheeling=!1,o.isImg=!1,o.originalUrl="",o.canvasData=null,o.cropBoxData=null,o.previews=null,o.pointers={},o.init()}return $(t,[{key:"init",value:function(){var t=this,e=t.element,i=e.tagName.toLowerCase(),o=void 0;if(!v(e,Nt)){if(w(e,Nt,t),"img"===i){if(t.isImg=!0,t.originalUrl=o=e.getAttribute("src"),!o)return;o=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(o=e.toDataURL());t.load(o)}}},{key:"load",value:function(t){var e=this,i=e.options,o=e.element;if(t){if(e.url=t,e.imageData={},!i.checkOrientation||!window.ArrayBuffer)return void e.clone();if(Pt.test(t))return void(_t?e.read(I(t)):e.clone());var a=new XMLHttpRequest;a.onerror=a.onabort=function(){e.clone()},a.onload=function(){e.read(a.response)},i.checkCrossOrigin&&L(t)&&o.crossOrigin&&(t=W(t)),a.open("get",t),a.responseType="arraybuffer",a.withCredentials="use-credentials"===o.crossOrigin,a.send()}}},{key:"read",value:function(t){var e=this,i=e.options,o=R(t),a=e.imageData,r=0,n=1,p=1;if(o>1)switch(e.url=S(t),o){case 2:n=-1;break;case 3:r=-180;break;case 4:p=-1;break;case 5:r=90,p=-1;break;case 6:r=90;break;case 7:r=90,n=-1;break;case 8:r=-90}i.rotatable&&(a.rotate=r),i.scalable&&(a.scaleX=n,a.scaleY=p),e.clone()}},{key:"clone",value:function(){var t=this,e=t.element,i=t.url,o=void 0,a=void 0,r=void 0,n=void 0;t.options.checkCrossOrigin&&L(i)&&(o=e.crossOrigin,o?a=i:(o="anonymous",a=W(i))),t.crossOrigin=o,t.crossOriginUrl=a;var p=A("img");o&&(p.crossOrigin=o),p.src=a||i,t.image=p,t.onStart=r=s(t.start,t),t.onStop=n=s(t.stop,t),t.isImg?e.complete?t.start():y(e,St,r):(y(p,St,r),y(p,It,n),u(p,"cropper-hide"),e.parentNode.insertBefore(p,e.nextSibling))}},{key:"start",value:function(t){var e=this,i=e.isImg?e.element:e.image;t&&(b(i,St,e.onStart),b(i,It,e.onStop)),E(i,function(t,i){h(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.loaded=!0,e.build()})}},{key:"stop",value:function(){var t=this,e=t.image;b(e,St,t.onStart),b(e,It,t.onStop),H(e),t.image=null}},{key:"build",value:function(){var t=this,e=t.options,i=t.element,o=t.image,a=void 0,n=void 0,p=void 0,c=void 0,h=void 0,s=void 0;if(t.loaded){t.ready&&t.unbuild();var d=A("div");d.innerHTML=V,t.container=a=i.parentNode,t.cropper=n=k(d,"cropper-container")[0],t.canvas=p=k(n,"cropper-canvas")[0],t.dragBox=c=k(n,"cropper-drag-box")[0],t.cropBox=h=k(n,"cropper-crop-box")[0],t.viewBox=k(n,"cropper-view-box")[0],t.face=s=k(h,"cropper-face")[0],T(p,o),u(i,Rt),a.insertBefore(n,i.nextSibling),t.isImg||m(o,"cropper-hide"),t.initPreview(),t.bind(),e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,t.cropped=e.autoCrop,e.autoCrop?e.modal&&u(c,"cropper-modal"):u(h,Rt),e.guides||u(k(h,"cropper-dashed"),Rt),e.center||u(k(h,"cropper-center"),Rt),e.background&&u(n,"cropper-bg"),e.highlight||u(s,"cropper-invisible"),e.cropBoxMovable&&(u(s,"cropper-move"),w(s,"action","all")),e.cropBoxResizable||(u(k(h,"cropper-line"),Rt),
u(k(h,"cropper-point"),Rt)),t.setDragMode(e.dragMode),t.render(),t.ready=!0,t.setData(e.data),t.completing=setTimeout(function(){r(e.ready)&&y(i,Ut,e.ready,!0),M(i,Ut),M(i,jt,t.getData()),t.complete=!0},0)}}},{key:"unbuild",value:function(){var t=this;t.ready&&(t.complete||clearTimeout(t.completing),t.ready=!1,t.complete=!1,t.initialImageData=null,t.initialCanvasData=null,t.initialCropBoxData=null,t.containerData=null,t.canvasData=null,t.cropBoxData=null,t.unbind(),t.resetPreview(),t.previews=null,t.viewBox=null,t.cropBox=null,t.dragBox=null,t.canvas=null,t.container=null,H(t.cropper),t.cropper=null)}}],[{key:"noConflict",value:function(){return window.Cropper=Vt,t}},{key:"setDefaults",value:function(t){h(_,a(t)&&t)}}]),t}();return h(Zt.prototype,ht),h(Zt.prototype,dt),h(Zt.prototype,Dt),h(Zt.prototype,kt),h(Zt.prototype,Yt),h(Zt.prototype,Ot),"undefined"!=typeof window&&(Vt=window.Cropper,window.Cropper=Zt),Zt})},96:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,'/*!\n * Cropper.js v1.0.0-beta.1\n * https://github.com/fengyuanchen/cropperjs\n *\n * Copyright (c) 2017 Fengyuan Chen\n * Released under the MIT license\n *\n * Date: 2017-01-21T12:28:26.786Z\n */.cropper-container{font-size:0;line-height:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;direction:ltr;-ms-touch-action:none;touch-action:none}.cropper-container img{display:block;min-width:0!important;max-width:none!important;min-height:0!important;max-height:none!important;width:100%;height:100%;image-orientation:0deg}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-wrap-box{overflow:hidden}.cropper-drag-box{opacity:0;background-color:#fff}.cropper-modal{opacity:.5;background-color:#000}.cropper-view-box{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75)}.cropper-dashed{position:absolute;display:block;opacity:.5;border:0 dashed #eee}.cropper-dashed.dashed-h{top:33.33333%;left:0;width:100%;height:33.33333%;border-top-width:1px;border-bottom-width:1px}.cropper-dashed.dashed-v{top:0;left:33.33333%;width:33.33333%;height:100%;border-right-width:1px;border-left-width:1px}.cropper-center{position:absolute;top:50%;left:50%;display:block;width:0;height:0;opacity:.75}.cropper-center:after,.cropper-center:before{position:absolute;display:block;content:" ";background-color:#eee}.cropper-center:before{top:0;left:-3px;width:7px;height:1px}.cropper-center:after{top:-3px;left:0;width:1px;height:7px}.cropper-face,.cropper-line,.cropper-point{position:absolute;display:block;width:100%;height:100%;opacity:.1}.cropper-face{top:0;left:0;background-color:#fff}.cropper-line{background-color:#39f}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize}.cropper-point{width:5px;height:5px;opacity:.75;background-color:#39f}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;opacity:1}@media (min-width:768px){.cropper-point.point-se{width:15px;height:15px}}@media (min-width:992px){.cropper-point.point-se{width:10px;height:10px}}@media (min-width:1200px){.cropper-point.point-se{width:5px;height:5px;opacity:.75}}.cropper-point.point-se:before{position:absolute;right:-50%;bottom:-50%;display:block;width:200%;height:200%;content:" ";opacity:0;background-color:#39f}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{position:absolute;display:block;width:0;height:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""])},97:function(t,e,i){var o=i(96);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)},284:function(t,e,i){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),n=a(r),p=i(3),c=i(6),h=i(86),s=a(h);i(97);var d=i(7),l=o(d);e.default={components:{XHeader:p.XHeader,ViewBox:p.ViewBox},methods:(0,n.default)({},(0,c.mapActions)(["uploadHeadImg"]),{_img:function(){this.uploadHeadImg({file:this.cropper.getCroppedCanvas({width:140,height:140}).toDataURL("image/jpeg"),token:this.fetchToken}).then(function(t){l.toast("上传成功"),setTimeout(function(){history.back()},500)})}}),data:function(){return{cropper:""}},computed:(0,n.default)({},(0,c.mapGetters)(["User"]),{userImgBuffer:function(){return this.User.bufferImg}}),ready:function(){var t=document.documentElement.clientHeight-46;this.cropper=new s.default(this.$els.img,{aspectRatio:1,minContainerHeight:t})}}},426:function(t,e){t.exports=' <view-box class=cameraIndex> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}"> 剪裁<a slot=right @click=_img>完成</a> </x-header> </div> <div style=margin-top:46px> <img v-el:img :src=userImgBuffer style=width:100% /> </div> </view-box> '},491:function(t,e,i){var o,a,r={};o=i(284),a=i(426),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(n.template=a),n.computed||(n.computed={}),Object.keys(r).forEach(function(t){var e=r[t];n.computed[t]=function(){return e}})}});