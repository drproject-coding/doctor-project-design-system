import{T as u}from"./Tabs-CJzKQHfn.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const f={title:"Components/Tabs",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:[void 0,"underline"],description:"Tab style — omit for the default pill/box style, use 'underline' for a lighter inline navigation pattern."},activeKey:{control:"text",description:"Key of the currently active tab — controls the component when managed externally; matches the `key` field of an item in `items`."},items:{control:"object",description:"Array of tab definitions, each with a `label` (display text) and `key` (unique identifier used for activeKey matching)."}}},r=[{label:"Overview",key:"overview"},{label:"Analytics",key:"analytics"},{label:"Reports",key:"reports"},{label:"Settings",key:"settings"}],e={args:{items:r}},t={args:{items:r,variant:"underline"}},a={args:{items:r,activeKey:"analytics"}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: tabItems
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "underline"
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    activeKey: "analytics"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const h=["Default","Underline","ActiveTab"];export{a as ActiveTab,e as Default,t as Underline,h as __namedExportsOrder,f as default};
