$.ajaxSetup({ cache: true });

// ------------------------------------ MODERNIZR ------------------------------------

/* https://modernizr.com/download/?-audio-audioloop-audiopreload-csscolumns-flexbox-flexwrap-forcetouch-inlinesvg-svgasimg-svgfilters-touchevents-video-webaudio-setclasses !*/
!function(A,w,e){function D(A,w){return typeof A===w}function P(){var A,w,e,P,a,n,t;for(var o in v)if(v.hasOwnProperty(o)){if(A=[],w=v[o],w.name&&(A.push(w.name.toLowerCase()),w.options&&w.options.aliases&&w.options.aliases.length))for(e=0;e<w.options.aliases.length;e++)A.push(w.options.aliases[e].toLowerCase());for(P=D(w.fn,"function")?w.fn():w.fn,a=0;a<A.length;a++)n=A[a],t=n.split("."),1===t.length?Modernizr[t[0]]=P:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=P),g.push((P?"":"no-")+t.join("-"))}}function a(A){var w=p.className,e=Modernizr._config.classPrefix||"";if(c&&(w=w.baseVal),Modernizr._config.enableJSClass){var D=new RegExp("(^|\\s)"+e+"no-js(\\s|$)");w=w.replace(D,"$1"+e+"js$2")}Modernizr._config.enableClasses&&(w+=" "+e+A.join(" "+e),c?p.className.baseVal=w:p.className=w)}function n(){return"function"!=typeof w.createElement?w.createElement(arguments[0]):c?w.createElementNS.call(w,"http://www.w3.org/2000/svg",arguments[0]):w.createElement.apply(w,arguments)}function t(A){return A.replace(/([a-z])-([a-z])/g,function(A,w,e){return w+e.toUpperCase()}).replace(/^-/,"")}function o(A,w){if("object"==typeof A)for(var e in A)V(A,e)&&o(e,A[e]);else{A=A.toLowerCase();var D=A.split("."),P=Modernizr[D[0]];if(2==D.length&&(P=P[D[1]]),"undefined"!=typeof P)return Modernizr;w="function"==typeof w?w():w,1==D.length?Modernizr[D[0]]=w:(!Modernizr[D[0]]||Modernizr[D[0]]instanceof Boolean||(Modernizr[D[0]]=new Boolean(Modernizr[D[0]])),Modernizr[D[0]][D[1]]=w),a([(w&&0!=w?"":"no-")+D.join("-")]),Modernizr._trigger(A,w)}return Modernizr}function i(){var A=w.body;return A||(A=n(c?"svg":"body"),A.fake=!0),A}function r(A,e,D,P){var a,t,o,r,E="modernizr",B=n("div"),Q=i();if(parseInt(D,10))for(;D--;)o=n("div"),o.id=P?P[D]:E+(D+1),B.appendChild(o);return a=n("style"),a.type="text/css",a.id="s"+E,(Q.fake?Q:B).appendChild(a),Q.appendChild(B),a.styleSheet?a.styleSheet.cssText=A:a.appendChild(w.createTextNode(A)),B.id=E,Q.fake&&(Q.style.background="",Q.style.overflow="hidden",r=p.style.overflow,p.style.overflow="hidden",p.appendChild(Q)),t=e(B,A),Q.fake?(Q.parentNode.removeChild(Q),p.style.overflow=r,p.offsetHeight):B.parentNode.removeChild(B),!!t}function E(A,w){return!!~(""+A).indexOf(w)}function B(A,w){return function(){return A.apply(w,arguments)}}function Q(A,w,e){var P;for(var a in A)if(A[a]in w)return e===!1?A[a]:(P=w[A[a]],D(P,"function")?B(P,e||w):P);return!1}function l(A){return A.replace(/([A-Z])/g,function(A,w){return"-"+w.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(w,D){var P=w.length;if("CSS"in A&&"supports"in A.CSS){for(;P--;)if(A.CSS.supports(l(w[P]),D))return!0;return!1}if("CSSSupportsRule"in A){for(var a=[];P--;)a.push("("+l(w[P])+":"+D+")");return a=a.join(" or "),r("@supports ("+a+") { #modernizr { position: absolute; } }",function(A){return"absolute"==getComputedStyle(A,null).position})}return e}function d(A,w,P,a){function o(){r&&(delete h.style,delete h.modElem)}if(a=D(a,"undefined")?!1:a,!D(P,"undefined")){var i=u(A,P);if(!D(i,"undefined"))return i}for(var r,B,Q,l,d,s=["modernizr","tspan","samp"];!h.style&&s.length;)r=!0,h.modElem=n(s.shift()),h.style=h.modElem.style;for(Q=A.length,B=0;Q>B;B++)if(l=A[B],d=h.style[l],E(l,"-")&&(l=t(l)),h.style[l]!==e){if(a||D(P,"undefined"))return o(),"pfx"==w?l:!0;try{h.style[l]=P}catch(f){}if(h.style[l]!=d)return o(),"pfx"==w?l:!0}return o(),!1}function s(A,w,e,P,a){var n=A.charAt(0).toUpperCase()+A.slice(1),t=(A+" "+y.join(n+" ")+n).split(" ");return D(w,"string")||D(w,"undefined")?d(t,w,P,a):(t=(A+" "+U.join(n+" ")+n).split(" "),Q(t,w,e))}function f(A,w,D){return s(A,e,e,w,D)}var g=[],v=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,w){var e=this;setTimeout(function(){w(e[A])},0)},addTest:function(A,w,e){v.push({name:A,fn:w,options:e})},addAsyncTest:function(A){v.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("webaudio",function(){var w="webkitAudioContext"in A,e="AudioContext"in A;return Modernizr._config.usePrefixes?w||e:e}),Modernizr.addTest("svgfilters",function(){var w=!1;try{w="SVGFEColorMatrixElement"in A&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return w});var p=w.documentElement,c="svg"===p.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var A=n("audio"),w=!1;try{(w=!!A.canPlayType)&&(w=new Boolean(w),w.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),w.mp3=A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),w.opus=A.canPlayType('audio/ogg; codecs="opus"')||A.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),w.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),w.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return w}),Modernizr.addTest("video",function(){var A=n("video"),w=!1;try{(w=!!A.canPlayType)&&(w=new Boolean(w),w.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),w.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),w.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),w.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),w.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return w}),Modernizr.addTest("audioloop","loop"in n("audio")),Modernizr.addTest("inlinesvg",function(){var A=n("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)});var I=function(){function A(A,w){var P;return A?(w&&"string"!=typeof w||(w=n(w||"div")),A="on"+A,P=A in w,!P&&D&&(w.setAttribute||(w=n("div")),w.setAttribute(A,""),P="function"==typeof w[A],w[A]!==e&&(w[A]=e),w.removeAttribute(A)),P):!1}var D=!("onblur"in w.documentElement);return A}();C.hasEvent=I;var m=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=m;var V;!function(){var A={}.hasOwnProperty;V=D(A,"undefined")||D(A.call,"undefined")?function(A,w){return w in A&&D(A.constructor.prototype[w],"undefined")}:function(w,e){return A.call(w,e)}}(),C._l={},C.on=function(A,w){this._l[A]||(this._l[A]=[]),this._l[A].push(w),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},C._trigger=function(A,w){if(this._l[A]){var e=this._l[A];setTimeout(function(){var A,D;for(A=0;A<e.length;A++)(D=e[A])(w)},0),delete this._l[A]}},Modernizr._q.push(function(){C.addTest=o}),Modernizr.addAsyncTest(function(){function A(D){clearTimeout(w);var a=D!==e&&"loadeddata"===D.type?!0:!1;P.removeEventListener("loadeddata",A,!1),o("audiopreload",a),P.parentNode.removeChild(P)}var w,D=300,P=n("audio"),a=P.style;if(!(Modernizr.audio&&"preload"in P))return void o("audiopreload",!1);a.position="absolute",a.height=0,a.width=0;try{if(Modernizr.audio.mp3)P.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)P.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)P.src="data:audio/ogg;base64,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lFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void o("audiopreload",!1);P.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(t){return void o("audiopreload",!1)}P.setAttribute("preload","auto"),P.style.cssText="display:none",p.appendChild(P),setTimeout(function(){P.addEventListener("loadeddata",A,!1),w=setTimeout(A,D)},0)}),Modernizr.addTest("svgasimg",w.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var q=C.testStyles=r;Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in A||A.DocumentTouch&&w instanceof DocumentTouch)e=!0;else{var D=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");q(D,function(A){e=9===A.offsetTop})}return e});var M="Moz O ms Webkit",y=C._config.usePrefixes?M.split(" "):[];C._cssomPrefixes=y;var R=function(w){var D,P=m.length,a=A.CSSRule;if("undefined"==typeof a)return e;if(!w)return!1;if(w=w.replace(/^@/,""),D=w.replace(/-/g,"_").toUpperCase()+"_RULE",D in a)return"@"+w;for(var n=0;P>n;n++){var t=m[n],o=t.toUpperCase()+"_"+D;if(o in a)return"@-"+t.toLowerCase()+"-"+w}return!1};C.atRule=R;var U=C._config.usePrefixes?M.toLowerCase().split(" "):[];C._domPrefixes=U;var S={elem:n("modernizr")};Modernizr._q.push(function(){delete S.elem});var h={style:S.elem.style};Modernizr._q.unshift(function(){delete h.style}),C.testAllProps=s;var Z=C.prefixed=function(A,w,e){return 0===A.indexOf("@")?R(A):(-1!=A.indexOf("-")&&(A=t(A)),w?s(A,w,e):s(A,"pfx"))};Modernizr.addTest("forcetouch",function(){return I(Z("mouseforcewillbegin",A,!1),A)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),C.testAllProps=f,function(){Modernizr.addTest("csscolumns",function(){var A=!1,w=f("columnCount");try{(A=!!w)&&(A=new Boolean(A))}catch(e){}return A});for(var A,w,e=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],D=0;D<e.length;D++)A=e[D].toLowerCase(),w=f("column"+e[D]),("breakbefore"===A||"breakafter"===A||"breakinside"==A)&&(w=w||f(e[D])),Modernizr.addTest("csscolumns."+A,w)}(),Modernizr.addTest("flexbox",f("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",f("flexWrap","wrap",!0)),P(),a(g),delete C.addTest,delete C.addAsyncTest;for(var W=0;W<Modernizr._q.length;W++)Modernizr._q[W]();A.Modernizr=Modernizr}(window,document);

// ------------------------------------ ASYNC LOADERS ------------------------------------

function loadHelper(path,el,before,style){
	function loadJS(){ if ( !el || $(el).length ) { $.getScript(window.ui+'/ui/js/helpers/'+path); } }
	if ( before ) { $.getScript(window.ui+before).done(function(){ loadJS(); }) } else { loadJS(); }
	if ( style ) { var head  = document.getElementsByTagName('head')[0]; var link  = document.createElement('link'); link.rel  = 'stylesheet'; link.type = 'text/css'; link.href = window.ui+style; link.media = 'all'; head.insertBefore( link, head.firstChild ); }
}

// ------------------------------------ COOKIES ------------------------------------

function set_cookie(name,value,days) { var d = new Date(); d.setTime(d.getTime() + ((days?days:60)*24*60*60*1000)); var expires = "expires="+ d.toUTCString(); document.cookie = name + "=" + value + ";" + expires + ";path=/"; }
function get_cookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for(var i = 0; i <ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length,c.length); } } return ""; }
function get_params() { if ( window.location.href.indexOf('?') == -1 ) { return []; } var vars = [], hash; var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); for(var i = 0; i < hashes.length; i++) { hash = hashes[i].split('='); vars[hash[0]] = hash[1]; } return vars; }
function get_param(name) { var params = get_params(); return ( params[name] ) ? params[name] : false; }

