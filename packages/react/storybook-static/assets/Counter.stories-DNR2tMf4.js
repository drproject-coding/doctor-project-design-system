import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function j({value:m,min:a=0,max:u=99,onChange:l}){const[w,N]=q.useState(m??a),e=m??w,i=c=>{const d=Math.min(u,Math.max(a,c));N(d),l==null||l(d)};return r.jsxs("div",{className:"drp-counter",children:[r.jsx("button",{className:"drp-counter__btn","aria-label":"Decrease",onClick:()=>i(e-1),disabled:e<=a,children:"−"}),r.jsx("input",{className:"drp-counter__value",type:"number",value:e,min:a,max:u,onChange:c=>i(Number(c.target.value)),readOnly:!0}),r.jsx("button",{className:"drp-counter__btn","aria-label":"Increase",onClick:()=>i(e+1),disabled:e>=u,children:"+"})]})}j.__docgenInfo={description:`Stepper control for selecting a small integer quantity — use when a numeric input alone is error-prone and the valid range is bounded (e.g. number of doses, session slots).
@example
// Appointment slot selector (1–10)
<Counter
  value={slots}
  min={1}
  max={10}
  onChange={(n) => setSlots(n)}
/>`,methods:[],displayName:"Counter",props:{value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const E={title:"Components/Counter",component:j,tags:["autodocs"],argTypes:{value:{control:"number",description:"Current numeric value displayed in the counter — controls the component in controlled mode."},min:{control:"number",description:"Minimum allowed value — the decrement button disables automatically when this boundary is reached."},max:{control:"number",description:"Maximum allowed value — the increment button disables automatically when this boundary is reached."}}},n={args:{value:1}},t={args:{value:5,min:0,max:10}},s={args:{value:0,min:0}},o={args:{value:99,max:99}};var p,b,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 5,
    min: 0,
    max: 10
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,y,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 0,
    min: 0
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var M,C,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 99,
    max: 99
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const I=["Default","WithRange","AtMin","AtMax"];export{o as AtMax,s as AtMin,n as Default,t as WithRange,I as __namedExportsOrder,E as default};
