import{J as n,K as a}from"./index-B4Mp3J9K.js";const c=n("quiz",{state:()=>({quizzes:{},results:{},quiz:{},isVisibleAddQuestionModal:!1,loading:!1,error:null}),actions:{async fetchQuizzes(){try{const e=await a.get("/quizzes");this.quizzes=e.data||[]}catch(e){console.error("Error fetching quizzes:",e)}},async addQuiz(e={}){try{const r=await a.post("/quizzes",e);this.quiz=r.data,this.quizzes.unshift(this.quiz)}catch(r){console.error("Error adding quiz:",r)}},async deleteQuiz(e){var r;try{await a.delete(`/quizzes/${e}`),this.quizzes=(r=this.quizzes)==null?void 0:r.filter(s=>s.id!==e)}catch(s){console.error("Error deleting quiz:",s)}},async updateQuiz(e,r={}){var s;try{const i=await a.put(`/quizzes/${e}`,r);this.quiz=i.data,this.quizzes=(s=this.quizzes)==null?void 0:s.map(o=>o.id===e?this.quiz:o)}catch(i){console.error("Error updating quiz:",i)}},async fetchSingleQuiz(e){try{const r=await a.get(`/quizzes/${e}`);return this.quiz=r.data,this.quiz}catch(r){console.error("Error adding quiz:",r)}},async addQuizQuestion(e,r,s={}){try{return(await a.post(`/quizzes/${e}/select-questions/${r}`,s)).data}catch(i){console.error("Error adding quiz:",i)}},async removeQuizQuestion(e,r){try{return(await a.delete(`/quizzes/${e}/remove-questions/${r}`)).data}catch(s){console.error("Error adding quiz:",s)}},async changeQuizQuestionMark(e,r={}){try{return(await a.put(`/quizzes/${e}/change-question-mark`,r)).data}catch(s){console.error("Error adding quiz:",s)}},async result(e,r=1){var s,i,o,u;this.loading=!0;try{const t=await a.get(`/quizzes/${e}/results?page=${r}`);this.quiz=((s=t==null?void 0:t.data)==null?void 0:s.quiz)??{},this.results=((i=t==null?void 0:t.data)==null?void 0:i.user_quizzes)??[]}catch(t){this.error=((u=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:u.message)??"An error occurred while fetching data"}this.loading=!1}}});export{c as u};
