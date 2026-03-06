import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as g,T as v,S as u}from"./Layout-5qMifhuW.js";import{C as a,a as s}from"./Card-CZSjc6Mh.js";import{T as C}from"./Table-BJFi9Akg.js";import{T as D}from"./Tabs-v-cmVc6Z.js";import{B as T}from"./Badge-Cyoi2Itd.js";import{T as A}from"./Tag-iXJrEwp9.js";import{A as w}from"./Avatar-2B6o_Sxh.js";import{B as r}from"./Button-Cyi0h7uy.js";import{c as d,t as j,l as W,b as L,a as F}from"./banking-cGtNb0OW.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const V={title:"Pages/Accounts",parameters:{layout:"fullscreen"}},b=({activeItem:e="Accounts"})=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"BRUDDLE"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:L.map(t=>{const i=t.label===e;return n.jsxs("a",{href:t.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:i?"rgba(99,29,237,0.08)":"transparent",borderLeft:i?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:t.iconSvg}}),n.jsx("span",{children:t.label}),t.badge&&n.jsx(T,{variant:"filled",className:"drp-badge--filled",children:t.badge})]},t.label)})}),n.jsxs("div",{style:{marginTop:"24px"},children:[n.jsx("p",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontFamily:"var(--drp-font-primary)",fontWeight:700,marginBottom:"8px",padding:"0 12px"},children:"Cards"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[n.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{style:{width:8,height:8,background:"#631DED",display:"inline-block"}}),"Debit Card **** 7890"]}),n.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{style:{width:8,height:8,background:"#FF6C01",display:"inline-block"}}),"Credit Card **** 4340"]}),n.jsx("a",{href:"#",style:{padding:"8px 12px",textDecoration:"none",color:"var(--drp-purple)",fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"+ Open a card"})]})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx("p",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontFamily:"var(--drp-font-primary)",fontWeight:700,marginBottom:"8px",padding:"0 12px"},children:"Balances"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[F.map(t=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{children:t.flag}),n.jsx("span",{style:{fontWeight:600},children:t.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}),n.jsx("span",{style:{color:"#999"},children:t.currency})]},t.currency)),n.jsx("a",{href:"#",style:{padding:"8px 12px",textDecoration:"none",color:"var(--drp-purple)",fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"+ Open a balance"})]})]}),n.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"center",gap:"10px",padding:"12px",borderTop:"1px solid rgba(0,0,0,0.1)"},children:[n.jsx(w,{size:"sm",initials:"HR"}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"Henry Richardson"}),n.jsx("div",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"11px",color:"#999"},children:"Personal account"})]})]})]}),S=({title:e})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:e}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"6px",display:"flex",alignItems:"center"},children:n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("line",{x1:"14",y1:"14",x2:"18",y2:"18"})]})}),n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"6px",display:"flex",alignItems:"center"},children:n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 8a6 6 0 0 1 12 0c0 3 1.5 5 2 6H2c.5-1 2-3 2-6z"}),n.jsx("path",{d:"M8 16a2 2 0 0 0 4 0"})]})}),n.jsx(r,{variant:"outline",size:"sm",children:"Apps"}),n.jsx(r,{variant:"primary",size:"sm",children:"Create new"})]})]}),z=({card:e,large:t=!1})=>n.jsxs("div",{style:{background:e.color,color:"#fff",padding:t?"28px 32px":"20px 24px",width:t?"380px":"320px",minHeight:t?"220px":"180px",display:"flex",flexDirection:"column",justifyContent:"space-between",fontFamily:"var(--drp-font-primary)",border:"2px solid var(--drp-black)",position:"relative"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsx("span",{style:{fontSize:"12px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.8},children:e.type==="debit"?"Debit":"Credit"}),n.jsx("span",{style:{fontSize:"11px",opacity:.7},children:"BRUDDLE"})]}),n.jsx("div",{style:{fontSize:t?"18px":"16px",letterSpacing:"0.15em",fontWeight:600},children:e.number}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"10px",opacity:.7,marginBottom:"2px"},children:"Card Holder"}),n.jsx("div",{style:{fontSize:"13px",fontWeight:600},children:e.holder})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{fontSize:"10px",opacity:.7,marginBottom:"2px"},children:"Valid Thru"}),n.jsx("div",{style:{fontSize:"13px",fontWeight:600},children:e.valid})]}),n.jsxs("div",{style:{display:"flex",gap:"-6px",position:"relative"},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.6)"}}),n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.35)",marginLeft:"-10px"}})]})]})]}),B=()=>n.jsxs("div",{style:{width:"280px",minWidth:"280px",borderLeft:"2px solid var(--drp-black)",padding:"24px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"24px",margin:"0 0 24px"},children:"Your limits"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:W.map(e=>{const t=Math.round(e.spent/e.total*100),i=e.total-e.spent;return n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"8px"},children:e.label}),n.jsx("div",{style:{height:"8px",background:"rgba(0,0,0,0.08)",border:"1px solid rgba(0,0,0,0.1)",position:"relative",overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",width:`${t}%`,background:e.color}})}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"4px",fontSize:"11px",color:"#666"},children:[n.jsxs("span",{children:["Spent $",e.spent.toLocaleString()]}),n.jsxs("span",{children:["Left $",i.toLocaleString()]})]})]},e.label)})}),n.jsx(r,{variant:"primary",block:!0,style:{marginTop:"24px"},children:"Setup limits"})]}),k=({tx:e})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 0",borderBottom:"1px solid rgba(0,0,0,0.06)",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("div",{style:{width:36,height:36,background:e.iconBg,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"14px",flexShrink:0},children:e.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.description}),n.jsx("div",{style:{fontSize:"11px",color:"#999"},children:e.type})]}),n.jsxs("div",{style:{textAlign:"right",minWidth:"90px"},children:[n.jsxs("div",{style:{fontSize:"13px",fontWeight:700,color:e.amount>0?"#00AA00":"inherit"},children:[e.amount>0?"+":"",e.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ","USD"]}),n.jsx("div",{style:{fontSize:"11px",color:"#999"},children:e.date})]}),n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",color:"#999",padding:"4px 8px"},children:"..."})]}),o={name:"List v.1",render:()=>{const e=d[0],t=[{name:"Savings Deposit",rate:"4.5%",term:"12 months",amount:"$15,000"},{name:"Fixed Deposit",rate:"5.2%",term:"24 months",amount:"$25,000"},{name:"Flexible Deposit",rate:"3.8%",term:"6 months",amount:"$8,500"}];return n.jsx("div",{style:{height:"100vh"},children:n.jsx(g,{sidebar:n.jsx(u,{children:n.jsx(b,{activeItem:"Accounts"})}),topbar:n.jsx(v,{children:n.jsx(S,{title:"Accounts"})}),children:n.jsxs("div",{style:{display:"flex",height:"100%"},children:[n.jsxs("div",{style:{flex:1,padding:"24px",overflow:"auto"},children:[n.jsxs(a,{children:[n.jsx(s,{title:"Your cards",action:n.jsx(D,{items:[{label:"Overview",key:"overview"},{label:"Currency",key:"currency"},{label:"Statement",key:"statement"}]})}),n.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start",padding:"16px 0"},children:[n.jsx(z,{card:e}),n.jsxs("div",{style:{flex:1,fontFamily:"var(--drp-font-primary)"},children:[n.jsxs("div",{style:{fontSize:"28px",fontWeight:700,marginBottom:"4px"},children:[e.balance.toLocaleString()," USD"]}),n.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"16px"},children:"Available amount"}),n.jsx("div",{style:{fontSize:"13px",color:"#666",marginBottom:"4px"},children:"Account number"}),n.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"16px",letterSpacing:"0.05em"},children:e.number}),n.jsx(r,{variant:"outline",size:"sm",children:"Get card details"})]})]}),n.jsx("div",{style:{display:"flex",gap:"6px",justifyContent:"center",padding:"8px 0"},children:d.map((i,p)=>n.jsx("div",{style:{width:p===0?20:8,height:8,background:p===0?"var(--drp-purple)":"rgba(0,0,0,0.15)"}},i.id))})]}),n.jsxs(a,{style:{marginTop:"16px"},children:[n.jsx(s,{title:"Latest transfers"}),n.jsx("div",{children:j.slice(0,6).map(i=>n.jsx(k,{tx:i},i.id))})]}),n.jsxs(a,{style:{marginTop:"16px"},children:[n.jsx(s,{title:"Your deposits"}),n.jsx(C,{columns:[{key:"name",header:"Deposit"},{key:"rate",header:"Interest Rate"},{key:"term",header:"Term"},{key:"amount",header:"Amount"}],data:t})]})]}),n.jsx(B,{})]})})})}},l={name:"List v.2",render:()=>{const e=d[0];return n.jsx("div",{style:{height:"100vh"},children:n.jsx(g,{sidebar:n.jsx(u,{children:n.jsx(b,{activeItem:"Accounts"})}),topbar:n.jsx(v,{children:n.jsx(S,{title:"Accounts"})}),children:n.jsxs("div",{style:{display:"flex",height:"100%"},children:[n.jsxs("div",{style:{flex:1,padding:"24px",overflow:"auto"},children:[n.jsxs(a,{children:[n.jsx(s,{title:"Card Details"}),n.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-start",padding:"16px 0"},children:[n.jsx(z,{card:e,large:!0}),n.jsxs("div",{style:{flex:1,fontFamily:"var(--drp-font-primary)"},children:[n.jsxs("div",{style:{fontSize:"32px",fontWeight:700,marginBottom:"4px"},children:[e.balance.toLocaleString()," USD"]}),n.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"20px"},children:"Available amount"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"20px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"2px"},children:"Card Number"}),n.jsx("div",{style:{fontSize:"14px",fontWeight:600,letterSpacing:"0.05em"},children:e.number})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"2px"},children:"Status"}),n.jsx(A,{color:"mint",filled:!0,children:e.status})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"2px"},children:"Blocked Amount"}),n.jsxs("div",{style:{fontSize:"14px",fontWeight:600},children:["$",e.blockedAmount.toLocaleString()]})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"2px"},children:"Valid Thru"}),n.jsx("div",{style:{fontSize:"14px",fontWeight:600},children:e.valid})]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(r,{variant:"primary",size:"sm",children:"Get card details"}),n.jsx(r,{variant:"outline",size:"sm",children:"Block card"})]})]})]})]}),n.jsxs(a,{style:{marginTop:"16px"},children:[n.jsx(s,{title:"Latest transfers"}),n.jsx("div",{children:j.slice(0,8).map(t=>n.jsx(k,{tx:t},t.id))})]})]}),n.jsx(B,{})]})})})}};var x,c,m;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "List v.1",
  render: () => {
    const card = cards[0];
    const depositData = [{
      name: "Savings Deposit",
      rate: "4.5%",
      term: "12 months",
      amount: "$15,000"
    }, {
      name: "Fixed Deposit",
      rate: "5.2%",
      term: "24 months",
      amount: "$25,000"
    }, {
      name: "Flexible Deposit",
      rate: "3.8%",
      term: "6 months",
      amount: "$8,500"
    }];
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeItem="Accounts" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Accounts" />
            </Topbar>}>
          <div style={{
          display: "flex",
          height: "100%"
        }}>
            {/* Main content */}
            <div style={{
            flex: 1,
            padding: "24px",
            overflow: "auto"
          }}>
              {/* Your cards section */}
              <Card>
                <CardHeader title="Your cards" action={<Tabs items={[{
                label: "Overview",
                key: "overview"
              }, {
                label: "Currency",
                key: "currency"
              }, {
                label: "Statement",
                key: "statement"
              }]} />} />
                <div style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "16px 0"
              }}>
                  {/* Credit card display */}
                  <CreditCardDisplay card={card} />
                  {/* Card details alongside */}
                  <div style={{
                  flex: 1,
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    <div style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    marginBottom: "4px"
                  }}>
                      {card.balance.toLocaleString()} USD
                    </div>
                    <div style={{
                    fontSize: "12px",
                    color: "#999",
                    marginBottom: "16px"
                  }}>
                      Available amount
                    </div>
                    <div style={{
                    fontSize: "13px",
                    color: "#666",
                    marginBottom: "4px"
                  }}>
                      Account number
                    </div>
                    <div style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "16px",
                    letterSpacing: "0.05em"
                  }}>
                      {card.number}
                    </div>
                    <Button variant="outline" size="sm">
                      Get card details
                    </Button>
                  </div>
                </div>
                {/* Dot pagination */}
                <div style={{
                display: "flex",
                gap: "6px",
                justifyContent: "center",
                padding: "8px 0"
              }}>
                  {cards.map((c, i) => <div key={c.id} style={{
                  width: i === 0 ? 20 : 8,
                  height: 8,
                  background: i === 0 ? "var(--drp-purple)" : "rgba(0,0,0,0.15)"
                }} />)}
                </div>
              </Card>

              {/* Latest transfers */}
              <Card style={{
              marginTop: "16px"
            }}>
                <CardHeader title="Latest transfers" />
                <div>
                  {transactions.slice(0, 6).map(tx => <TransferRow key={tx.id} tx={tx} />)}
                </div>
              </Card>

              {/* Your deposits */}
              <Card style={{
              marginTop: "16px"
            }}>
                <CardHeader title="Your deposits" />
                <Table columns={[{
                key: "name",
                header: "Deposit"
              }, {
                key: "rate",
                header: "Interest Rate"
              }, {
                key: "term",
                header: "Term"
              }, {
                key: "amount",
                header: "Amount"
              }]} data={depositData} />
              </Card>
            </div>

            {/* Right sidebar panel */}
            <LimitsPanel />
          </div>
        </AppShell>
      </div>;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,f,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "List v.2",
  render: () => {
    const card = cards[0];
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeItem="Accounts" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Accounts" />
            </Topbar>}>
          <div style={{
          display: "flex",
          height: "100%"
        }}>
            {/* Main content */}
            <div style={{
            flex: 1,
            padding: "24px",
            overflow: "auto"
          }}>
              {/* Large card display with details */}
              <Card>
                <CardHeader title="Card Details" />
                <div style={{
                display: "flex",
                gap: "32px",
                alignItems: "flex-start",
                padding: "16px 0"
              }}>
                  <CreditCardDisplay card={card} large />
                  <div style={{
                  flex: 1,
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    <div style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    marginBottom: "4px"
                  }}>
                      {card.balance.toLocaleString()} USD
                    </div>
                    <div style={{
                    fontSize: "12px",
                    color: "#999",
                    marginBottom: "20px"
                  }}>
                      Available amount
                    </div>
                    <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "20px"
                  }}>
                      <div>
                        <div style={{
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "2px"
                      }}>
                          Card Number
                        </div>
                        <div style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.05em"
                      }}>
                          {card.number}
                        </div>
                      </div>
                      <div>
                        <div style={{
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "2px"
                      }}>
                          Status
                        </div>
                        <Tag color="mint" filled>
                          {card.status}
                        </Tag>
                      </div>
                      <div>
                        <div style={{
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "2px"
                      }}>
                          Blocked Amount
                        </div>
                        <div style={{
                        fontSize: "14px",
                        fontWeight: 600
                      }}>
                          \${card.blockedAmount.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div style={{
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "2px"
                      }}>
                          Valid Thru
                        </div>
                        <div style={{
                        fontSize: "14px",
                        fontWeight: 600
                      }}>
                          {card.valid}
                        </div>
                      </div>
                    </div>
                    <div style={{
                    display: "flex",
                    gap: "8px"
                  }}>
                      <Button variant="primary" size="sm">
                        Get card details
                      </Button>
                      <Button variant="outline" size="sm">
                        Block card
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Latest transfers */}
              <Card style={{
              marginTop: "16px"
            }}>
                <CardHeader title="Latest transfers" />
                <div>
                  {transactions.slice(0, 8).map(tx => <TransferRow key={tx.id} tx={tx} />)}
                </div>
              </Card>
            </div>

            {/* Right sidebar panel */}
            <LimitsPanel />
          </div>
        </AppShell>
      </div>;
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const q=["AccountsList","AccountsDetail"];export{l as AccountsDetail,o as AccountsList,q as __namedExportsOrder,V as default};
