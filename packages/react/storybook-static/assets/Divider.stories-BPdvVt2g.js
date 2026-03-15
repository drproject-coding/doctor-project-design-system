import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s({label:o,className:i=""}){return o?e.jsxs("div",{className:`drp-divider ${i}`,style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{flex:1,height:"2px",background:"var(--drp-black)"}}),e.jsx("span",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",whiteSpace:"nowrap"},children:o}),e.jsx("div",{style:{flex:1,height:"2px",background:"var(--drp-black)"}})]}):e.jsx("hr",{className:`drp-divider ${i}`,style:{border:"none",height:"2px",background:"var(--drp-black)",margin:0}})}s.__docgenInfo={description:`Horizontal rule for visually separating sections — pass a \`label\` to render a centered uppercase text divider (e.g. "or", "Advanced settings") between two regions.
@example
// Plain separator between form sections
<Divider />
// Labeled separator between login options
<Divider label="or continue with" />`,methods:[],displayName:"Divider",props:{label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const j={title:"Components/Divider",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Optional centered text label — use short uppercase strings like 'OR' or 'SECTION 02' to split content into named groups."}}},r={},t={args:{label:"OR"}},n={args:{label:"SECTION 02"}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx("p",{children:"Content above the divider"}),e.jsx(s,{}),e.jsx("p",{children:"Content below the divider"}),e.jsx(s,{label:"OR"}),e.jsx("p",{children:"Alternative content"})]})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "OR"
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,g,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "SECTION 02"
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "400px"
  }}>
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
      <Divider label="OR" />
      <p>Alternative content</p>
    </div>
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const S=["Default","WithLabel","Section","InContext"];export{r as Default,a as InContext,n as Section,t as WithLabel,S as __namedExportsOrder,j as default};
