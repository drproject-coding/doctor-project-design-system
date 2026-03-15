import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-ZH-6pyQh.js";function g({label:r,error:a,success:d,className:p="",id:u,spellCheck:c,type:s,...l}){const m=f.useId(),n=u??m,t=c??(s==="email"||s==="password"?!1:void 0),i=["drp-input",a&&"drp-input--error",d&&"drp-input--success",p].filter(Boolean).join(" "),o=typeof a=="string"?e.jsx("span",{className:"drp-field__error",role:"alert",children:a}):null;return r?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",htmlFor:n,children:r}),e.jsx("input",{id:n,type:s,className:i,spellCheck:t,...l}),o]}):e.jsxs(e.Fragment,{children:[e.jsx("input",{id:n,type:s,className:i,spellCheck:t,...l}),o]})}g.__docgenInfo={description:`Standard text input with optional label, validation state, and auto-generated \`id\` linking — pass \`error\` as a string to render an inline error message below the field.
@example
// Labeled email field with validation
<Input
  label="Email address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>
// Success state after verification
<Input label="National ID" value={nid} success />`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["InputHTMLAttributes"]};export{g as I};
