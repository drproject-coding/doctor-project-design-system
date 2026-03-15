import{j as i}from"./jsx-runtime-D_zvdyIk.js";function l({children:a,variant:e,className:n=""}){const t=["drp-badge",e&&`drp-badge--${e}`,n].filter(Boolean).join(" ");return i.jsx("span",{className:t,children:a})}l.__docgenInfo={description:`Small label used to highlight status, counts, or categorical metadata inline with other content.
@example
// Status badge next to a plan name
<Badge variant="mint">Active</Badge>
// Count indicator
<Badge variant="pink">3 overdue</Badge>`,methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "filled"
| "primary"
| "secondary"
| "outline"
| "mint"
| "pink"`,elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"mint"'},{name:"literal",value:'"pink"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{l as B};
