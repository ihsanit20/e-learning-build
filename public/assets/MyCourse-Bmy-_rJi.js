import{u as C}from"./purchase-BqYyozeD.js";import{Q as L,P as R,r as d,I as w,x as o,z as e,A as f,C as g,F as _,G as h,D as c,L as r,Y as B,y as s,W as m,O as N}from"./vue-BP9P6hCg.js";import"./index-C-7Rzlh_.js";import"./vendor-PJuFQbji.js";const P={class:"my-container"},M={class:"md:col-span-full space-y-2"},S={key:0,class:"error"},V={key:1},j={class:"grid md:grid-cols-3 gap-4 animate-pulse"},D={key:2},A={class:"flex justify-center mt-4"},E={key:3,class:"grid md:grid-cols-3 gap-4"},F=["src"],G={class:"title-lg mt-2"},Y={key:4,class:"flex justify-center pt-4"},Q={__name:"MyCourse",props:{limit:{type:Number,default:0},loadRelations:{type:Boolean,default:!1}},setup(k){const n=k,b=R(),x=L(()=>b.path),p=C(),i=d([]),u=d(null),y=d(!0);return w(async()=>{try{await p.fetchPurchases({limit:n.limit?n.limit:null,with:n.loadRelations}),i.value=p.purchases}catch(v){u.value=v}finally{y.value=!1}}),(v,t)=>{const l=B("RouterLink");return s(),o("div",P,[e("div",M,[t[6]||(t[6]=e("h1",{class:"title-xl text-center"},"My Courses",-1)),u.value?(s(),o("div",S,g(u.value),1)):y.value?(s(),o("div",V,[e("div",j,[(s(),o(_,null,h(3,a=>e("div",{key:a,class:"card-bg p-4"},t[0]||(t[0]=[e("div",{class:"w-full h-48 bg-gray-200"},null,-1),e("div",{class:"h-6 bg-gray-200 mt-2 rounded"},null,-1),e("div",{class:"h-10 bg-gray-200 mt-2 rounded"},null,-1)]))),64))])])):i.value.length===0?(s(),o("div",D,[t[2]||(t[2]=e("p",{class:"text-center"},"You have no courses yet.",-1)),e("div",A,[c(l,{to:"/courses",class:"btn-2"},{default:r(()=>t[1]||(t[1]=[m("Go to Course Page")])),_:1})])])):(s(),o("div",E,[(s(!0),o(_,null,h(i.value,a=>(s(),N(l,{to:{name:"My Course Details",params:{id:a.id}},key:a.id,class:"card-bg p-4"},{default:r(()=>[e("img",{src:a.thumbnail,alt:"",class:"w-full object-cover aspect-video"},null,8,F),e("h2",G,g(a.title),1),t[4]||(t[4]=e("button",{class:"btn-2"},"Start Learning",-1)),c(l,{to:{name:"Checkout",params:{id:a.id},query:{for:"someone"}},class:"btn-link mt-2 mx-auto"},{default:r(()=>t[3]||(t[3]=[m(" Purchase for someone else ")])),_:2},1032,["to"])]),_:2},1032,["to"]))),128))])),x.value!=="/my/course"?(s(),o("div",Y,[c(l,{class:"btn-3",to:"/my/course"},{default:r(()=>t[5]||(t[5]=[m("Explore All")])),_:1})])):f("",!0)]),f("",!0)])}}};export{Q as default};
