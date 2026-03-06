import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as S,T as k,S as $}from"./Layout-5qMifhuW.js";import{C as i,a as s}from"./Card-CZSjc6Mh.js";import{B as E}from"./Badge-Cyoi2Itd.js";import{A as w}from"./Avatar-2B6o_Sxh.js";import{m as d,i as y,w as O,r as N,f as U}from"./banking-cGtNb0OW.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const en={title:"Pages/Reports",parameters:{layout:"fullscreen"}},B=()=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"BRUDDLE"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:N.map(e=>{const t=e.label==="Analytics";return n.jsxs("a",{href:e.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:t?"rgba(152,233,171,0.15)":"transparent",borderLeft:t?"3px solid var(--drp-mint)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:e.iconSvg}}),n.jsx("span",{children:e.label}),e.badge&&n.jsx(E,{variant:"filled",className:"drp-badge--filled",children:e.badge})]},e.label)})}),n.jsxs("div",{style:{marginTop:"32px"},children:[n.jsx("p",{style:{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",marginBottom:"12px",fontFamily:"var(--drp-font-primary)"},children:"Team Members"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[U.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(w,{size:"sm",src:e.avatar}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.name})]},e.name)),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",fontWeight:600,textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:"See More"})]})]}),n.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px solid #eee",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(w,{size:"sm",initials:"HR"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:"Henry Richardson"})]})]}),T=()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Reports"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsx(E,{variant:"primary",children:"5"}),n.jsx(w,{size:"sm",initials:"HR"})]})]}),x=({label:e,value:t,badge:a,badgeColor:o,barColor:l,barValue:r=65})=>n.jsxs(i,{variant:"sm",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{margin:0,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"#666",fontFamily:"var(--drp-font-primary)",fontWeight:600},children:e}),n.jsx("p",{style:{margin:"4px 0 8px",fontSize:"24px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:t})]}),a&&n.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:o||"#00AA00",fontFamily:"var(--drp-font-primary)"},children:a})]}),n.jsx("div",{style:{height:"6px",background:"#eee",border:"1px solid var(--drp-black)",overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",width:`${r}%`,background:l||"var(--drp-mint)"}})})]}),W='<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#999" stroke-width="2"><rect x="2" y="4" width="16" height="14"/><line x1="2" y1="8" x2="18" y2="8"/><line x1="6" y1="2" x2="6" y2="6"/><line x1="14" y1="2" x2="14" y2="6"/></svg>',Y=({max:e=500})=>n.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",paddingRight:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:[e,Math.round(e*.75),Math.round(e*.5),Math.round(e*.25),0].map(t=>n.jsx("span",{children:t},t))}),m=({data:e,barColor:t="var(--drp-purple)",labels:a,height:o=200,maxValue:l=520})=>n.jsxs("div",{style:{display:"flex",gap:"0"},children:[n.jsx(Y,{max:l}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:`${o}px`,padding:"0"},children:e.map((r,p)=>n.jsx("div",{style:{flex:1,background:t,height:`${r/l*100}%`,minHeight:"4px",border:"1px solid var(--drp-black)"},title:`${a[p]||""}: ${r}`},p))}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:a.map(r=>n.jsx("span",{children:r},r))})]})]}),g={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(S,{sidebar:n.jsx($,{children:n.jsx(B,{})}),topbar:n.jsx(k,{children:n.jsx(T,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"24px"},children:[n.jsx(x,{label:"Balance",value:"$80,470.50",badge:"+10%",badgeColor:"#00AA00",barColor:"var(--drp-mint)",barValue:72}),n.jsx(x,{label:"Money in",value:"$60,930.50",badge:"-14%",badgeColor:"#FF4444",barColor:"var(--drp-mint)",barValue:58}),n.jsx(x,{label:"Money out",value:"$42,890.30",badge:"+16%",badgeColor:"#00AA00",barColor:"var(--drp-pink)",barValue:45})]}),n.jsxs(i,{style:{marginBottom:"16px"},children:[n.jsx(s,{title:"Bars 12 columns",action:n.jsx("span",{style:{width:20,height:20,display:"inline-flex",alignItems:"center",cursor:"pointer"},dangerouslySetInnerHTML:{__html:W}})}),n.jsx(m,{data:y,barColor:"var(--drp-purple)",labels:d})]}),n.jsxs(i,{style:{marginBottom:"16px"},children:[n.jsx(s,{title:"Bars 12 columns",action:n.jsx("span",{style:{width:20,height:20,display:"inline-flex",alignItems:"center",cursor:"pointer"},dangerouslySetInnerHTML:{__html:W}})}),n.jsx(m,{data:y,barColor:"#C4A0FF",labels:d})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px"},children:[n.jsxs(i,{children:[n.jsx(s,{title:"Bars 8 columns"}),n.jsx(m,{data:y.slice(0,8),barColor:"var(--drp-purple)",labels:d.slice(0,8)})]}),n.jsxs(i,{children:[n.jsx(s,{title:"Bars 4 columns"}),n.jsx(m,{data:y.slice(0,4),barColor:"var(--drp-purple)",labels:d.slice(0,4)})]})]})]})})})},b={render:()=>{const e=O,t=800,a=220,o=500,l=({primary:r,secondary:p,width:c,dataLength:G})=>{const A=h=>h.map((f,u)=>{const j=u/(h.length-1)*c,C=a-f/o*a;return`${j},${C}`}).join(" "),F=h=>{const f=h.map((u,j)=>{const C=j/(h.length-1)*c,_=a-u/o*a;return`${C},${_}`});return`0,${a} ${f.join(" ")} ${c},${a}`};return n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("svg",{width:"100%",height:a,viewBox:`0 0 ${c} ${a}`,preserveAspectRatio:"none",style:{display:"block"},children:[n.jsx("polygon",{points:F(p),fill:"rgba(152,233,171,0.25)",stroke:"none"}),n.jsx("polyline",{points:A(p),fill:"none",stroke:"var(--drp-mint)",strokeWidth:"2"}),n.jsx("polygon",{points:F(r),fill:"rgba(99,29,237,0.15)",stroke:"none"}),n.jsx("polyline",{points:A(r),fill:"none",stroke:"var(--drp-purple)",strokeWidth:"2"})]}),n.jsx("div",{style:{position:"absolute",top:"40px",left:"50%",transform:"translateX(-50%)",background:"var(--drp-black)",color:"#fff",padding:"6px 12px",fontSize:"12px",fontFamily:"var(--drp-font-primary)",fontWeight:600,border:"2px solid var(--drp-black)",whiteSpace:"nowrap"},children:"June 16   $14,800"})]})};return n.jsx("div",{style:{height:"100vh"},children:n.jsx(S,{sidebar:n.jsx($,{children:n.jsx(B,{})}),topbar:n.jsx(k,{children:n.jsx(T,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"24px"},children:[n.jsx(x,{label:"Balance",value:"$80,470.50",barColor:"var(--drp-mint)",barValue:72}),n.jsx(x,{label:"Money in",value:"$60,930.50",barColor:"var(--drp-mint)",barValue:58}),n.jsx(x,{label:"Money out",value:"$42,890.30",barColor:"var(--drp-pink)",barValue:45})]}),n.jsxs(i,{style:{marginBottom:"16px"},children:[n.jsx(s,{title:"Wave 12 columns"}),n.jsx(l,{primary:e.primary,secondary:e.secondary,width:t,dataLength:12}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:d.map(r=>n.jsx("span",{children:r},r))})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px"},children:[n.jsxs(i,{children:[n.jsx(s,{title:"Wave 8 columns"}),n.jsx(l,{primary:e.primary.slice(0,8),secondary:e.secondary.slice(0,8),width:500,dataLength:8}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:d.slice(0,8).map(r=>n.jsx("span",{children:r},r))})]}),n.jsxs(i,{children:[n.jsx(s,{title:"Wave 4 columns"}),n.jsx(l,{primary:e.primary.slice(0,4),secondary:e.secondary.slice(0,4),width:250,dataLength:4}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:d.slice(0,4).map(r=>n.jsx("span",{children:r},r))})]})]})]})})})}},v={render:()=>{const e={yellow:"#FAE8A4",blue:"#4A90D9",green:"#98E9AB",red:"#E99898",darkBlue:"#2C3E80"},t=[{x:60,y:40,w:60,h:50,color:e.blue,label:"NA"},{x:80,y:100,w:30,h:60,color:e.green,label:"SA"},{x:200,y:30,w:50,h:40,color:e.yellow,label:"EU"},{x:210,y:80,w:70,h:80,color:e.red,label:"AF"},{x:300,y:30,w:90,h:60,color:e.darkBlue,label:"AS"},{x:340,y:120,w:50,h:40,color:e.green,label:"OC"}],a=[{label:"Yellow",color:e.yellow},{label:"Blue",color:e.blue},{label:"Green",color:e.green},{label:"Red",color:e.red},{label:"Dark Blue",color:e.darkBlue}],o=[{pct:35,color:e.yellow,label:"Savings"},{pct:30,color:e.blue,label:"Investments"},{pct:20,color:e.green,label:"Checking"},{pct:10,color:e.red,label:"Credit"},{pct:5,color:e.darkBlue,label:"Other"}],l=(()=>{let r=0;return o.map(p=>{const c=r;return r+=p.pct,`${p.color} ${c}% ${r}%`}).join(", ")})();return n.jsx("div",{style:{height:"100vh"},children:n.jsx(S,{sidebar:n.jsx($,{children:n.jsx(B,{})}),topbar:n.jsx(k,{children:n.jsx(T,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs(i,{style:{marginBottom:"16px"},children:[n.jsx(s,{title:"Map 12 columns"}),n.jsx("div",{style:{position:"relative",height:"200px",background:"#f5f5f5",border:"1px solid var(--drp-black)",overflow:"hidden"},children:t.map(r=>n.jsx("div",{title:r.label,style:{position:"absolute",left:`${r.x}px`,top:`${r.y}px`,width:`${r.w}px`,height:`${r.h}px`,background:r.color,border:"1px solid var(--drp-black)"}},r.label))}),n.jsx("div",{style:{display:"flex",gap:"16px",marginTop:"12px",fontSize:"12px",fontFamily:"var(--drp-font-primary)"},children:a.map(r=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("div",{style:{width:"12px",height:"12px",background:r.color,border:"1px solid var(--drp-black)"}}),n.jsx("span",{children:r.label})]},r.label))})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsxs(i,{children:[n.jsx(s,{title:"Pie chart 6 columns",subtitle:"Donut"}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"24px 0"},children:n.jsx("div",{style:{position:"relative",width:"180px",height:"180px",background:`conic-gradient(${l})`,border:"2px solid var(--drp-black)"},children:n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100px",height:"100px",background:"#fff",border:"2px solid var(--drp-black)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("span",{style:{fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:"$80,720.50"}),n.jsx("span",{style:{fontSize:"9px",color:"#999",fontFamily:"var(--drp-font-primary)",textAlign:"center"},children:"from all accounts"})]})})}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"center",fontSize:"12px",fontFamily:"var(--drp-font-primary)"},children:o.slice(0,3).map(r=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("div",{style:{width:"10px",height:"10px",background:r.color,border:"1px solid var(--drp-black)"}}),n.jsx("span",{children:r.label})]},r.label))})]}),n.jsxs(i,{children:[n.jsx(s,{title:"Pie chart 6 columns",subtitle:"Filled"}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"24px 0"},children:n.jsx("div",{style:{width:"180px",height:"180px",background:`conic-gradient(${l})`,border:"2px solid var(--drp-black)"}})}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",fontSize:"12px",fontFamily:"var(--drp-font-primary)",padding:"0 16px"},children:o.map(r=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("div",{style:{width:"10px",height:"10px",background:r.color,border:"1px solid var(--drp-black)"}}),n.jsx("span",{style:{flex:1},children:r.label}),n.jsxs("span",{style:{fontWeight:700},children:[r.pct,"%"]})]},r.label))})]})]})]})})})}};var I,H,z;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <ReportsSidebar />
          </Sidebar>} topbar={<Topbar>
            <ReportsTopbar />
          </Topbar>}>
        <div style={{
        padding: "24px"
      }}>
          {/* Stat cards */}
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "24px"
        }}>
            <StatCard label="Balance" value="$80,470.50" badge="+10%" badgeColor="#00AA00" barColor="var(--drp-mint)" barValue={72} />
            <StatCard label="Money in" value="$60,930.50" badge="-14%" badgeColor="#FF4444" barColor="var(--drp-mint)" barValue={58} />
            <StatCard label="Money out" value="$42,890.30" badge="+16%" badgeColor="#00AA00" barColor="var(--drp-pink)" barValue={45} />
          </div>

          {/* Bars 12 columns - purple */}
          <Card style={{
          marginBottom: "16px"
        }}>
            <CardHeader title="Bars 12 columns" action={<span style={{
            width: 20,
            height: 20,
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer"
          }} dangerouslySetInnerHTML={{
            __html: calendarIconSvg
          }} />} />
            <BarChart data={chartBars} barColor="var(--drp-purple)" labels={months} />
          </Card>

          {/* Bars 12 columns - lighter purple */}
          <Card style={{
          marginBottom: "16px"
        }}>
            <CardHeader title="Bars 12 columns" action={<span style={{
            width: 20,
            height: 20,
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer"
          }} dangerouslySetInnerHTML={{
            __html: calendarIconSvg
          }} />} />
            <BarChart data={chartBars} barColor="#C4A0FF" labels={months} />
          </Card>

          {/* Bottom row: 8 cols + 4 cols */}
          <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "16px"
        }}>
            <Card>
              <CardHeader title="Bars 8 columns" />
              <BarChart data={chartBars.slice(0, 8)} barColor="var(--drp-purple)" labels={months.slice(0, 8)} />
            </Card>
            <Card>
              <CardHeader title="Bars 4 columns" />
              <BarChart data={chartBars.slice(0, 4)} barColor="var(--drp-purple)" labels={months.slice(0, 4)} />
            </Card>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(z=(H=g.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var R,M,D;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const w = waveData;
    const chartWidth = 800;
    const chartHeight = 220;
    const maxVal = 500;
    const toPoints = (data: number[]) => data.map((v, i) => {
      const x = i / (data.length - 1) * chartWidth;
      const y = chartHeight - v / maxVal * chartHeight;
      return \`\${x},\${y}\`;
    }).join(" ");
    const toAreaPoints = (data: number[]) => {
      const line = data.map((v, i) => {
        const x = i / (data.length - 1) * chartWidth;
        const y = chartHeight - v / maxVal * chartHeight;
        return \`\${x},\${y}\`;
      });
      return \`0,\${chartHeight} \${line.join(" ")} \${chartWidth},\${chartHeight}\`;
    };
    const WaveChart = ({
      primary,
      secondary,
      width,
      dataLength
    }: {
      primary: number[];
      secondary: number[];
      width: number;
      dataLength: number;
    }) => {
      const localToPoints = (data: number[]) => data.map((v, i) => {
        const x = i / (data.length - 1) * width;
        const y = chartHeight - v / maxVal * chartHeight;
        return \`\${x},\${y}\`;
      }).join(" ");
      const localToArea = (data: number[]) => {
        const line = data.map((v, i) => {
          const x = i / (data.length - 1) * width;
          const y = chartHeight - v / maxVal * chartHeight;
          return \`\${x},\${y}\`;
        });
        return \`0,\${chartHeight} \${line.join(" ")} \${width},\${chartHeight}\`;
      };
      return <div style={{
        position: "relative"
      }}>
          <svg width="100%" height={chartHeight} viewBox={\`0 0 \${width} \${chartHeight}\`} preserveAspectRatio="none" style={{
          display: "block"
        }}>
            {/* Secondary area (green) */}
            <polygon points={localToArea(secondary)} fill="rgba(152,233,171,0.25)" stroke="none" />
            <polyline points={localToPoints(secondary)} fill="none" stroke="var(--drp-mint)" strokeWidth="2" />

            {/* Primary area (purple) */}
            <polygon points={localToArea(primary)} fill="rgba(99,29,237,0.15)" stroke="none" />
            <polyline points={localToPoints(primary)} fill="none" stroke="var(--drp-purple)" strokeWidth="2" />
          </svg>

          {/* Hardcoded tooltip */}
          <div style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--drp-black)",
          color: "#fff",
          padding: "6px 12px",
          fontSize: "12px",
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 600,
          border: "2px solid var(--drp-black)",
          whiteSpace: "nowrap"
        }}>
            June 16 &nbsp; $14,800
          </div>
        </div>;
    };
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <ReportsSidebar />
            </Sidebar>} topbar={<Topbar>
              <ReportsTopbar />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Stat cards (no percentage badges) */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "24px"
          }}>
              <StatCard label="Balance" value="$80,470.50" barColor="var(--drp-mint)" barValue={72} />
              <StatCard label="Money in" value="$60,930.50" barColor="var(--drp-mint)" barValue={58} />
              <StatCard label="Money out" value="$42,890.30" barColor="var(--drp-pink)" barValue={45} />
            </div>

            {/* Wave 12 columns */}
            <Card style={{
            marginBottom: "16px"
          }}>
              <CardHeader title="Wave 12 columns" />
              <WaveChart primary={w.primary} secondary={w.secondary} width={chartWidth} dataLength={12} />
              <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
              fontSize: "10px",
              color: "#999",
              fontFamily: "var(--drp-font-primary)"
            }}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
            </Card>

            {/* Bottom: Wave 8 + Wave 4 */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px"
          }}>
              <Card>
                <CardHeader title="Wave 8 columns" />
                <WaveChart primary={w.primary.slice(0, 8)} secondary={w.secondary.slice(0, 8)} width={500} dataLength={8} />
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
                fontSize: "10px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)"
              }}>
                  {months.slice(0, 8).map(m => <span key={m}>{m}</span>)}
                </div>
              </Card>
              <Card>
                <CardHeader title="Wave 4 columns" />
                <WaveChart primary={w.primary.slice(0, 4)} secondary={w.secondary.slice(0, 4)} width={250} dataLength={4} />
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
                fontSize: "10px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)"
              }}>
                  {months.slice(0, 4).map(m => <span key={m}>{m}</span>)}
                </div>
              </Card>
            </div>
          </div>
        </AppShell>
      </div>;
  }
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var L,V,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    /* Simplified continent grid blocks */
    const mapColors = {
      yellow: "#FAE8A4",
      blue: "#4A90D9",
      green: "#98E9AB",
      red: "#E99898",
      darkBlue: "#2C3E80"
    };
    const continentBlocks: {
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      label: string;
    }[] = [{
      x: 60,
      y: 40,
      w: 60,
      h: 50,
      color: mapColors.blue,
      label: "NA"
    }, {
      x: 80,
      y: 100,
      w: 30,
      h: 60,
      color: mapColors.green,
      label: "SA"
    }, {
      x: 200,
      y: 30,
      w: 50,
      h: 40,
      color: mapColors.yellow,
      label: "EU"
    }, {
      x: 210,
      y: 80,
      w: 70,
      h: 80,
      color: mapColors.red,
      label: "AF"
    }, {
      x: 300,
      y: 30,
      w: 90,
      h: 60,
      color: mapColors.darkBlue,
      label: "AS"
    }, {
      x: 340,
      y: 120,
      w: 50,
      h: 40,
      color: mapColors.green,
      label: "OC"
    }];
    const legendItems = [{
      label: "Yellow",
      color: mapColors.yellow
    }, {
      label: "Blue",
      color: mapColors.blue
    }, {
      label: "Green",
      color: mapColors.green
    }, {
      label: "Red",
      color: mapColors.red
    }, {
      label: "Dark Blue",
      color: mapColors.darkBlue
    }];

    /* Donut / Pie data */
    const segments = [{
      pct: 35,
      color: mapColors.yellow,
      label: "Savings"
    }, {
      pct: 30,
      color: mapColors.blue,
      label: "Investments"
    }, {
      pct: 20,
      color: mapColors.green,
      label: "Checking"
    }, {
      pct: 10,
      color: mapColors.red,
      label: "Credit"
    }, {
      pct: 5,
      color: mapColors.darkBlue,
      label: "Other"
    }];
    const conicStops = (() => {
      let acc = 0;
      return segments.map(s => {
        const start = acc;
        acc += s.pct;
        return \`\${s.color} \${start}% \${acc}%\`;
      }).join(", ");
    })();
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <ReportsSidebar />
            </Sidebar>} topbar={<Topbar>
              <ReportsTopbar />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Map 12 columns */}
            <Card style={{
            marginBottom: "16px"
          }}>
              <CardHeader title="Map 12 columns" />
              <div style={{
              position: "relative",
              height: "200px",
              background: "#f5f5f5",
              border: "1px solid var(--drp-black)",
              overflow: "hidden"
            }}>
                {continentBlocks.map(b => <div key={b.label} title={b.label} style={{
                position: "absolute",
                left: \`\${b.x}px\`,
                top: \`\${b.y}px\`,
                width: \`\${b.w}px\`,
                height: \`\${b.h}px\`,
                background: b.color,
                border: "1px solid var(--drp-black)"
              }} />)}
              </div>
              {/* Legend */}
              <div style={{
              display: "flex",
              gap: "16px",
              marginTop: "12px",
              fontSize: "12px",
              fontFamily: "var(--drp-font-primary)"
            }}>
                {legendItems.map(l => <div key={l.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                    <div style={{
                  width: "12px",
                  height: "12px",
                  background: l.color,
                  border: "1px solid var(--drp-black)"
                }} />
                    <span>{l.label}</span>
                  </div>)}
              </div>
            </Card>

            {/* Pie charts side by side */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px"
          }}>
              {/* Donut chart */}
              <Card>
                <CardHeader title="Pie chart 6 columns" subtitle="Donut" />
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "24px 0"
              }}>
                  <div style={{
                  position: "relative",
                  width: "180px",
                  height: "180px",
                  background: \`conic-gradient(\${conicStops})\`,
                  border: "2px solid var(--drp-black)"
                }}>
                    {/* Inner cutout for donut */}
                    <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100px",
                    height: "100px",
                    background: "#fff",
                    border: "2px solid var(--drp-black)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                      <span style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "var(--drp-font-primary)"
                    }}>
                        $80,720.50
                      </span>
                      <span style={{
                      fontSize: "9px",
                      color: "#999",
                      fontFamily: "var(--drp-font-primary)",
                      textAlign: "center"
                    }}>
                        from all accounts
                      </span>
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "center",
                fontSize: "12px",
                fontFamily: "var(--drp-font-primary)"
              }}>
                  {segments.slice(0, 3).map(s => <div key={s.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                      <div style={{
                    width: "10px",
                    height: "10px",
                    background: s.color,
                    border: "1px solid var(--drp-black)"
                  }} />
                      <span>{s.label}</span>
                    </div>)}
                </div>
              </Card>

              {/* Filled pie chart */}
              <Card>
                <CardHeader title="Pie chart 6 columns" subtitle="Filled" />
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "24px 0"
              }}>
                  <div style={{
                  width: "180px",
                  height: "180px",
                  background: \`conic-gradient(\${conicStops})\`,
                  border: "2px solid var(--drp-black)"
                }} />
                </div>
                {/* Legend with percentages */}
                <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
                fontFamily: "var(--drp-font-primary)",
                padding: "0 16px"
              }}>
                  {segments.map(s => <div key={s.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                      <div style={{
                    width: "10px",
                    height: "10px",
                    background: s.color,
                    border: "1px solid var(--drp-black)"
                  }} />
                      <span style={{
                    flex: 1
                  }}>{s.label}</span>
                      <span style={{
                    fontWeight: 700
                  }}>{s.pct}%</span>
                    </div>)}
                </div>
              </Card>
            </div>
          </div>
        </AppShell>
      </div>;
  }
}`,...(P=(V=v.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const rn=["ReportsBars","ReportsWave","ReportsMisc"];export{g as ReportsBars,v as ReportsMisc,b as ReportsWave,rn as __namedExportsOrder,en as default};
