
const data = window.QUIZ_DATA || [];
let state = {subject:null, index:0, score:0, answered:false, selected:new Set()};
const $ = (id)=>document.getElementById(id);
function esc(s){return String(s ?? '').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function imgTag(src){return `<img src="${esc(src)}" alt="imagen">`;}
function showMenu(){
  $('menu').classList.remove('hidden'); $('quiz').classList.add('hidden');
  const grid=$('subjects'); grid.innerHTML='';
  data.forEach((s,i)=>{
    const b=document.createElement('button'); b.className='subject';
    b.innerHTML=`${esc(s.title)}<span class="count">${s.questions.length} preguntas</span>`;
    b.onclick=()=>startSubject(i); grid.appendChild(b);
  });
}
function startSubject(i){state={subject:data[i],index:0,score:0,answered:false,selected:new Set()};$('menu').classList.add('hidden');$('quiz').classList.remove('hidden');renderQuestion();}
function renderQuestion(){
  const s=state.subject, q=s.questions[state.index]; state.answered=false; state.selected=new Set();
  $('title').textContent=s.title; $('counter').textContent=`Pregunta ${state.index+1} de ${s.questions.length}`; $('score').textContent=`Aciertos: ${state.score}`;
  $('bar').style.width=`${(state.index)/s.questions.length*100}%`;
  $('qid').textContent=q.id ? `ID: ${q.id}` : '';
  $('qtext').textContent=q.text || '';
  $('qimages').innerHTML=(q.images||[]).map(imgTag).join('');
  const opts=$('options'); opts.innerHTML='';
  q.options.forEach(o=>{
    const row=document.createElement('label'); row.className='option'; row.id=`opt_${o.letter}`;
    const type=q.multi?'checkbox':'radio';
    const content=(o.images&&o.images.length)? o.images.map(imgTag).join('') : esc(o.text);
    row.innerHTML=`<input name="answer" type="${type}" value="${esc(o.letter)}"><span class="letter">${esc(o.letter)})</span><span class="optContent">${content}</span>`;
    row.querySelector('input').onchange=(e)=>{
      if(q.multi){ e.target.checked ? state.selected.add(o.letter) : state.selected.delete(o.letter); }
      else { state.selected=new Set([o.letter]); }
    };
    opts.appendChild(row);
  });
  $('result').textContent='Responde para ver aquí el proceso o la explicación.';
  $('nextBtn').classList.add('disabled'); $('answerBtn').classList.remove('disabled');
}
function arraysEqual(a,b){a=[...a].sort(); b=[...b].sort(); return a.length===b.length && a.every((x,i)=>x===b[i]);}
function submit(){
  if(state.answered) return;
  const q=state.subject.questions[state.index];
  if(state.selected.size===0){alert('Selecciona una opción.');return;}
  const correct=arraysEqual(state.selected, q.answers||[]);
  state.answered=true; if(correct) state.score++;
  q.options.forEach(o=>{
    const row=$(`opt_${o.letter}`);
    if((q.answers||[]).includes(o.letter)) row.classList.add('correctOption');
    else if(state.selected.has(o.letter)) row.classList.add('wrongOption');
    const input=row.querySelector('input'); if(input) input.disabled=true;
  });
  const selected=[...state.selected].sort().join(', ');
  const corr=(q.answers||[]).join(', ');
  $('result').innerHTML=`<div class="${correct?'ok':'bad'}">${correct?'☑ Correcto.':'☒ Incorrecto.'}</div>\n\nTu respuesta: ${esc(selected)}\nCorrecta: ${esc(corr)}\n\n${esc(q.explanation||'')}` + ((q.explanation_images||[]).length? '<div class="imageRow">'+q.explanation_images.map(imgTag).join('')+'</div>':'');
  $('score').textContent=`Aciertos: ${state.score}`; $('bar').style.width=`${(state.index+1)/state.subject.questions.length*100}%`;
  $('nextBtn').classList.remove('disabled'); $('answerBtn').classList.add('disabled');
}
function next(){ if(!state.answered) return; if(state.index < state.subject.questions.length-1){state.index++; renderQuestion();} else {finish();}}
function finish(){
  const s=state.subject; $('counter').textContent='Finalizado'; $('qid').textContent=''; $('qtext').textContent=`Terminaste ${s.title}.`; $('qimages').innerHTML=''; $('options').innerHTML='';
  $('result').innerHTML=`Resultado final: ${state.score} de ${s.questions.length} aciertos.`; $('nextBtn').classList.add('disabled'); $('answerBtn').classList.add('disabled'); $('bar').style.width='100%';
}
function restart(){ if(state.subject){state.index=0; state.score=0; renderQuestion();}}
window.addEventListener('DOMContentLoaded',()=>{ $('backBtn').onclick=showMenu; $('answerBtn').onclick=submit; $('nextBtn').onclick=next; $('restartBtn').onclick=restart; showMenu(); });
