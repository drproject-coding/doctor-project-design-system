import{j as e}from"./jsx-runtime-D_zvdyIk.js";function d({columns:t,data:s,className:i="","aria-label":l,caption:r}){return e.jsx("div",{className:"drp-table-scroll",style:{overflowX:"auto"},children:e.jsxs("table",{className:`drp-table ${i}`,"aria-label":l,children:[r&&e.jsx("caption",{children:r}),e.jsx("thead",{children:e.jsx("tr",{children:t.map(n=>e.jsx("th",{scope:"col",children:n.header},n.key))})}),e.jsx("tbody",{children:s.map((n,o)=>e.jsx("tr",{children:t.map(a=>e.jsx("td",{children:a.render?a.render(n):String(n[a.key]??"")},a.key))},o))})]})})}d.__docgenInfo={description:`Data table with typed columns and optional custom cell rendering.

For row actions (edit, delete, view), use \`<Icon size="sm">\` wrapped in a plain \`<button>\` —
never use "..." or text-label buttons. This keeps action columns compact and visually consistent.

@example
// Status badge + icon action buttons
<Table
  aria-label="Recent appointments"
  columns={[
    { key: "patient", header: "Patient" },
    { key: "status", header: "Status", render: (row) => <Badge variant="mint">{row.status}</Badge> },
    { key: "actions", header: "Actions", render: (row) => (
      <div style={{ display: "flex", gap: 8 }}>
        <button aria-label="Edit" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
        </button>
        <button aria-label="Delete" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <Icon name="trash" size="sm" bg="var(--drp-pink)" />
        </button>
      </div>
    )},
  ]}
  data={appointments}
/>`,methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};export{d as T};
