import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./ProgressBar-0ZBXASPt.js";const L={title:"Components/ProgressBar",component:r,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100},description:"Completion percentage from 0–100 — drives the filled portion of the bar."},color:{control:"select",options:[void 0,"mint","pink","yellow","grey"],description:"Fill color — use 'mint' for healthy/complete, 'pink' for critical/over-limit, 'yellow' for warning states, 'grey' for neutral."},size:{control:"select",options:[void 0,"sm","lg"],description:"Bar height — use 'sm' in dense data tables, the default for most cards, 'lg' as a standalone metric on dashboards."}}},a={args:{value:65}},s={args:{value:72,label:"Storage Used"}},o={args:{value:90,color:"mint",label:"Complete"}},l={args:{value:25,color:"pink",label:"Critical"}},t={args:{value:50,size:"sm"}},n={args:{value:80,size:"lg"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(r,{value:85,label:"CPU Usage"}),e.jsx(r,{value:62,color:"mint",label:"Memory"}),e.jsx(r,{value:91,color:"pink",label:"Disk Space"}),e.jsx(r,{value:34,color:"yellow",label:"Network"})]})};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 72,
    label: "Storage Used"
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,x,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 90,
    color: "mint",
    label: "Complete"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,y,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 25,
    color: "pink",
    label: "Critical"
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "sm"
  }
}`,...(P=(k=t.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var C,M,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: "lg"
  }
}`,...(j=(M=n.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var w,B,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <ProgressBar value={85} label="CPU Usage" />
      <ProgressBar value={62} color="mint" label="Memory" />
      <ProgressBar value={91} color="pink" label="Disk Space" />
      <ProgressBar value={34} color="yellow" label="Network" />
    </div>
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const W=["Default","WithLabel","Mint","Pink","Small","Large","MultipleMetrics"];export{a as Default,n as Large,o as Mint,c as MultipleMetrics,l as Pink,t as Small,s as WithLabel,W as __namedExportsOrder,L as default};
