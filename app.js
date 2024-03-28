let string="";
let buttons=document.querySelectorAll(".btn")
let input=document.querySelector(".input")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let text=button.innerHTML
        if(text=="="){
            string=eval(string)
            input.value=string
        }
        else if(text=="AC"){
            string=""
            input.value=string

        }
        else if(text=="C"){
            string=string.substring(0,string.length-1)
            input.value=string

        }
       
        else{
            string+=text
            input.value=string
        }
    })

})