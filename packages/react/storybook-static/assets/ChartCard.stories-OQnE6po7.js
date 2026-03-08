import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./fake-BF7jtsFd.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";function d({title:a,subtitle:r,size:s,children:m,legend:l,action:v,className:u=""}){const y=["drp-chart-card",u].filter(Boolean).join(" "),f=["drp-chart-container",s&&`drp-chart-container--${s}`].filter(Boolean).join(" ");return e.jsxs("div",{className:y,children:[e.jsxs("div",{className:"drp-chart-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"drp-card__title",children:a}),r&&e.jsx("p",{className:"drp-card__subtitle",children:r})]}),v]}),e.jsx("div",{className:f,children:m}),l&&e.jsx("div",{className:"drp-chart-legend",children:l})]})}d.__docgenInfo={description:"",methods:[],displayName:"ChartCard",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},legend:{required:!1,tsType:{name:"ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const k={title:"Layout/ChartCard",component:d,tags:["autodocs"]},n={args:{title:"Revenue Overview",subtitle:"Monthly revenue for 2026",children:e.jsx("div",{style:{width:"100%",height:"200px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.revenue.map((a,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-purple)",height:`${a/6e4*100}%`,minHeight:"4px",border:"1px solid var(--drp-black)"},title:`${i.labels[r]}: $${a.toLocaleString()}`},r))}),legend:e.jsx("div",{style:{display:"flex",gap:"16px",fontSize:"12px",fontFamily:"var(--drp-font-primary)"},children:e.jsxs("span",{children:[e.jsx("span",{style:{display:"inline-block",width:8,height:8,background:"var(--drp-purple)",marginRight:4}}),"Revenue"]})})}},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(d,{title:"Users",subtitle:"Monthly active users",children:e.jsx("div",{style:{width:"100%",height:"180px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.users.map((a,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-mint)",height:`${a/3e3*100}%`,border:"1px solid var(--drp-black)"}},r))})}),e.jsx(d,{title:"Orders",subtitle:"Monthly orders",children:e.jsx("div",{style:{width:"100%",height:"180px",display:"flex",alignItems:"flex-end",gap:"4px",padding:"16px"},children:i.orders.map((a,r)=>e.jsx("div",{style:{flex:1,background:"var(--drp-orange)",height:`${a/500*100}%`,border:"1px solid var(--drp-black)"}},r))})})]})};var p,o,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Revenue Overview",
    subtitle: "Monthly revenue for 2026",
    children: <div style={{
      width: "100%",
      height: "200px",
      display: "flex",
      alignItems: "flex-end",
      gap: "4px",
      padding: "16px"
    }}>
        {chartData.revenue.map((val, i) => <div key={i} style={{
        flex: 1,
        background: "var(--drp-purple)",
        height: \`\${val / 60000 * 100}%\`,
        minHeight: "4px",
        border: "1px solid var(--drp-black)"
      }} title={\`\${chartData.labels[i]}: $\${val.toLocaleString()}\`} />)}
      </div>,
    legend: <div style={{
      display: "flex",
      gap: "16px",
      fontSize: "12px",
      fontFamily: "var(--drp-font-primary)"
    }}>
        <span>
          <span style={{
          display: "inline-block",
          width: 8,
          height: 8,
          background: "var(--drp-purple)",
          marginRight: 4
        }} />
          Revenue
        </span>
      </div>
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var h,x,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px"
  }}>
      <ChartCard title="Users" subtitle="Monthly active users">
        <div style={{
        width: "100%",
        height: "180px",
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        padding: "16px"
      }}>
          {chartData.users.map((val, i) => <div key={i} style={{
          flex: 1,
          background: "var(--drp-mint)",
          height: \`\${val / 3000 * 100}%\`,
          border: "1px solid var(--drp-black)"
        }} />)}
        </div>
      </ChartCard>
      <ChartCard title="Orders" subtitle="Monthly orders">
        <div style={{
        width: "100%",
        height: "180px",
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        padding: "16px"
      }}>
          {chartData.orders.map((val, i) => <div key={i} style={{
          flex: 1,
          background: "var(--drp-orange)",
          height: \`\${val / 500 * 100}%\`,
          border: "1px solid var(--drp-black)"
        }} />)}
        </div>
      </ChartCard>
    </div>
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const w=["Default","TwoCharts"];export{n as Default,t as TwoCharts,w as __namedExportsOrder,k as default};
