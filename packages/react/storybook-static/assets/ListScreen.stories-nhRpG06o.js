import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-ZH-6pyQh.js";import{B as S}from"./Button-Cyi0h7uy.js";import{I as N}from"./Input-CQS1efF9.js";import{T as q}from"./Table-BJFi9Akg.js";import{P as D}from"./Pagination-CaIm73j9.js";import{D as j}from"./DashboardLayout-DrDl1UDg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./TopBar-BvFCvAQN.js";import"./Sidebar-BnrERt04.js";const v=({title:b,subtitle:n,data:k,columns:h,onAddClick:s,onRowClick:T,showSearch:w=!0,itemsPerPage:r=10,...i})=>{const[o,x]=p.useState(""),[u,c]=p.useState(1),d=k.filter(e=>JSON.stringify(e).toLowerCase().includes(o.toLowerCase())),l=Math.ceil(d.length/r),m=(u-1)*r,P=d.slice(m,m+r);return a.jsx(j,{...i,topBarProps:{title:b,actions:s&&a.jsx(S,{onClick:s,className:"drp-btn drp-btn--primary",children:"+ Add New"}),...i.topBarProps},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--drp-space-6)"},children:[n&&a.jsx("p",{className:"drp-caption",children:n}),w&&a.jsx(N,{placeholder:"Search...",value:o,onChange:e=>{x(e.target.value),c(1)}}),a.jsx(q,{columns:h.map(e=>({key:e.key,header:e.label,render:e.render?R=>e.render(R[e.key]):void 0})),data:P}),l>1&&a.jsx(D,{currentPage:u,totalPages:l,onPageChange:c})]})})};v.__docgenInfo={description:"",methods:[],displayName:"ListScreen",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(value: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}}],raw:`Array<{
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}>`},description:""},onAddClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}},composes:["Omit"]};const V={component:v,title:"Screens/Common/ListScreen"},C=[{id:"1",name:"Product A",status:"Active",price:"$99.99"},{id:"2",name:"Product B",status:"Active",price:"$149.99"},{id:"3",name:"Product C",status:"Inactive",price:"$79.99"}],t={args:{title:"Products",subtitle:"Manage your product inventory",data:C,columns:[{key:"id",label:"ID"},{key:"name",label:"Product Name"},{key:"status",label:"Status"},{key:"price",label:"Price"}]}};var y,g,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "Products",
    subtitle: "Manage your product inventory",
    data: sampleData,
    columns: [{
      key: "id",
      label: "ID"
    }, {
      key: "name",
      label: "Product Name"
    }, {
      key: "status",
      label: "Status"
    }, {
      key: "price",
      label: "Price"
    }]
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,V as default};
