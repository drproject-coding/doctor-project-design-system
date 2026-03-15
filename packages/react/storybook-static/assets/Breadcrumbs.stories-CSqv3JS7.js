import{j as e}from"./jsx-runtime-D_zvdyIk.js";function p({items:l,className:b=""}){const t=l.length-1;return e.jsx("nav",{className:`drp-breadcrumbs ${b}`,"aria-label":"Breadcrumb",children:l.map((a,r)=>e.jsxs("span",{children:[r>0&&e.jsx("span",{className:"drp-breadcrumbs__sep","aria-hidden":"true",children:"/"}),a.href&&r<t?e.jsx("a",{className:"drp-breadcrumbs__link",href:a.href,children:a.label}):e.jsx("span",{className:"drp-breadcrumbs__current","aria-current":r===t?"page":void 0,children:a.label})]},r))})}p.__docgenInfo={description:`Landmark navigation trail showing the user's location within the app hierarchy — always include an \`href\` on all items except the last (current page).
@example
<Breadcrumbs
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Patients", href: "/patients" },
    { label: "Maria Gonzalez" },
  ]}
/>`,methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const f={title:"Layout/Breadcrumbs",component:p,tags:["autodocs"],argTypes:{items:{control:"object",description:"Ordered array of breadcrumb segments — each item with a label and optional href; the last item is rendered as the current page (no link)."}}},s={args:{items:[{label:"Home",href:"#"},{label:"Users",href:"#"},{label:"John Doe"}]}},n={args:{items:[{label:"Dashboard",href:"#"},{label:"Analytics",href:"#"},{label:"Reports",href:"#"},{label:"Monthly Revenue"}]}};var o,c,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Users",
      href: "#"
    }, {
      label: "John Doe"
    }]
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "#"
    }, {
      label: "Analytics",
      href: "#"
    }, {
      label: "Reports",
      href: "#"
    }, {
      label: "Monthly Revenue"
    }]
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const g=["Default","Long"];export{s as Default,n as Long,g as __namedExportsOrder,f as default};
