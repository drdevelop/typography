if(!self.define){let e,t={};const r=(r,o)=>(r=new URL(r+".js",o).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let s={};const l=e=>r(e,n),u={module:{uri:n},exports:s,require:l};t[n]=Promise.all(o.map((e=>u[e]||l(e)))).then((e=>(i(...e),s)))}}define(["./workbox-390f33ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/typography/react/umi.adbfa325.js",revision:null},{url:"/typography/react/umi.f919bcc0.css",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.*\.html/,new e.NetworkFirst,"GET")}));
