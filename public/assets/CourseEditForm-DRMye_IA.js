import{b as E,k as T,u as U,a as A,r as a,o as R,y as j,d as r,e as u,f as e,t as b,p as f,J as z,F as I,g as L,h as N,v as C,A as S,B as P,m as J,C as $,z as q}from"./index-teJBcn3p.js";import{_ as G}from"./TextEditor-BfuMWDI-.js";const H={class:"my-container space-y-2"},K=e("h2",{class:"title-md text-center"},"Edit Course",-1),O={class:"grid md:grid-cols-5 gap-2 items-center border p-2"},Q=["src"],W={key:1,class:"col-span-1 flex items-center justify-center"},X=e("div",{class:"loader"},null,-1),Y=[X],Z={class:"md:col-span-4 space-y-2"},ee={class:"flex w-full text-center gap-4"},te=["disabled"],se=e("p",{class:"text-sm text-center text-red-600"}," **File size max: 1.9 MB. Aspect ratio: 9:16 (720px x 1280px)** ",-1),oe={class:"text-center text-green-600"},ae={class:"text-center text-red-600"},le={class:"space-y-2 bg-gray-100 p-2 rounded-md"},ne=e("p",null,"Course Category",-1),re=e("option",{disabled:"",value:""},"Select a Category",-1),ue=["value"],ie=e("p",null,"Course Title",-1),ce=e("p",null,"Course Description",-1),de=e("p",null,"Course Price",-1),pe=e("p",null,"Start Date",-1),ve={class:"flex justify-center gap-4"},_e=e("button",{class:"btn-2",type:"submit"},"Save",-1),fe={__name:"CourseEditForm",setup(me){const V=E(),k=T(),i=U(),x=A(),c=a(""),d=a(""),p=a(""),w=a(""),v=a(""),_=a(""),n=a(null),g=a(""),l=a(""),m=a(!1),h=V.params.id,D=async()=>{try{await i.fetchCourse(h);const o=i.course;o&&(c.value=o.title,d.value=o.description,p.value=o.price,w.value=o.thumbnail,v.value=$(new Date(o.start_date),"yyyy-MM-dd"),_.value=o.course_category)}catch(o){console.error("Error loading course:",o),l.value="Failed to load course data"}},F=async()=>{var t,y;const o={id:h,title:c.value,description:d.value,price:p.value,start_date:v.value,course_category:_.value};try{await i.updateCourse(h,o),g.value="Course updated successfully!",k.push("/course-list")}catch(s){console.error("Error updating course:",s),l.value=((y=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:y.message)??"An error occurred while updating the course"}},M=o=>{const t=o.target.files[0];t&&t.size>2*1024*1024?(l.value="File should be less than 2MB",n.value=null,document.getElementById("file-input").value=""):(n.value=t,l.value="")},B=async()=>{if(!n.value)return;m.value=!0;const o=new FormData;o.append("thumbnail",n.value);try{await i.uploadThumbnail(h,o),g.value="ছবি আপলোড সফল হয়েছে",n.value=null,document.getElementById("file-input").value="",location.reload()}catch(t){console.error("Error uploading thumbnail:",t),l.value="An error occurred while uploading the thumbnail"}finally{m.value=!1}};return R(async()=>{await x.fetchCategories(),await D()}),(o,t)=>{const y=j("RouterLink");return r(),u("div",H,[K,e("div",O,[m.value?(r(),u("div",W,Y)):(r(),u("img",{key:0,class:"col-span-1 aspect-video object-cover rounded-md",src:w.value,alt:"Thumbnail"},null,8,Q)),e("div",Z,[e("div",ee,[e("input",{id:"file-input",type:"file",onChange:M,class:"input-1"},null,32),e("button",{class:"btn-2",onClick:B,type:"button",disabled:m.value}," Upload ",8,te)]),se,e("p",oe,b(g.value),1),e("p",ae,b(l.value),1)])]),e("form",{onSubmit:J(F,["prevent"])},[e("div",le,[ne,f(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>_.value=s),class:"input-1"},[re,(r(!0),u(I,null,L(N(x).categories,s=>(r(),u("option",{key:s.id,value:s.name},b(s.name),9,ue))),128))],512),[[z,_.value]]),ie,f(e("input",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=s=>c.value=s),placeholder:"Title"},null,512),[[C,c.value]]),ce,S(G,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=s=>d.value=s),placeholder:"Description"},null,8,["modelValue"]),de,f(e("input",{class:"input-1","onUpdate:modelValue":t[3]||(t[3]=s=>p.value=s),placeholder:"Price"},null,512),[[C,p.value]]),pe,f(e("input",{class:"input-1",type:"date","onUpdate:modelValue":t[4]||(t[4]=s=>v.value=s),placeholder:"Start Date"},null,512),[[C,v.value]])]),e("div",ve,[_e,S(y,{class:"btn-contrast",to:"/course-list"},{default:P(()=>[q("Cancel")]),_:1})])],32)])}}};export{fe as default};
