import{u as g}from"./purchase-BbnDhQ2r.js";import{r as l,o as p,s as v,d as t,e,f as s,t as d,F as _,g as u,i as m,z as y}from"./index-BrS3nTk0.js";const f={class:"py-4 px-4 grid md:grid-cols-4"},k={class:"md:col-span-3 space-y-2"},b=s("h1",{class:"title-xl text-center"},"My Courses",-1),x={key:0,class:"error"},C={key:1},L={class:"grid md:grid-cols-3 gap-4 animate-pulse"},S=s("div",{class:"w-full h-48 bg-gray-200"},null,-1),w=s("div",{class:"h-6 bg-gray-200 mt-2 rounded"},null,-1),B=s("div",{class:"h-10 bg-gray-200 mt-2 rounded"},null,-1),M=[S,w,B],D={key:2},F=s("p",{class:"text-center"},"You have no courses yet.",-1),P=[F],R={key:3,class:"grid md:grid-cols-3 gap-4"},j=["src"],z={class:"title-lg mt-2"},E=s("button",{class:"btn-2"},"Start Learning",-1),N=s("div",{class:"md:col-span-1"},[s("h4",{class:"title-lg text-center"},"Other Services")],-1),A={__name:"MyCourse",setup(O){const n=g(),a=l([]),c=l(null),r=l(!0);return p(async()=>{try{await n.fetchPurchases(),a.value=n.purchases}catch(i){c.value=i}finally{r.value=!1}}),(i,V)=>{const h=v("RouterLink");return t(),e("div",f,[s("div",k,[b,c.value?(t(),e("div",x,d(c.value),1)):r.value?(t(),e("div",C,[s("div",L,[(t(),e(_,null,u(3,o=>s("div",{key:o,class:"card-bg p-4"},M)),64))])])):a.value.length===0?(t(),e("div",D,P)):(t(),e("div",R,[(t(!0),e(_,null,u(a.value,o=>(t(),m(h,{to:{name:"My Course Details",params:{id:o.id}},key:o.id,class:"card-bg p-4"},{default:y(()=>[s("img",{src:o.thumbnail,alt:"",class:"w-full object-cover aspect-video"},null,8,j),s("h2",z,d(o.title),1),E]),_:2},1032,["to"]))),128))]))]),N])}}};export{A as default};