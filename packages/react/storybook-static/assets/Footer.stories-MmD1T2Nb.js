import{j as e}from"./jsx-runtime-D_zvdyIk.js";function d({brand:f,tagline:o,columns:i,copyright:t,bottomLinks:l,className:m=""}){return e.jsx("footer",{className:m,style:{background:"var(--drp-black)",color:"#FFFFFF",padding:"var(--drp-space-16, 64px) 0",borderTop:"3px solid var(--drp-purple)"},children:e.jsxs("div",{style:{maxWidth:"1440px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`2fr ${i.map(()=>"1fr").join(" ")}`,gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"2rem",fontWeight:800,marginBottom:"16px"},children:f}),o&&e.jsx("p",{style:{fontSize:"13px",opacity:.7,maxWidth:"300px"},children:o})]}),i.map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px",color:"var(--drp-orange)"},children:r.title}),e.jsx("ul",{style:{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"8px"},children:r.links.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,style:{color:"#FFFFFF",textDecoration:"none",fontSize:"13px",opacity:.7},children:a.label})},a.label))})]},r.title))]}),(t||l)&&e.jsxs("div",{style:{marginTop:"48px",paddingTop:"24px",borderTop:"2px solid #666",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t&&e.jsx("p",{style:{fontFamily:"var(--drp-font-mono)",fontSize:"11px",opacity:.5},children:t}),l&&e.jsx("div",{style:{display:"flex",gap:"16px"},children:l.map(r=>e.jsx("a",{href:r.href,style:{color:"#FFFFFF",textDecoration:"none",fontSize:"13px",opacity:.7},children:r.label},r.label))})]})]})})}d.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{brand:{required:!0,tsType:{name:"string"},description:""},tagline:{required:!1,tsType:{name:"string"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"FooterColumn"}],raw:"FooterColumn[]"},description:""},copyright:{required:!1,tsType:{name:"string"},description:""},bottomLinks:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"{ label: string; href: string }[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const u={title:"Composites/Footer",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{brand:"DOCTOR PXM",tagline:"The clinical approach to Product Experience Management.",columns:[{title:"Solution",links:[{label:"PXM Platform",href:"#"},{label:"DAM",href:"#"},{label:"PIM",href:"#"},{label:"Syndication",href:"#"}]},{title:"Company",links:[{label:"About Us",href:"#"},{label:"Careers",href:"#"},{label:"Blog",href:"#"},{label:"Contact",href:"#"}]},{title:"Resources",links:[{label:"Documentation",href:"#"},{label:"API Reference",href:"#"},{label:"Case Studies",href:"#"},{label:"Support",href:"#"}]}],copyright:"© 2026 Doctor Project. All rights reserved.",bottomLinks:[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"}]}};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    brand: "DOCTOR PXM",
    tagline: "The clinical approach to Product Experience Management.",
    columns: [{
      title: "Solution",
      links: [{
        label: "PXM Platform",
        href: "#"
      }, {
        label: "DAM",
        href: "#"
      }, {
        label: "PIM",
        href: "#"
      }, {
        label: "Syndication",
        href: "#"
      }]
    }, {
      title: "Company",
      links: [{
        label: "About Us",
        href: "#"
      }, {
        label: "Careers",
        href: "#"
      }, {
        label: "Blog",
        href: "#"
      }, {
        label: "Contact",
        href: "#"
      }]
    }, {
      title: "Resources",
      links: [{
        label: "Documentation",
        href: "#"
      }, {
        label: "API Reference",
        href: "#"
      }, {
        label: "Case Studies",
        href: "#"
      }, {
        label: "Support",
        href: "#"
      }]
    }],
    copyright: "© 2026 Doctor Project. All rights reserved.",
    bottomLinks: [{
      label: "Privacy Policy",
      href: "#"
    }, {
      label: "Terms of Service",
      href: "#"
    }]
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,u as default};
