import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Input-DEUTpdiJ.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const L={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{error:{control:"boolean",description:"Shows an error state with red border — set when field validation has failed and pair with a helper message explaining what to fix."},success:{control:"boolean",description:"Shows a success state with green border — set after async validation confirms a value is valid (e.g. username availability)."},disabled:{control:"boolean",description:"Makes the field non-interactive — use when the value is locked by system state, not user choice."}}},r={args:{placeholder:"Enter text..."}},s={args:{label:"Email Address",placeholder:"you@example.com",type:"email"}},o={args:{label:"Password",type:"password",error:!0,placeholder:"Required"}},l={args:{label:"Username",value:"johndoe",success:!0,readOnly:!0}},t={args:{label:"Locked Field",value:"Cannot edit",disabled:!0}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Full Name",placeholder:"John Doe"}),e.jsx(a,{label:"Email",type:"email",placeholder:"you@example.com"}),e.jsx(a,{label:"Password",type:"password",placeholder:"••••••••"}),e.jsx(a,{label:"Error Example",error:!0,placeholder:"Invalid input"}),e.jsx(a,{label:"Success Example",success:!0,value:"Valid input",readOnly:!0})]})};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email"
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    error: true,
    placeholder: "Required"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,g,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Username",
    value: "johndoe",
    success: true,
    readOnly: true
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var E,w,f;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Locked Field",
    value: "Cannot edit",
    disabled: true
  }
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,j,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Error Example" error placeholder="Invalid input" />
      <Input label="Success Example" success value="Valid input" readOnly />
    </div>
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const P=["Default","WithLabel","Error","Success","Disabled","FormExample"];export{r as Default,t as Disabled,o as Error,n as FormExample,l as Success,s as WithLabel,P as __namedExportsOrder,L as default};
