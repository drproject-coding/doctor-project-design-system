import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({level:p=1,children:E,uppercase:V,className:W=""}){const $=`h${p}`,B=[`drp-h${p}`,W].filter(Boolean).join(" "),C={textWrap:"balance",...V&&{textTransform:"uppercase",letterSpacing:"var(--drp-tracking-caps)",fontWeight:"var(--drp-weight-heavy)"}};return e.jsx($,{className:B,style:C,children:E})}a.__docgenInfo={description:"Semantic heading element (`h1`–`h6`) with DS typography tokens — use `uppercase` for section labels and dashboard module titles that need extra visual weight.\n@example\n// Page title\n<Heading level={1}>Patient Overview</Heading>\n// Section label with caps treatment\n<Heading level={3} uppercase>Recent Activity</Heading>",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},uppercase:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const z={title:"Components/Heading",component:a,tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},uppercase:{control:"boolean"}}},r={args:{level:1,children:"Heading 1 — 48px"}},n={args:{level:2,children:"Heading 2 — 36px"}},s={args:{level:3,children:"Heading 3 — 28px"}},l={args:{level:4,children:"Heading 4 — 24px"}},t={args:{level:5,children:"Heading 5 — 20px"}},i={args:{level:6,children:"Heading 6 — 18px"}},c={args:{level:1,uppercase:!0,children:"Uppercase Heading"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{level:1,children:"H1 — Dashboard Overview"}),e.jsx(a,{level:2,children:"H2 — Analytics Report"}),e.jsx(a,{level:3,children:"H3 — User Management"}),e.jsx(a,{level:4,children:"H4 — Order Details"}),e.jsx(a,{level:5,children:"H5 — Product Filters"}),e.jsx(a,{level:6,children:"H6 — Metadata Section"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{level:1,uppercase:!0,children:"H1 — Dashboard Overview"}),e.jsx(a,{level:2,uppercase:!0,children:"H2 — Analytics Report"}),e.jsx(a,{level:3,uppercase:!0,children:"H3 — User Management"}),e.jsx(a,{level:4,uppercase:!0,children:"H4 — Order Details"}),e.jsx(a,{level:5,uppercase:!0,children:"H5 — Product Filters"}),e.jsx(a,{level:6,uppercase:!0,children:"H6 — Metadata Section"})]})};var u,g,H;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "Heading 1 — 48px"
  }
}`,...(H=(g=r.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Heading 2 — 36px"
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "Heading 3 — 28px"
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,S,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: "Heading 4 — 24px"
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var b,w,O;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: "Heading 5 — 20px"
  }
}`,...(O=(w=t.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var U,A,M;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: "Heading 6 — 18px"
  }
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var R,T,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    level: 1,
    uppercase: true,
    children: "Uppercase Heading"
  }
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var q,F,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading level={1}>H1 — Dashboard Overview</Heading>
      <Heading level={2}>H2 — Analytics Report</Heading>
      <Heading level={3}>H3 — User Management</Heading>
      <Heading level={4}>H4 — Order Details</Heading>
      <Heading level={5}>H5 — Product Filters</Heading>
      <Heading level={6}>H6 — Metadata Section</Heading>
    </div>
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var N,_,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Heading level={1} uppercase>
        H1 — Dashboard Overview
      </Heading>
      <Heading level={2} uppercase>
        H2 — Analytics Report
      </Heading>
      <Heading level={3} uppercase>
        H3 — User Management
      </Heading>
      <Heading level={4} uppercase>
        H4 — Order Details
      </Heading>
      <Heading level={5} uppercase>
        H5 — Product Filters
      </Heading>
      <Heading level={6} uppercase>
        H6 — Metadata Section
      </Heading>
    </div>
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const G=["H1","H2","H3","H4","H5","H6","Uppercase","AllLevels","AllLevelsUppercase"];export{d as AllLevels,o as AllLevelsUppercase,r as H1,n as H2,s as H3,l as H4,t as H5,i as H6,c as Uppercase,G as __namedExportsOrder,z as default};