// ------------------------------------ CLASSES ------------------------------------

// adds modernizer classes to wrapper element
$('div.serverbid').addClass($('html').attr('class')).removeClass('wf-loading wf-inactive');

// adds specialty classes to body
$(document).on('ready',function(){ $('html').addClass('ready'); });
$(window).on('load',function(){ $('html').addClass('loaded'); });
if ( 'ontouchstart' in window ) { $('html').addClass('touch'); }
function is_touch(){ return ( 'ontouchstart' in window ); }

// ------------------------------------ TABS ------------------------------------

var hash = window.location.hash, tab = $('.nav-tabs a[href="'+hash+'"]'), pane = $(hash);
if ( hash && tab.length && pane.length ) {
	tab.closest('li').addClass('active').siblings('li').removeClass('active');
	pane.addClass('active in').siblings('.tab-pane').removeClass('active in');
	$("html, body").scrollTop( tab.closest('.nav-tabs').offset().top );
}

// ------------------------------------ ANCHORS ------------------------------------

// scroll to page section
$(document).on('click','a[href^="#"]:not("[data-toggle]")',function(e){ var target = $($(this).attr('href')); if (target.length === 0) { return; } e.preventDefault(); var timer = setTimeout(function(){ $('html,body').animate({scrollTop:(target.offset().top)},750,'swing'); },1); });

