let mysc=0;
let cmsc=0;


let msp=document.querySelector("#your");
let csp=document.querySelector("#comp");


let msg=document.querySelector("#msg");


const choices=document.querySelectorAll(".choice");



const draw=(compchoice,userchoice)=>{
    msg.innerText="It's Draw! Play Again!";
    msp.innerText=mysc;
    csp.innerText=cmsc;
    msg.style.backgroundColor="darkblue";
}


const checkWinner=(compchoice,userchoice)=>{

    let flag=true;
    if(userchoice==="rock")
    {
        if(compchoice==="paper")
        {
            flag=false;
        }
    }
    else if(userchoice==="paper")
    {
        if(compchoice==="scissor")
        {
            flag=false;
        }
    }
    else
    {
        if(compchoice==="rock")
        {
            flag=false;
        }
    }


    if(flag) 
    {
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        mysc++;
        msp.innerText=mysc;
        csp.innerText=cmsc;
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerText=`You Lose! ${compchoice} beats ${userchoice}`;
        cmsc++;
        msp.innerText=mysc;
        csp.innerText=cmsc;
        msg.style.backgroundColor="red";
    }

}


const generateCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const cmpchoice=Math.floor(Math.random()*3);
    return option[cmpchoice];
}


const playGame=(userchoice)=>{
    const compchoice=generateCompChoice();

    if(userchoice===compchoice)
    {
        draw(compchoice,userchoice);
    }
    else
    {
        checkWinner(compchoice,userchoice)
    }

}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
});