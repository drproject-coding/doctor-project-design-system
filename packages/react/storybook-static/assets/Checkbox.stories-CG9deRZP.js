import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({label:v,dark:j,className:y="",...O}){const S=["drp-checkbox",j&&"drp-checkbox--dark",y].filter(Boolean).join(" ");return e.jsxs("label",{className:S,children:[e.jsx("input",{type:"checkbox",...O}),v]})}a.__docgenInfo={description:`Accessible checkbox input with an associated visible label — use \`dark\` on dark-background surfaces such as panels with \`var(--drp-purple)\` fill.
@example
// Consent checkbox in a form
<Checkbox
  label="I agree to the terms and conditions"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
// Pre-checked option on a dark panel
<Checkbox label="Send appointment reminders via SMS" dark defaultChecked />`,methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const w={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Visible label rendered next to the checkbox — always provide one unless the checkbox context is unambiguous with an aria-label."},disabled:{control:"boolean",description:"Prevents user interaction — use when the option is unavailable in the current state, not just to guide preference."},dark:{control:"boolean",description:"Applies a dark-theme style — use on dark backgrounds like sidebars or hero sections."}}},r={args:{label:"Accept terms"}},s={args:{label:"Checked",defaultChecked:!0}},o={args:{label:"Dark variant",dark:!0}},n={args:{label:"Disabled",disabled:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{label:"Option A",defaultChecked:!0}),e.jsx(a,{label:"Option B"}),e.jsx(a,{label:"Option C"}),e.jsx(a,{label:"Disabled",disabled:!0})]})};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Accept terms"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Checked",
    defaultChecked: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,m,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Dark variant",
    dark: true
  }
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var h,x,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,C,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const _=["Default","Checked","Dark","Disabled","Group"];export{s as Checked,o as Dark,r as Default,n as Disabled,t as Group,_ as __namedExportsOrder,w as default};
