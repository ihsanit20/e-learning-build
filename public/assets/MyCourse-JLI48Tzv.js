import{u as f}from"./purchase-DU_j5QcM.js";import{r as i,o as h,d as a,e,t as p,F as v,f as g,B as y,s as d,x as k,i as t,q as _,j as x}from"./index-BeNg25hN.js";const b={class:"py-4 px-4 grid md:grid-cols-4"},C={class:"md:col-span-3 space-y-2"},B={key:0,class:"error"},L={key:1},S={class:"grid md:grid-cols-3 gap-4 animate-pulse"},w={key:2},M={class:"flex justify-center mt-4"},P={key:3,class:"grid md:grid-cols-3 gap-4"},j=["src"],N={class:"title-lg mt-2"},F={__name:"MyCourse",setup(V){const u=f(),l=i([]),r=i(null),c=i(!0);return h(async()=>{try{await u.fetchPurchases(),l.value=u.purchases}catch(m){r.value=m}finally{c.value=!1}}),(m,s)=>{const n=k("RouterLink");return t(),a("div",b,[e("div",C,[s[5]||(s[5]=e("h1",{class:"title-xl text-center"},"My Courses",-1)),r.value?(t(),a("div",B,p(r.value),1)):c.value?(t(),a("div",L,[e("div",S,[(t(),a(v,null,g(3,o=>e("div",{key:o,class:"card-bg p-4"},s[0]||(s[0]=[e("div",{class:"w-full h-48 bg-gray-200"},null,-1),e("div",{class:"h-6 bg-gray-200 mt-2 rounded"},null,-1),e("div",{class:"h-10 bg-gray-200 mt-2 rounded"},null,-1)]))),64))])])):l.value.length===0?(t(),a("div",w,[s[2]||(s[2]=e("p",{class:"text-center"},"You have no courses yet.",-1)),e("div",M,[y(n,{to:"/courses",class:"btn-2"},{default:d(()=>s[1]||(s[1]=[_("Go to Course Page")])),_:1})])])):(t(),a("div",P,[(t(!0),a(v,null,g(l.value,o=>(t(),x(n,{to:{name:"My Course Details",params:{id:o.id}},key:o.id,class:"card-bg p-4"},{default:d(()=>[e("img",{src:o.thumbnail,alt:"",class:"w-full object-cover aspect-video"},null,8,j),e("h2",N,p(o.title),1),s[4]||(s[4]=e("button",{class:"btn-2"},"Start Learning",-1)),y(n,{to:{name:"Checkout",params:{id:o.id},query:{for:"someone"}},class:"btn-link mt-2 mx-auto"},{default:d(()=>s[3]||(s[3]=[_(" Purchase for someone else ")])),_:2},1032,["to"])]),_:2},1032,["to"]))),128))]))]),s[6]||(s[6]=e("div",{class:"md:col-span-1"},[e("h4",{class:"title-lg text-center"},"Other Services")],-1))])}}};export{F as default};
