import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as l}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function p({text:b,children:g,className:T=""}){const c=u.useId(),[a,d]=u.useState(!1);return e.jsxs("span",{className:`drp-tooltip ${T}`,style:{position:"relative",display:"inline-flex"},children:[l.Children.map(g,t=>l.isValidElement(t)?l.cloneElement(t,{"aria-describedby":a?c:void 0,onFocus:i=>{var n,o;d(!0),(o=(n=t.props).onFocus)==null||o.call(n,i)},onBlur:i=>{var n,o;d(!1),(o=(n=t.props).onBlur)==null||o.call(n,i)}}):t),e.jsx("span",{id:c,role:"tooltip",className:"drp-tooltip-text",style:{visibility:a?"visible":void 0,opacity:a?1:void 0},children:b})]})}p.__docgenInfo={description:`On-focus tooltip that surfaces supplementary context for an interactive element — wrap a single focusable child (button, link, input) and set \`text\` to a concise non-essential description.
@example
// Explain an icon-only button
<Tooltip text="Export as CSV">
  <Button icon aria-label="Export"><DownloadIcon /></Button>
</Tooltip>
// Clarify a form field's requirement
<Tooltip text="Must match the name on your insurance card">
  <Input label="Full legal name" value={name} onChange={handleChange} />
</Tooltip>`,methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Components/Tooltip",component:p,tags:["autodocs"]},s={args:{text:"This is a tooltip",children:e.jsx("span",{style:{textDecoration:"underline",cursor:"help"},children:"Hover me"})}},r={render:()=>e.jsx("div",{style:{padding:"40px"},children:e.jsx(p,{text:"Click to save your changes",children:e.jsx("button",{className:"drp-btn drp-btn--primary",children:"Save"})})})};var m,x,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "This is a tooltip",
    children: <span style={{
      textDecoration: "underline",
      cursor: "help"
    }}>
        Hover me
      </span>
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,h,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "40px"
  }}>
      <Tooltip text="Click to save your changes">
        <button className="drp-btn drp-btn--primary">Save</button>
      </Tooltip>
    </div>
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["Default","OnButton"];export{s as Default,r as OnButton,B as __namedExportsOrder,N as default};
