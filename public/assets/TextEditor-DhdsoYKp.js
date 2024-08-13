import{r as u,c as C,w as q,o as x,K as k,d as c,e as v,f as t,m as o,n as i,q as b,G as V,x as O,t as R}from"./index-BoT3z_7W.js";const T={class:"w-full mx-auto"},U={class:"flex items-center gap-2 mb-2 flex-wrap bg-gray-100 border border-gray-300 p-2"},D=t("i",{class:"fas fa-bold"},null,-1),E=[D],M=t("i",{class:"fas fa-italic"},null,-1),B=[M],A=t("i",{class:"fas fa-underline"},null,-1),H=[A],I=t("i",{class:"fas fa-list-ul"},null,-1),N=[I],F=t("i",{class:"fas fa-list-ol"},null,-1),G=[F],K={class:"relative alignment-dropdown"},J=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),P={key:0,class:"absolute flex bg-white border border-gray-300 rounded mt-1 z-10"},Q=t("i",{class:"fas fa-align-left"},null,-1),W=[Q],X=t("i",{class:"fas fa-align-center"},null,-1),Y=[X],Z=t("i",{class:"fas fa-align-right"},null,-1),ee=[Z],te={class:"relative color-dropdown"},ne=t("i",{class:"fas fa-palette"},null,-1),oe=[ne],se=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),le={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10 p-2 flex gap-1"},re={class:"relative font-size-dropdown"},ie=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),ae={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10"},de={__name:"TextEditor",props:{modelValue:String},emits:["update:modelValue"],setup(j,{emit:L}){const S=j,h=L,a=u(null),n=u({bold:!1,italic:!1,underline:!1,insertUnorderedList:!1,insertOrderedList:!1,justifyLeft:!1,justifyCenter:!1,justifyRight:!1,foreColor:"",fontSize:"16px"}),d=u(!1),f=u(!1),p=u(!1),z={1:"10px",2:"13px",3:"16px",4:"18px",5:"24px",6:"32px",7:"48px"},$=C(()=>n.value.justifyLeft?"fa-align-left":n.value.justifyCenter?"fa-align-center":n.value.justifyRight?"fa-align-right":"fa-align-left"),w=C(()=>n.value.foreColor||"black");q(()=>S.modelValue,r=>{a.value&&a.value.innerHTML!==r&&(a.value.innerHTML=r)});const l=(r,e=null)=>{document.execCommand(r,!1,e),m()},_=()=>{h("update:modelValue",a.value.innerHTML)},m=()=>{n.value={bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline"),insertUnorderedList:document.queryCommandState("insertUnorderedList"),insertOrderedList:document.queryCommandState("insertOrderedList"),justifyLeft:document.queryCommandState("justifyLeft"),justifyCenter:document.queryCommandState("justifyCenter"),justifyRight:document.queryCommandState("justifyRight"),foreColor:document.queryCommandValue("foreColor"),fontSize:z[document.queryCommandValue("fontSize")]||"16px"}},g=()=>{m()};x(()=>{document.addEventListener("selectionchange",g)}),k(()=>{document.removeEventListener("selectionchange",g)});const y=r=>{!r.target.closest(".alignment-dropdown")&&!r.target.closest(".color-dropdown")&&!r.target.closest(".font-size-dropdown")&&(d.value=!1,f.value=!1,p.value=!1)};return x(()=>{document.addEventListener("click",y)}),k(()=>{document.removeEventListener("click",y)}),(r,e)=>(c(),v("div",T,[t("div",U,[t("button",{type:"button",onClick:e[0]||(e[0]=o(s=>l("bold"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.bold,"hover:bg-gray-200":!n.value.bold},"p-2 rounded flex items-center justify-center transition"])},E,2),t("button",{type:"button",onClick:e[1]||(e[1]=o(s=>l("italic"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.italic,"hover:bg-gray-200":!n.value.italic},"p-2 rounded flex items-center justify-center transition"])},B,2),t("button",{type:"button",onClick:e[2]||(e[2]=o(s=>l("underline"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.underline,"hover:bg-gray-200":!n.value.underline},"p-2 rounded flex items-center justify-center transition"])},H,2),t("button",{type:"button",onClick:e[3]||(e[3]=o(s=>l("insertUnorderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.insertUnorderedList,"hover:bg-gray-200":!n.value.insertUnorderedList},"p-2 rounded flex items-center justify-center transition"])},N,2),t("button",{type:"button",onClick:e[4]||(e[4]=o(s=>l("insertOrderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.insertOrderedList,"hover:bg-gray-200":!n.value.insertOrderedList},"p-2 rounded flex items-center justify-center transition"])},G,2),t("div",K,[t("button",{onClick:e[5]||(e[5]=o(s=>d.value=!d.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("i",{class:i(`fas ${$.value}`)},null,2),J]),d.value?(c(),v("div",P,[t("button",{onClick:e[6]||(e[6]=o(s=>l("justifyLeft"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyLeft,"hover:bg-gray-200":!n.value.justifyLeft},"p-2 flex items-center justify-center"])},W,2),t("button",{onClick:e[7]||(e[7]=o(s=>l("justifyCenter"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyCenter,"hover:bg-gray-200":!n.value.justifyCenter},"p-2 flex items-center justify-center"])},Y,2),t("button",{onClick:e[8]||(e[8]=o(s=>l("justifyRight"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyRight,"hover:bg-gray-200":!n.value.justifyRight},"p-2 flex items-center justify-center"])},ee,2)])):b("",!0)]),t("div",te,[t("button",{onClick:e[9]||(e[9]=o(s=>f.value=!f.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("span",{style:V({color:w.value})},oe,4),se]),f.value?(c(),v("div",le,[t("button",{onClick:e[10]||(e[10]=o(s=>l("foreColor","black"),["stop","prevent"])),class:"size-4",style:{background:"black"}}),t("button",{onClick:e[11]||(e[11]=o(s=>l("foreColor","red"),["stop","prevent"])),class:"size-4",style:{background:"red"}}),t("button",{onClick:e[12]||(e[12]=o(s=>l("foreColor","green"),["stop","prevent"])),class:"size-4",style:{background:"green"}}),t("button",{onClick:e[13]||(e[13]=o(s=>l("foreColor","blue"),["stop","prevent"])),class:"size-4",style:{background:"blue"}})])):b("",!0)]),t("div",re,[t("button",{onClick:e[14]||(e[14]=o(s=>p.value=!p.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[O(R(n.value.fontSize)+" ",1),ie]),p.value?(c(),v("div",ae,[t("button",{onClick:e[15]||(e[15]=o(s=>l("fontSize","1"),["stop","prevent"])),class:"p-2"},"10px"),t("button",{onClick:e[16]||(e[16]=o(s=>l("fontSize","2"),["stop","prevent"])),class:"p-2"},"13px"),t("button",{onClick:e[17]||(e[17]=o(s=>l("fontSize","3"),["stop","prevent"])),class:"p-2"},"16px"),t("button",{onClick:e[18]||(e[18]=o(s=>l("fontSize","4"),["stop","prevent"])),class:"p-2"},"18px"),t("button",{onClick:e[19]||(e[19]=o(s=>l("fontSize","5"),["stop","prevent"])),class:"p-2"},"24px"),t("button",{onClick:e[20]||(e[20]=o(s=>l("fontSize","6"),["stop","prevent"])),class:"p-2"},"32px"),t("button",{onClick:e[21]||(e[21]=o(s=>l("fontSize","7"),["stop","prevent"])),class:"p-2"},"48px")])):b("",!0)])]),t("div",{ref_key:"editor",ref:a,contenteditable:"true",onInput:_,class:"border border-gray-300 p-4 rounded-md min-h-[200px]",placeholder:"Description"},null,544)]))}};export{de as _};
