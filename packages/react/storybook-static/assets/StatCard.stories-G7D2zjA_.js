import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({value:p,label:c,className:m=""}){return e.jsxs("dl",{className:`drp-stat-card ${m}`,style:{textAlign:"center",padding:"var(--drp-space-8)",border:"var(--drp-border-chunk)",background:"var(--drp-surface)",margin:0},children:[e.jsx("dd",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"3.5rem",fontWeight:800,color:"var(--drp-purple)",lineHeight:1,fontVariantNumeric:"tabular-nums",margin:0},children:p}),e.jsx("dt",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"var(--drp-text-sm)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginTop:"var(--drp-space-2)"},children:c})]})}a.__docgenInfo={description:`Bold metric display card for KPI dashboards — renders a large tabular-numeric value in \`var(--drp-purple)\` above a small uppercase label, ideal for summary rows at the top of reports.
@example
<StatCard value="1,284" label="Patients this month" />
<StatCard value="94%" label="Appointment attendance" />`,methods:[],displayName:"StatCard",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const v={title:"Composites/StatCard",component:a,tags:["autodocs"],argTypes:{value:{control:"text",description:"Primary metric displayed in large type — use concise formatted values like '73%', '3x', or '$1.2M'."},label:{control:"text",description:"Short descriptor beneath the value — phrase as an outcome or benefit (e.g. 'Higher Conversion') rather than a raw metric name."}}},r={args:{value:"73%",label:"Higher Conversion"}},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[e.jsx(a,{value:"73%",label:"Higher Conversion"}),e.jsx(a,{value:"50%",label:"Faster Time-to-Market"}),e.jsx(a,{value:"3x",label:"Brand Consistency"}),e.jsx(a,{value:"400%",label:"ROI in Year One"})]})};var n,s,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: "73%",
    label: "Higher Conversion"
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px"
  }}>
      <StatCard value="73%" label="Higher Conversion" />
      <StatCard value="50%" label="Faster Time-to-Market" />
      <StatCard value="3x" label="Brand Consistency" />
      <StatCard value="400%" label="ROI in Year One" />
    </div>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["Default","StatsRow"];export{r as Default,t as StatsRow,g as __namedExportsOrder,v as default};
