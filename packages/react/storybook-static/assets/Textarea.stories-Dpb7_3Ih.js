import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function v({label:l,error:o,success:E,className:_="",id:q,...c}){const I=S.useId(),n=q??I,i=["drp-input",o&&"drp-input--error",E&&"drp-input--success",_].filter(Boolean).join(" "),u=typeof o=="string"?e.jsx("span",{className:"drp-field__error",role:"alert",children:o}):null;return l?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",htmlFor:n,children:l}),e.jsx("textarea",{id:n,className:i,...c}),u]}):e.jsxs(e.Fragment,{children:[e.jsx("textarea",{id:n,className:i,...c}),u]})}v.__docgenInfo={description:'Multi-line text input for free-form content such as clinical notes or messages — mirrors `Input` API with `label`, `error`, and `success` states, and accepts all native `<textarea>` attributes.\n@example\n<Textarea\n  label="Clinical notes"\n  placeholder="Describe symptoms, observations, and treatment plan…"\n  rows={6}\n  value={notes}\n  onChange={(e) => setNotes(e.target.value)}\n  error={notesError}\n/>',methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["TextareaHTMLAttributes"]};const B={title:"Components/Textarea",component:v,tags:["autodocs"]},r={args:{placeholder:"Enter your message..."}},s={args:{label:"Description",placeholder:"Tell us about your project..."}},a={args:{label:"Bio",error:!0,placeholder:"Required field"}},t={args:{label:"Notes",success:!0,value:"Looks good!",readOnly:!0}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Tell us about your project..."
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,h,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    error: true,
    placeholder: "Required field"
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,T,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    success: true,
    value: "Looks good!",
    readOnly: true
  }
}`,...(N=(T=t.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const C=["Default","WithLabel","Error","Success"];export{r as Default,a as Error,t as Success,s as WithLabel,C as __namedExportsOrder,B as default};
