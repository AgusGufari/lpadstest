import{R as n}from"./jsx-runtime-ByGpHSPZ.js";import{n as h,v as G,b as m,w as g,I as _,f as x,u as E,a as j,s as P,B as R}from"./factory-CAXpoK4s.js";import{g as p,a as q}from"./get-base-value-BwMQOHSn.js";function w({spacing:a,verticalSpacing:i,cols:t,selector:c}){var u;const l=h(),o=i===void 0?a:i,d=G({"--sg-spacing-x":m(p(a)),"--sg-spacing-y":m(p(o)),"--sg-cols":(u=p(t))==null?void 0:u.toString()}),r=g(l.breakpoints).reduce((e,s)=>(e[s]||(e[s]={}),typeof a=="object"&&a[s]!==void 0&&(e[s]["--sg-spacing-x"]=m(a[s])),typeof o=="object"&&o[s]!==void 0&&(e[s]["--sg-spacing-y"]=m(o[s])),typeof t=="object"&&t[s]!==void 0&&(e[s]["--sg-cols"]=t[s]),e),{}),f=q(g(r),l).filter(e=>g(r[e.value]).length>0).map(e=>({query:`(min-width: ${l.breakpoints[e.value]})`,styles:r[e.value]}));return n.createElement(_,{styles:d,media:f,selector:c})}var C={root:"m-2415a157"};const v=C,I={cols:1,spacing:"md"},B=x((a,i)=>{const t=E("SimpleGrid",I,a),{classNames:c,className:l,style:o,styles:d,unstyled:r,vars:y,cols:f,verticalSpacing:u,spacing:e,...s}=t,N=j({name:"SimpleGrid",classes:v,props:t,className:l,style:o,classNames:c,styles:d,unstyled:r,vars:y}),S=P();return n.createElement(n.Fragment,null,n.createElement(w,{...t,selector:`.${S}`}),n.createElement(R,{ref:i,...N("root",{className:S}),...s}))});B.classes=v;B.displayName="@mantine/core/SimpleGrid";export{B as S};
