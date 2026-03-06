import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as c,T as p,S as m}from"./Layout-5qMifhuW.js";import{D as h}from"./DashboardLayout-DrDl1UDg.js";import{s as b,m as x}from"./fake-BF7jtsFd.js";import"./TopBar-BvFCvAQN.js";import"./Sidebar-BnrERt04.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const T={title:"Layout/AppShell",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"}},v=()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"sidebar-brand",children:[a.jsx("span",{className:"sidebar-brand-name",children:"Doctor Project"}),a.jsx("span",{className:"sidebar-brand-dot"})]}),a.jsx("nav",{className:"sidebar-nav",children:a.jsxs("div",{className:"sidebar-nav-section",children:[a.jsx("div",{className:"sidebar-nav-label",children:"Navigation"}),x.map(s=>a.jsxs("a",{href:s.href,className:"sidebar-nav-item",children:[a.jsx("span",{className:"sidebar-nav-icon",dangerouslySetInnerHTML:{__html:s.iconSvg}}),a.jsx("span",{className:"sidebar-nav-text",children:s.label}),s.badge&&a.jsx("span",{className:"sidebar-badge sidebar-badge--purple",children:s.badge})]},s.label))]})})]}),j=()=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"topbar-left",children:a.jsx("h1",{className:"topbar-title",children:"Dashboard"})}),a.jsxs("div",{className:"topbar-right",children:[a.jsxs("button",{className:"topbar-icon-btn",children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),a.jsx("span",{className:"notification-dot"})]}),a.jsxs("button",{className:"topbar-create-btn",children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{d:"M12 4v16m8-8H4"})}),"Create New"]})]})]}),e={render:()=>a.jsx("div",{style:{height:"600px"},children:a.jsx(c,{sidebar:a.jsx(m,{children:a.jsx(v,{})}),topbar:a.jsx(p,{children:a.jsx(j,{})}),footer:a.jsx("span",{className:"footer-link",children:"© 2026 Doctor Project"}),children:a.jsxs("div",{style:{padding:"24px"},children:[a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",marginBottom:"24px"},children:b.map(s=>a.jsxs("div",{className:"drp-card drp-card--sm",style:{padding:"16px"},children:[a.jsx("p",{className:"drp-label",children:s.label}),a.jsx("p",{className:"drp-display-md",style:{margin:"4px 0"},children:s.value}),a.jsx("p",{style:{margin:0,fontSize:"12px",fontWeight:600,color:s.trend==="up"?"var(--drp-success)":"var(--drp-error)"},children:s.change})]},s.label))}),a.jsxs("div",{className:"drp-card",style:{padding:"24px"},children:[a.jsx("h3",{className:"drp-h4",style:{marginBottom:"16px"},children:"Recent Activity"}),a.jsx("p",{className:"drp-text--secondary",children:"Dashboard content would go here — charts, tables, activity feeds..."})]})]})})})},n={render:()=>a.jsxs(h,{sidebarProps:{sections:[{label:"Navigation",items:[{id:"dashboard",label:"Dashboard",icon:a.jsx("span",{children:"◎"}),active:!0},{id:"products",label:"Products",icon:a.jsx("span",{children:"▣"})},{id:"customers",label:"Customers",icon:a.jsx("span",{children:"▥"})},{id:"payments",label:"Payments",icon:a.jsx("span",{children:"▦"}),badge:3}]}]},topBarProps:{title:"Dashboard"},children:[a.jsx("h2",{className:"drp-h3",children:"Welcome to Dashboard"}),a.jsx("p",{className:"drp-text--secondary",children:"This is the DashboardLayout component combining TopBar and Sidebar."})]})};var r,d,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "600px"
  }}>
      <AppShell sidebar={<Sidebar>
            <SidebarContent />
          </Sidebar>} topbar={<Topbar>
            <TopbarContent />
          </Topbar>} footer={<span className="footer-link">© 2026 Doctor Project</span>}>
        <div style={{
        padding: "24px"
      }}>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "24px"
        }}>
            {stats.map(s => <div key={s.label} className="drp-card drp-card--sm" style={{
            padding: "16px"
          }}>
                <p className="drp-label">{s.label}</p>
                <p className="drp-display-md" style={{
              margin: "4px 0"
            }}>
                  {s.value}
                </p>
                <p style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              color: s.trend === "up" ? "var(--drp-success)" : "var(--drp-error)"
            }}>
                  {s.change}
                </p>
              </div>)}
          </div>
          <div className="drp-card" style={{
          padding: "24px"
        }}>
            <h3 className="drp-h4" style={{
            marginBottom: "16px"
          }}>
              Recent Activity
            </h3>
            <p className="drp-text--secondary">
              Dashboard content would go here — charts, tables, activity
              feeds...
            </p>
          </div>
        </div>
      </AppShell>
    </div>
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,i,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <DashboardLayout sidebarProps={{
    sections: [{
      label: "Navigation",
      items: [{
        id: "dashboard",
        label: "Dashboard",
        icon: <span>◎</span>,
        active: true
      }, {
        id: "products",
        label: "Products",
        icon: <span>▣</span>
      }, {
        id: "customers",
        label: "Customers",
        icon: <span>▥</span>
      }, {
        id: "payments",
        label: "Payments",
        icon: <span>▦</span>,
        badge: 3
      }]
    }]
  }} topBarProps={{
    title: "Dashboard"
  }}>
      <h2 className="drp-h3">Welcome to Dashboard</h2>
      <p className="drp-text--secondary">
        This is the DashboardLayout component combining TopBar and Sidebar.
      </p>
    </DashboardLayout>
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Default","Dashboard"];export{n as Dashboard,e as Default,C as __namedExportsOrder,T as default};
