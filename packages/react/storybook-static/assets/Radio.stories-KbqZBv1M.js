import{j as e}from"./jsx-runtime-D_zvdyIk.js";function r({label:q,color:p,dark:C,error:F,className:G="",...I}){const O=["drp-radio",p&&`drp-radio--${p}`,C&&"drp-radio--dark",F&&"drp-radio--error",G].filter(Boolean).join(" ");return e.jsxs("label",{className:O,children:[e.jsx("input",{type:"radio",...I}),q]})}r.__docgenInfo={description:`Single radio button for mutually exclusive option groups — group multiple \`Radio\` elements under the same \`name\` attribute and use \`error\` to surface validation state.
@example
// Appointment type selector
<fieldset>
  <Radio name="apptType" label="In-person visit" value="in-person" color="purple" defaultChecked />
  <Radio name="apptType" label="Video consultation" value="video" color="purple" />
  <Radio name="apptType" label="Phone call" value="phone" color="purple" />
</fieldset>`,methods:[],displayName:"Radio",props:{label:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"pink" | "purple"',elements:[{name:"literal",value:'"pink"'},{name:"literal",value:'"purple"'}]},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const A={title:"Components/Radio",component:r,tags:["autodocs"]},n={args:{label:"Option A",name:"demo"}},o={args:{label:"Purple",name:"color",color:"purple"}},l={args:{label:"Dark",name:"dark",dark:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{name:"plan",label:"Free",defaultChecked:!0}),e.jsx(r,{name:"plan",label:"Pro"}),e.jsx(r,{name:"plan",label:"Enterprise"})]})},t={args:{label:"Invalid selection",name:"error",error:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{name:"plan-err",label:"Free",error:!0}),e.jsx(r,{name:"plan-err",label:"Pro",error:!0}),e.jsx(r,{name:"plan-err",label:"Enterprise",error:!0}),e.jsx("span",{style:{fontSize:12,color:"var(--drp-error-dark)"},children:"Please select a plan"})]})};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Option A",
    name: "demo"
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Purple",
    name: "color",
    color: "purple"
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,x,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Dark",
    name: "dark",
    dark: true
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,v,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Radio name="plan" label="Free" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" />
    </div>
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var h,j,R;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Invalid selection",
    name: "error",
    error: true
  }
}`,...(R=(j=t.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var E,P,D,S,T;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Radio name="plan-err" label="Free" error />
      <Radio name="plan-err" label="Pro" error />
      <Radio name="plan-err" label="Enterprise" error />
      <span style={{
      fontSize: 12,
      color: "var(--drp-error-dark)"
    }}>
        Please select a plan
      </span>
    </div>
}`,...(D=(P=a.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:"Error state within a group",...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};const N=["Default","Purple","Dark","Group","Error","GroupWithError"];export{l as Dark,n as Default,t as Error,s as Group,a as GroupWithError,o as Purple,N as __namedExportsOrder,A as default};
