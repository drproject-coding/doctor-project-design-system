import{j as e}from"./jsx-runtime-D_zvdyIk.js";const I={sm:32,lg:64};function s({src:l,alt:j="",size:a,initials:z,"aria-label":A,className:w=""}){const o=["drp-avatar",a&&`drp-avatar--${a}`,w].filter(Boolean).join(" "),c=a?I[a]:48;return l?e.jsx("img",{className:o,src:l,alt:j,width:c,height:c}):e.jsx("div",{className:o,"aria-label":A,style:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--drp-font-primary)",fontWeight:700,fontSize:a==="sm"?"14px":a==="lg"?"32px":"20px",background:"var(--drp-purple-20)",color:"var(--drp-purple)"},children:z||"?"})}s.__docgenInfo={description:'Displays a user\'s profile image or fallback initials — use `src` when a photo is available, `initials` as a fallback, and always provide `aria-label` on initials-only variants.\n@example\n// Photo avatar\n<Avatar src="/avatars/dr-chen.jpg" alt="Dr. Sarah Chen" size="lg" />\n// Initials fallback\n<Avatar initials="SC" size="sm" aria-label="Dr. Sarah Chen" />',methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:""},initials:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Required when no visible label is present (initials-only avatar)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const D={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:[void 0,"sm","lg"],description:"Avatar size — use 'sm' in compact rows like comment threads, the default for most contexts, and 'lg' on profile pages."},initials:{control:"text",description:"1–2 character fallback shown when no image is available — typically the user's first and last initial."}}},i={args:{initials:"JD"}},r={args:{initials:"AB",size:"sm"}},t={args:{initials:"XY",size:"lg"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(s,{size:"sm",initials:"SM"}),e.jsx(s,{initials:"MD"}),e.jsx(s,{size:"lg",initials:"LG"})]})};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initials: "JD"
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    size: "sm"
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initials: "XY",
    size: "lg"
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,S,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}>
      <Avatar size="sm" initials="SM" />
      <Avatar initials="MD" />
      <Avatar size="lg" initials="LG" />
    </div>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const T=["WithInitials","Small","Large","Sizes"];export{t as Large,n as Sizes,r as Small,i as WithInitials,T as __namedExportsOrder,D as default};
