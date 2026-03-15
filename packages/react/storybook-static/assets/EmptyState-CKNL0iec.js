import{j as e}from"./jsx-runtime-D_zvdyIk.js";function o({icon:n="∅",title:a,description:t,action:i,className:r=""}){return e.jsxs("div",{className:`drp-empty ${r}`,style:{textAlign:"center",padding:"48px 24px",border:"2px dashed rgba(0,0,0,0.2)"},children:[e.jsx("div",{"aria-hidden":"true",style:{fontSize:"48px",marginBottom:"16px",opacity:.3,fontFamily:"var(--drp-font-primary)",fontWeight:800},children:n}),e.jsx("h3",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"18px",fontWeight:700,margin:"0 0 8px"},children:a}),t&&e.jsx("p",{style:{fontSize:"14px",color:"var(--drp-text-secondary, #666)",maxWidth:"400px",margin:"0 auto 20px"},children:t}),i]})}o.__docgenInfo={description:`Centered placeholder shown when a list or data region has no content — always provide an \`action\` with a clear next step so users are never left without guidance.
@example
<EmptyState
  icon="📋"
  title="No appointments scheduled"
  description="Book your first appointment to get started."
  action={<Button variant="primary">Schedule Appointment</Button>}
/>`,methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"∅"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{o as E};
