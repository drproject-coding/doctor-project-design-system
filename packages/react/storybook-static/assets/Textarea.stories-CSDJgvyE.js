import{j as e}from"./jsx-runtime-D_zvdyIk.js";function T({label:t,error:j,success:N,className:q="",...c}){const l=["drp-input",j&&"drp-input--error",N&&"drp-input--success",q].filter(Boolean).join(" ");return t?e.jsxs("div",{className:"drp-field",children:[e.jsx("label",{className:"drp-field__label",children:t}),e.jsx("textarea",{className:l,...c})]}):e.jsx("textarea",{className:l,...c})}T.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["TextareaHTMLAttributes"]};const S={title:"Components/Textarea",component:T,tags:["autodocs"]},r={args:{placeholder:"Enter your message..."}},s={args:{label:"Description",placeholder:"Tell us about your project..."}},a={args:{label:"Bio",error:!0,placeholder:"Required field"}},o={args:{label:"Notes",success:!0,value:"Looks good!",readOnly:!0}};var n,u,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Tell us about your project..."
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    error: true,
    placeholder: "Required field"
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    success: true,
    value: "Looks good!",
    readOnly: true
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const _=["Default","WithLabel","Error","Success"];export{r as Default,a as Error,o as Success,s as WithLabel,_ as __namedExportsOrder,S as default};
