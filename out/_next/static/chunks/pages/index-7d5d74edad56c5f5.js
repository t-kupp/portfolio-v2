(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3792:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(225)}])},225:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>z});var r=s(4848);function n(){return(0,r.jsx)("div",{className:"flex flex-col justify-center py-64 lg:sticky lg:top-0 lg:h-screen lg:w-[50%] 2xl:py-10",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-header text-4xl",children:"Jan-Thorge Kupper"}),(0,r.jsx)("div",{className:"text-description text-lg",children:"Frontend Developer"})]})})}var l=s(6540);function i(){let[e,t]=(0,l.useState)("about");return(0,l.useEffect)(()=>{let e=document.querySelectorAll("#about, #projects, #contact"),s=()=>{let s=null;e.forEach(e=>{let t=e.getBoundingClientRect();t.top>=0&&t.top<.5*window.innerHeight&&(s=e.id)}),null!=s&&t(s)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),(0,r.jsx)("div",{className:"fixed left-0 z-50 flex w-8 items-center justify-center 2xl:w-[40px]",children:(0,r.jsxs)("ul",{className:"text-description flex h-full items-center justify-center text-center text-sm [writing-mode:sideways-lr]",children:[(0,r.jsx)(a,{number:"03. ",title:"CNT",fullTitle:"contact",href:"#contact",isActive:"contact"===e}),(0,r.jsx)(c,{}),(0,r.jsx)(a,{number:"02. ",title:"EXP",fullTitle:"projects",href:"#projects",isActive:"projects"===e}),(0,r.jsx)(c,{}),(0,r.jsx)(a,{number:"01. ",title:"ABT",fullTitle:"about",href:"#about",isActive:"about"===e})]})})}function a(e){let{number:t,title:s,href:n,fullTitle:i,isActive:a}=e,[c,o]=(0,l.useState)(!1);return(0,r.jsxs)("a",{className:"my-2 flex h-[100px] items-center justify-center gap-1 px-[1px] transition-[background-color,height] duration-300 ".concat(a?"h-[128px] bg-myDark text-myLight dark:bg-myLight dark:text-myDarker":"hover-effect hover:h-[128px]"),href:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[(0,r.jsx)("span",{className:"transition-opacity duration-300 ".concat(c||a?"opacity-0":"opacity-100"),children:!c&&!a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"text-spaced text-sm",children:t})," ",s]})}),(0,r.jsx)("span",{className:"transition-opacity duration-300 ".concat(c||a?"opacity-100":"opacity-0"),children:(c||a)&&i})]})}function c(){return(0,r.jsx)("div",{className:"h-full max-h-[100px] w-[0.8px] bg-myDark transition-colors duration-500 dark:bg-myLight"})}var o=s(6441);function x(e){let{size:t}=e;return(0,r.jsx)("div",{className:"".concat({sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4"}[t]||"h-3 w-3"," animate-blink group-hover:animate-blinkFast bg-myDark dark:bg-myLight")})}function d(e){let{size:t}=e,s={sm:"8",md:"12",lg:"16"};return(0,r.jsx)("svg",{className:"stroke-myDark opacity-30 group-hover:opacity-100 dark:stroke-myLight",xmlns:"http://www.w3.org/2000/svg",width:s[t]||"12",height:s[t]||"12",viewBox:"0 0 13 13",children:(0,r.jsxs)("g",{transform:"translate(-1 -1)",children:[(0,r.jsx)("path",{d:"M1.5,1.5h12v12H1.5Z",fill:"none",strokeWidth:"1",fillRule:"evenodd"}),(0,r.jsx)("path",{d:"M2.5,2.5,14.231,14.231",transform:"translate(-0.731 -0.731)",fill:"none",strokeWidth:"1",fillRule:"evenodd"})]})})}var h=s(1106),m=s.n(h);function u(e){let{title:t,description:s,year:n,href:i}=e,a=(0,l.useRef)(null),c=(0,l.useRef)(null);return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)(m(),{className:"group flex min-h-40 max-w-2xl lg:min-h-28",href:i,target:"_blank",onMouseEnter:()=>{a.current&&a.current(),c.current&&c.current()},children:[(0,r.jsxs)("div",{className:"mr-12 w-full duration-200",children:[(0,r.jsxs)("div",{className:"mb-4 flex flex-col gap-2 lg:flex-row",children:[(0,r.jsx)("h1",{className:"text-header lg:text-nowrap",children:(0,r.jsx)(p,{text:t,replay:e=>a.current=e})}),(0,r.jsxs)("p",{className:"text-spaced pt-2 text-base font-light",children:["/ ",n]})]}),(0,r.jsx)("p",{className:"text-description text-sm",children:(0,r.jsx)(p,{text:s,replay:e=>c.current=e})})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 pt-1",children:[(0,r.jsx)(d,{size:"md"}),(0,r.jsx)(d,{size:"md"}),(0,r.jsx)(x,{size:"md"})]})]}),(0,r.jsx)("div",{className:"mb-12 border-b border-myDark pt-16 opacity-20 dark:opacity-40"})]})}function p(e){let{text:t,replay:s}=e,{ref:n,replay:l}=(0,o.x)({playOnMount:!1,text:t,range:[65,125],speed:1,tick:2,step:5,scramble:10,seed:2,chance:.8,overdrive:!1,overflow:!1});return s(l),(0,r.jsx)("span",{ref:n})}var f=s(4811),j=s(2503),g=s(2727);function v(){let{techStack:e}=(0,l.useContext)(g.I);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex items-center gap-2 text-xl",children:e.map((e,t)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("i",{className:e.deviconName}),(0,r.jsx)(j.m_,{anchorSelect:".".concat(e.deviconName),children:(0,r.jsx)("p",{className:"text-xs",children:e.name})})]},t))})})}var y=s(4961);function w(){let{projects:e}=(0,l.useContext)(f.v);return(0,r.jsxs)("div",{className:"flex flex-col lg:w-[50%] lg:py-64",children:[(0,r.jsxs)(k,{id:"about",title:"About",children:[(0,r.jsxs)("div",{className:"text-description",children:["I'm Jan, a Frontend student at Chas Academy in Stockholm, Sweden.",(0,r.jsx)("br",{}),"I love what I do and I'm learning and gaining new skills everyday.",(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{}),"These are some of the technologies I'm working with:",(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{})]}),(0,r.jsx)(v,{})]}),(0,r.jsx)(k,{id:"projects",title:"Projects",children:(0,r.jsx)("div",{className:"flex flex-col",children:e.map(e=>(0,r.jsx)(u,{title:e.title,year:e.year,description:e.description,href:e.href}))})}),(0,r.jsxs)(k,{id:"contact",title:"Contact",children:[(0,r.jsx)(b,{title:"GitHub",href:"https://github.com/t-kupp"}),(0,r.jsx)(b,{title:"LinkedIn",href:"https://www.linkedin.com/in/jan-thorge-kupper/"})]})]})}function b(e){let{href:t,title:s}=e;return(0,r.jsxs)(m(),{className:"group mb-1 flex",href:t,children:[(0,r.jsx)("div",{className:"my-auto mr-1 h-[1px] w-0 bg-myDark opacity-80 transition-[width] duration-300 group-hover:w-3 dark:bg-myLight"}),(0,r.jsx)("span",{className:"text-description group-hover:brightness-75 dark:group-hover:brightness-125",children:s})," ",(0,r.jsx)(y.PFN,{size:14})]})}function k(e){let{title:t,children:s,id:n}=e;return(0,r.jsxs)("div",{id:n,className:"min-h-64 pb-20 lg:min-h-96 lg:pb-20",children:[(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("div",{className:"h-7 w-1 bg-myDark"}),(0,r.jsx)("h1",{className:"text-spaced mb-12 text-lg",children:t})]}),s]})}function N(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"blur-overlay pointer-events-none fixed left-0 top-0 h-screen w-screen"}),(0,r.jsx)("div",{className:"pointer-events-none fixed left-0 top-0 h-screen w-screen p-8 2xl:p-10",children:(0,r.jsx)("div",{className:"relative h-full w-full border border-myDark dark:border-myLight",children:(0,r.jsx)("div",{className:"vignette"})})})]})}var E=s(7037);function L(){return(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("a",{href:"https://github.com/t-kupp",target:"_blank",children:(0,r.jsx)(E.hL4,{})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/jan-thorge-kupper/",target:"_blank",children:(0,r.jsx)(E.QEs,{})}),(0,r.jsx)("a",{href:"mailto:kupper.thorge@gmail.com   ",children:(0,r.jsx)(E.T35,{})})]})}function _(){return(0,r.jsxs)("div",{className:"text-description flex items-center gap-1 text-xs font-light",children:[(0,r.jsx)("span",{className:"text-spaced text-xs",children:"2025"})," Jan-Thorge Kupper"]})}function D(){return(0,r.jsxs)("div",{className:"fixed bottom-0 z-50 flex h-8 w-full items-center justify-between px-8 2xl:h-[40px] 2xl:px-[38px]",children:[(0,r.jsx)(L,{}),(0,r.jsx)(_,{})]})}function T(){let[e,t]=(0,l.useState)("light");return(0,l.useEffect)(()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},[]),(0,l.useEffect)(()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e),"dark"===e?(document.documentElement.style.setProperty("--rt-color-dark","var(--myLight)"),document.documentElement.style.setProperty("--rt-color-white","var(--myDarker)")):(document.documentElement.style.setProperty("--rt-color-dark","var(--myDark)"),document.documentElement.style.setProperty("--rt-color-white","var(--myLight)"))},[e]),(0,r.jsx)("div",{children:(0,r.jsxs)("button",{className:"text-description flex items-center gap-2 text-sm uppercase opacity-100",onClick:function(){"dark"===e?t("light"):t("dark")},children:[(0,r.jsxs)("div",{className:"flex items-center",children:["dark"===e?"□":"■","Light"]}),(0,r.jsxs)("div",{className:"flex items-center",children:["light"===e?"□":"■","Dark"]})]})})}function C(){return(0,r.jsx)("div",{className:"fixed top-0 z-50 flex h-8 w-full items-center justify-between px-8 2xl:h-[40px] 2xl:px-[38px]",children:(0,r.jsx)(T,{})})}function P(){return(0,r.jsx)("div",{className:"pointer-events-none fixed -z-50 h-screen w-screen p-8 2xl:p-10",children:(0,r.jsx)("div",{className:"h-full w-full bg-[url('/plasticHead.png')] bg-cover bg-center opacity-15 blur-[1px] grayscale dark:opacity-5"})})}function z(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(N,{}),(0,r.jsx)(P,{}),(0,r.jsx)(C,{}),(0,r.jsx)(D,{}),(0,r.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col gap-12 px-12 lg:flex-row lg:py-0 2xl:px-14",children:[(0,r.jsx)(n,{}),(0,r.jsx)(w,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[690,563,116,43,636,593,792],()=>t(3792)),_N_E=e.O()}]);