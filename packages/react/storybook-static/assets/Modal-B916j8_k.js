import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-ZH-6pyQh.js";const m='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function b({open:r,onClose:s,title:f,children:h,footer:l}){const c=a.useId(),i=a.useRef(null),d=a.useRef(null);if(a.useEffect(()=>{if(!r)return;d.current=document.activeElement;const e=setTimeout(()=>{var n;const t=(n=i.current)==null?void 0:n.querySelectorAll(m);t&&t.length>0&&t[0].focus()},0);return()=>{var t;clearTimeout(e),(t=d.current)==null||t.focus()}},[r]),!r)return null;const y=e=>{var t;if(e.key==="Escape"){s();return}if(e.key==="Tab"){const n=(t=i.current)==null?void 0:t.querySelectorAll(m);if(!n||n.length===0)return;const u=n[0],p=n[n.length-1];e.shiftKey?document.activeElement===u&&(e.preventDefault(),p.focus()):document.activeElement===p&&(e.preventDefault(),u.focus())}};return o.jsx("div",{className:"drp-overlay",role:"presentation",onClick:s,children:o.jsxs("div",{className:"drp-modal",ref:i,role:"dialog","aria-modal":"true","aria-labelledby":c,onClick:e=>e.stopPropagation(),onKeyDown:y,children:[o.jsxs("div",{className:"drp-modal__header",children:[o.jsx("h2",{className:"drp-modal__title",id:c,children:f}),o.jsx("button",{className:"drp-modal__close",onClick:s,"aria-label":"Close",children:"×"})]}),o.jsx("div",{className:"drp-modal__body",children:h}),l&&o.jsx("div",{className:"drp-modal__footer",children:l})]})})}b.__docgenInfo={description:`Accessible focus-trapped dialog for confirmations and multi-step flows — always wire \`footer\` with at least a Cancel and a primary action button so users have a clear escape path.
@example
<Modal
  open={isOpen}
  onClose={() => setOpen(false)}
  title="Confirm Cancellation"
  footer={
    <>
      <Button variant="outline" onClick={() => setOpen(false)}>Keep Appointment</Button>
      <Button variant="danger" onClick={handleCancel}>Cancel Appointment</Button>
    </>
  }
>
  Are you sure you want to cancel the appointment with Dr. Okafor on 14 Apr?
</Modal>`,methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{b as M};
