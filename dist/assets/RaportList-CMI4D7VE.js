import{j as e,r as m,u as V,a as E,b as k,c as S,d as C,e as q,f as B,g as I,h as M}from"./index-CGGWGBYj.js";import{B as z,a as A}from"./ButtonIcon-DMK2Ewzf.js";import{P as n}from"./index-DRl8RBhC.js";const x=({raport:t,handleDetail:r})=>e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:t.chapter},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:6,columnNumber:7},void 0),e.jsxDEV("td",{children:t.verse},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:7,columnNumber:7},void 0),e.jsxDEV("td",{children:[t.status&&e.jsxDEV("span",{className:"status success"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:10,columnNumber:27},void 0),!t.status&&e.jsxDEV("span",{className:"status fail"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:11,columnNumber:28},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:9,columnNumber:7},void 0),e.jsxDEV("td",{style:{cursor:"pointer"},onClick:()=>{r(t.id)},children:t.detail.split("").slice(0,6).join("")+"..."},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:13,columnNumber:7},void 0)]},t._id,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/Raport.jsx",lineNumber:5,columnNumber:5},void 0);x.propTypes={raport:n.object.isRequired,handleDetail:n.func.isRequired};const j=({setScreenNR:t,handleAdd:r})=>{const[p,l]=m.useState(""),[d,i]=m.useState(""),[u,N]=m.useState(""),[c,f]=m.useState(!0);return e.jsxDEV("div",{className:"container-raport-new",children:e.jsxDEV("form",{className:"wrapper",onSubmit:o=>r(o,{chapter:p,verse:d,detail:u,status:c}),children:[e.jsxDEV("span",{className:"close",onClick:()=>t(!1),children:"x"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:19,columnNumber:9},void 0),e.jsxDEV("div",{style:{textAlign:"center"},children:e.jsxDEV("h3",{children:"New"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:23,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:22,columnNumber:9},void 0),e.jsxDEV("div",{className:"inputBox",children:[e.jsxDEV("input",{name:"chapter",type:"number",required:"required",min:0,value:p,onChange:o=>l(o.target.value)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:27,columnNumber:11},void 0),e.jsxDEV("span",{children:"Chapter"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:35,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:26,columnNumber:9},void 0),e.jsxDEV("div",{className:"inputBox",children:[e.jsxDEV("input",{name:"verse",type:"number",required:"required",min:0,value:d,onChange:o=>i(o.target.value)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:38,columnNumber:11},void 0),e.jsxDEV("span",{children:"Verse"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:46,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:37,columnNumber:9},void 0),e.jsxDEV("div",{className:"inputBox",children:[e.jsxDEV("input",{name:"detail",type:"text",required:"required",value:u,onChange:o=>N(o.target.value)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:49,columnNumber:11},void 0),e.jsxDEV("span",{children:"detail"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:56,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:48,columnNumber:9},void 0),e.jsxDEV("div",{className:"input-status",children:[e.jsxDEV("label",{htmlFor:"status",children:"Mengulang?"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:59,columnNumber:11},void 0),e.jsxDEV("input",{id:"status",type:"checkbox",checked:!c,onChange:()=>{f(o=>!o)}},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:60,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:58,columnNumber:9},void 0),e.jsxDEV("button",{className:"enter",children:"Add"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:70,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/newRaport/NewRaport.jsx",lineNumber:14,columnNumber:5},void 0)};j.propTypes={setScreenNR:n.func.isRequired,handleAdd:n.func.isRequired};const P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='48px'%20height='48px'%3e%3cg%20fill='%23fa5252'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.33333,5.33333)'%3e%3cpath%20d='M20.5,4c-0.49034,-0.00628%20-0.95279,0.22749%20-1.23848,0.62606c-0.28569,0.39856%20-0.35854,0.9116%20-0.19511,1.37394h-4.42578c-1.83725,0%20-3.5577,0.91945%20-4.57617,2.44922l-2.36719,3.55078h-0.19727c-0.54095,-0.00765%20-1.04412,0.27656%20-1.31683,0.74381c-0.27271,0.46725%20-0.27271,1.04514%200,1.51238c0.27271,0.46725%200.77588,0.75146%201.31683,0.74381h0.76367c0.12867,0.01945%200.25932,0.02208%200.38867,0.00781l2.47266,23.07813c0.29835,2.78234%202.67084,4.91406%205.46875,4.91406h14.81055c2.79791,0%205.1704,-2.13172%205.46875,-4.91406l2.47461,-23.07813c0.12677,0.01359%200.25475,0.01097%200.38086,-0.00781h0.77148c0.54095,0.00765%201.04412,-0.27656%201.31683,-0.74381c0.27271,-0.46725%200.27271,-1.04514%200,-1.51238c-0.27271,-0.46725%20-0.77588,-0.75146%20-1.31683,-0.74381h-0.19727l-2.36719,-3.55078c-1.01929,-1.52894%20-2.73955,-2.44922%20-4.57617,-2.44922h-4.42578c0.16343,-0.46234%200.09058,-0.97538%20-0.19511,-1.37394c-0.28569,-0.39856%20-0.74814,-0.63234%20-1.23848,-0.62606zM14.64063,9h18.71875c0.83737,0%201.61537,0.41622%202.08008,1.11328l1.25781,1.88672h-25.39453l1.25781,-1.88672c0.00065,-0.00065%200.0013,-0.0013%200.00195,-0.00195c0.46348,-0.69619%201.23938,-1.11133%202.07813,-1.11133zM11.66992,15h24.66016l-2.43945,22.76563c-0.13765,1.28366%20-1.19624,2.23438%20-2.48633,2.23438h-14.81055c-1.29009,0%20-2.34673,-0.95071%20-2.48437,-2.23437z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",h=({studentId:t,raport:r,setScreen:p,handleDelete:l})=>{const d=i=>{i.target.className==="container-raport-detail"&&p(!1)};return e.jsxDEV("div",{className:"container-raport-detail",onClick:d,children:e.jsxDEV("div",{className:"wrapper",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{children:"Detail"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:18,columnNumber:11},void 0),e.jsxDEV("button",{className:"delete",onClick:()=>l({id:r.id,studentId:t}),children:e.jsxDEV("img",{src:P},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:23,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:19,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:17,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{children:["Chapter: ",r.chapter]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:27,columnNumber:11},void 0),e.jsxDEV("p",{children:["Verse: ",r.verse]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:28,columnNumber:11},void 0),r.status&&e.jsxDEV("p",{className:"success",children:"Lulus"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:29,columnNumber:29},void 0),!r.status&&e.jsxDEV("p",{className:"failed",children:"Mengulang"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:30,columnNumber:30},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:26,columnNumber:9},void 0),e.jsxDEV("p",{children:r.detail},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:33,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:16,columnNumber:7},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/components/raportDetail/RaportDetail.jsx",lineNumber:15,columnNumber:5},void 0)};h.propTypes={studentId:n.number.isRequired,raport:n.object.isRequired,setScreen:n.func.isRequired,handleDelete:n.func.isRequired};const _=()=>{const[t,r]=m.useState(!1),[p,l]=m.useState({}),[d,i]=m.useState(!1),u=V(),N=E(),c=k(),{username:f}=S(),o=C(),a=q(s=>B(s,f)),w=s=>{const b=a.raport.find(D=>D.id===+s);l(b),r(!0)},R=async(s,b)=>{s.preventDefault();const y=a.raport.length+1;u(I({studentId:a.id,id:y,...b})),alert("Record baru berhasil ditambahkan"),i(!1)},g=s=>{confirm("anda yakin ingin menghapus record ini?")&&(u(M(s)),alert("Record berhasil dihapus"),r(!1))},v=c.state&&c.state.from.pathname;let L=a!=null&&a.raport.length?a.raport.map(s=>e.jsxDEV(x,{raport:s,handleDetail:w},s.id,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:70,columnNumber:9},void 0)):null;return e.jsxDEV("div",{className:"container-raport",children:[e.jsxDEV("div",{className:"top",children:[e.jsxDEV("h1",{className:"username",children:[e.jsxDEV("span",{children:f},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:78,columnNumber:11},void 0)," record"]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV("button",{className:"back",onClick:()=>N(v,{replace:!0}),children:e.jsxDEV("p",{children:"<"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:84,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:80,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:76,columnNumber:7},void 0),e.jsxDEV("table",{className:"table-raport",children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV("th",{children:"Chapter"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:90,columnNumber:13},void 0),e.jsxDEV("th",{children:"Verse"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:91,columnNumber:13},void 0),e.jsxDEV("th",{children:"Status"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:92,columnNumber:13},void 0),e.jsxDEV("th",{children:"Detail"},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:93,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:89,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:88,columnNumber:9},void 0),e.jsxDEV("tbody",{children:L},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:96,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:87,columnNumber:7},void 0),t&&e.jsxDEV(h,{raport:p,studentId:a.id,setScreen:r,handleDelete:g},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:100,columnNumber:9},void 0),d&&e.jsxDEV(j,{studentId:a.id,setScreenNR:i,handleAdd:R},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:109,columnNumber:9},void 0),(o==null?void 0:o.isMentor)&&e.jsxDEV("div",{onClick:()=>i(!0),children:e.jsxDEV(z,{text:"NEW",children:e.jsxDEV("img",{src:A},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:119,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:118,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:117,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/my website/raport-front-end-demo/src/pages/raport/raportList/RaportList.jsx",lineNumber:75,columnNumber:5},void 0)};export{_ as default};
