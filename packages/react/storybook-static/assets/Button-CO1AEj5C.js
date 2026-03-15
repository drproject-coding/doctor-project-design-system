import{j as n}from"./jsx-runtime-D_zvdyIk.js";function u({variant:a,size:t,block:o,icon:s,iconLeft:e,iconRight:r,className:i="",children:l,...c}){const d=["drp-btn",a&&`drp-btn--${a}`,t&&`drp-btn--${t}`,o&&"drp-btn--block",s&&"drp-btn--icon",i].filter(Boolean).join(" ");return n.jsxs("button",{className:d,...c,children:[e&&n.jsx("span",{className:"drp-btn__icon",children:e}),l,r&&n.jsx("span",{className:"drp-btn__icon",children:r})]})}u.__docgenInfo={description:`Primary interactive element for all user actions — use \`variant="primary"\` for the main CTA, \`variant="danger"\` for destructive actions (always pair with a confirmation dialog), and never use raw \`<button>\` elements.
@example
// Standard form submit
<Button variant="primary" onClick={handleSave}>Save Changes</Button>
// Destructive with icon
<Button variant="danger" iconLeft={<TrashIcon />}>Delete Account</Button>
// Icon-only (aria-label required)
<Button icon aria-label="Close dialog"><XIcon /></Button>`,methods:[],displayName:"Button",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};export{u as B};
