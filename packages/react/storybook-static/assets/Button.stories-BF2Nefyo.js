import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./Button-CO1AEj5C.js";const B=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M3 8H13M13 8L9 4M13 8L9 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),b=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 3V13M3 8H13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),f=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z",stroke:"currentColor",strokeWidth:"1.5",fill:"currentColor"})}),Rr={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:[void 0,"primary","outline","ghost","ghost-bordered","danger","secondary","dark"],description:"Visual style — use 'primary' for the main CTA (one per screen), 'danger' for destructive actions, 'outline'/'ghost' for secondary actions."},size:{control:"select",options:[void 0,"sm","lg"],description:"Button size — omit for default (md), use 'sm' in dense UIs like tables, 'lg' for hero CTAs."},block:{control:"boolean",description:"Stretches the button to fill its container width — use in stacked mobile layouts or full-width form footers."},icon:{control:"boolean",description:"Renders as a square icon-only button — always pair with an aria-label for accessibility."},disabled:{control:"boolean",description:"Disables the button — always communicate why via surrounding text or a tooltip so users aren't confused."}}},s={args:{children:"Button"}},i={args:{variant:"primary",children:"Primary"}},c={args:{variant:"outline",children:"Outline"}},l={args:{variant:"ghost",children:"Ghost"}},d={args:{variant:"ghost-bordered",children:"Ghost Bordered"}},u={args:{variant:"danger",children:"Danger"}},p={args:{variant:"secondary",children:"Secondary"}},g={args:{variant:"dark",children:"Dark"}},m={args:{variant:"primary",size:"sm",children:"Small"}},h={args:{variant:"primary",size:"lg",children:"Large"}},v={args:{variant:"primary",block:!0,children:"Full Width"}},y={args:{variant:"primary",disabled:!0,children:"Disabled"}},x={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(n,{children:"Default"}),r.jsx(n,{variant:"primary",children:"Primary"}),r.jsx(n,{variant:"outline",children:"Outline"}),r.jsx(n,{variant:"ghost",children:"Ghost"}),r.jsx(n,{variant:"ghost-bordered",children:"Ghost Bordered"}),r.jsx(n,{variant:"danger",children:"Danger"}),r.jsx(n,{variant:"secondary",children:"Secondary"}),r.jsx(n,{variant:"dark",children:"Dark"})]})},e={args:{variant:"primary",iconLeft:r.jsx(b,{}),children:"Create"}},a={args:{variant:"primary",iconRight:r.jsx(B,{}),children:"Next"}},t={args:{variant:"outline",icon:!0,children:r.jsx(f,{})}},o={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx("strong",{style:{width:100,fontSize:12},children:"Filled:"}),r.jsx(n,{variant:"primary",children:"Label"}),r.jsx(n,{variant:"primary",iconLeft:r.jsx(b,{}),children:"Label"}),r.jsx(n,{variant:"primary",iconRight:r.jsx(B,{}),children:"Label"}),r.jsx(n,{variant:"primary",icon:!0,"aria-label":"Favorite",children:r.jsx(f,{})})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx("strong",{style:{width:100,fontSize:12},children:"Outline:"}),r.jsx(n,{variant:"outline",children:"Label"}),r.jsx(n,{variant:"outline",iconLeft:r.jsx(b,{}),children:"Label"}),r.jsx(n,{variant:"outline",iconRight:r.jsx(B,{}),children:"Label"}),r.jsx(n,{variant:"outline",icon:!0,"aria-label":"Favorite",children:r.jsx(f,{})})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx("strong",{style:{width:100,fontSize:12},children:"Transparent:"}),r.jsx(n,{variant:"ghost",children:"Label"}),r.jsx(n,{variant:"ghost",iconLeft:r.jsx(b,{}),children:"Label"}),r.jsx(n,{variant:"ghost",iconRight:r.jsx(B,{}),children:"Label"}),r.jsx(n,{variant:"ghost",icon:!0,"aria-label":"Favorite",children:r.jsx(f,{})})]})]})};var j,L,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,I,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var D,R,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var z,G,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var P,A,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "ghost-bordered",
    children: "Ghost Bordered"
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,M,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Danger"
  }
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var V,H,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var E,N,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    children: "Dark"
  }
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var U,Z,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Small"
  }
}`,...(J=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    children: "Large"
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,$,rr;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    block: true,
    children: "Full Width"
  }
}`,...(rr=($=v.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var nr,er,ar;y.parameters={...y.parameters,docs:{...(nr=y.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled"
  }
}`,...(ar=(er=y.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var tr,or,sr;x.parameters={...x.parameters,docs:{...(tr=x.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-bordered">Ghost Bordered</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dark">Dark</Button>
    </div>
}`,...(sr=(or=x.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var ir,cr,lr,dr,ur;e.parameters={...e.parameters,docs:{...(ir=e.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconLeft: <PlusIcon />,
    children: "Create"
  }
}`,...(lr=(cr=e.parameters)==null?void 0:cr.docs)==null?void 0:lr.source},description:{story:"Icon placed before label (Icon + Label layout)",...(ur=(dr=e.parameters)==null?void 0:dr.docs)==null?void 0:ur.description}}};var pr,gr,mr,hr,vr;a.parameters={...a.parameters,docs:{...(pr=a.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconRight: <ArrowRight />,
    children: "Next"
  }
}`,...(mr=(gr=a.parameters)==null?void 0:gr.docs)==null?void 0:mr.source},description:{story:"Icon placed after label (Label + Icon layout)",...(vr=(hr=a.parameters)==null?void 0:hr.docs)==null?void 0:vr.description}}};var yr,xr,Br,br,fr;t.parameters={...t.parameters,docs:{...(yr=t.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    icon: true,
    children: <StarIcon />
  }
}`,...(Br=(xr=t.parameters)==null?void 0:xr.docs)==null?void 0:Br.source},description:{story:"Icon-only button (square)",...(fr=(br=t.parameters)==null?void 0:br.docs)==null?void 0:fr.description}}};var jr,Lr,Sr,wr,Ir;o.parameters={...o.parameters,docs:{...(jr=o.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }}>
        <strong style={{
        width: 100,
        fontSize: 12
      }}>Filled:</strong>
        <Button variant="primary">Label</Button>
        <Button variant="primary" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="primary" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="primary" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }}>
        <strong style={{
        width: 100,
        fontSize: 12
      }}>Outline:</strong>
        <Button variant="outline">Label</Button>
        <Button variant="outline" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="outline" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="outline" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
      <div style={{
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }}>
        <strong style={{
        width: 100,
        fontSize: 12
      }}>Transparent:</strong>
        <Button variant="ghost">Label</Button>
        <Button variant="ghost" iconLeft={<PlusIcon />}>
          Label
        </Button>
        <Button variant="ghost" iconRight={<ArrowRight />}>
          Label
        </Button>
        <Button variant="ghost" icon aria-label="Favorite">
          <StarIcon />
        </Button>
      </div>
    </div>
}`,...(Sr=(Lr=o.parameters)==null?void 0:Lr.docs)==null?void 0:Sr.source},description:{story:"Figma variants: Filled (primary), Outline, Transparent (ghost)",...(Ir=(wr=o.parameters)==null?void 0:wr.docs)==null?void 0:Ir.description}}};const Fr=["Default","Primary","Outline","Ghost","GhostBordered","Danger","Secondary","Dark","Small","Large","Block","Disabled","AllVariants","IconLeft","IconRight","IconOnly","FigmaVariants"];export{x as AllVariants,v as Block,u as Danger,g as Dark,s as Default,y as Disabled,o as FigmaVariants,l as Ghost,d as GhostBordered,e as IconLeft,t as IconOnly,a as IconRight,h as Large,c as Outline,i as Primary,p as Secondary,m as Small,Fr as __namedExportsOrder,Rr as default};
