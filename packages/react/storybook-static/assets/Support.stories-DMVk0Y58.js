import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as l,T as s,S as d}from"./Layout-5qMifhuW.js";import{C as r}from"./Card-CZSjc6Mh.js";import{B as z}from"./Badge-Cyoi2Itd.js";import{T}from"./Tag-iXJrEwp9.js";import{A as p}from"./Avatar-2B6o_Sxh.js";import{B as C}from"./Breadcrumbs-BEjfK6LI.js";import{j as w,k as B,n as H,f as D}from"./banking-cGtNb0OW.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const q={title:"Pages/Support",parameters:{layout:"fullscreen"}},c=()=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"BRUDDLE"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:H.map((e,t)=>{const f=t===0;return n.jsxs("a",{href:e.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:f?"rgba(99,29,237,0.08)":"transparent",borderLeft:f?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:e.iconSvg}}),n.jsx("span",{children:e.label}),e.badge&&n.jsx(z,{variant:"filled",className:"drp-badge--filled",children:e.badge})]},e.label)})}),n.jsxs("div",{style:{marginTop:"32px"},children:[n.jsx("p",{style:{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",marginBottom:"12px",fontFamily:"var(--drp-font-primary)"},children:"Team Members"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[D.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(p,{size:"sm",src:e.avatar}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.name})]},e.name)),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",fontWeight:600,textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:"See More"})]})]}),n.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px solid #eee",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(p,{size:"sm",initials:"HR"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:"Henry Richardson"})]})]}),y=()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Help Center"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsx(z,{variant:"primary",children:"8"}),n.jsx(p,{size:"sm",initials:"HR"})]})]}),W=()=>n.jsxs("div",{style:{background:"linear-gradient(135deg, #631DED 0%, #FF6C01 50%, #FAE8A4 100%)",padding:"48px 32px",marginBottom:"24px",border:"2px solid var(--drp-black)",textAlign:"center"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:800,fontFamily:"var(--drp-font-primary)",color:"#fff",margin:"0 0 24px"},children:"How can we help you?"}),n.jsxs("div",{style:{maxWidth:"520px",margin:"0 auto",display:"flex",gap:"0"},children:[n.jsx("input",{className:"drp-input",placeholder:"Search help articles",style:{flex:1,border:"2px solid var(--drp-black)",borderRight:"none",padding:"12px 16px",fontSize:"14px",fontFamily:"var(--drp-font-primary)"}}),n.jsx("button",{style:{background:"var(--drp-purple)",border:"2px solid var(--drp-black)",color:"#fff",padding:"12px 20px",cursor:"pointer",display:"flex",alignItems:"center"},dangerouslySetInnerHTML:{__html:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="7"/><line x1="14" y1="14" x2="18" y2="18"/></svg>'}})]}),n.jsxs("p",{style:{color:"rgba(255,255,255,0.85)",fontSize:"13px",fontFamily:"var(--drp-font-primary)",marginTop:"12px"},children:["For example: ",n.jsx("strong",{children:"How to create an account"})]})]}),i={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(l,{sidebar:n.jsx(d,{children:n.jsx(c,{})}),topbar:n.jsx(s,{children:n.jsx(y,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx(W,{}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Products"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:w.map(e=>n.jsxs(r,{children:[n.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:e.icon}),n.jsx("p",{style:{fontSize:"15px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 4px"},children:e.name}),n.jsx("p",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)",margin:0},children:e.description})]},e.id))})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Popular help articles"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:B.map(e=>n.jsx(r,{children:n.jsxs("div",{style:{borderLeft:"3px solid var(--drp-purple)",paddingLeft:"12px"},children:[n.jsx("p",{style:{fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 8px",lineHeight:1.4},children:e.title}),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",fontWeight:600,textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:"Read more"})]})},e.id))})]})]})})})},k=[{title:"Getting started with platform",icon:"🚀",subtopics:["Creating your first account","Verifying your identity","Setting up two-factor authentication","Understanding dashboard overview","Linking payment methods"]},{title:"Managing my account",icon:"👤",subtopics:["Updating personal information","Changing password and security","Managing notification preferences","Account limits and tiers","Closing or suspending account"]},{title:"Trading and funding",icon:"💰",subtopics:["Depositing funds","Withdrawing to bank account","Understanding transaction fees","Transfer limits and timelines","Currency exchange rates"]}],m=[{title:"Best practices for securing your trading account in 2026",date:"Feb 28, 2026",category:"Security"},{title:"How to optimize your portfolio with auto-rebalancing features",date:"Feb 25, 2026",category:"Trading"},{title:"Understanding the new regulatory changes affecting digital wallets",date:"Feb 20, 2026",category:"Compliance"},{title:"Tips for reducing transaction fees on international transfers",date:"Feb 18, 2026",category:"Payments"}],a={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(l,{sidebar:n.jsx(d,{children:n.jsx(c,{})}),topbar:n.jsx(s,{children:n.jsx(y,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(C,{items:[{label:"Help Center",href:"#"},{label:"Categories"}]})}),n.jsx(W,{}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Product categories"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:k.map(e=>n.jsxs(r,{children:[n.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:e.icon}),n.jsx("p",{style:{fontSize:"15px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 12px"},children:e.title}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:"0 0 12px",display:"flex",flexDirection:"column",gap:"6px"},children:e.subtopics.map(t=>n.jsx("li",{children:n.jsx("a",{href:"#",style:{fontSize:"13px",color:"#444",textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:t})},t))}),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",fontWeight:600,textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:"See more articles"})]},e.title))})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Top community posts"}),n.jsx(r,{children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0"},children:m.map((e,t)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:t<m.length-1?"1px solid #eee":"none"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{fontSize:"14px",fontWeight:600,fontFamily:"var(--drp-font-primary)",margin:0},children:e.title}),n.jsx("span",{style:{fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:e.date})]}),n.jsx(T,{color:"purple",children:e.category})]},e.title))})})]})]})})})},A=["Getting started","Managing my account","Trading and funding","Taxes and financial services","Privacy and security","Other topics","Asset Directory","Top of mind"],L=[{icon:"📊",title:"Understanding your monthly account statements",date:"Jan 15, 2026",category:"Account"},{icon:"💱",title:"How currency conversion affects your transactions",date:"Dec 20, 2025",category:"Payments"},{icon:"🔒",title:"Setting up advanced security for fund transfers",date:"Nov 30, 2025",category:"Security"}],o={render:()=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(l,{sidebar:n.jsx(d,{children:n.jsx(c,{})}),topbar:n.jsx(s,{children:n.jsx(y,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(C,{items:[{label:"Help Center",href:"#"},{label:"Account",href:"#"},{label:"Funds reports"}]})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 260px",gap:"24px"},children:[n.jsxs("div",{children:[n.jsx("h1",{style:{fontSize:"36px",fontWeight:800,fontFamily:"var(--drp-font-primary)",margin:"0 0 24px",lineHeight:1.2},children:"Getting started: funds reports"}),n.jsxs("div",{style:{fontSize:"14px",fontFamily:"var(--drp-font-primary)",lineHeight:1.7,color:"#333"},children:[n.jsx("p",{children:"Fund reports provide a comprehensive overview of your financial activity across all accounts. They are generated automatically and can be customized to match your reporting needs, whether for personal tracking or regulatory compliance."}),n.jsx("p",{children:"To access your fund reports, navigate to the Reports section in your dashboard sidebar. You can filter by date range, account type, and transaction category to generate the exact view you need."}),n.jsxs("div",{style:{border:"2px dashed #ccc",padding:"16px 24px",margin:"20px 0"},children:[n.jsx("p",{style:{fontWeight:700,margin:"0 0 8px"},children:"Steps to generate a funds report:"}),n.jsxs("ol",{style:{margin:0,paddingLeft:"20px",display:"flex",flexDirection:"column",gap:"6px"},children:[n.jsx("li",{children:"Log in to your account and navigate to the Reports tab"}),n.jsx("li",{children:"Select the date range for your report (daily, weekly, monthly, or custom)"}),n.jsx("li",{children:"Choose the accounts you want to include in the report"}),n.jsx("li",{children:"Apply any additional filters such as transaction type or currency"}),n.jsx("li",{children:"Click “Generate Report” and download in your preferred format (PDF, CSV, or Excel)"})]})]}),n.jsx("p",{children:"Reports are typically generated within a few seconds for standard date ranges. Custom reports spanning more than 12 months may take up to a minute to compile."}),n.jsx("p",{style:{fontStyle:"italic",color:"#999",fontSize:"13px"},children:"Note: Fund reports are provided for informational purposes only and should not be considered as official financial statements. For tax reporting purposes, please consult the official tax documents available in the Tax Center section of your account."}),n.jsx("p",{children:"If you encounter any issues while generating or downloading your reports, please contact our support team through the Help Center or use the live chat feature available during business hours."})]})]}),n.jsx("div",{children:n.jsxs(r,{children:[n.jsx("p",{style:{fontSize:"13px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",color:"#999",margin:"0 0 12px"},children:"Table of contents"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:A.map((e,t)=>n.jsx("a",{href:"#",style:{fontSize:"13px",color:t===0?"var(--drp-purple)":"#444",fontWeight:t===0?700:400,textDecoration:"none",fontFamily:"var(--drp-font-primary)",paddingLeft:"8px",borderLeft:t===0?"2px solid var(--drp-purple)":"2px solid transparent"},children:e},e))})]})})]}),n.jsxs("div",{style:{marginTop:"32px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"This also may help you"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:L.map(e=>n.jsx(r,{children:n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[n.jsx("span",{style:{fontSize:"24px"},children:e.icon}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 6px",lineHeight:1.3},children:e.title}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:e.date}),n.jsx(T,{color:"purple",children:e.category})]})]})]})},e.title))})]})]})})})};var x,g,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <SupportSidebar />
          </Sidebar>} topbar={<Topbar>
            <SupportTopbar />
          </Topbar>}>
        <div style={{
        padding: "24px"
      }}>
          {/* Hero */}
          <SupportHero />

          {/* Products grid */}
          <div style={{
          marginBottom: "32px"
        }}>
            <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            marginBottom: "16px"
          }}>
              Products
            </h3>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }}>
              {helpCategories.map(cat => <Card key={cat.id}>
                  <div style={{
                fontSize: "32px",
                marginBottom: "8px"
              }}>
                    {cat.icon}
                  </div>
                  <p style={{
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "var(--drp-font-primary)",
                margin: "0 0 4px"
              }}>
                    {cat.name}
                  </p>
                  <p style={{
                fontSize: "12px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)",
                margin: 0
              }}>
                    {cat.description}
                  </p>
                </Card>)}
            </div>
          </div>

          {/* Popular help articles */}
          <div>
            <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            marginBottom: "16px"
          }}>
              Popular help articles
            </h3>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }}>
              {helpArticles.map(article => <Card key={article.id}>
                  <div style={{
                borderLeft: "3px solid var(--drp-purple)",
                paddingLeft: "12px"
              }}>
                    <p style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 8px",
                  lineHeight: 1.4
                }}>
                      {article.title}
                    </p>
                    <a href="#" style={{
                  fontSize: "12px",
                  color: "var(--drp-purple)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--drp-font-primary)"
                }}>
                      Read more
                    </a>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,v,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <SupportSidebar />
          </Sidebar>} topbar={<Topbar>
            <SupportTopbar />
          </Topbar>}>
        <div style={{
        padding: "24px"
      }}>
          {/* Breadcrumbs */}
          <div style={{
          marginBottom: "16px"
        }}>
            <Breadcrumbs items={[{
            label: "Help Center",
            href: "#"
          }, {
            label: "Categories"
          }]} />
          </div>

          {/* Hero */}
          <SupportHero />

          {/* Product categories */}
          <div style={{
          marginBottom: "32px"
        }}>
            <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            marginBottom: "16px"
          }}>
              Product categories
            </h3>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }}>
              {categoryDetails.map(cat => <Card key={cat.title}>
                  <div style={{
                fontSize: "28px",
                marginBottom: "8px"
              }}>
                    {cat.icon}
                  </div>
                  <p style={{
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "var(--drp-font-primary)",
                margin: "0 0 12px"
              }}>
                    {cat.title}
                  </p>
                  <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 12px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}>
                    {cat.subtopics.map(s => <li key={s}>
                        <a href="#" style={{
                    fontSize: "13px",
                    color: "#444",
                    textDecoration: "none",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                          {s}
                        </a>
                      </li>)}
                  </ul>
                  <a href="#" style={{
                fontSize: "12px",
                color: "var(--drp-purple)",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--drp-font-primary)"
              }}>
                    See more articles
                  </a>
                </Card>)}
            </div>
          </div>

          {/* Top community posts */}
          <div>
            <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            marginBottom: "16px"
          }}>
              Top community posts
            </h3>
            <Card>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0"
            }}>
                {communityPosts.map((post, i) => <div key={post.title} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom: i < communityPosts.length - 1 ? "1px solid #eee" : "none"
              }}>
                    <div style={{
                  flex: 1
                }}>
                      <p style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--drp-font-primary)",
                    margin: 0
                  }}>
                        {post.title}
                      </p>
                      <span style={{
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {post.date}
                      </span>
                    </div>
                    <Tag color="purple">{post.category}</Tag>
                  </div>)}
              </div>
            </Card>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,S,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <SupportSidebar />
          </Sidebar>} topbar={<Topbar>
            <SupportTopbar />
          </Topbar>}>
        <div style={{
        padding: "24px"
      }}>
          {/* Breadcrumbs */}
          <div style={{
          marginBottom: "16px"
        }}>
            <Breadcrumbs items={[{
            label: "Help Center",
            href: "#"
          }, {
            label: "Account",
            href: "#"
          }, {
            label: "Funds reports"
          }]} />
          </div>

          {/* Article layout */}
          <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          gap: "24px"
        }}>
            {/* Main article content */}
            <div>
              <h1 style={{
              fontSize: "36px",
              fontWeight: 800,
              fontFamily: "var(--drp-font-primary)",
              margin: "0 0 24px",
              lineHeight: 1.2
            }}>
                Getting started: funds reports
              </h1>

              <div style={{
              fontSize: "14px",
              fontFamily: "var(--drp-font-primary)",
              lineHeight: 1.7,
              color: "#333"
            }}>
                <p>
                  Fund reports provide a comprehensive overview of your
                  financial activity across all accounts. They are generated
                  automatically and can be customized to match your reporting
                  needs, whether for personal tracking or regulatory compliance.
                </p>

                <p>
                  To access your fund reports, navigate to the Reports section
                  in your dashboard sidebar. You can filter by date range,
                  account type, and transaction category to generate the exact
                  view you need.
                </p>

                {/* Numbered list in dashed-border blockquote */}
                <div style={{
                border: "2px dashed #ccc",
                padding: "16px 24px",
                margin: "20px 0"
              }}>
                  <p style={{
                  fontWeight: 700,
                  margin: "0 0 8px"
                }}>
                    Steps to generate a funds report:
                  </p>
                  <ol style={{
                  margin: 0,
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}>
                    <li>
                      Log in to your account and navigate to the Reports tab
                    </li>
                    <li>
                      Select the date range for your report (daily, weekly,
                      monthly, or custom)
                    </li>
                    <li>
                      Choose the accounts you want to include in the report
                    </li>
                    <li>
                      Apply any additional filters such as transaction type or
                      currency
                    </li>
                    <li>
                      Click &ldquo;Generate Report&rdquo; and download in your
                      preferred format (PDF, CSV, or Excel)
                    </li>
                  </ol>
                </div>

                <p>
                  Reports are typically generated within a few seconds for
                  standard date ranges. Custom reports spanning more than 12
                  months may take up to a minute to compile.
                </p>

                {/* Note / disclaimer */}
                <p style={{
                fontStyle: "italic",
                color: "#999",
                fontSize: "13px"
              }}>
                  Note: Fund reports are provided for informational purposes
                  only and should not be considered as official financial
                  statements. For tax reporting purposes, please consult the
                  official tax documents available in the Tax Center section of
                  your account.
                </p>

                <p>
                  If you encounter any issues while generating or downloading
                  your reports, please contact our support team through the Help
                  Center or use the live chat feature available during business
                  hours.
                </p>
              </div>
            </div>

            {/* Right sidebar - Table of contents */}
            <div>
              <Card>
                <p style={{
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: "var(--drp-font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#999",
                margin: "0 0 12px"
              }}>
                  Table of contents
                </p>
                <nav style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                  {tocLinks.map((link, i) => <a key={link} href="#" style={{
                  fontSize: "13px",
                  color: i === 0 ? "var(--drp-purple)" : "#444",
                  fontWeight: i === 0 ? 700 : 400,
                  textDecoration: "none",
                  fontFamily: "var(--drp-font-primary)",
                  paddingLeft: "8px",
                  borderLeft: i === 0 ? "2px solid var(--drp-purple)" : "2px solid transparent"
                }}>
                      {link}
                    </a>)}
                </nav>
              </Card>
            </div>
          </div>

          {/* This also may help you */}
          <div style={{
          marginTop: "32px"
        }}>
            <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            marginBottom: "16px"
          }}>
              This also may help you
            </h3>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }}>
              {relatedArticles.map(article => <Card key={article.title}>
                  <div style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start"
              }}>
                    <span style={{
                  fontSize: "24px"
                }}>{article.icon}</span>
                    <div>
                      <p style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--drp-font-primary)",
                    margin: "0 0 6px",
                    lineHeight: 1.3
                  }}>
                        {article.title}
                      </p>
                      <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                        <span style={{
                      fontSize: "11px",
                      color: "#999",
                      fontFamily: "var(--drp-font-primary)"
                    }}>
                          {article.date}
                        </span>
                        <Tag color="purple">{article.category}</Tag>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const V=["HelpCenter","HelpCategories","HelpArticle"];export{o as HelpArticle,a as HelpCategories,i as HelpCenter,V as __namedExportsOrder,q as default};
