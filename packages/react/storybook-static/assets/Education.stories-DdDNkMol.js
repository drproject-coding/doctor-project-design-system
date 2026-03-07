import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-ZH-6pyQh.js";import{A as u,T as v,S as j}from"./Layout-5qMifhuW.js";import{C as l}from"./Card-CZSjc6Mh.js";import{B as d}from"./Badge-Cyoi2Itd.js";import{T as s}from"./Tag-iXJrEwp9.js";import{A as p}from"./Avatar-2B6o_Sxh.js";import{P as S}from"./Pagination-CaIm73j9.js";import{g as C,d as z,e as B,f as W}from"./banking-cGtNb0OW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chunk-KZPPZA2C-BtqgzDBU.js";const L={title:"Pages/Education",parameters:{layout:"fullscreen"}},b=()=>n.jsxs("div",{style:{padding:"16px",height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("h2",{style:{fontSize:"18px",fontWeight:800,marginBottom:"32px",fontFamily:"var(--drp-font-primary)",letterSpacing:"0.08em"},children:"BRUDDLE"}),n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:B.map(e=>{const i=e.label==="Explore Courses";return n.jsxs("a",{href:e.href,style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",textDecoration:"none",color:"inherit",fontFamily:"var(--drp-font-primary)",fontSize:"14px",fontWeight:600,background:i?"rgba(99,29,237,0.08)":"transparent",borderLeft:i?"3px solid var(--drp-purple)":"3px solid transparent"},children:[n.jsx("span",{style:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:e.iconSvg}}),n.jsx("span",{children:e.label}),e.badge&&n.jsx(d,{variant:"filled",className:"drp-badge--filled",children:e.badge})]},e.label)})}),n.jsxs("div",{style:{marginTop:"32px"},children:[n.jsx("p",{style:{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",marginBottom:"12px",fontFamily:"var(--drp-font-primary)"},children:"Team Members"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[W.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(p,{size:"sm",src:e.avatar}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:e.name})]},e.name)),n.jsx("a",{href:"#",style:{fontSize:"12px",color:"var(--drp-purple)",fontWeight:600,textDecoration:"none",fontFamily:"var(--drp-font-primary)"},children:"See More"})]})]}),n.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px solid #eee",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(p,{size:"sm",initials:"HR"}),n.jsx("span",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)"},children:"Henry Richardson"})]})]}),T=()=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 24px"},children:[n.jsx("h1",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",textTransform:"uppercase",letterSpacing:"0.05em",margin:0},children:"Courses"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsx(d,{variant:"primary",children:"2"}),n.jsx(p,{size:"sm",initials:"HR"})]})]}),F=({heading:e,searchPlaceholder:i,searchValue:r,helperText:t})=>n.jsxs("div",{style:{background:"linear-gradient(135deg, #631DED 0%, #FF6C01 50%, #FAE8A4 100%)",padding:"48px 32px",marginBottom:"24px",border:"2px solid var(--drp-black)",textAlign:"center"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:800,fontFamily:"var(--drp-font-primary)",color:"#fff",margin:"0 0 24px"},children:e}),n.jsxs("div",{style:{maxWidth:"520px",margin:"0 auto",display:"flex",gap:"0"},children:[n.jsx("input",{className:"drp-input",placeholder:i,defaultValue:r,style:{flex:1,border:"2px solid var(--drp-black)",borderRight:"none",padding:"12px 16px",fontSize:"14px",fontFamily:"var(--drp-font-primary)"}}),n.jsx("button",{style:{background:"var(--drp-purple)",border:"2px solid var(--drp-black)",color:"#fff",padding:"12px 20px",cursor:"pointer",display:"flex",alignItems:"center"},dangerouslySetInnerHTML:{__html:'<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="7"/><line x1="14" y1="14" x2="18" y2="18"/></svg>'}})]}),n.jsx("p",{style:{color:"rgba(255,255,255,0.85)",fontSize:"13px",fontFamily:"var(--drp-font-primary)",marginTop:"12px"},dangerouslySetInnerHTML:{__html:t}})]}),k=[{title:"Data Science",count:64,duration:"3-6 months",color:"#631DED"},{title:"Business Management",count:48,duration:"4-8 months",color:"#FF6C01"},{title:"Development",count:72,duration:"2-6 months",color:"#98E9AB"},{title:"Technologies",count:39,duration:"3-5 months",color:"#E99898"},{title:"Computer Science",count:56,duration:"6-12 months",color:"#FAE8A4"},{title:"Digital Marketing",count:31,duration:"2-4 months",color:"#C4A0FF"}],a={render:()=>{const[e,i]=h.useState(1);return n.jsx("div",{style:{height:"100vh"},children:n.jsx(u,{sidebar:n.jsx(j,{children:n.jsx(b,{})}),topbar:n.jsx(v,{children:n.jsx(T,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx(F,{heading:"Explore Topics and Skills",searchPlaceholder:"What do you want to learn?",helperText:"For example: <strong>UI and UX development</strong>"}),n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Trending today"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:k.map(r=>n.jsxs(l,{children:[n.jsx("div",{style:{height:"120px",background:r.color,border:"1px solid var(--drp-black)",marginBottom:"12px",display:"flex",alignItems:"flex-start",padding:"10px"},children:n.jsxs(d,{variant:"filled",children:[r.count," Courses"]})}),n.jsx("p",{style:{fontSize:"16px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 4px"},children:r.title}),n.jsx("p",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)",margin:0},children:r.duration})]},r.title))})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Earn Your Degree"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"24px"},children:z.map(r=>n.jsxs(l,{children:[n.jsx("div",{style:{height:"140px",background:`url(${r.image}) center/cover`,border:"1px solid var(--drp-black)",marginBottom:"12px"}}),n.jsx("p",{style:{fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 4px",lineHeight:1.3},children:r.title}),n.jsx("p",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)",margin:"0 0 8px"},children:r.institution}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(s,{color:"purple",filled:!0,children:r.type}),n.jsx("span",{style:{fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:r.duration})]})]},r.id))}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(S,{currentPage:e,totalPages:5,onPageChange:i})})]})]})})})}},E=["Frontend","Development & Operations","Mobile Design","Backend","UI/UX","React","Cloud Computing","DevOps"],o={render:()=>{const[e,i]=h.useState(1),r=C(6);return n.jsx("div",{style:{height:"100vh"},children:n.jsx(u,{sidebar:n.jsx(j,{children:n.jsx(b,{})}),topbar:n.jsx(v,{children:n.jsx(T,{})}),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx(F,{heading:"Software Development",searchPlaceholder:"What do you want to learn?",searchValue:"Mobile and Web Design",helperText:"For example: <strong>UI and UX development</strong>"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("p",{style:{fontSize:"13px",fontWeight:600,fontFamily:"var(--drp-font-primary)",color:"#999",marginBottom:"10px"},children:"Suggested courses searching"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:E.map(t=>n.jsx(s,{color:"light",children:t},t))})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,fontFamily:"var(--drp-font-primary)",marginBottom:"16px"},children:"Earn Your Degree"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"24px"},children:r.map(t=>n.jsxs(l,{children:[n.jsx("div",{style:{height:"140px",background:`url(${t.image}) center/cover`,border:"1px solid var(--drp-black)",marginBottom:"12px"}}),n.jsx("p",{style:{fontSize:"14px",fontWeight:700,fontFamily:"var(--drp-font-primary)",margin:"0 0 4px",lineHeight:1.3},children:t.title}),n.jsx("p",{style:{fontSize:"12px",color:"#999",fontFamily:"var(--drp-font-primary)",margin:"0 0 8px"},children:t.institution}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(s,{color:"purple",filled:!0,children:t.type}),n.jsx("span",{style:{fontSize:"11px",color:"#999",fontFamily:"var(--drp-font-primary)"},children:t.duration})]})]},t.id))}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(S,{currentPage:e,totalPages:4,onPageChange:i})})]})]})})})}};var g,x,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <EducationSidebar />
            </Sidebar>} topbar={<Topbar>
              <EducationTopbar />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Hero */}
            <HeroSection heading="Explore Topics and Skills" searchPlaceholder="What do you want to learn?" helperText="For example: <strong>UI and UX development</strong>" />

            {/* Trending today */}
            <div style={{
            marginBottom: "32px"
          }}>
              <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)",
              marginBottom: "16px"
            }}>
                Trending today
              </h3>
              <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px"
            }}>
                {trendingTopics.map(topic => <Card key={topic.title}>
                    <div style={{
                  height: "120px",
                  background: topic.color,
                  border: "1px solid var(--drp-black)",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "10px"
                }}>
                      <Badge variant="filled">{topic.count} Courses</Badge>
                    </div>
                    <p style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 4px"
                }}>
                      {topic.title}
                    </p>
                    <p style={{
                  fontSize: "12px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)",
                  margin: 0
                }}>
                      {topic.duration}
                    </p>
                  </Card>)}
              </div>
            </div>

            {/* Earn Your Degree */}
            <div>
              <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)",
              marginBottom: "16px"
            }}>
                Earn Your Degree
              </h3>
              <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginBottom: "24px"
            }}>
                {courses.map(course => <Card key={course.id}>
                    <div style={{
                  height: "140px",
                  background: \`url(\${course.image}) center/cover\`,
                  border: "1px solid var(--drp-black)",
                  marginBottom: "12px"
                }} />
                    <p style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 4px",
                  lineHeight: 1.3
                }}>
                      {course.title}
                    </p>
                    <p style={{
                  fontSize: "12px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 8px"
                }}>
                      {course.institution}
                    </p>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                      <Tag color="purple" filled>
                        {course.type}
                      </Tag>
                      <span style={{
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {course.duration}
                      </span>
                    </div>
                  </Card>)}
              </div>
              <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
              </div>
            </div>
          </div>
        </AppShell>
      </div>;
  }
}`,...(c=(x=a.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var m,y,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const categoryCourses = generateCourses(6);
    return <div style={{
      height: "100vh"
    }}>
        <AppShell sidebar={<Sidebar>
              <EducationSidebar />
            </Sidebar>} topbar={<Topbar>
              <EducationTopbar />
            </Topbar>}>
          <div style={{
          padding: "24px"
        }}>
            {/* Hero */}
            <HeroSection heading="Software Development" searchPlaceholder="What do you want to learn?" searchValue="Mobile and Web Design" helperText="For example: <strong>UI and UX development</strong>" />

            {/* Suggested courses searching */}
            <div style={{
            marginBottom: "24px"
          }}>
              <p style={{
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "var(--drp-font-primary)",
              color: "#999",
              marginBottom: "10px"
            }}>
                Suggested courses searching
              </p>
              <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}>
                {suggestedTags.map(t => <Tag key={t} color="light">
                    {t}
                  </Tag>)}
              </div>
            </div>

            {/* Earn Your Degree */}
            <div>
              <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "var(--drp-font-primary)",
              marginBottom: "16px"
            }}>
                Earn Your Degree
              </h3>
              <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginBottom: "24px"
            }}>
                {categoryCourses.map(course => <Card key={course.id}>
                    <div style={{
                  height: "140px",
                  background: \`url(\${course.image}) center/cover\`,
                  border: "1px solid var(--drp-black)",
                  marginBottom: "12px"
                }} />
                    <p style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 4px",
                  lineHeight: 1.3
                }}>
                      {course.title}
                    </p>
                    <p style={{
                  fontSize: "12px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)",
                  margin: "0 0 8px"
                }}>
                      {course.institution}
                    </p>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                      <Tag color="purple" filled>
                        {course.type}
                      </Tag>
                      <span style={{
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)"
                  }}>
                        {course.duration}
                      </span>
                    </div>
                  </Card>)}
              </div>
              <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Pagination currentPage={page} totalPages={4} onPageChange={setPage} />
              </div>
            </div>
          </div>
        </AppShell>
      </div>;
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const X=["CoursesExplore","CoursesCategory"];export{o as CoursesCategory,a as CoursesExplore,X as __namedExportsOrder,L as default};
