!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.StompBoot=e():t.StompBoot=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>s});const r=/\s/,o=/^https?:\/\//;class s{static SearchBuilder=class{constructor(t){this.template=String(t)}query(t){return(t=String(t)).match(o)?t:t.includes(".")&&!t.match(r)?`http://${t}`:this.template.replace("%s",encodeURIComponent(t))}};static CODEC_XOR=1;static CODEC_PLAIN=0;static LOG_TRACE=0;static LOG_DEBUG=1;static LOG_INFO=2;static LOG_WARN=3;static LOG_ERROR=4;static LOG_SILENT=5;constructor(t){if("string"!=typeof t.directory)throw new TypeError("Directory must be a string");this.config=t,this.ready=this.register()}async register(){if(!("serviceWorker"in navigator))throw new Error("Your browser does not support service workers.");const t=`${this.config.directory}worker.js?config=${encodeURIComponent(JSON.stringify(this.config))}`;this.worker=await navigator.serviceWorker.register(t,{scope:this.config.directory,updateViaCache:"none"}),await this.worker.update(),this.config.loglevel<=1&&console.debug("Registered the service worker.")}#t(t,e){return`${this.config.directory}process:${encodeURIComponent(t)}:${encodeURIComponent(e)}`}html(t){return this.#t("html",t)}css(t){return this.#t("css",t)}js(t){return this.#t("js",t)}binary(t){return this.#t("binary",t)}}return e.default})()));
//# sourceMappingURL=bootstrapper.js.map