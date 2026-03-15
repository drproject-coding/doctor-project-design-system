import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function r({label:c,error:i,success:A,className:I="",children:V,id:F,...L}){const M=W.useId(),d=F??M,p=e.jsx("select",{id:d,className:["drp-select",i&&"drp-select--error",A&&"drp-select--success",I].filter(Boolean).join(" "),...L,children:V}),u=typeof i=="string"?e.jsx("span",{className:"drp-field__error",role:"alert",children:i}):null;return c?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",htmlFor:d,children:c}),p,u]}):e.jsxs(e.Fragment,{children:[p,u]})}r.__docgenInfo={description:`Dropdown selector for choosing from a predefined list of options — always pair with a \`label\` for accessibility and pass \`error\` as a string to show inline validation messages.
@example
<Select
  label="Appointment type"
  value={type}
  onChange={(e) => setType(e.target.value)}
  error={typeError}
>
  <option value="">Select a type…</option>
  <option value="checkup">General check-up</option>
  <option value="followup">Follow-up</option>
  <option value="urgent">Urgent care</option>
</Select>`,methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["SelectHTMLAttributes"]};const U={title:"Components/Select",component:r,tags:["autodocs"]},s=[e.jsx("option",{value:"",children:"Select a role..."},""),e.jsx("option",{value:"admin",children:"Admin"},"admin"),e.jsx("option",{value:"editor",children:"Editor"},"editor"),e.jsx("option",{value:"viewer",children:"Viewer"},"viewer")],t={args:{label:"Role",children:s}},l={args:{label:"Locked",disabled:!0,children:e.jsx("option",{children:"Cannot change"})}},o={args:{label:"Role",error:!0,children:s}},n={args:{label:"Role",success:!0,children:s}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(r,{label:"Default",children:s}),e.jsx(r,{label:"Error",error:!0,children:s}),e.jsx(r,{label:"Success",success:!0,children:s}),e.jsx(r,{label:"Disabled",disabled:!0,children:e.jsx("option",{children:"Cannot change"})})]})};var m,h,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Role",
    children: roleOptions
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,f,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Locked",
    disabled: true,
    children: <option>Cannot change</option>
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,y,j,v,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Role",
    error: true,
    children: roleOptions
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Error state with red border",...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var E,D,O,R,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Role",
    success: true,
    children: roleOptions
  }
}`,...(O=(D=n.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:"Success state with green border",...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var N,C,T,q,k;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"All validation states side by side",...(k=(q=a.parameters)==null?void 0:q.docs)==null?void 0:k.description}}};const z=["Default","Disabled","Error","Success","ValidationStates"];export{t as Default,l as Disabled,o as Error,n as Success,a as ValidationStates,z as __namedExportsOrder,U as default};
