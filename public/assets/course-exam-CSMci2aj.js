import{h as c}from"./index-C-7Rzlh_.js";import{d as v,r as n}from"./vue-BP9P6hCg.js";const x=v("courseExam",()=>{const a=n({}),l=n({}),s=n(!1);async function m(u,o){var t,r;s.value=!0;try{const e=await c.get(`/my-courses/${u}/exams/${o}`);a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,a.value}async function i(u,o){var t,r;s.value=!0;try{const e=await c.post(`/my-courses/${u}/exams/${o}`,{user_given_answers:a.value.questions});a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,a.value}return{exam:a,error:l,loading:s,fetchExam:m,submitExam:i}});export{x as u};