// ------------------------------------ SCROLLING ------------------------------------

var prevscroll = 0;
function scroll_classes(){
	var nextscroll = $(document).scrollTop();
	if ( nextscroll > prevscroll ) { $('html').addClass('page-scrolling page-scrolling-down').removeClass('page-scrolling-up'); }
	if ( nextscroll < prevscroll ) { $('html').addClass('page-scrolling page-scrolling-up').removeClass('page-scrolling-down'); }
	if ( nextscroll == 0 ) { $('html').removeClass('page-scrolling page-scrolling-up page-scrolling-down'); }
	prevscroll = nextscroll;
}

$(window).scroll(function(){ scroll_classes(); });
$(window).resize(function(){ scroll_classes(); });
$(document).ready(function(){ scroll_classes(); });

// ------------------------------------ FOCUS SET ------------------------------------

$(document).on('click','[data-focus]',function(){ var el = $(this); var timer = setTimeout(function(){ $(el.attr('data-focus')).find('input:visible:first').focus(); },1); });

// ------------------------------------ SCROLL INTO VIEW ------------------------------------

function updateScrollFocus(){
	var wintop = $(document).scrollTop(), winheight = $(window).height(), winmiddle = wintop + winheight/2, winbottom = wintop + winheight;
	$('[data-scrollfocus]').each(function(){
		var top = $(this).offset().top, bottom = top + $(this).outerHeight(), middle = ( top + bottom ) / 2;
		if ( middle < winbottom && bottom > wintop ) {
			$(this).addClass('scrollfocus'); $(this).removeClass('not-scrollfocus');
		} else {
			$(this).addClass('not-scrollfocus'); $(this).removeClass('scrollfocus');
		}
	})
}
$(window).scroll(function(){ updateScrollFocus(); });
$(document).ready(function(){ updateScrollFocus(); });

