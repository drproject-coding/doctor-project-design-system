import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-ZH-6pyQh.js";import{A as c,T as x,S as y}from"./Layout-5qMifhuW.js";import{C as h,a as N}from"./Card-CZSjc6Mh.js";import{T as v}from"./Table-BJFi9Akg.js";import{T as I}from"./Tabs-v-cmVc6Z.js";import{B as U}from"./Badge-Cyoi2Itd.js";import{T as W}from"./Tag-iXJrEwp9.js";import{A as E}from"./Avatar-2B6o_Sxh.js";import{B as r}from"./Button-Cyi0h7uy.js";import{M as L}from"./Modal-DnCwwVl1.js";import{E as R}from"./EmptyState-CQ7aMGqh.js";import{t as u,b as G,a as O}from"./banking-cGtNb0OW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const sn={title:"Pages/Transactions",parameters:{layout:"fullscreen"}},m=({activeItem:a="Transactions"})=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"BRUDDLE"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:G.map(t=>{const i=t.label===a;return n.jsxs("a",{href:t.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:i?"rgba(99,29,237,0.08)":"transparent",borderLeft:i?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:t.iconSvg}}),n.jsx("span",{children:t.label}),t.badge&&n.jsx(U,{variant:"filled",className:"drp-badge--filled",children:t.badge})]},t.label)})}),n.jsxs("div",{style:{marginTop:"24px"},children:[n.jsx("p",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontFamily:"var(--drp-font-primary)",fontWeight:700,marginBottom:"8px",padding:"0 12px"},children:"Cards"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[n.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{style:{width:8,height:8,background:"#631DED",display:"inline-block"}}),"Debit Card **** 7890"]}),n.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{style:{width:8,height:8,background:"#FF6C01",display:"inline-block"}}),"Credit Card **** 4340"]}),n.jsx("a",{href:"#",style:{padding:"8px 12px",textDecoration:"none",color:"var(--drp-purple)",fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"+ Open a card"})]})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx("p",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontFamily:"var(--drp-font-primary)",fontWeight:700,marginBottom:"8px",padding:"0 12px"},children:"Balances"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[O.map(t=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx("span",{children:t.flag}),n.jsx("span",{style:{fontWeight:600},children:t.amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}),n.jsx("span",{style:{color:"#999"},children:t.currency})]},t.currency)),n.jsx("a",{href:"#",style:{padding:"8px 12px",textDecoration:"none",color:"var(--drp-purple)",fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"+ Open a balance"})]})]}),n.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"center",gap:"10px",padding:"12px",borderTop:"1px solid rgba(0,0,0,0.1)"},children:[n.jsx(E,{size:"sm",initials:"HR"}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"13px",fontWeight:600},children:"Henry Richardson"}),n.jsx("div",{style:{fontFamily:"var(--drp-font-primary)",fontSize:"11px",color:"#999"},children:"Personal account"})]})]})]}),f=({title:a})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:a}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"6px",display:"flex",alignItems:"center"},children:n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("line",{x1:"14",y1:"14",x2:"18",y2:"18"})]})}),n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"6px",display:"flex",alignItems:"center"},children:n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 8a6 6 0 0 1 12 0c0 3 1.5 5 2 6H2c.5-1 2-3 2-6z"}),n.jsx("path",{d:"M8 16a2 2 0 0 0 4 0"})]})}),n.jsx(r,{variant:"outline",size:"sm",children:"Apps"}),n.jsx(r,{variant:"primary",size:"sm",children:"Create new"})]})]}),P=()=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M2 3h12M4 6.5h8M6 10h4M7 13.5h2"})}),M=()=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M8 2v9M4 8l4 4 4-4M2 13h12"})}),H=()=>n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M3 4l3-3 3 3M3 8l3 3 3-3"})}),o={name:"TransactionsList",render:()=>{const[a,t]=g.useState(1),i=10;return n.jsx("div",{style:{height:"100vh"},children:n.jsx(c,{sidebar:n.jsx(y,{children:n.jsx(m,{activeItem:"Transactions"})}),topbar:n.jsx(x,{children:n.jsx(f,{title:"Transactions"})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[n.jsx(I,{items:[{label:"All Accounts",key:"all"},{label:"USD Account",key:"usd"},{label:"EUR Account",key:"eur"},{label:"GBP Account",key:"gbp"}]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(r,{variant:"outline",size:"sm",iconLeft:n.jsx(P,{}),children:"Apply Filter"}),n.jsx(r,{variant:"outline",size:"sm",iconLeft:n.jsx(M,{}),children:"Export to CSV"})]})]}),n.jsxs(h,{children:[n.jsx(v,{columns:[{key:"dateTime",header:"Date & Time",render:e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("span",{style:{fontSize:"13px"},children:String(e.date)}),n.jsx("span",{style:{fontSize:"11px",color:"#999"},children:String(e.time)}),n.jsx(H,{})]})},{key:"payment",header:"Payment",render:e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("div",{style:{width:32,height:32,background:String(e.iconBg),color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"12px",flexShrink:0},children:String(e.icon)}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:String(e.description)})]})},{key:"type",header:"Service",render:e=>n.jsx("span",{style:{fontSize:"13px",color:"#666",fontFamily:"var(--drp-font-primary)"},children:String(e.type)})},{key:"fee",header:"Fee",render:e=>n.jsxs("span",{style:{fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:["$",Number(e.fee).toFixed(2)]})},{key:"amount",header:"Price",render:e=>{const s=Number(e.amount);return n.jsxs("span",{style:{fontSize:"13px",fontWeight:700,fontFamily:"var(--drp-font-primary)",color:s>0?"#00AA00":"inherit"},children:[s>0?"+":"",s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ","USD"]})}},{key:"actions",header:"",render:()=>n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",color:"#999",padding:"4px 8px"},children:"..."})}],data:u}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px",padding:"16px 0",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx(r,{variant:"outline",size:"sm",onClick:()=>t(e=>Math.max(1,e-1)),disabled:a===1,children:"Prev"}),n.jsxs("span",{style:{color:"#666"},children:["Page ",a," of ",i]}),n.jsx(r,{variant:"outline",size:"sm",onClick:()=>t(e=>Math.min(i,e+1)),disabled:a===i,children:"Next"})]})]})]})})})}},l={name:"TransactionsTable",render:()=>{const[a,t]=g.useState(1),i=10;return n.jsx("div",{style:{height:"100vh"},children:n.jsx(c,{sidebar:n.jsx(y,{children:n.jsx(m,{activeItem:"Transactions"})}),topbar:n.jsx(x,{children:n.jsx(f,{title:"Transactions"})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[n.jsx(I,{items:[{label:"All Accounts",key:"all"},{label:"USD Account",key:"usd"},{label:"EUR Account",key:"eur"},{label:"GBP Account",key:"gbp"}]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs(r,{variant:"outline",size:"sm",children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",style:{marginRight:"6px"},children:[n.jsx("rect",{x:"1",y:"2",width:"12",height:"11"}),n.jsx("line",{x1:"1",y1:"5",x2:"13",y2:"5"}),n.jsx("line",{x1:"4",y1:"0.5",x2:"4",y2:"3.5"}),n.jsx("line",{x1:"10",y1:"0.5",x2:"10",y2:"3.5"})]}),"August 2023"]}),n.jsx(r,{variant:"outline",size:"sm",iconLeft:n.jsx(P,{}),children:"Apply Filter"}),n.jsx(r,{variant:"outline",size:"sm",iconLeft:n.jsx(M,{}),children:"Export to CSV"})]})]}),n.jsxs(h,{children:[n.jsx(v,{columns:[{key:"dateTime",header:"Date & Time",render:e=>n.jsxs("div",{style:{fontFamily:"var(--drp-font-primary)"},children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600},children:String(e.date)}),n.jsx("div",{style:{fontSize:"11px",color:"#999"},children:String(e.time)})]})},{key:"payment",header:"Payment",render:e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("div",{style:{width:36,height:36,background:String(e.iconBg),color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"13px",flexShrink:0},children:String(e.icon)}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:String(e.description)}),n.jsx("div",{style:{fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:String(e.type)})]})]})},{key:"type",header:"Service",render:e=>n.jsx(W,{color:"grey",children:String(e.type)})},{key:"fee",header:"Fee",render:e=>n.jsxs("span",{style:{fontSize:"13px",fontFamily:"var(--drp-font-primary)",color:"#666"},children:["$",Number(e.fee).toFixed(2)]})},{key:"amount",header:"Price",render:e=>{const s=Number(e.amount);return n.jsx("div",{style:{textAlign:"right"},children:n.jsxs("span",{style:{fontSize:"13px",fontWeight:700,fontFamily:"var(--drp-font-primary)",color:s>0?"#00AA00":"inherit"},children:[s>0?"+":"",s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ","USD"]})})}},{key:"actions",header:"",render:()=>n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",color:"#999",padding:"4px 8px"},children:"..."})}],data:u}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px",padding:"16px 0",fontFamily:"var(--drp-font-primary)",fontSize:"13px"},children:[n.jsx(r,{variant:"outline",size:"sm",onClick:()=>t(e=>Math.max(1,e-1)),disabled:a===1,children:"Prev"}),n.jsxs("span",{style:{color:"#666"},children:["Page ",a," of ",i]}),n.jsx(r,{variant:"outline",size:"sm",onClick:()=>t(e=>Math.min(i,e+1)),disabled:a===i,children:"Next"})]})]})]})})})}},d={name:"TransactionInvoice",render:()=>{const[a,t]=g.useState(!0);return n.jsx("div",{style:{height:"100vh"},children:n.jsxs(c,{sidebar:n.jsx(y,{children:n.jsx(m,{activeItem:"Transactions"})}),topbar:n.jsx(x,{children:n.jsx(f,{title:"Transactions"})}),children:[n.jsx("div",{style:{padding:"24px"},children:n.jsxs(h,{children:[n.jsx(N,{title:"All Transactions"}),n.jsx(v,{columns:[{key:"dateTime",header:"Date & Time",render:i=>n.jsxs("span",{style:{fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:[String(i.date)," ",String(i.time)]})},{key:"description",header:"Payment",render:i=>n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:String(i.description)})},{key:"amount",header:"Price",render:i=>{const e=Number(i.amount);return n.jsxs("span",{style:{fontSize:"13px",fontWeight:700,fontFamily:"var(--drp-font-primary)",color:e>0?"#00AA00":"inherit"},children:[e>0?"+":"",e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ","USD"]})}}],data:u.slice(0,5)})]})}),n.jsx(L,{open:a,onClose:()=>t(!1),title:"Transaction details",footer:n.jsxs("div",{style:{display:"flex",gap:"8px",width:"100%"},children:[n.jsx(r,{variant:"outline",style:{flex:1},children:"Print"}),n.jsx(r,{variant:"outline",style:{flex:1},children:"Issue Refund"})]}),children:n.jsxs("div",{style:{fontFamily:"var(--drp-font-primary)"},children:[n.jsxs("div",{style:{background:"#631DED",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",margin:"-16px -16px 16px -16px"},children:[n.jsx("div",{style:{width:56,height:56,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"12px"},children:n.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",stroke:"#fff",strokeWidth:"2",children:n.jsx("path",{d:"M4 14l8 8L24 6"})})}),n.jsx("div",{style:{color:"#fff",fontSize:"24px",fontWeight:700,marginBottom:"4px"},children:"2,702.12 USD"}),n.jsx("div",{style:{color:"rgba(255,255,255,0.8)",fontSize:"14px"},children:"to James Dean"})]}),n.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"13px",color:"#666",marginBottom:"6px"},children:"Completed Thursday 29 April"}),n.jsx(W,{color:"mint",filled:!0,children:"Paid"})]}),n.jsxs("div",{style:{borderTop:"1px solid rgba(0,0,0,0.1)",paddingTop:"16px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontWeight:700,marginBottom:"8px"},children:"Send To"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"Name"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"James Dean"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"Email"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"james.dean@email.com"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"Amount"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"2,702.12 USD"})]})]}),n.jsxs("div",{style:{borderTop:"1px solid rgba(0,0,0,0.1)",paddingTop:"16px",marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",fontWeight:700,marginBottom:"8px"},children:"Bank Details"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"IBAN"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"GB29 NWBK 6016 1331 9268 19"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"SWIFT code"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"NWBKGB2L"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"Transfer number"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"#TXN-2023-04-29-001"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#666"},children:"Exchange Rate"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600},children:"1 USD = 0.82 GBP"})]})]})]})]})})]})})}},p={name:"TransactionsEmpty",render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(c,{sidebar:n.jsx(y,{children:n.jsx(m,{activeItem:"Transactions"})}),topbar:n.jsx(x,{children:n.jsx(f,{title:"Transactions"})}),children:n.jsx("div",{style:{padding:"24px",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 80px)"},children:n.jsx(R,{title:"No transactions found?",description:"You don't have any transactions yet. Create a new account to get started with your first transaction.",action:n.jsx(r,{variant:"primary",children:"Create a new account"})})})})})};var S,j,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "TransactionsList",
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Tabs and actions row */}
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px"
          }}>
              <Tabs items={[{
              label: "All Accounts",
              key: "all"
            }, {
              label: "USD Account",
              key: "usd"
            }, {
              label: "EUR Account",
              key: "eur"
            }, {
              label: "GBP Account",
              key: "gbp"
            }]} />
              <div style={{
              display: "flex",
              gap: "8px"
            }}>
                <Button variant="outline" size="sm" iconLeft={<FilterIcon />}>
                  Apply Filter
                </Button>
                <Button variant="outline" size="sm" iconLeft={<DownloadIcon />}>
                  Export to CSV
                </Button>
              </div>
            </div>

            {/* Transactions table */}
            <Card>
              <Table columns={[{
              key: "dateTime",
              header: "Date & Time",
              render: row => <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--drp-font-primary)"
              }}>
                        <span style={{
                  fontSize: "13px"
                }}>
                          {String(row.date)}
                        </span>
                        <span style={{
                  fontSize: "11px",
                  color: "#999"
                }}>
                          {String(row.time)}
                        </span>
                        <SortIcon />
                      </div>
            }, {
              key: "payment",
              header: "Payment",
              render: row => <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                        <div style={{
                  width: 32,
                  height: 32,
                  background: String(row.iconBg),
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "12px",
                  flexShrink: 0
                }}>
                          {String(row.icon)}
                        </div>
                        <span style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--drp-font-primary)"
                }}>
                          {String(row.description)}
                        </span>
                      </div>
            }, {
              key: "type",
              header: "Service",
              render: row => <span style={{
                fontSize: "13px",
                color: "#666",
                fontFamily: "var(--drp-font-primary)"
              }}>
                        {String(row.type)}
                      </span>
            }, {
              key: "fee",
              header: "Fee",
              render: row => <span style={{
                fontSize: "13px",
                fontFamily: "var(--drp-font-primary)"
              }}>
                        \${Number(row.fee).toFixed(2)}
                      </span>
            }, {
              key: "amount",
              header: "Price",
              render: row => {
                const amt = Number(row.amount);
                return <span style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  color: amt > 0 ? "#00AA00" : "inherit"
                }}>
                          {amt > 0 ? "+" : ""}
                          {amt.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}{" "}
                          USD
                        </span>;
              }
            }, {
              key: "actions",
              header: "",
              render: () => <button style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#999",
                padding: "4px 8px"
              }}>
                        ...
                      </button>
            }]} data={transactions} />

              {/* Pagination */}
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "16px 0",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "13px"
            }}>
                <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                  Prev
                </Button>
                <span style={{
                color: "#666"
              }}>
                  Page {page} of {totalPages}
                </span>
                <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>;
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var T,z,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "TransactionsTable",
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Tabs and actions row */}
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px"
          }}>
              <Tabs items={[{
              label: "All Accounts",
              key: "all"
            }, {
              label: "USD Account",
              key: "usd"
            }, {
              label: "EUR Account",
              key: "eur"
            }, {
              label: "GBP Account",
              key: "gbp"
            }]} />
              <div style={{
              display: "flex",
              gap: "8px"
            }}>
                {/* Date range picker */}
                <Button variant="outline" size="sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" style={{
                  marginRight: "6px"
                }}>
                    <rect x="1" y="2" width="12" height="11" />
                    <line x1="1" y1="5" x2="13" y2="5" />
                    <line x1="4" y1="0.5" x2="4" y2="3.5" />
                    <line x1="10" y1="0.5" x2="10" y2="3.5" />
                  </svg>
                  August 2023
                </Button>
                <Button variant="outline" size="sm" iconLeft={<FilterIcon />}>
                  Apply Filter
                </Button>
                <Button variant="outline" size="sm" iconLeft={<DownloadIcon />}>
                  Export to CSV
                </Button>
              </div>
            </div>

            {/* Detailed transactions table */}
            <Card>
              <Table columns={[{
              key: "dateTime",
              header: "Date & Time",
              render: row => <div style={{
                fontFamily: "var(--drp-font-primary)"
              }}>
                        <div style={{
                  fontSize: "13px",
                  fontWeight: 600
                }}>
                          {String(row.date)}
                        </div>
                        <div style={{
                  fontSize: "11px",
                  color: "#999"
                }}>
                          {String(row.time)}
                        </div>
                      </div>
            }, {
              key: "payment",
              header: "Payment",
              render: row => <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                        <div style={{
                  width: 36,
                  height: 36,
                  background: String(row.iconBg),
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "13px",
                  flexShrink: 0
                }}>
                          {String(row.icon)}
                        </div>
                        <div>
                          <div style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                            {String(row.description)}
                          </div>
                          <div style={{
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                            {String(row.type)}
                          </div>
                        </div>
                      </div>
            }, {
              key: "type",
              header: "Service",
              render: row => <Tag color="grey">{String(row.type)}</Tag>
            }, {
              key: "fee",
              header: "Fee",
              render: row => <span style={{
                fontSize: "13px",
                fontFamily: "var(--drp-font-primary)",
                color: "#666"
              }}>
                        \${Number(row.fee).toFixed(2)}
                      </span>
            }, {
              key: "amount",
              header: "Price",
              render: row => {
                const amt = Number(row.amount);
                return <div style={{
                  textAlign: "right"
                }}>
                          <span style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    fontFamily: "var(--drp-font-primary)",
                    color: amt > 0 ? "#00AA00" : "inherit"
                  }}>
                            {amt > 0 ? "+" : ""}
                            {amt.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}{" "}
                            USD
                          </span>
                        </div>;
              }
            }, {
              key: "actions",
              header: "",
              render: () => <button style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#999",
                padding: "4px 8px"
              }}>
                        ...
                      </button>
            }]} data={transactions} />

              {/* Pagination */}
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "16px 0",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "13px"
            }}>
                <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                  Prev
                </Button>
                <span style={{
                color: "#666"
              }}>
                  Page {page} of {totalPages}
                </span>
                <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>;
  }
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var B,w,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "TransactionInvoice",
  render: () => {
    const [modalOpen, setModalOpen] = useState(true);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>} topbar={<Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Transaction list in background */}
            <Card>
              <CardHeader title="All Transactions" />
              <Table columns={[{
              key: "dateTime",
              header: "Date & Time",
              render: row => <span style={{
                fontSize: "13px",
                fontFamily: "var(--drp-font-primary)"
              }}>
                        {String(row.date)} {String(row.time)}
                      </span>
            }, {
              key: "description",
              header: "Payment",
              render: row => <span style={{
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "var(--drp-font-primary)"
              }}>
                        {String(row.description)}
                      </span>
            }, {
              key: "amount",
              header: "Price",
              render: row => {
                const amt = Number(row.amount);
                return <span style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  color: amt > 0 ? "#00AA00" : "inherit"
                }}>
                          {amt > 0 ? "+" : ""}
                          {amt.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}{" "}
                          USD
                        </span>;
              }
            }]} data={transactions.slice(0, 5)} />
            </Card>
          </div>

          {/* Modal overlay */}
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Transaction details" footer={<div style={{
          display: "flex",
          gap: "8px",
          width: "100%"
        }}>
                <Button variant="outline" style={{
            flex: 1
          }}>
                  Print
                </Button>
                <Button variant="outline" style={{
            flex: 1
          }}>
                  Issue Refund
                </Button>
              </div>}>
            <div style={{
            fontFamily: "var(--drp-font-primary)"
          }}>
              {/* Purple header area */}
              <div style={{
              background: "#631DED",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "-16px -16px 16px -16px"
            }}>
                <div style={{
                width: 56,
                height: 56,
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px"
              }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M4 14l8 8L24 6" />
                  </svg>
                </div>
                <div style={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "4px"
              }}>
                  2,702.12 USD
                </div>
                <div style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px"
              }}>
                  to James Dean
                </div>
              </div>

              {/* Completion status */}
              <div style={{
              textAlign: "center",
              marginBottom: "16px"
            }}>
                <div style={{
                fontSize: "13px",
                color: "#666",
                marginBottom: "6px"
              }}>
                  Completed Thursday 29 April
                </div>
                <Tag color="mint" filled>
                  Paid
                </Tag>
              </div>

              {/* Details sections */}
              <div style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              paddingTop: "16px"
            }}>
                <div style={{
                marginBottom: "16px"
              }}>
                  <div style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#999",
                  fontWeight: 700,
                  marginBottom: "8px"
                }}>
                    Send To
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      Name
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      James Dean
                    </span>
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      Email
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      james.dean@email.com
                    </span>
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      Amount
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      2,702.12 USD
                    </span>
                  </div>
                </div>

                <div style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                paddingTop: "16px",
                marginBottom: "16px"
              }}>
                  <div style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#999",
                  fontWeight: 700,
                  marginBottom: "8px"
                }}>
                    Bank Details
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      IBAN
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      GB29 NWBK 6016 1331 9268 19
                    </span>
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      SWIFT code
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      NWBKGB2L
                    </span>
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      Transfer number
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      #TXN-2023-04-29-001
                    </span>
                  </div>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                    <span style={{
                    fontSize: "13px",
                    color: "#666"
                  }}>
                      Exchange Rate
                    </span>
                    <span style={{
                    fontSize: "13px",
                    fontWeight: 600
                  }}>
                      1 USD = 0.82 GBP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </AppShell>
      </div>;
  }
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,D,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "TransactionsEmpty",
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <BankingSidebar activeItem="Transactions" />
          </Sidebar>} topbar={<Topbar>
            <BankingTopbar title="Transactions" />
          </Topbar>}>
        <div style={{
        padding: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 80px)"
      }}>
          <EmptyState title="No transactions found?" description="You don't have any transactions yet. Create a new account to get started with your first transaction." action={<Button variant="primary">Create a new account</Button>} />
        </div>
      </AppShell>
    </div>
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const on=["TransactionsList","TransactionsTable","TransactionInvoice","TransactionsEmpty"];export{d as TransactionInvoice,p as TransactionsEmpty,o as TransactionsList,l as TransactionsTable,on as __namedExportsOrder,sn as default};
