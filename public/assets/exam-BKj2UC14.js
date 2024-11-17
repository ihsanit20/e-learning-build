import{$ as i,a0 as s}from"./index-CYGpEyrZ.js";const x=i("exam",{state:()=>({exams:{},exam:{},isVisibleAddQuestionModal:!1}),actions:{async fetchExams(e){try{const a=await s.get(`/modules/${e}/exams`);this.exams={...this.exams,[e]:a.data}}catch(a){console.error("Error fetching exams:",a)}},async addExam(e,a){try{const r=await s.post(`/modules/${e}/exams`,a);this.exams[e]||(this.exams[e]=[]),this.exams[e]=[...this.exams[e],r.data]}catch(r){console.error("Error adding exam:",r)}},async deleteExam(e,a){try{await s.delete(`/modules/${e}/exams/${a}`),this.exams[e]&&(this.exams[e]=this.exams[e].filter(r=>r.id!==a))}catch(r){console.error("Error deleting exam:",r)}},async updateExam(e,a,r){try{const t=await s.put(`/exams/${a}`,r);if(this.exams[e]){const o=this.exams[e].findIndex(n=>n.id===a);o!==-1&&(this.exams[e][o]=t.data)}}catch(t){console.error("Error updating exam:",t)}},async fetchSingleExam(e){try{const a=await s.get(`/exams/${e}`);return this.exam=a.data,this.exam}catch(a){console.error("Error adding exam:",a)}},async addExamQuestion(e,a,r={}){try{return(await s.post(`/exams/${e}/select-questions/${a}`,r)).data}catch(t){console.error("Error adding exam:",t)}},async removeExamQuestion(e,a){try{return(await s.delete(`/exams/${e}/remove-questions/${a}`)).data}catch(r){console.error("Error adding exam:",r)}},async changeExamQuestionMark(e,a={}){try{return(await s.put(`/exams/${e}/change-question-mark`,a)).data}catch(r){console.error("Error adding exam:",r)}}}});export{x as u};