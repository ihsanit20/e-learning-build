import{b as R,c as h,u as A,a as N,r as o,o as j,m as z,e as n,f as r,g as t,t as w,z as i,a3 as I,F as P,h as q,i as $,E as k,s as V,A as _,q as G,C as D,v as H,y as J,x as K}from"./index-DFkC2udi.js";import{_ as O}from"./TextEditor-DmMimU4A.js";const Q={class:"my-container space-y-2"},W={class:"grid md:grid-cols-5 gap-2 items-center border p-2"},X=["src"],Y={key:1,class:"col-span-1 flex items-center justify-center"},Z={class:"md:col-span-4 space-y-2"},ee={class:"flex w-full text-center gap-4"},te=["disabled"],le={class:"text-center text-green-600"},se={class:"text-center text-red-600"},oe={class:"space-y-2 bg-gray-100 p-2 rounded-md"},ae=["value"],ue={class:"flex items-center gap-2"},ne={key:0},re={class:"border md:p-4 p-2 rounded-md bg-white"},ie={class:"flex justify-center gap-4"},ce={__name:"CourseEditForm",setup(de){const E=R(),F=h(),p=A(),S=N(),v=o(""),c=o(""),m=o(""),M=o(""),y=o(""),f=o(""),a=o(""),d=o(null),x=o(""),u=o(""),g=o(!1),C=E.params.id,U=async()=>{try{await p.fetchCourse(C);const s=p.course;s&&(v.value=s.title,c.value=s.description,m.value=s.price,M.value=s.thumbnail,y.value=s.start_date?K(new Date(s.start_date),"yyyy-MM-dd"):"",f.value=s.category_id,a.value=s.course_type)}catch(s){console.error("Error loading course:",s),u.value="Failed to load course data"}},T=async()=>{var e,b;const s={id:C,title:v.value,description:c.value,price:m.value,start_date:a.value==="Live Course"?y.value:null,category_id:f.value,course_type:a.value};try{await p.updateCourse(C,s),x.value="Course updated successfully!",F.push("/course-list")}catch(l){console.error("Error updating course:",l),u.value=((b=(e=l==null?void 0:l.response)==null?void 0:e.data)==null?void 0:b.message)??"An error occurred while updating the course"}},B=s=>{const e=s.target.files[0];e&&e.size>2*1024*1024?(u.value="File should be less than 2MB",d.value=null,document.getElementById("file-input").value=""):(d.value=e,u.value="")},L=async()=>{if(!d.value)return;g.value=!0;const s=new FormData;s.append("thumbnail",d.value);try{await p.uploadThumbnail(C,s),x.value="ছবি আপলোড সফল হয়েছে",d.value=null,document.getElementById("file-input").value="",location.reload()}catch(e){console.error("Error uploading thumbnail:",e),u.value="An error occurred while uploading the thumbnail"}finally{g.value=!1}};return j(async()=>{await S.fetchCategories(),await U()}),(s,e)=>{const b=z("RouterLink");return n(),r("div",Q,[e[20]||(e[20]=t("h2",{class:"title-md text-center"},"Edit Course",-1)),t("div",W,[g.value?(n(),r("div",Y,e[7]||(e[7]=[t("div",{class:"loader"},null,-1)]))):(n(),r("img",{key:0,class:"col-span-1 aspect-video object-cover rounded-md",src:M.value,alt:"Thumbnail"},null,8,X)),t("div",Z,[t("div",ee,[t("input",{id:"file-input",type:"file",onChange:B,class:"input-1"},null,32),t("button",{class:"btn-2",onClick:L,type:"button",disabled:g.value}," Upload ",8,te)]),e[8]||(e[8]=t("p",{class:"text-sm text-center text-red-600"}," **File size max: 1.9 MB. Aspect ratio: 9:16 (720px x 1280px)** ",-1)),t("p",le,w(x.value),1),t("p",se,w(u.value),1)])]),t("form",{onSubmit:J(T,["prevent"])},[t("div",oe,[t("div",null,[e[10]||(e[10]=t("p",null,"Course Category",-1)),i(t("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>f.value=l),class:"input-1"},[e[9]||(e[9]=t("option",{disabled:"",value:""},"Select a Category",-1)),(n(!0),r(P,null,q($(S).categories,l=>(n(),r("option",{key:l.id,value:l.id},w(l.name),9,ae))),128))],512),[[I,f.value]])]),t("div",null,[e[13]||(e[13]=t("p",null,"Course Type",-1)),t("div",ue,[t("label",null,[i(t("input",{type:"radio",value:"Live Course","onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l)},null,512),[[k,a.value]]),e[11]||(e[11]=V(" Live Course "))]),t("label",null,[i(t("input",{type:"radio",value:"Recorded Course","onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l)},null,512),[[k,a.value]]),e[12]||(e[12]=V(" Recorded Course "))])])]),t("div",null,[e[14]||(e[14]=t("p",null,"Course Title",-1)),i(t("input",{class:"input-1","onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l),placeholder:"Title"},null,512),[[_,v.value]])]),t("div",null,[e[15]||(e[15]=t("p",null,"Course Price",-1)),i(t("input",{class:"input-1","onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),placeholder:"Price"},null,512),[[_,m.value]])]),a.value==="Live Course"?(n(),r("div",ne,[e[16]||(e[16]=t("p",null,"Start Date",-1)),i(t("input",{class:"input-1",type:"date","onUpdate:modelValue":e[5]||(e[5]=l=>y.value=l),placeholder:"Start Date"},null,512),[[_,y.value]])])):G("",!0),t("div",null,[e[17]||(e[17]=t("p",null,"Course Description",-1)),t("div",re,[D(O,{modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=l=>c.value=l),placeholder:"Description"},null,8,["modelValue"])])])]),t("div",ie,[e[19]||(e[19]=t("button",{class:"btn-2",type:"submit"},"Save",-1)),D(b,{class:"btn-contrast",to:"/course-list"},{default:H(()=>e[18]||(e[18]=[V("Cancel")])),_:1})])],32)])}}};export{ce as default};