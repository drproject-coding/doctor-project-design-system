import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({label:o,...k}){return e.jsxs("label",{className:"drp-switch",children:[e.jsx("input",{type:"checkbox",...k}),e.jsx("span",{className:"drp-switch__track",children:e.jsx("span",{className:"drp-switch__knob"})}),o&&e.jsx("span",{children:o})]})}a.__docgenInfo={description:`Toggle switch for boolean settings that take effect immediately — provide \`label\` when a visible text description is present, or \`aria-label\` when the switch is used without visible text.
@example
// Notification preference with visible label
<Switch
  label="Email appointment reminders"
  checked={emailReminders}
  onChange={(e) => setEmailReminders(e.target.checked)}
/>
// Icon-only toggle (aria-label required)
<Switch aria-label="Dark mode" checked={darkMode} onChange={toggleDark} />`,methods:[],displayName:"Switch"};const S={title:"Components/Switch",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Visible label describing what the toggle controls — use a noun or short phrase (e.g. 'Dark mode'), not a verb."},defaultChecked:{control:"boolean",description:"Sets the initial on/off state for uncontrolled usage — reflect the user's saved preference when available."}}},t={args:{label:"Dark Mode"}},s={args:{label:"Enabled",defaultChecked:!0}},r={args:{}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email notifications",defaultChecked:!0}),e.jsx(a,{label:"Push notifications"}),e.jsx(a,{label:"Marketing emails"}),e.jsx(a,{label:"Two-factor auth",defaultChecked:!0})]})};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Dark Mode"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Enabled",
    defaultChecked: true
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const j=["Default","Checked","NoLabel","SettingsExample"];export{s as Checked,t as Default,r as NoLabel,n as SettingsExample,j as __namedExportsOrder,S as default};
