import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./Switch-DlPq5zAg.js";const k={title:"Components/Switch",component:a,tags:["autodocs"]},r={args:{label:"Dark Mode"}},s={args:{label:"Enabled",defaultChecked:!0}},t={args:{}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email notifications",defaultChecked:!0}),e.jsx(a,{label:"Push notifications"}),e.jsx(a,{label:"Marketing emails"}),e.jsx(a,{label:"Two-factor auth",defaultChecked:!0})]})};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Dark Mode"
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,d,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Enabled",
    defaultChecked: true
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Push notifications" />
      <Switch label="Marketing emails" />
      <Switch label="Two-factor auth" defaultChecked />
    </div>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const C=["Default","Checked","NoLabel","SettingsExample"];export{s as Checked,r as Default,t as NoLabel,o as SettingsExample,C as __namedExportsOrder,k as default};
