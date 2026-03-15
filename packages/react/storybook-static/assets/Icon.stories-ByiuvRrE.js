import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./Icon-CiA5htUt.js";const R=["dashboard","analytics","users","orders","products","settings","search","bell","mail","calendar","check","close","plus","minus","arrow-left","arrow-right","arrow-up","arrow-down","edit","trash","eye","eye-off","filter","download"],G={title:"Components/Icon",component:r,tags:["autodocs"],argTypes:{name:{control:"select",options:R},size:{control:"select",options:[void 0,"sm","md","lg"]},bg:{control:"color"}}},a={args:{name:"dashboard"}},n={args:{name:"search",size:"sm"}},o={args:{name:"search",size:"md"}},l={args:{name:"search",size:"lg"}},t={args:{name:"bell",size:"lg",bg:"var(--drp-purple)"}},p={args:{name:"mail",size:"lg",bg:"var(--drp-orange)"}},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"16px"},children:R.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"12px",border:"2px solid var(--drp-black, #121212)"},children:[e.jsx(r,{name:s,size:"lg"}),e.jsx("span",{style:{fontFamily:"var(--drp-font-mono, monospace)",fontSize:"10px",textAlign:"center",color:"var(--drp-text-muted, #888)"},children:s})]},s))})},i={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:["sm","md","lg"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(r,{name:"settings",size:s}),e.jsxs("span",{style:{fontFamily:"monospace",fontSize:"10px"},children:[s," (",s==="sm"?24:s==="md"?32:48,"px box)"]})]},s))})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{name:"dashboard",size:"lg",bg:"var(--drp-purple)"}),e.jsx(r,{name:"analytics",size:"lg",bg:"var(--drp-orange)"}),e.jsx(r,{name:"users",size:"lg",bg:"var(--drp-mint)"}),e.jsx(r,{name:"orders",size:"lg",bg:"var(--drp-pink)"}),e.jsx(r,{name:"products",size:"lg",bg:"var(--drp-yellow)"}),e.jsx(r,{name:"settings",size:"lg",bg:"var(--drp-cream)"}),e.jsx(r,{name:"search",size:"lg",bg:"var(--drp-purple-20)"})]})};var d,g,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "dashboard"
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,v,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "search",
    size: "sm"
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,f,b;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: "search",
    size: "md"
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,I,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: "search",
    size: "lg"
  }
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,w,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: "bell",
    size: "lg",
    bg: "var(--drp-purple)"
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var k,C,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "mail",
    size: "lg",
    bg: "var(--drp-orange)"
  }
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var F,P,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: "16px"
  }}>
      {allIconNames.map(name => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      padding: "12px",
      border: "2px solid var(--drp-black, #121212)"
    }}>
          <Icon name={name} size="lg" />
          <span style={{
        fontFamily: "var(--drp-font-mono, monospace)",
        fontSize: "10px",
        textAlign: "center",
        color: "var(--drp-text-muted, #888)"
      }}>
            {name}
          </span>
        </div>)}
    </div>
}`,...(O=(P=c.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var T,E,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      {(["sm", "md", "lg"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
          <Icon name="settings" size={size} />
          <span style={{
        fontFamily: "monospace",
        fontSize: "10px"
      }}>
            {size} ({size === "sm" ? 24 : size === "md" ? 32 : 48}px box)
          </span>
        </div>)}
    </div>
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,N,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Icon name="dashboard" size="lg" bg="var(--drp-purple)" />
      <Icon name="analytics" size="lg" bg="var(--drp-orange)" />
      <Icon name="users" size="lg" bg="var(--drp-mint)" />
      <Icon name="orders" size="lg" bg="var(--drp-pink)" />
      <Icon name="products" size="lg" bg="var(--drp-yellow)" />
      <Icon name="settings" size="lg" bg="var(--drp-cream)" />
      <Icon name="search" size="lg" bg="var(--drp-purple-20)" />
    </div>
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const H=["Default","Small","Medium","Large","Purple","Orange","AllIcons","Sizes","DoctorProjectColors"];export{c as AllIcons,a as Default,m as DoctorProjectColors,l as Large,o as Medium,p as Orange,t as Purple,i as Sizes,n as Small,H as __namedExportsOrder,G as default};
