import{J as v,r as n,K as i}from"./index-BRjg0X-h.js";const d=v("userQuiz",()=>{const a=n({}),c=n({}),t=n(!1);async function o(r){var u,s;t.value=!0;try{const e=await i.get(`/my-quiz/${r}/participation`);a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((s=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:s.message)??"An error occurred"}return t.value=!1,a.value}async function l(r){var u,s;t.value=!0;try{const e=await i.post(`/my-quiz/${r}/submit`,{user_given_answers:a.value.questions});a.value=(e==null?void 0:e.data)??{}}catch(e){e.value=((s=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:s.message)??"An error occurred"}return t.value=!1,a.value}return{quiz:a,error:c,loading:t,fetchQuiz:o,submitQuiz:l}});export{d as u};
