import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-ZH-6pyQh.js";function v({items:t,activeKey:d,onChange:a,variant:s,className:p=""}){var o;const[u,l]=m.useState((o=t[0])==null?void 0:o.key),i=d??u,b=["drp-tabs",s&&`drp-tabs--${s}`,p].filter(Boolean).join(" "),f=(e,n)=>{let r=null;if(e.key==="ArrowRight"?r=(n+1)%t.length:e.key==="ArrowLeft"&&(r=(n-1+t.length)%t.length),r!==null){e.preventDefault();const c=t[r].key;l(c),a==null||a(c)}};return y.jsx("div",{className:b,role:"tablist",children:t.map((e,n)=>y.jsx("button",{role:"tab","aria-selected":i===e.key,className:`drp-tab ${i===e.key?"drp-tab--active":""}`,onClick:()=>{l(e.key),a==null||a(e.key)},onKeyDown:r=>f(r,n),children:e.label},e.key))})}v.__docgenInfo={description:`Keyboard-accessible tab bar for switching between content panels — manage active state externally via \`activeKey\`/\`onChange\` for controlled use, or let it self-manage for simple cases.
@example
<Tabs
  items={[
    { key: "overview", label: "Overview" },
    { key: "history", label: "Medical History" },
    { key: "billing", label: "Billing" },
  ]}
  activeKey={activeTab}
  onChange={setActiveTab}
/>`,methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"literal",value:'"underline"'},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{v as T};
