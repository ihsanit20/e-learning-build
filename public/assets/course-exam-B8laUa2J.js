import{J as v,r as o,K as c}from"./index-DgW0pWoJ.js";const d=v("courseExam",()=>{const a=o({}),l=o({}),s=o(!1);async function m(u,n){var t,r;s.value=!0;try{const e=await c.get(`/my-courses/${u}/exams/${n}`);a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,a.value}async function i(u,n){var t,r;s.value=!0;try{const e=await c.post(`/my-courses/${u}/exams/${n}`,{user_given_answers:a.value.questions});a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,a.value}return{exam:a,error:l,loading:s,fetchExam:m,submitExam:i}});export{d as u};
