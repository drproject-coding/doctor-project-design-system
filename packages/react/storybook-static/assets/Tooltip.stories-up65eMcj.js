import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s({text:c,children:l,className:u=""}){return e.jsxs("span",{className:`drp-tooltip ${u}`,children:[l,e.jsx("span",{className:"drp-tooltip-text",children:c})]})}s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const x={title:"Components/Tooltip",component:s,tags:["autodocs"]},t={args:{text:"This is a tooltip",children:e.jsx("span",{style:{textDecoration:"underline",cursor:"help"},children:"Hover me"})}},r={render:()=>e.jsx("div",{style:{padding:"40px"},children:e.jsx(s,{text:"Click to save your changes",children:e.jsx("button",{className:"drp-btn drp-btn--primary",children:"Save"})})})};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "This is a tooltip",
    children: <span style={{
      textDecoration: "underline",
      cursor: "help"
    }}>
        Hover me
      </span>
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "40px"
  }}>
      <Tooltip text="Click to save your changes">
        <button className="drp-btn drp-btn--primary">Save</button>
      </Tooltip>
    </div>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const h=["Default","OnButton"];export{t as Default,r as OnButton,h as __namedExportsOrder,x as default};
