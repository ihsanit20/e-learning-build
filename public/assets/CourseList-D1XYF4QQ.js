import{u as D,c as B,r as v,d as n,p as M,e,t as d,q as f,v as $,i as a,o as F,B as h,s as k,x as L,F as j,f as O,m as V}from"./index-uPh3lHus.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0,class:"modal"},z={class:"relative card-bg p-4 md:p-8 max-w-3xl h-2/3"},E={class:"overflow-y-scroll scrollbar space-y-2 p-2 bg-gray-100 rounded-md"},A=["src"],I={class:"flex w-full text-center gap-4"},H={class:"text-center text-green-600"},R={class:"text-center text-red-600"},U={class:"title-md"},q={class:"md:flex justify-between"},K=["innerHTML"],P={key:0},X={class:"font-bold text-sky-600"},Y={class:""},G={class:"title-sm"},J={__name:"CourseViewModal",props:{course:Object,isOpen:Boolean},emits:["close"],setup(y,{emit:x}){const b=y,r=D(),p=x,o=B(()=>r.courses.find(s=>s.id===b.course.id)),m=()=>{p("close")},u=v(null),c=v(""),_=v(""),w=s=>{const l=s.target.files[0];l&&l.size>2*1024*1024?(_.value="File should be less than 2MB",u.value=null,document.getElementById("file-input").value=""):(u.value=l,_.value="")},C=async()=>{if(!u.value)return;const s=new FormData;s.append("thumbnail",u.value);try{await r.uploadThumbnail(b.course.id,s),c.value="Thumbnail uploaded successfully!",u.value=null,document.getElementById("file-input").value=""}catch{_.value="An error occurred while uploading the thumbnail"}},i=s=>$(new Date(s),"dd-MMM-yyyy");return(s,l)=>{var t,g;return y.isOpen?(a(),n("div",S,[e("div",z,[e("div",{class:"flex top-2 right-2 z-50 absolute"},[e("button",{class:"bg-red-500 px-2 rounded-full text-white",onClick:m},"X")]),e("div",E,[e("img",{class:"aspect-video object-cover rounded-lg",src:o.value.thumbnail,alt:"Thumbnail"},null,8,A),l[5]||(l[5]=e("p",{class:"text-sm"}," **File size should be less than 2MB and aspect ratio 9:16 (720px x 1280px)** ",-1)),e("div",I,[e("input",{id:"file-input",type:"file",onChange:w,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:C},"Upload")]),e("p",H,d(c.value),1),e("p",R,d(_.value),1),e("h2",U,d(o.value.title),1),e("div",q,[e("p",null,[l[0]||(l[0]=f(" Course Category: ")),e("b",null,d((g=(t=o.value)==null?void 0:t.category)==null?void 0:g.name),1)]),e("p",null,[l[1]||(l[1]=f(" Course Type: ")),e("b",null,d(o.value.course_type),1)])]),e("div",null,[l[2]||(l[2]=e("b",null,"Course Description:",-1)),e("div",{innerHTML:o.value.description,class:""},null,8,K)]),o.value.course_type==="Live Course"?(a(),n("p",P,[l[3]||(l[3]=f(" Start Date: ")),e("span",X,d(i(o.value.start_date)),1)])):M("",!0),e("p",Y,[l[4]||(l[4]=f(" Price: ৳ ")),e("span",G,d(o.value.price),1)])]),e("div",null,[e("button",{class:"btn-contrast",onClick:m},"Close")])])])):M("",!0)}}},Q=N(J,[["__scopeId","data-v-d1fbb8fe"]]),W={key:0,class:"modal"},Z={__name:"CourseDeleteModal",props:{isOpen:Boolean,course:Object},emits:["close","confirmDelete"],setup(y,{emit:x}){const b=y,r=x,p=D(),o=async()=>{b.course&&(await p.deleteCourse(b.course.id),r("confirmDelete"),r("close"))},m=()=>{r("close")};return(u,c)=>y.isOpen?(a(),n("div",W,[e("div",{class:"modal-content card-bg p-4 md:p-8"},[c[0]||(c[0]=e("h2",{class:"title-md text-red-600 text-center"},"Confirm Delete",-1)),c[1]||(c[1]=e("p",{class:"text-center"},"Are you sure you want to delete this course?",-1)),e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:o},"Yes"),e("button",{class:"btn-2",onClick:m},"No")])])])):M("",!0)}},ee={class:"my-container space-y-2 relative"},se={class:"flex justify-between items-center"},te={key:0,class:"space-y-2"},le={key:1},oe={key:0,class:"text-center"},ne={key:1,class:"space-y-2"},ae={class:"md:col-span-1 px-2"},de=["src"],ie={class:"font-bold text-sky-600 bg-sky-100 px-6 text-center rounded-b-md"},re={class:"md:col-span-4 md:px-4 space-y-2 flex flex-col justify-between"},ue={class:"title-md"},ce={class:"text-sm md:text-base"},pe={class:"flex justify-between"},me={class:"font-bold text-sky-600"},ve={key:0},fe={class:"font-bold text-sky-600"},be={key:1,class:"bg-pink-50 px-3 rounded-full"},ye={class:"font-bold text-pink-600"},_e={class:"flex justify-between items-center gap-2"},xe=["onClick"],ge=["onClick"],Ce={__name:"CourseList",setup(y){const x=i=>{const s=new Date(i);return $(s,"dd-MMM-yyyy")},b=i=>{const s=new Date(i);return $(s,"dd-MMM-yyyy, hh:mm a")},r=D(),p=v([]),o=v(null),m=v(!1),u=v(!1),c=v(!0);F(async()=>{await r.fetchCourses(),p.value=r.courses.sort((i,s)=>s.id-i.id),c.value=!1});const _=i=>{o.value=i,m.value=!0},w=i=>{o.value=i,u.value=!0},C=async()=>{await r.deleteCourse(o.value.id),p.value=r.courses};return(i,s)=>{const l=L("RouterLink");return a(),n("div",ee,[e("div",se,[s[3]||(s[3]=e("h1",{class:"title-lg text-center"},"Courses",-1)),h(l,{class:"btn-2",to:{name:"NewCourse"}},{default:k(()=>s[2]||(s[2]=[f("Add New")])),_:1})]),c.value?(a(),n("div",te,[(a(),n(j,null,O(3,t=>e("div",{key:t,class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-8 md:divide-x-2 animate-pulse"},s[4]||(s[4]=[V('<div class="md:col-span-1 rounded md:px-2"><div class="aspect-video bg-gray-200"></div></div><div class="md:col-span-3 md:px-2"><div class="h-6 bg-gray-200 rounded-full mb-2"></div><div class="h-4 bg-gray-200 rounded-full"></div></div><div class="md:col-span-1 flex items-center justify-center px-2"><div class="h-6 bg-gray-200 rounded-full w-20"></div></div><div class="md:col-span-3 flex justify-between items-center gap-2 md:px-2"><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div></div>',4)]))),64))])):(a(),n("div",le,[p.value.length===0?(a(),n("div",oe,s[5]||(s[5]=[e("p",null,"No courses available.",-1)]))):(a(),n("ul",ne,[(a(!0),n(j,null,O(p.value,t=>{var g;return a(),n("li",{class:"card-bg md:py-4 p-4 md:p-2 grid md:grid-cols-5 md:divide-x-2",key:t.id},[e("div",ae,[e("img",{class:"aspect-video object-cover rounded-t-md",src:t.thumbnail,alt:"Thumbnail"},null,8,de),e("p",ie,d((g=t==null?void 0:t.category)==null?void 0:g.name),1)]),e("div",re,[e("h2",ue,d(t.title),1),e("p",ce,[s[6]||(s[6]=e("b",null,"Created at: ",-1)),f(d(b(t.created_at)),1)]),e("div",pe,[e("p",null,[s[7]||(s[7]=f(" Fee: ")),e("span",me,d(t.price>0?`${t.price} TK`:"Free"),1)]),t.course_type==="Live Course"?(a(),n("p",ve,[s[8]||(s[8]=f(" Start Date: ")),e("span",fe,d(x(t.start_date)),1)])):(a(),n("p",be,[e("span",ye,d(t.course_type),1)]))]),e("div",_e,[e("button",{class:"btn-1 pb-2",onClick:T=>_(t)},s[9]||(s[9]=[e("i",{class:"fas fa-eye"},null,-1),e("p",{class:"hidden md:flex"},"View",-1)]),8,xe),h(l,{to:{name:"CourseEditForm",params:{id:t.id}},class:"btn-1 pb-2"},{default:k(()=>s[10]||(s[10]=[e("i",{class:"far fa-edit"},null,-1),e("p",{class:"hidden md:flex"},"Edit",-1)])),_:2},1032,["to"]),e("button",{class:"btn-contrast pb-2",onClick:T=>w(t)},s[11]||(s[11]=[e("i",{class:"fas fa-trash-alt"},null,-1)]),8,ge),h(l,{class:"btn-1",to:{name:"ModuleList",params:{id:t.id}}},{default:k(()=>s[12]||(s[12]=[e("i",{class:"fas fa-plus"},null,-1),e("p",null,"Module",-1)])),_:2},1032,["to"])])])])}),128))]))])),h(Q,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:m.value,onClose:s[0]||(s[0]=t=>m.value=!1)},null,8,["course","isOpen"]),h(Z,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:u.value,onClose:s[1]||(s[1]=t=>u.value=!1),onConfirmDelete:C},null,8,["course","isOpen"])])}}};export{Ce as default};