// ------------------------------------ BACKGROUNDS ------------------------------------

// background images
$(document).ready(function(){ $('[data-bg]').each(function(){ var el = $(this), bg = $(this).data('bg'); if ( bg ) { var timer = setTimeout(function(){ el.css('background-image','url('+bg+')'); },1); } }); });

// ------------------------------------ VIDEO WRAPPER ------------------------------------

// video iframes
$(document).ready(function(){ $('iframe[src*=vimeo], iframe[src*=youtube]').each(function(){ if ( !$(this).closest('.video') ) { $(this).wrap('<div class="video" />'); } }); });

// ------------------------------------ HELPERS ------------------------------------

loadHelper('jqueryui.js','[data-autocomplete], [data-datepicker]','/ui/jqueryui/jquery-ui-1.12.1/jquery-ui.min.js','/ui/jqueryui/jquery-ui-1.12.1/jquery-ui.structure.min.css');
loadHelper('bootstrap.js',false,'/ui/bootstrap/js/bootstrap.min.js');
loadHelper('suggest.js','[data-suggest]','/ui/suggest/js/bootstrap-suggest.js','/ui/suggest/css/bootstrap-suggest.css');
loadHelper('validator.js','[data-toggle="validator"]','/ui/bootstrap-validator/dist/validator.min.js');
loadHelper('forms.js');
