let time = 0
let second = 10

let seconds = 0
let minutes = 0

const start = document.querySelector('#start')
const thirty = document.querySelector('#thirty')
const tech = document.querySelector('#tech')
const twenty = document.querySelector('#twenty')


function clearTimer(){
    minutes = 0
    time = 0
    seconds = 0
    document.querySelector('#second').innerText = '00'
    document.querySelector('#minute').innerText = '00'
}

start.onclick =()=>{
    clearTimer()
    time = time + 6000
}

twenty.onclick =()=>{
    clearTimer()
    time = time + 2000
}


thirty.onclick =()=>{
    time = time + 3000
}

tech.onclick =()=>{
    clearTimer()
    time = time + 6000
}


function updateTime(){

}





setInterval(()=>{
    if(time>=1){
        
        time = time - second
        minutes = Math.floor(time/6000)
        seconds = Math.floor((time -(minutes*6000))/100)
        document.querySelector('.time').style.color="white"
        document.querySelector('#minute').style.color="white"
        if(time<=300){
            document.querySelector('#minute').style.color="red"
            document.querySelector('.time').style.color="red"
        }else if(time<=1100){
            document.querySelector('#minute').style.color="yellow"
            document.querySelector('.time').style.color="yellow"
        }
        if(minutes== 0 ){
            document.querySelector('#minute').innerText = '00'
        }

        if(minutes>=1){
            document.querySelector('#minute').innerText = '0' +minutes
        }

        if(seconds<10){
            document.querySelector('#second').innerText = '0'+seconds
        }else{
            document.querySelector('#second').innerText = seconds
            
        }

        console.log(minutes)
        console.log(seconds)





    }
},100)




const noone = 'Никто не выставлен!'
let voted  =  []
let text = ''


function removeVote(id){
    voted.map((value,ind) =>{
        if(value==id){
            voted.splice(ind,1)
        }
    })
}



function addVote(id){
    check = voted.find(val => val == id)
    if (id !== check){
        voted.push(id)
    }
}


function updateList(){
    text  = ''
    voted.map(val =>  {
        if(text == '' && val !== '10'){
            text= text + '0'+val
        }
        else if(val=='10'&& text ==''){
            text=text+ (val)
        }
        else if(val=='10'){
            text=text+ ('|'+val)
        }
        else{
            text = text+ '|0'+val
        }
    })
    console.log(text)
    document.querySelector('.result').innerText = text
    
}

function copy(){
    navigator.clipboard.writeText(text);
}


function clean(){
    for(i =1; i<=10; i++){
        document.getElementById(i).value = 'notVoted'
        document.getElementById(i).innerText = `${i}`
    }
    voted  = []
    updateList()
}



function vote(event){
    
    if(event.value == 'notVoted'){
        
        document.getElementById(event.id).value = 'voted'
        document.getElementById(event.id).innerText = `${event.id} Выставлен`
        addVote(event.id)
        updateList()

        
    }
    else{
        
        document.getElementById(event.id).value = 'notVoted'
        document.getElementById(event.id).innerText = `${event.id}`
        removeVote(event.id)
        updateList()
        
    }
}




