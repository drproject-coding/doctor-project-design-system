import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./Table-BmiF6YTt.js";import{I as d}from"./Icon-CiA5htUt.js";import{u as o}from"./fake-Ca0xkTur.js";const E={title:"Components/Table",component:s,tags:["autodocs"]},a={args:{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"status",header:"Status"},{key:"joinDate",header:"Joined"}],data:o.slice(0,8)}},r={render:()=>n.jsx(s,{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"actions",header:"Actions",render:e=>n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsx("button",{"aria-label":`Edit ${e.name}`,onClick:()=>alert(`Edit: ${e.name}`),style:{background:"none",border:"none",padding:0,cursor:"pointer"},children:n.jsx(d,{name:"edit",size:"sm",bg:"var(--drp-yellow)"})}),n.jsx("button",{"aria-label":`Delete ${e.name}`,onClick:()=>alert(`Delete: ${e.name}`),style:{background:"none",border:"none",padding:0,cursor:"pointer"},children:n.jsx(d,{name:"trash",size:"sm",bg:"var(--drp-pink)"})})]})}],data:o.slice(0,6)})},t={render:()=>n.jsx(s,{columns:[{key:"name",header:"Name",render:e=>n.jsx("strong",{children:String(e.name)})},{key:"email",header:"Email"},{key:"role",header:"Role",render:e=>n.jsx("span",{className:"drp-tag drp-tag--purple",style:{fontSize:"11px"},children:String(e.role)})},{key:"status",header:"Status",render:e=>{const x=e.status==="Active"?"mint":e.status==="Pending"?"yellow":"pink";return n.jsx("span",{className:`drp-tag drp-tag--${x} drp-tag--dot`,children:String(e.status)})}}],data:o.slice(0,6)})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "name",
      header: "Name"
    }, {
      key: "email",
      header: "Email"
    }, {
      key: "role",
      header: "Role"
    }, {
      key: "status",
      header: "Status"
    }, {
      key: "joinDate",
      header: "Joined"
    }],
    data: users.slice(0, 8)
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,u,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Table columns={[{
    key: "name",
    header: "Name"
  }, {
    key: "email",
    header: "Email"
  }, {
    key: "role",
    header: "Role"
  }, {
    key: "actions",
    header: "Actions",
    render: row => <div style={{
      display: "flex",
      gap: "8px",
      alignItems: "center"
    }}>
              <button aria-label={\`Edit \${row.name}\`} onClick={() => alert(\`Edit: \${row.name}\`)} style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}>
                <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
              </button>
              <button aria-label={\`Delete \${row.name}\`} onClick={() => alert(\`Delete: \${row.name}\`)} style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}>
                <Icon name="trash" size="sm" bg="var(--drp-pink)" />
              </button>
            </div>
  }]} data={users.slice(0, 6)} />
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:`Use Icon components (size="sm") for table row actions — never use "..." buttons.
Wrap each Icon in a plain <button> with aria-label for accessibility.`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var h,k,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table columns={[{
    key: "name",
    header: "Name",
    render: row => <strong>{String(row.name)}</strong>
  }, {
    key: "email",
    header: "Email"
  }, {
    key: "role",
    header: "Role",
    render: row => <span className="drp-tag drp-tag--purple" style={{
      fontSize: "11px"
    }}>
              {String(row.role)}
            </span>
  }, {
    key: "status",
    header: "Status",
    render: row => {
      const color = row.status === "Active" ? "mint" : row.status === "Pending" ? "yellow" : "pink";
      return <span className={\`drp-tag drp-tag--\${color} drp-tag--dot\`}>
                {String(row.status)}
              </span>;
    }
  }]} data={users.slice(0, 6)} />
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const v=["Default","WithActions","WithCustomRender"];export{a as Default,r as WithActions,t as WithCustomRender,v as __namedExportsOrder,E as default};
