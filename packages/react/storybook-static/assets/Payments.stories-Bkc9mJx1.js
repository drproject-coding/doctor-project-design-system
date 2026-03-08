import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-ZH-6pyQh.js";import{A as f,T as y,S as m}from"./Layout-5qMifhuW.js";import{C as p,a as d}from"./Card-CZSjc6Mh.js";import{B as D}from"./Badge-Cyoi2Itd.js";import{A as B}from"./Avatar-2B6o_Sxh.js";import{I as c}from"./Input-CQS1efF9.js";import{S as u}from"./Select-Csu0gdPj.js";import{B as r}from"./Button-Cyi0h7uy.js";import{M as I}from"./Modal-DnCwwVl1.js";import{D as x}from"./Divider-CW9MvvMP.js";import{t as M,h as A,p as P,s as L,b as R,a as U}from"./banking-cGtNb0OW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const $={title:"Pages/Payments",parameters:{layout:"fullscreen"}},h=({activeLabel:i="Payments"})=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Bruddle"}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Navigation"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:R.map(t=>{const e=t.label===i;return n.jsxs("a",{href:t.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:e?"rgba(99,29,237,0.08)":"transparent",borderLeft:e?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:t.iconSvg}}),n.jsx("span",{children:t.label}),t.badge&&n.jsx(D,{variant:"filled",className:"drp-badge--filled",children:t.badge})]},t.label)})}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"24px 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Cards"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"0 12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("span",{style:{width:8,height:8,background:"#631DED",display:"inline-block"}}),"Debit Card **** 7890"]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("span",{style:{width:8,height:8,background:"#FF6C01",display:"inline-block"}}),"Credit Card **** 4340"]}),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",textDecoration:"none",fontWeight:600,fontFamily:"var(--drp-font-primary)",marginTop:"4px"},children:"+ Open a card"})]}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"24px 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Balances"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"0 12px"},children:[U.map(t=>n.jsxs("div",{style:{fontSize:"13px",fontFamily:"var(--drp-font-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:t.flag}),n.jsxs("span",{children:[t.amount.toLocaleString("en-US",{minimumFractionDigits:2})," ",t.currency]})]},t.currency)),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",textDecoration:"none",fontWeight:600,fontFamily:"var(--drp-font-primary)",marginTop:"4px"},children:"+ Open a balance"})]}),n.jsxs("div",{style:{marginTop:"auto",padding:"16px 12px 0",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(B,{size:"sm",initials:"HR"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:"Henry Richardson"})]})]}),g=({title:i,leftContent:t})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t,n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:i})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("line",{x1:"14",y1:"14",x2:"18",y2:"18"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10 2a6 6 0 016 6v3l2 2H2l2-2V8a6 6 0 016-6z"}),n.jsx("path",{d:"M8 17a2 2 0 004 0"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M7 1L8.7 5.2H13L9.5 7.8L10.8 12L7 9.4L3.2 12L4.5 7.8L1 5.2H5.3L7 1Z",fill:"currentColor"})}),"Apps"]}),n.jsx(r,{variant:"primary",size:"sm",children:"+ Create new"})]})]}),v=()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px",fontFamily:"var(--drp-font-primary)",fontSize:"12px",color:"#999"},children:[n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"English"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"Privacy Policy"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"License"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"API"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"#999",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"8",cy:"8",r:"3"}),n.jsx("path",{d:"M8 1v2m0 10v2m-5-7H1m14 0h-2m-1.3-4.7l1.4-1.4M3.9 12.1l-1.4 1.4m0-11l1.4 1.4m8.2 8.2l1.4 1.4"})]}),n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"#999",strokeWidth:"1.5",children:n.jsx("path",{d:"M14 8.5A6 6 0 117.5 2a4.5 4.5 0 006.5 6.5z"})})]})]}),l={render:()=>{const i=M.slice(0,5),t=A.slice(0,6);return n.jsx("div",{style:{height:"100vh"},children:n.jsx(f,{sidebar:n.jsx(m,{children:n.jsx(h,{activeLabel:"Payments"})}),topbar:n.jsx(y,{children:n.jsx(g,{title:"Payments"})}),footer:n.jsx(v,{}),children:n.jsxs("div",{style:{padding:"24px",display:"grid",gridTemplateColumns:"1fr 320px",gap:"24px"},children:[n.jsxs(p,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[n.jsx(d,{title:"Make a payment"}),n.jsx(c,{placeholder:"Search payments...",style:{maxWidth:"220px"}})]}),n.jsx("p",{style:{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"#999",margin:"0 0 12px 0",fontFamily:"var(--drp-font-primary)"},children:"Payment categories"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"28px"},children:P.map(e=>n.jsxs("div",{style:{border:"2px dashed var(--drp-black)",padding:"20px",display:"flex",alignItems:"center",gap:"16px",cursor:"pointer"},children:[n.jsx("span",{style:{fontSize:"28px"},children:e.icon}),n.jsxs("div",{children:[n.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:e.name}),n.jsx("p",{style:{margin:"4px 0 0",fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:e.description})]})]},e.id))}),n.jsx("p",{style:{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"#999",margin:"0 0 12px 0",fontFamily:"var(--drp-font-primary)"},children:"Service providers"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"28px"},children:L.map(e=>n.jsxs("div",{style:{border:"2px dashed var(--drp-black)",padding:"20px",display:"flex",alignItems:"center",gap:"16px",cursor:"pointer"},children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"rgba(99,29,237,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0},children:e.icon}),n.jsxs("div",{children:[n.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:e.name}),n.jsx("p",{style:{margin:"4px 0 0",fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:e.description})]})]},e.id))}),n.jsx("p",{style:{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"#999",margin:"0 0 12px 0",fontFamily:"var(--drp-font-primary)"},children:"Latest transfers"}),n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:i.map(e=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"36px",height:"36px",background:e.iconBg,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"14px",fontFamily:"var(--drp-font-primary)"},children:e.icon}),n.jsxs("div",{children:[n.jsx("p",{style:{margin:0,fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.description}),n.jsxs("p",{style:{margin:"2px 0 0",fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:[e.type," · ",e.date]})]})]}),n.jsxs("span",{style:{fontWeight:700,fontSize:"14px",fontFamily:"var(--drp-font-primary)",color:e.amount>=0?"#00AA00":"inherit"},children:[e.amount>=0?"+":"",e.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ","USD"]})]}),n.jsx(x,{})]},e.id))}),n.jsx("div",{style:{marginTop:"16px",textAlign:"center"},children:n.jsx(r,{variant:"outline",children:"See all transactions"})})]}),n.jsxs(p,{children:[n.jsx(d,{title:"Recent transfers"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 0"},children:[n.jsx(B,{size:"sm",initials:e.name.split(" ").map(a=>a[0]).join("")}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:0,fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.name}),n.jsxs("p",{style:{margin:"2px 0 0",fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:["**** ",e.accountEnding]})]}),n.jsxs("span",{style:{fontSize:"12px",fontFamily:"var(--drp-font-primary)",color:"#666"},children:[e.currency==="USD"?"🇺🇸":e.currency==="EUR"?"🇪🇺":"🇬🇧"," ",e.currency]})]}),n.jsx(x,{})]},e.id))}),n.jsx("div",{style:{marginTop:"12px",textAlign:"center"},children:n.jsx(r,{variant:"outline",size:"sm",children:"See all contacts"})})]})]})})})}},o={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(f,{sidebar:n.jsx(m,{children:n.jsx(h,{activeLabel:"Payments"})}),topbar:n.jsx(y,{children:n.jsx(g,{title:"Send Money",leftContent:n.jsx("a",{href:"#",style:{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"inherit"},children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"12,4 6,10 12,16"})})})})}),footer:n.jsx(v,{}),children:n.jsx("div",{style:{padding:"32px 24px",display:"flex",justifyContent:"center"},children:n.jsx("div",{style:{width:"100%",maxWidth:"500px"},children:n.jsx(p,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsxs(u,{label:"Select recipient",children:[n.jsx("option",{value:"rustem",children:"Rustem Tolstobrov"}),n.jsx("option",{value:"john",children:"John Anderson"}),n.jsx("option",{value:"sarah",children:"Sarah Mitchell"})]}),n.jsxs(u,{label:"Select payment account",children:[n.jsx("option",{value:"debit",children:"Debit Card **** 7890"}),n.jsx("option",{value:"credit",children:"Credit Card **** 4340"})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,marginBottom:"6px",fontFamily:"var(--drp-font-primary)"},children:"You will send"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx(c,{placeholder:"0.00",defaultValue:"1,290.00",style:{paddingRight:"50px"}}),n.jsx("span",{style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",fontSize:"13px",fontWeight:700,color:"#666",fontFamily:"var(--drp-font-primary)"},children:"USD"})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"13px",fontFamily:"var(--drp-font-primary)",color:"#666"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{width:6,height:6,background:"#999",display:"inline-block"}}),"Conversion fee 9.50 USD"]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{width:6,height:6,background:"#999",display:"inline-block"}}),"Transfer fee 5.50 USD"]})]}),n.jsx(c,{label:"Delivery time",defaultValue:"Standard Transfer 1-3 days",disabled:!0}),n.jsx("p",{style:{margin:0,fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)",lineHeight:"1.5"},children:'By clicking "Continue", you agree to our terms and conditions. The transfer amount and fees are subject to change based on exchange rates at the time of processing.'}),n.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[n.jsx(r,{variant:"outline",style:{flex:1},children:"Cancel"}),n.jsx(r,{variant:"primary",style:{flex:1},children:"Continue"})]})]})})})})})})},s={render:()=>{const[i,t]=W.useState(!0);return n.jsx("div",{style:{height:"100vh"},children:n.jsxs(f,{sidebar:n.jsx(m,{children:n.jsx(h,{activeLabel:"Payments"})}),topbar:n.jsx(y,{children:n.jsx(g,{title:"Payments"})}),footer:n.jsx(v,{}),children:[n.jsx("div",{style:{padding:"24px",opacity:.3},children:n.jsx(p,{children:n.jsx(d,{title:"Make a payment"})})}),n.jsxs(I,{open:i,onClose:()=>t(!1),title:"Recipient details",footer:n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"outline",onClick:()=>t(!1),children:"Send Funds"}),n.jsx(r,{variant:"outline",onClick:()=>t(!1),children:"Edit Details"})]}),children:[n.jsxs("div",{style:{background:"var(--drp-purple)",margin:"-16px -16px 0 -16px",padding:"24px 16px 40px",display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx("div",{style:{width:"64px",height:"64px",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"20px",fontFamily:"var(--drp-font-primary)",color:"var(--drp-purple)",border:"3px solid #fff"},children:"RT"}),n.jsx("p",{style:{margin:"12px 0 2px",fontSize:"16px",fontWeight:700,color:"#fff",fontFamily:"var(--drp-font-primary)"},children:"Rustem Tolstobrov"}),n.jsx("p",{style:{margin:0,fontSize:"12px",color:"rgba(255,255,255,0.7)",fontFamily:"var(--drp-font-primary)"},children:"Account ending in 3456"})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0",marginTop:"20px"},children:[{icon:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"9",cy:"5",r:"3"}),n.jsx("path",{d:"M3 16c0-3 2.5-5 6-5s6 2 6 5"})]}),label:"Account holder name",value:"Rustem Tolstobrov"},{icon:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("path",{d:"M2 4h14v10H2z"}),n.jsx("path",{d:"M5 8h4"})]}),label:"Routing number",value:"021000021"},{icon:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("rect",{x:"2",y:"4",width:"14",height:"10"}),n.jsx("line",{x1:"2",y1:"8",x2:"16",y2:"8"})]}),label:"Account number",value:"**** **** 3456"},{icon:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"9",cy:"9",r:"7"}),n.jsx("path",{d:"M6 9h6M9 6v6"})]}),label:"Currency",value:"USD 🇺🇸"},{icon:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("polyline",{points:"4,9 7,12 14,5"})}),label:"Account type",value:"Checking"}].map((e,a)=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 0"},children:[n.jsx("span",{style:{color:"#999",display:"flex"},children:e.icon}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:0,fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:e.label}),n.jsx("p",{style:{margin:"2px 0 0",fontSize:"14px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.value})]})]}),a<4&&n.jsx(x,{})]},a))})]})]})})}};var j,S,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const latestTransfers = transactions.slice(0, 5);
    const recentContacts = contacts.slice(0, 6);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeLabel="Payments" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Payments" />
            </Topbar>} footer={<BankingFooter />}>
          <div style={{
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "24px"
        }}>
            {/* Main content */}
            <Card>
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px"
            }}>
                <CardHeader title="Make a payment" />
                <Input placeholder="Search payments..." style={{
                maxWidth: "220px"
              }} />
              </div>

              {/* Payment categories */}
              <p style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#999",
              margin: "0 0 12px 0",
              fontFamily: "var(--drp-font-primary)"
            }}>
                Payment categories
              </p>
              <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "28px"
            }}>
                {paymentCategories.map(cat => <div key={cat.id} style={{
                border: "2px dashed var(--drp-black)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer"
              }}>
                    <span style={{
                  fontSize: "28px"
                }}>{cat.icon}</span>
                    <div>
                      <p style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {cat.name}
                      </p>
                      <p style={{
                    margin: "4px 0 0",
                    fontSize: "12px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>)}
              </div>

              {/* Service providers */}
              <p style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#999",
              margin: "0 0 12px 0",
              fontFamily: "var(--drp-font-primary)"
            }}>
                Service providers
              </p>
              <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "28px"
            }}>
                {serviceProviders.map(sp => <div key={sp.id} style={{
                border: "2px dashed var(--drp-black)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer"
              }}>
                    <div style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(99,29,237,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0
                }}>
                      {sp.icon}
                    </div>
                    <div>
                      <p style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {sp.name}
                      </p>
                      <p style={{
                    margin: "4px 0 0",
                    fontSize: "12px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {sp.description}
                      </p>
                    </div>
                  </div>)}
              </div>

              {/* Latest transfers */}
              <p style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#999",
              margin: "0 0 12px 0",
              fontFamily: "var(--drp-font-primary)"
            }}>
                Latest transfers
              </p>
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {latestTransfers.map(tx => <div key={tx.id}>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0"
                }}>
                      <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                        <div style={{
                      width: "36px",
                      height: "36px",
                      background: tx.iconBg,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                      fontFamily: "var(--drp-font-primary)"
                    }}>
                          {tx.icon}
                        </div>
                        <div>
                          <p style={{
                        margin: 0,
                        fontSize: "13px",
                        fontWeight: 600,
                        fontFamily: "var(--drp-font-primary)"
                      }}>
                            {tx.description}
                          </p>
                          <p style={{
                        margin: "2px 0 0",
                        fontSize: "11px",
                        color: "#999",
                        fontFamily: "var(--drp-font-primary)"
                      }}>
                            {tx.type} &middot; {tx.date}
                          </p>
                        </div>
                      </div>
                      <span style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "var(--drp-font-primary)",
                    color: tx.amount >= 0 ? "#00AA00" : "inherit"
                  }}>
                        {tx.amount >= 0 ? "+" : ""}
                        {tx.amount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}{" "}
                        USD
                      </span>
                    </div>
                    <Divider />
                  </div>)}
              </div>

              <div style={{
              marginTop: "16px",
              textAlign: "center"
            }}>
                <Button variant="outline">See all transactions</Button>
              </div>
            </Card>

            {/* Right sidebar */}
            <Card>
              <CardHeader title="Recent transfers" />
              <div style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "16px"
            }}>
                {recentContacts.map(c => <div key={c.id}>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 0"
                }}>
                      <Avatar size="sm" initials={c.name.split(" ").map(n => n[0]).join("")} />
                      <div style={{
                    flex: 1
                  }}>
                        <p style={{
                      margin: 0,
                      fontSize: "13px",
                      fontWeight: 600,
                      fontFamily: "var(--drp-font-primary)"
                    }}>
                          {c.name}
                        </p>
                        <p style={{
                      margin: "2px 0 0",
                      fontSize: "11px",
                      color: "#999",
                      fontFamily: "var(--drp-font-primary)"
                    }}>
                          **** {c.accountEnding}
                        </p>
                      </div>
                      <span style={{
                    fontSize: "12px",
                    fontFamily: "var(--drp-font-primary)",
                    color: "#666"
                  }}>
                        {c.currency === "USD" ? "🇺🇸" : c.currency === "EUR" ? "🇪🇺" : "🇬🇧"}{" "}
                        {c.currency}
                      </span>
                    </div>
                    <Divider />
                  </div>)}
              </div>
              <div style={{
              marginTop: "12px",
              textAlign: "center"
            }}>
                <Button variant="outline" size="sm">
                  See all contacts
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>;
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,C,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <BankingSidebar activeLabel="Payments" />
          </Sidebar>} topbar={<Topbar>
            <BankingTopbar title="Send Money" leftContent={<a href="#" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "inherit"
      }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="12,4 6,10 12,16" />
                  </svg>
                </a>} />
          </Topbar>} footer={<BankingFooter />}>
        <div style={{
        padding: "32px 24px",
        display: "flex",
        justifyContent: "center"
      }}>
          <div style={{
          width: "100%",
          maxWidth: "500px"
        }}>
            <Card>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
                <Select label="Select recipient">
                  <option value="rustem">Rustem Tolstobrov</option>
                  <option value="john">John Anderson</option>
                  <option value="sarah">Sarah Mitchell</option>
                </Select>

                <Select label="Select payment account">
                  <option value="debit">Debit Card **** 7890</option>
                  <option value="credit">Credit Card **** 4340</option>
                </Select>

                <div>
                  <label style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "6px",
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    You will send
                  </label>
                  <div style={{
                  position: "relative"
                }}>
                    <Input placeholder="0.00" defaultValue="1,290.00" style={{
                    paddingRight: "50px"
                  }} />
                    <span style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#666",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                      USD
                    </span>
                  </div>
                </div>

                {/* Fee breakdown */}
                <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "13px",
                fontFamily: "var(--drp-font-primary)",
                color: "#666"
              }}>
                  <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                    <span style={{
                    width: 6,
                    height: 6,
                    background: "#999",
                    display: "inline-block"
                  }} />
                    Conversion fee 9.50 USD
                  </div>
                  <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                    <span style={{
                    width: 6,
                    height: 6,
                    background: "#999",
                    display: "inline-block"
                  }} />
                    Transfer fee 5.50 USD
                  </div>
                </div>

                <Input label="Delivery time" defaultValue="Standard Transfer 1-3 days" disabled />

                <p style={{
                margin: 0,
                fontSize: "11px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)",
                lineHeight: "1.5"
              }}>
                  By clicking &quot;Continue&quot;, you agree to our terms and
                  conditions. The transfer amount and fees are subject to change
                  based on exchange rates at the time of processing.
                </p>

                <div style={{
                display: "flex",
                gap: "12px",
                marginTop: "8px"
              }}>
                  <Button variant="outline" style={{
                  flex: 1
                }}>
                    Cancel
                  </Button>
                  <Button variant="primary" style={{
                  flex: 1
                }}>
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var z,w,T;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [modalOpen, setModalOpen] = useState(true);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeLabel="Payments" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Payments" />
            </Topbar>} footer={<BankingFooter />}>
          {/* Background content (same as PaymentsList but dimmed by modal) */}
          <div style={{
          padding: "24px",
          opacity: 0.3
        }}>
            <Card>
              <CardHeader title="Make a payment" />
            </Card>
          </div>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Recipient details" footer={<>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Send Funds
                </Button>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Edit Details
                </Button>
              </>}>
            {/* Purple header area */}
            <div style={{
            background: "var(--drp-purple)",
            margin: "-16px -16px 0 -16px",
            padding: "24px 16px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
              <div style={{
              width: "64px",
              height: "64px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "20px",
              fontFamily: "var(--drp-font-primary)",
              color: "var(--drp-purple)",
              border: "3px solid #fff"
            }}>
                RT
              </div>
              <p style={{
              margin: "12px 0 2px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "var(--drp-font-primary)"
            }}>
                Rustem Tolstobrov
              </p>
              <p style={{
              margin: 0,
              fontSize: "12px",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--drp-font-primary)"
            }}>
                Account ending in 3456
              </p>
            </div>

            {/* Info rows */}
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginTop: "20px"
          }}>
              {[{
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="5" r="3" />
                      <path d="M3 16c0-3 2.5-5 6-5s6 2 6 5" />
                    </svg>,
              label: "Account holder name",
              value: "Rustem Tolstobrov"
            }, {
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 4h14v10H2z" />
                      <path d="M5 8h4" />
                    </svg>,
              label: "Routing number",
              value: "021000021"
            }, {
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="14" height="10" />
                      <line x1="2" y1="8" x2="16" y2="8" />
                    </svg>,
              label: "Account number",
              value: "**** **** 3456"
            }, {
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="9" r="7" />
                      <path d="M6 9h6M9 6v6" />
                    </svg>,
              label: "Currency",
              value: "USD 🇺🇸"
            }, {
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="4,9 7,12 14,5" />
                    </svg>,
              label: "Account type",
              value: "Checking"
            }].map((row, i) => <div key={i}>
                  <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 0"
              }}>
                    <span style={{
                  color: "#999",
                  display: "flex"
                }}>
                      {row.icon}
                    </span>
                    <div style={{
                  flex: 1
                }}>
                      <p style={{
                    margin: 0,
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  }}>
                        {row.label}
                      </p>
                      <p style={{
                    margin: "2px 0 0",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {row.value}
                      </p>
                    </div>
                  </div>
                  {i < 4 && <Divider />}
                </div>)}
            </div>
          </Modal>
        </AppShell>
      </div>;
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const nn=["PaymentsList","PaymentsSendMoney","PaymentsDetails"];export{s as PaymentsDetails,l as PaymentsList,o as PaymentsSendMoney,nn as __namedExportsOrder,$ as default};
