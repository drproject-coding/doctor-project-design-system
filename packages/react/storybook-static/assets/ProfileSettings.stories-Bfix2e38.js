import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as f,T as y,S as m}from"./Layout-5qMifhuW.js";import{C as s,a as g}from"./Card-CZSjc6Mh.js";import{B as r}from"./Badge-Cyoi2Itd.js";import{A as h}from"./Avatar-2B6o_Sxh.js";import{T as v}from"./Tag-iXJrEwp9.js";import{S as j}from"./Switch-DlPq5zAg.js";import{B as a}from"./Button-Cyi0h7uy.js";import{D as o}from"./Divider-CW9MvvMP.js";import{b as u,a as S}from"./banking-cGtNb0OW.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const E={title:"Pages/Profile Settings",parameters:{layout:"fullscreen"}},b=({activeLabel:t=""})=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Bruddle"}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"0 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Navigation"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:u.map(e=>{const l=e.label===t;return n.jsxs("a",{href:e.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:l?"rgba(99,29,237,0.08)":"transparent",borderLeft:l?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:e.iconSvg}}),n.jsx("span",{children:e.label}),e.badge&&n.jsx(r,{variant:"filled",className:"drp-badge--filled",children:e.badge})]},e.label)})}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"24px 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Cards"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"0 12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("span",{style:{width:8,height:8,background:"#631DED",display:"inline-block"}}),"Debit Card **** 7890"]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontFamily:"var(--drp-font-primary)"},children:[n.jsx("span",{style:{width:8,height:8,background:"#FF6C01",display:"inline-block"}}),"Credit Card **** 4340"]}),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",textDecoration:"none",fontWeight:600,fontFamily:"var(--drp-font-primary)",marginTop:"4px"},children:"+ Open a card"})]}),n.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.06em",margin:"24px 0 8px 12px",fontFamily:"var(--drp-font-primary)"},children:"Balances"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"0 12px"},children:[S.map(e=>n.jsxs("div",{style:{fontSize:"13px",fontFamily:"var(--drp-font-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:e.flag}),n.jsxs("span",{children:[e.amount.toLocaleString("en-US",{minimumFractionDigits:2})," ",e.currency]})]},e.currency)),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",textDecoration:"none",fontWeight:600,fontFamily:"var(--drp-font-primary)",marginTop:"4px"},children:"+ Open a balance"})]}),n.jsxs("div",{style:{marginTop:"auto",padding:"16px 12px 0",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(h,{size:"sm",initials:"HR"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:"Henry Richardson"})]})]}),k=({title:t})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:t}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"9",r:"6"}),n.jsx("line",{x1:"14",y1:"14",x2:"18",y2:"18"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10 2a6 6 0 016 6v3l2 2H2l2-2V8a6 6 0 016-6z"}),n.jsx("path",{d:"M8 17a2 2 0 004 0"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M7 1L8.7 5.2H13L9.5 7.8L10.8 12L7 9.4L3.2 12L4.5 7.8L1 5.2H5.3L7 1Z",fill:"currentColor"})}),"Apps"]}),n.jsx(a,{variant:"primary",size:"sm",children:"+ Create new"})]})]}),F=()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px",fontFamily:"var(--drp-font-primary)",fontSize:"12px",color:"#999"},children:[n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"English"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"Privacy Policy"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"License"}),n.jsx("a",{href:"#",style:{color:"#999",textDecoration:"none"},children:"API"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"#999",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"8",cy:"8",r:"3"}),n.jsx("path",{d:"M8 1v2m0 10v2m-5-7H1m14 0h-2m-1.3-4.7l1.4-1.4M3.9 12.1l-1.4 1.4m0-11l1.4 1.4m8.2 8.2l1.4 1.4"})]}),n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"#999",strokeWidth:"1.5",children:n.jsx("path",{d:"M14 8.5A6 6 0 117.5 2a4.5 4.5 0 006.5 6.5z"})})]})]}),p=[{key:"product-updates",label:"Product updates",description:"Receive messages from our platform",defaultChecked:!0},{key:"reminders",label:"Reminders",description:"Receive notifications about upcoming events and deadlines",defaultChecked:!0},{key:"promotions",label:"Promotions and tips",description:"Receive coupons, promotions, and money-saving tips",defaultChecked:!1},{key:"policy",label:"Policy and community",description:"Receive updates about our policies and community guidelines",defaultChecked:!1},{key:"account-support",label:"Account support",description:"Receive notifications about your account activity and security",defaultChecked:!0}],C=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"#00AA00",strokeWidth:"2",children:[n.jsx("polyline",{points:"1,10 5,6 8,8 13,3"}),n.jsx("polyline",{points:"9,3 13,3 13,7"})]}),w=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"#FF4444",strokeWidth:"2",children:[n.jsx("polyline",{points:"1,4 5,8 8,6 13,11"}),n.jsx("polyline",{points:"9,11 13,11 13,7"})]}),i={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(f,{sidebar:n.jsx(m,{children:n.jsx(b,{activeLabel:""})}),topbar:n.jsx(y,{children:n.jsx(k,{title:"Profile Settings"})}),footer:n.jsx(F,{}),children:n.jsxs("div",{style:{padding:"24px",display:"grid",gridTemplateColumns:"280px 1fr",gap:"24px",alignItems:"start"},children:[n.jsxs(s,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[n.jsx("div",{style:{width:"80px",height:"80px",background:"var(--drp-purple)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"28px",fontFamily:"var(--drp-font-primary)",border:"2px solid var(--drp-black)",marginBottom:"16px"},children:"LE"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:"20px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:"Laquita Elliott"}),n.jsx("p",{style:{margin:"0 0 12px",fontSize:"14px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:"elliott.laquita@gmail.com"}),n.jsx("p",{style:{margin:"0 0 16px",fontSize:"13px",color:"#666",fontFamily:"var(--drp-font-primary)",lineHeight:"1.5"},children:"Happiness is not something readymade. It comes from your own actions."}),n.jsx(v,{color:"purple",children:"Designer"})]}),n.jsx("div",{style:{margin:"20px 0"},children:n.jsx(o,{})}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"22px",fontWeight:800,fontFamily:"var(--drp-font-primary)"},children:"296"}),n.jsx(r,{variant:"pink",children:"-8"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:"New tasks"}),n.jsx(w,{})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"22px",fontWeight:800,fontFamily:"var(--drp-font-primary)"},children:"18"}),n.jsx(r,{variant:"mint",children:"5"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:"Followers"}),n.jsx(C,{})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:"22px",fontWeight:800,fontFamily:"var(--drp-font-primary)"},children:"$36"}),n.jsx("span",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:"Hourly rate"})]})]})]}),n.jsxs(s,{children:[n.jsx("div",{style:{borderBottom:"3px solid var(--drp-black)",paddingBottom:"16px",marginBottom:"20px"},children:n.jsx(g,{title:"Notifications"})}),n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:p.map((t,e)=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 2px",fontSize:"11px",fontWeight:600,color:"#999",textTransform:"uppercase",letterSpacing:"0.04em",fontFamily:"var(--drp-font-primary)"},children:t.label}),n.jsx("p",{style:{margin:0,fontSize:"14px",fontFamily:"var(--drp-font-primary)",color:"#333"},children:t.description})]}),n.jsx(j,{defaultChecked:t.defaultChecked})]}),e<p.length-1&&n.jsx(o,{})]},t.key))}),n.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"24px",justifyContent:"flex-end"},children:[n.jsx(a,{variant:"outline",children:"Reset Changes"}),n.jsx(a,{variant:"primary",children:"Update Settings"})]})]})]})})})};var d,c,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <BankingSidebar activeLabel="" />
          </Sidebar>} topbar={<Topbar>
            <BankingTopbar title="Profile Settings" />
          </Topbar>} footer={<BankingFooter />}>
        <div style={{
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "24px",
        alignItems: "start"
      }}>
          {/* Left sidebar - Profile card */}
          <Card>
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}>
              {/* Large avatar */}
              <div style={{
              width: "80px",
              height: "80px",
              background: "var(--drp-purple)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "28px",
              fontFamily: "var(--drp-font-primary)",
              border: "2px solid var(--drp-black)",
              marginBottom: "16px"
            }}>
                LE
              </div>

              <p style={{
              margin: "0 0 4px",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)"
            }}>
                Laquita Elliott
              </p>
              <p style={{
              margin: "0 0 12px",
              fontSize: "14px",
              color: "#999",
              fontFamily: "var(--drp-font-primary)"
            }}>
                elliott.laquita@gmail.com
              </p>
              <p style={{
              margin: "0 0 16px",
              fontSize: "13px",
              color: "#666",
              fontFamily: "var(--drp-font-primary)",
              lineHeight: "1.5"
            }}>
                Happiness is not something readymade. It comes from your own
                actions.
              </p>
              <Tag color="purple">Designer</Tag>
            </div>

            <div style={{
            margin: "20px 0"
          }}>
              <Divider />
            </div>

            {/* Stats */}
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
              {/* Tasks stat */}
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                  <span style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    296
                  </span>
                  <Badge variant="pink">-8</Badge>
                </div>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                  <span style={{
                  fontSize: "12px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    New tasks
                  </span>
                  <TrendDownIcon />
                </div>
              </div>

              {/* Followers stat */}
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                  <span style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    18
                  </span>
                  <Badge variant="mint">5</Badge>
                </div>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                  <span style={{
                  fontSize: "12px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)"
                }}>
                    Followers
                  </span>
                  <TrendUpIcon />
                </div>
              </div>

              {/* Hourly rate stat */}
              <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
                <span style={{
                fontSize: "22px",
                fontWeight: 800,
                fontFamily: "var(--drp-font-primary)"
              }}>
                  $36
                </span>
                <span style={{
                fontSize: "12px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)"
              }}>
                  Hourly rate
                </span>
              </div>
            </div>
          </Card>

          {/* Main content - Notifications card */}
          <Card>
            <div style={{
            borderBottom: "3px solid var(--drp-black)",
            paddingBottom: "16px",
            marginBottom: "20px"
          }}>
              <CardHeader title="Notifications" />
            </div>

            <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
              {notificationSettings.map((setting, i) => <div key={setting.key}>
                  <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0"
              }}>
                    <div style={{
                  flex: 1
                }}>
                      <p style={{
                    margin: "0 0 2px",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {setting.label}
                      </p>
                      <p style={{
                    margin: 0,
                    fontSize: "14px",
                    fontFamily: "var(--drp-font-primary)",
                    color: "#333"
                  }}>
                        {setting.description}
                      </p>
                    </div>
                    <Switch defaultChecked={setting.defaultChecked} />
                  </div>
                  {i < notificationSettings.length - 1 && <Divider />}
                </div>)}
            </div>

            <div style={{
            display: "flex",
            gap: "12px",
            marginTop: "24px",
            justifyContent: "flex-end"
          }}>
              <Button variant="outline">Reset Changes</Button>
              <Button variant="primary">Update Settings</Button>
            </div>
          </Card>
        </div>
      </AppShell>
    </div>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const M=["ProfileSettings"];export{i as ProfileSettings,M as __namedExportsOrder,E as default};
