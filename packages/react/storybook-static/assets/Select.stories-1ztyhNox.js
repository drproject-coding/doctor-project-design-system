import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./Select-Csu0gdPj.js";const A={title:"Components/Select",component:n,tags:["autodocs"]},r=[e.jsx("option",{value:"",children:"Select a role..."},""),e.jsx("option",{value:"admin",children:"Admin"},"admin"),e.jsx("option",{value:"editor",children:"Editor"},"editor"),e.jsx("option",{value:"viewer",children:"Viewer"},"viewer")],t={args:{label:"Role",children:r}},l={args:{label:"Locked",disabled:!0,children:e.jsx("option",{children:"Cannot change"})}},s={args:{label:"Role",error:!0,children:r}},o={args:{label:"Role",success:!0,children:r}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(n,{label:"Default",children:r}),e.jsx(n,{label:"Error",error:!0,children:r}),e.jsx(n,{label:"Success",success:!0,children:r}),e.jsx(n,{label:"Disabled",disabled:!0,children:e.jsx("option",{children:"Cannot change"})})]})};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Role",
    children: roleOptions
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Locked",
    disabled: true,
    children: <option>Cannot change</option>
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,S,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Role",
    error: true,
    children: roleOptions
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:"Error state with red border",...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var j,f,v,y,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Role",
    success: true,
    children: roleOptions
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Success state with green border",...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};var E,O,w,R,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    flexWrap: "wrap"
  }}>
      <Select label="Default">{roleOptions}</Select>
      <Select label="Error" error>
        {roleOptions}
      </Select>
      <Select label="Success" success>
        {roleOptions}
      </Select>
      <Select label="Disabled" disabled>
        <option>Cannot change</option>
      </Select>
    </div>
}`,...(w=(O=a.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:"All validation states side by side",...(C=(R=a.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};const L=["Default","Disabled","Error","Success","ValidationStates"];export{t as Default,l as Disabled,s as Error,o as Success,a as ValidationStates,L as __namedExportsOrder,A as default};
