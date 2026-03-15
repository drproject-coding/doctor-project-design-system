import{j as e}from"./jsx-runtime-D_zvdyIk.js";const P={info:{bg:"rgba(0,102,255,0.08)",border:"var(--drp-info, #0066FF)",icon:"ℹ"},success:{bg:"rgba(0,170,0,0.08)",border:"var(--drp-mint)",icon:"✓"},warning:{bg:"rgba(255,170,0,0.08)",border:"var(--drp-yellow)",icon:"⚠"},error:{bg:"rgba(255,68,68,0.08)",border:"var(--drp-pink)",icon:"✕"}};function r({variant:E="info",title:c,children:T,onClose:d,className:D=""}){const l=P[E];return e.jsxs("div",{role:"alert",className:D,style:{padding:"16px 20px",background:l.bg,border:"1px solid var(--drp-black)",borderLeft:`2px solid ${l.border}`,display:"flex",gap:"12px",alignItems:"flex-start"},children:[e.jsx("span",{style:{fontWeight:700,fontSize:"16px",flexShrink:0},"aria-hidden":"true",children:l.icon}),e.jsxs("div",{style:{flex:1},children:[c&&e.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontWeight:700,fontSize:"14px",margin:"0 0 4px"},children:c}),e.jsx("div",{style:{fontSize:"14px",lineHeight:1.5},children:T})]}),d&&e.jsx("button",{onClick:d,"aria-label":"Close alert",style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px",opacity:.5,padding:0,flexShrink:0},children:"×"})]})}r.__docgenInfo={description:`Inline feedback banner for system messages — use \`variant="error"\` for form-level errors, \`variant="success"\` after a completed action, and \`variant="warning"\` for non-blocking risks.
@example
// Success confirmation after saving
<Alert variant="success" title="Profile updated" onClose={handleDismiss}>
  Your changes have been saved successfully.
</Alert>
// Error with no title
<Alert variant="error">Payment failed. Please check your card details and try again.</Alert>`,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F={title:"Components/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Semantic tone — use 'info' for neutral guidance, 'success' after a completed action, 'warning' for reversible risks, 'error' for blocking failures."}}},n={args:{variant:"info",title:"Information",children:"This is an informational message."}},a={args:{variant:"success",title:"Success",children:"Operation completed successfully."}},s={args:{variant:"warning",title:"Warning",children:"Please review before proceeding."}},i={args:{variant:"error",title:"Error",children:"Something went wrong. Please try again."}},t={args:{variant:"info",title:"Dismissible",children:"Click the X to close.",onClose:()=>{}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"500px"},children:[e.jsx(r,{variant:"info",title:"Info",children:"Informational alert message."}),e.jsx(r,{variant:"success",title:"Success",children:"Changes saved successfully."}),e.jsx(r,{variant:"warning",title:"Warning",children:"Your session expires in 5 minutes."}),e.jsx(r,{variant:"error",title:"Error",children:"Failed to save changes."})]})};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational message."
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Operation completed successfully."
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review before proceeding."
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,S,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again."
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var A,k,j;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissible",
    children: "Click the X to close.",
    onClose: () => {}
  }
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,C,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "500px"
  }}>
      <Alert variant="info" title="Info">
        Informational alert message.
      </Alert>
      <Alert variant="success" title="Success">
        Changes saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Your session expires in 5 minutes.
      </Alert>
      <Alert variant="error" title="Error">
        Failed to save changes.
      </Alert>
    </div>
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const z=["Info","Success","Warning","Error","Dismissible","AllVariants"];export{o as AllVariants,t as Dismissible,i as Error,n as Info,a as Success,s as Warning,z as __namedExportsOrder,F as default};
