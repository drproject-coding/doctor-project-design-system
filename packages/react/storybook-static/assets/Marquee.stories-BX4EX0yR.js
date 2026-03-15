import{j as t}from"./jsx-runtime-D_zvdyIk.js";function l({items:n,separator:T="+++",speed:N=20,className:E=""}){const o=n.flatMap((e,s)=>s<n.length-1?[e,T]:[e]),f=[...o,...o];return t.jsx("div",{className:`drp-marquee ${E}`,children:t.jsx("div",{className:"drp-marquee__track",style:{animationDuration:`${N}s`,animationPlayState:"var(--drp-marquee-play-state, running)"},children:f.map((e,s)=>t.jsx("span",{className:"drp-marquee__item",children:e},s))})})}l.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"+++"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const I={title:"Composites/Marquee",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{items:["SYNDICATION","ENRICHMENT","AUTOMATION","DIGITAL ASSET MANAGEMENT"],separator:"+++"}},r={args:{items:["BRUTALIST","DESIGN","SYSTEM","DOCTOR PROJECT"],separator:"///",speed:10}};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: ["SYNDICATION", "ENRICHMENT", "AUTOMATION", "DIGITAL ASSET MANAGEMENT"],
    separator: "+++"
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: ["BRUTALIST", "DESIGN", "SYSTEM", "DOCTOR PROJECT"],
    separator: "///",
    speed: 10
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Default","Fast"];export{a as Default,r as Fast,S as __namedExportsOrder,I as default};
