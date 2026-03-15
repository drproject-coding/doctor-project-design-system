import{j as e}from"./jsx-runtime-D_zvdyIk.js";function t({width:n,height:a,variant:c="text",className:p=""}){const r={background:"linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 75%)",backgroundSize:"200% 100%",animation:"drp-shimmer 1.5s ease-in-out infinite",border:"1px solid rgba(0,0,0,0.08)"};if(c==="text")Object.assign(r,{width:n||"100%",height:a||"14px"});else if(c==="circular"){const x=n||a||48;Object.assign(r,{width:x,height:x,borderRadius:"50%"})}else Object.assign(r,{width:n||"100%",height:a||"120px"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`drp-skeleton-pulse${p?` ${p}`:""}`,style:r,"aria-hidden":"true"}),e.jsx("style",{children:`
        @keyframes drp-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { .drp-skeleton-pulse { animation: none !important; } }
      `})]})}t.__docgenInfo={description:`Shimmering placeholder shown while content is loading — use \`variant="circular"\` for avatars, \`variant="rectangular"\` for cards and images, and \`variant="text"\` for inline copy.
@example
// Loading state for a patient card
<div style={{ display: "flex", gap: 12, alignItems: "center" }}>
  <Skeleton variant="circular" width={48} />
  <div>
    <Skeleton variant="text" width={160} />
    <Skeleton variant="text" width={100} />
  </div>
</div>`,methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"text" | "rectangular" | "circular"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"circular"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const q={title:"Components/Skeleton",component:t,tags:["autodocs"]},i={args:{variant:"text"}},s={args:{variant:"rectangular",height:"200px"}},l={args:{variant:"circular",width:64,height:64}},d={render:()=>e.jsxs("div",{className:"drp-card",style:{padding:"24px",maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[e.jsx(t,{variant:"circular",width:40,height:40}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:"text",width:"60%"}),e.jsx(t,{variant:"text",width:"40%",height:"10px"})]})]}),e.jsx(t,{variant:"rectangular",height:"160px"}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:"text"}),e.jsx(t,{variant:"text",width:"80%"}),e.jsx(t,{variant:"text",width:"60%"})]})]})},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Array.from({length:5},(n,a)=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsx(t,{variant:"text",width:"25%"}),e.jsx(t,{variant:"text",width:"30%"}),e.jsx(t,{variant:"text",width:"15%"}),e.jsx(t,{variant:"text",width:"10%"})]},a))})};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "text"
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,v,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    height: "200px"
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,w,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 64,
    height: 64
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,j,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="drp-card" style={{
    padding: "24px",
    maxWidth: "400px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }}>
        <Skeleton variant="circular" width={40} height={40} />
        <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" height="10px" />
        </div>
      </div>
      <Skeleton variant="rectangular" height="160px" />
      <div style={{
      marginTop: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var T,D,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      {Array.from({
      length: 5
    }, (_, i) => <div key={i} style={{
      display: "flex",
      gap: "16px",
      alignItems: "center"
    }}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="15%" />
          <Skeleton variant="text" width="10%" />
        </div>)}
    </div>
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const A=["Text","Rectangular","Avatar","CardSkeleton","TableSkeleton"];export{l as Avatar,d as CardSkeleton,s as Rectangular,o as TableSkeleton,i as Text,A as __namedExportsOrder,q as default};
