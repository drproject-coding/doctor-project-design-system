import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({color:l,pulse:w,className:P="",..._}){const B=["drp-dot",l&&`drp-dot--${l}`,w&&"drp-dot--pulse",P].filter(Boolean).join(" ");return e.jsx("span",{className:B,..._})}a.__docgenInfo={description:'Small colored dot for conveying status at a glance — use `pulse` for live/active states and always provide either `aria-label` (for standalone use) or `aria-hidden={true}` (when a text label is adjacent).\n@example\n// Online indicator next to a user\'s name\n<StatusDot color="mint" pulse aria-label="Online" />\n// Decorative dot beside a status badge (text already describes the state)\n<StatusDot color="pink" aria-hidden={true} /> Offline',methods:[],displayName:"StatusDot",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A={title:"Components/StatusDot",component:a,tags:["autodocs"],argTypes:{color:{control:"select",options:[void 0,"purple","mint","pink","yellow"]},pulse:{control:"boolean"}}},r={args:{"aria-hidden":!0}},n={args:{color:"purple","aria-hidden":!0}},s={args:{color:"mint","aria-hidden":!0}},t={args:{color:"pink","aria-hidden":!0}},i={args:{color:"mint",pulse:!0,"aria-hidden":!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{color:"mint",pulse:!0,"aria-hidden":!0})," Online"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{color:"yellow","aria-hidden":!0})," Away"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{color:"pink","aria-hidden":!0})," Busy"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{"aria-hidden":!0})," Offline"]})]})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "aria-hidden": true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: "purple",
    "aria-hidden": true
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,y,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "mint",
    "aria-hidden": true
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,v,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "pink",
    "aria-hidden": true
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,D,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "mint",
    pulse: true,
    "aria-hidden": true
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,O,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="mint" pulse aria-hidden={true} /> Online
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="yellow" aria-hidden={true} /> Away
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="pink" aria-hidden={true} /> Busy
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot aria-hidden={true} /> Offline
      </div>
    </div>
}`,...(b=(O=o.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const E=["Default","Purple","Mint","Pink","Pulsing","StatusList"];export{r as Default,s as Mint,t as Pink,i as Pulsing,n as Purple,o as StatusList,E as __namedExportsOrder,A as default};
