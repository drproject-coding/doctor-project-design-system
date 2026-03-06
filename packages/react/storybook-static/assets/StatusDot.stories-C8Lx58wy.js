import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./StatusDot-C7XtxRyK.js";const A={title:"Components/StatusDot",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:[void 0,"purple","mint","pink","yellow"]},pulse:{control:"boolean"}}},r={},n={args:{color:"purple"}},t={args:{color:"mint"}},o={args:{color:"pink"}},a={args:{color:"mint",pulse:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(s,{color:"mint",pulse:!0})," Online"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(s,{color:"yellow"})," Away"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(s,{color:"pink"})," Busy"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(s,{})," Offline"]})]})};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: "purple"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: "mint"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "pink"
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,D,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "mint",
    pulse: true
  }
}`,...(I=(D=a.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,P,h;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <StatusDot color="mint" pulse /> Online
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="yellow" /> Away
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot color="pink" /> Busy
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
        <StatusDot /> Offline
      </div>
    </div>
}`,...(h=(P=l.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};const B=["Default","Purple","Mint","Pink","Pulsing","StatusList"];export{r as Default,t as Mint,o as Pink,a as Pulsing,n as Purple,l as StatusList,B as __namedExportsOrder,A as default};
