import{k as a}from"./index-DBv3gr79.js";import{b as n,h as s,i as c,j as i}from"./store-yifqSBJQ.js";const h=t=>{const r=new FormData;for(const e in t)r.append(e,t[e]);return r};function m(t,r){const e=(()=>{try{const o=new URL(t);return o.hash="",o.search="",o.pathname="",o}catch{return}})();return a.create({prefixUrl:e,headers:r?{Authorization:"Bearer "+r}:void 0})}const p=n(t=>m(t(c),t(s))),f=()=>i.get(p);export{h as f,f as g,p};
