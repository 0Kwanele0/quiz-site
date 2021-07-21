import { ques } from "./questions.js";

const btn = document.getElementById('btn')
const question = document.querySelector(".card__question")
const a = document.getElementById('aee')
const b = document.getElementById('bee')
const c = document.getElementById('cee')
const d = document.getElementById('dee')
const radio = document.querySelectorAll(".check")
const score_card = document.querySelector(".score")
const score_text = document.querySelector(".score__score")
const resertBtn = document.querySelector(".score__btn")


let i = 0

question.textContent = ques[i].question
a.textContent = ques[i].options.a
b.textContent = ques[i].options.b
c.textContent = ques[i].options.c
d.textContent = ques[i].options.d

let score = 0

btn.addEventListener("click", () => {
    radio.forEach((element)=>{
        if(element.checked){
            if (element.id == ques[i].options.correct){
                score ++
            }
            if(i !== ques.length -1){
                i++
            }else{
                score_text.textContent = `${score}/${ques.length}`
                score_card.style.display = "block"
            }
        }
        element.checked = false
    })

    question.textContent = ques[i].question
    a.textContent = ques[i].options.a
    b.textContent = ques[i].options.b
    c.textContent = ques[i].options.c
    d.textContent = ques[i].options.d


})

resertBtn.addEventListener("click", ()=>{
    location.reload()
})