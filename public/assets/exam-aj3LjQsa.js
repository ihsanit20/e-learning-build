import{E as i,G as r}from"./index-DrrDu7ks.js";const x=i("exam",{state:()=>({exams:{},exam:{},isVisibleAddQuestionModal:!1}),actions:{async fetchExams(e){try{const s=await r.get(`/modules/${e}/exams`);this.exams={...this.exams,[e]:s.data}}catch(s){console.error("Error fetching exams:",s)}},async addExam(e,s){try{const a=await r.post(`/modules/${e}/exams`,s);this.exams[e]||(this.exams[e]=[]),this.exams[e]=[...this.exams[e],a.data]}catch(a){console.error("Error adding exam:",a)}},async deleteExam(e,s){try{await r.delete(`/modules/${e}/exams/${s}`),this.exams[e]&&(this.exams[e]=this.exams[e].filter(a=>a.id!==s))}catch(a){console.error("Error deleting exam:",a)}},async updateExam(e,s,a){try{const t=await r.put(`/exams/${s}`,a);if(this.exams[e]){const o=this.exams[e].findIndex(n=>n.id===s);o!==-1&&(this.exams[e][o]=t.data)}}catch(t){console.error("Error updating exam:",t)}},async fetchSingleExam(e){try{const s=await r.get(`/exams/${e}`);return this.exam=s.data,this.exam}catch(s){console.error("Error adding exam:",s)}},async addExamQuestion(e,s,a={}){try{return(await r.post(`/exams/${e}/select-questions/${s}`,a)).data}catch(t){console.error("Error adding exam:",t)}},async removeExamQuestion(e,s){try{return(await r.delete(`/exams/${e}/remove-questions/${s}`)).data}catch(a){console.error("Error adding exam:",a)}}}});export{x as u};
