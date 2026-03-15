import{j as e}from"./jsx-runtime-D_zvdyIk.js";function o({columns:t,data:s,className:l="","aria-label":i,caption:r}){return e.jsx("div",{className:"drp-table-scroll",style:{overflowX:"auto"},children:e.jsxs("table",{className:`drp-table ${l}`,"aria-label":i,children:[r&&e.jsx("caption",{children:r}),e.jsx("thead",{children:e.jsx("tr",{children:t.map(a=>e.jsx("th",{scope:"col",children:a.header},a.key))})}),e.jsx("tbody",{children:s.map((a,d)=>e.jsx("tr",{children:t.map(n=>e.jsx("td",{children:n.render?n.render(a):String(a[n.key]??"")},n.key))},d))})]})})}o.__docgenInfo={description:`Data table with typed columns and optional custom cell rendering — use the \`render\` function on a column to display Badges, Buttons, or other components instead of plain text.
@example
<Table
  aria-label="Recent appointments"
  columns={[
    { key: "patient", header: "Patient" },
    { key: "date", header: "Date" },
    { key: "status", header: "Status", render: (row) => <Badge variant="mint">{row.status}</Badge> },
  ]}
  data={appointments}
/>`,methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};export{o as T};
