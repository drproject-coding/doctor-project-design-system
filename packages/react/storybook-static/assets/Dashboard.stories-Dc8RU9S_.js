import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-ZH-6pyQh.js";import{A as j,T as b,S}from"./Layout-5qMifhuW.js";import{C as s,a as d}from"./Card-CZSjc6Mh.js";import{T as B}from"./Table-BJFi9Akg.js";import{P as E}from"./Pagination-CaIm73j9.js";import{T as W}from"./Tabs-v-cmVc6Z.js";import{B as F}from"./Badge-Cyoi2Itd.js";import{T as l}from"./Tag-iXJrEwp9.js";import{A as C}from"./Avatar-2B6o_Sxh.js";import{S as O}from"./StatusDot-C7XtxRyK.js";import{S as g}from"./Switch-DlPq5zAg.js";import{I as c}from"./Input-CQS1efF9.js";import{S as M}from"./Select-Csu0gdPj.js";import{B as m}from"./Button-Cyi0h7uy.js";import{P as x}from"./ProgressBar-C5VStynC.js";import{M as R}from"./Modal-DnCwwVl1.js";import{u as r,s as $,c as f,m as H}from"./fake-BF7jtsFd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const pe={title:"Pages/Dashboard",parameters:{layout:"fullscreen"}},T=()=>e.jsxs("div",{style:{padding:"16px",height:"100%"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"DOCTOR PROJECT"}),e.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:H.map((t,o)=>e.jsxs("a",{href:t.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:o===0?"rgba(99,29,237,0.08)":"transparent",borderLeft:o===0?"3px solid var(--drp-purple)":"3px solid transparent"},children:[e.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:t.iconSvg}}),e.jsx("span",{children:t.label}),t.badge&&e.jsx(F,{variant:"filled",className:"drp-badge--filled",children:t.badge})]},t.label))})]}),L=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[e.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Dashboard"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(F,{variant:"primary",children:"3"}),e.jsx(C,{size:"sm",initials:"JD"})]})]}),h={render:()=>{const[t,o]=v.useState(1),p=5,i=r.slice((t-1)*p,t*p);return e.jsx("div",{style:{height:"100vh"},children:e.jsx(j,{sidebar:e.jsx(S,{children:e.jsx(T,{})}),topbar:e.jsx(b,{children:e.jsx(L,{})}),footer:e.jsx("span",{style:{padding:"0 24px",fontFamily:"var(--drp-font-primary)",fontSize:"12px",color:"#666"},children:"© 2026 Doctor Project Design System"}),children:e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",marginBottom:"24px"},children:$.map(n=>e.jsxs(s,{variant:"sm",accent:n.label.includes("Revenue")?"purple":n.label.includes("Users")?"mint":n.label.includes("Orders")?"pink":"yellow",children:[e.jsx("p",{style:{margin:0,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"#666",fontFamily:"var(--drp-font-primary)",fontWeight:600},children:n.label}),e.jsx("p",{style:{margin:"4px 0",fontSize:"28px",fontWeight:700,fontFamily:"var(--drp-font-primary)"},children:n.value}),e.jsx("p",{style:{margin:0,fontSize:"12px",fontWeight:600,color:n.trend==="up"?"#00AA00":"#FF4444"},children:n.change})]},n.label))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",marginBottom:"24px"},children:[e.jsxs(s,{children:[e.jsx(d,{title:"Revenue Overview",subtitle:"Monthly revenue for 2026"}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:"180px",padding:"8px 0"},children:f.revenue.map((n,a)=>e.jsx("div",{style:{flex:1,background:"var(--drp-purple)",height:`${n/6e4*100}%`,minHeight:"4px",border:"1px solid var(--drp-black)"},title:`${f.labels[a]}: $${n.toLocaleString()}`},a))}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"10px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:f.labels.map(n=>e.jsx("span",{children:n},n))})]}),e.jsxs(s,{children:[e.jsx(d,{title:"Performance"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginTop:"8px"},children:[e.jsx(x,{value:85,label:"CPU Usage"}),e.jsx(x,{value:62,color:"mint",label:"Memory"}),e.jsx(x,{value:91,color:"pink",label:"Disk"}),e.jsx(x,{value:34,color:"yellow",label:"Network"})]})]})]}),e.jsxs(s,{children:[e.jsx(d,{title:"Recent Users",subtitle:`Showing ${i.length} of ${r.length}`,action:e.jsx(l,{color:"purple",filled:!0,children:"Active"})}),e.jsx(B,{columns:[{key:"name",header:"User",render:n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(C,{size:"sm",initials:String(n.name).split(" ").map(a=>a[0]).join("")}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600},children:String(n.name)}),e.jsx("div",{style:{fontSize:"12px",color:"#999"},children:String(n.email)})]})]})},{key:"role",header:"Role",render:n=>e.jsx(l,{color:"purple",children:String(n.role)})},{key:"status",header:"Status",render:n=>{const a=n.status==="Active"?"mint":n.status==="Pending"?"yellow":"pink";return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(O,{color:a,pulse:n.status==="Active"}),e.jsx("span",{children:String(n.status)})]})}},{key:"joinDate",header:"Joined"}],data:i}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:e.jsx(E,{currentPage:t,totalPages:Math.ceil(r.length/p),onPageChange:o})})]})]})})})}},u={render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(j,{sidebar:e.jsx(S,{children:e.jsx(T,{})}),topbar:e.jsx(b,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"0 24px",width:"100%"},children:e.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Settings"})})}),children:e.jsxs("div",{style:{padding:"24px",maxWidth:"640px"},children:[e.jsx(W,{items:[{label:"General",key:"general"},{label:"Notifications",key:"notifs"},{label:"Security",key:"security"},{label:"Billing",key:"billing"}],variant:"underline"}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsxs(s,{children:[e.jsx(d,{title:"Profile",subtitle:"Update your personal information"}),e.jsxs("div",{className:"drp-form-stack",children:[e.jsxs("div",{className:"drp-form-row",children:[e.jsx(c,{label:"First Name",placeholder:"John"}),e.jsx(c,{label:"Last Name",placeholder:"Doe"})]}),e.jsx(c,{label:"Email Address",type:"email",placeholder:"john@example.com"}),e.jsxs(M,{label:"Timezone",children:[e.jsx("option",{value:"utc",children:"UTC"}),e.jsx("option",{value:"est",children:"Eastern (EST)"}),e.jsx("option",{value:"pst",children:"Pacific (PST)"}),e.jsx("option",{value:"cet",children:"Central European (CET)"})]})]})]}),e.jsxs(s,{style:{marginTop:"16px"},children:[e.jsx(d,{title:"Notifications",subtitle:"Manage your notification preferences"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(g,{label:"Email notifications",defaultChecked:!0}),e.jsx(g,{label:"Push notifications",defaultChecked:!0}),e.jsx(g,{label:"Marketing emails"}),e.jsx(g,{label:"Weekly digest",defaultChecked:!0})]})]}),e.jsxs("div",{className:"drp-form-actions",style:{marginTop:"24px"},children:[e.jsx(m,{variant:"primary",children:"Save Changes"}),e.jsx(m,{variant:"outline",children:"Cancel"})]})]})]})})})},y={render:()=>{const[t,o]=v.useState(1),[p,i]=v.useState(!1);return e.jsx("div",{style:{height:"100vh"},children:e.jsxs(j,{sidebar:e.jsx(S,{children:e.jsx(T,{})}),topbar:e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",width:"100%"},children:[e.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Users"}),e.jsx(m,{variant:"primary",size:"sm",onClick:()=>i(!0),children:"+ Add User"})]})}),children:[e.jsx("div",{style:{padding:"24px"},children:e.jsxs(s,{children:[e.jsx(d,{title:"All Users",subtitle:`${r.length} total users`,action:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(l,{color:"mint",dot:!0,children:["Active:"," ",r.filter(n=>n.status==="Active").length]}),e.jsxs(l,{color:"yellow",dot:!0,children:["Pending:"," ",r.filter(n=>n.status==="Pending").length]}),e.jsxs(l,{color:"pink",dot:!0,children:["Inactive:"," ",r.filter(n=>n.status==="Inactive").length]})]})}),e.jsx(B,{columns:[{key:"name",header:"User",render:n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(C,{size:"sm",initials:String(n.name).split(" ").map(a=>a[0]).join("")}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600},children:String(n.name)}),e.jsx("div",{style:{fontSize:"12px",color:"#999"},children:String(n.email)})]})]})},{key:"role",header:"Role",render:n=>e.jsx(l,{color:n.role==="Admin"?"purple":n.role==="Editor"?"mint":"grey",children:String(n.role)})},{key:"status",header:"Status",render:n=>{const a=n.status==="Active"?"mint":n.status==="Pending"?"yellow":"pink";return e.jsx(l,{color:a,dot:!0,filled:!0,children:String(n.status)})}},{key:"joinDate",header:"Joined"},{key:"lastActive",header:"Last Active"}],data:r.slice((t-1)*6,t*6)}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:e.jsx(E,{currentPage:t,totalPages:Math.ceil(r.length/6),onPageChange:o})})]})}),e.jsx(R,{open:p,onClose:()=>i(!1),title:"Add New User",footer:e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"outline",onClick:()=>i(!1),children:"Cancel"}),e.jsx(m,{variant:"primary",onClick:()=>i(!1),children:"Create User"})]}),children:e.jsxs("div",{className:"drp-form-stack",children:[e.jsx(c,{label:"Full Name",placeholder:"Enter full name"}),e.jsx(c,{label:"Email",type:"email",placeholder:"user@example.com"}),e.jsxs(M,{label:"Role",children:[e.jsx("option",{value:"viewer",children:"Viewer"}),e.jsx("option",{value:"editor",children:"Editor"}),e.jsx("option",{value:"admin",children:"Admin"})]})]})})]})})}};var k,P,w;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const pagedUsers = users.slice((page - 1) * pageSize, page * pageSize);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <SidebarNav />
            </Sidebar>} topbar={<Topbar>
              <TopbarNav />
            </Topbar>} footer={<span style={{
        padding: "0 24px",
        fontFamily: "var(--drp-font-primary)",
        fontSize: "12px",
        color: "#666"
      }}>
              © 2026 Doctor Project Design System
            </span>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Stats row */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px"
          }}>
              {stats.map(s => <Card key={s.label} variant="sm" accent={s.label.includes("Revenue") ? "purple" : s.label.includes("Users") ? "mint" : s.label.includes("Orders") ? "pink" : "yellow"}>
                  <p style={{
                margin: 0,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#666",
                fontFamily: "var(--drp-font-primary)",
                fontWeight: 600
              }}>
                    {s.label}
                  </p>
                  <p style={{
                margin: "4px 0",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "var(--drp-font-primary)"
              }}>
                    {s.value}
                  </p>
                  <p style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 600,
                color: s.trend === "up" ? "#00AA00" : "#FF4444"
              }}>
                    {s.change}
                  </p>
                </Card>)}
            </div>

            {/* Charts row */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginBottom: "24px"
          }}>
              <Card>
                <CardHeader title="Revenue Overview" subtitle="Monthly revenue for 2026" />
                <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "6px",
                height: "180px",
                padding: "8px 0"
              }}>
                  {chartData.revenue.map((val, i) => <div key={i} style={{
                  flex: 1,
                  background: "var(--drp-purple)",
                  height: \`\${val / 60000 * 100}%\`,
                  minHeight: "4px",
                  border: "1px solid var(--drp-black)"
                }} title={\`\${chartData.labels[i]}: $\${val.toLocaleString()}\`} />)}
                </div>
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
                fontSize: "10px",
                color: "#999",
                fontFamily: "var(--drp-font-primary)"
              }}>
                  {chartData.labels.map(l => <span key={l}>{l}</span>)}
                </div>
              </Card>

              <Card>
                <CardHeader title="Performance" />
                <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "8px"
              }}>
                  <ProgressBar value={85} label="CPU Usage" />
                  <ProgressBar value={62} color="mint" label="Memory" />
                  <ProgressBar value={91} color="pink" label="Disk" />
                  <ProgressBar value={34} color="yellow" label="Network" />
                </div>
              </Card>
            </div>

            {/* Users table */}
            <Card>
              <CardHeader title="Recent Users" subtitle={\`Showing \${pagedUsers.length} of \${users.length}\`} action={<Tag color="purple" filled>
                    Active
                  </Tag>} />
              <Table columns={[{
              key: "name",
              header: "User",
              render: row => <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                        <Avatar size="sm" initials={String(row.name).split(" ").map(n => n[0]).join("")} />
                        <div>
                          <div style={{
                    fontWeight: 600
                  }}>
                            {String(row.name)}
                          </div>
                          <div style={{
                    fontSize: "12px",
                    color: "#999"
                  }}>
                            {String(row.email)}
                          </div>
                        </div>
                      </div>
            }, {
              key: "role",
              header: "Role",
              render: row => <Tag color="purple">{String(row.role)}</Tag>
            }, {
              key: "status",
              header: "Status",
              render: row => {
                const color = row.status === "Active" ? "mint" : row.status === "Pending" ? "yellow" : "pink";
                return <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                          <StatusDot color={color} pulse={row.status === "Active"} />
                          <span>{String(row.status)}</span>
                        </div>;
              }
            }, {
              key: "joinDate",
              header: "Joined"
            }]} data={pagedUsers} />
              <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px"
            }}>
                <Pagination currentPage={page} totalPages={Math.ceil(users.length / pageSize)} onPageChange={setPage} />
              </div>
            </Card>
          </div>
        </AppShell>
      </div>;
  }
}`,...(w=(P=h.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var A,z,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell sidebar={<Sidebar>
            <SidebarNav />
          </Sidebar>} topbar={<Topbar>
            <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        width: "100%"
      }}>
              <h1 style={{
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "var(--drp-font-primary)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          margin: 0
        }}>
                Settings
              </h1>
            </div>
          </Topbar>}>
        <div style={{
        padding: "24px",
        maxWidth: "640px"
      }}>
          <Tabs items={[{
          label: "General",
          key: "general"
        }, {
          label: "Notifications",
          key: "notifs"
        }, {
          label: "Security",
          key: "security"
        }, {
          label: "Billing",
          key: "billing"
        }]} variant="underline" />

          <div style={{
          marginTop: "24px"
        }}>
            <Card>
              <CardHeader title="Profile" subtitle="Update your personal information" />
              <div className="drp-form-stack">
                <div className="drp-form-row">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email Address" type="email" placeholder="john@example.com" />
                <Select label="Timezone">
                  <option value="utc">UTC</option>
                  <option value="est">Eastern (EST)</option>
                  <option value="pst">Pacific (PST)</option>
                  <option value="cet">Central European (CET)</option>
                </Select>
              </div>
            </Card>

            <Card style={{
            marginTop: "16px"
          }}>
              <CardHeader title="Notifications" subtitle="Manage your notification preferences" />
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" defaultChecked />
                <Switch label="Marketing emails" />
                <Switch label="Weekly digest" defaultChecked />
              </div>
            </Card>

            <div className="drp-form-actions" style={{
            marginTop: "24px"
          }}>
              <Button variant="primary">Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(U=(z=u.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var D,I,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <SidebarNav />
            </Sidebar>} topbar={<Topbar>
              <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          width: "100%"
        }}>
                <h1 style={{
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "var(--drp-font-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: 0
          }}>
                  Users
                </h1>
                <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
                  + Add User
                </Button>
              </div>
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            <Card>
              <CardHeader title="All Users" subtitle={\`\${users.length} total users\`} action={<div style={{
              display: "flex",
              gap: "8px"
            }}>
                    <Tag color="mint" dot>
                      Active:{" "}
                      {users.filter(u => u.status === "Active").length}
                    </Tag>
                    <Tag color="yellow" dot>
                      Pending:{" "}
                      {users.filter(u => u.status === "Pending").length}
                    </Tag>
                    <Tag color="pink" dot>
                      Inactive:{" "}
                      {users.filter(u => u.status === "Inactive").length}
                    </Tag>
                  </div>} />
              <Table columns={[{
              key: "name",
              header: "User",
              render: row => <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                        <Avatar size="sm" initials={String(row.name).split(" ").map(n => n[0]).join("")} />
                        <div>
                          <div style={{
                    fontWeight: 600
                  }}>
                            {String(row.name)}
                          </div>
                          <div style={{
                    fontSize: "12px",
                    color: "#999"
                  }}>
                            {String(row.email)}
                          </div>
                        </div>
                      </div>
            }, {
              key: "role",
              header: "Role",
              render: row => <Tag color={row.role === "Admin" ? "purple" : row.role === "Editor" ? "mint" : "grey"}>
                        {String(row.role)}
                      </Tag>
            }, {
              key: "status",
              header: "Status",
              render: row => {
                const color = row.status === "Active" ? "mint" : row.status === "Pending" ? "yellow" : "pink";
                return <Tag color={color} dot filled>
                          {String(row.status)}
                        </Tag>;
              }
            }, {
              key: "joinDate",
              header: "Joined"
            }, {
              key: "lastActive",
              header: "Last Active"
            }]} data={users.slice((page - 1) * 6, page * 6)} />
              <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px"
            }}>
                <Pagination currentPage={page} totalPages={Math.ceil(users.length / 6)} onPageChange={setPage} />
              </div>
            </Card>
          </div>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add New User" footer={<>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                  Create User
                </Button>
              </>}>
            <div className="drp-form-stack">
              <Input label="Full Name" placeholder="Enter full name" />
              <Input label="Email" type="email" placeholder="user@example.com" />
              <Select label="Role">
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </Select>
            </div>
          </Modal>
        </AppShell>
      </div>;
  }
}`,...(N=(I=y.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const ce=["DashboardPage","SettingsPage","UserListPage"];export{h as DashboardPage,u as SettingsPage,y as UserListPage,ce as __namedExportsOrder,pe as default};
