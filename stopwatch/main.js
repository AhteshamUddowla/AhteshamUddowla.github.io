let hour=0, min=0, sec=0, mils=0;

display();

function display(){
    if(hour.toString().length===1)
        hour='0'+hour;
    if(min.toString().length===1)
        min='0'+min;
    if(sec.toString().length===1)
        sec='0'+sec;
    if(mils.toString().length===1)
        mils='0'+mils;
    document.querySelector('.counter').innerHTML = 
`${hour}:${min}:${sec}.${mils}`;
}

// Reset
document.querySelector('.reset').addEventListener('click', () => {
    hour=0, min=0, sec=0, mils=0;
    if(document.querySelector('.start').innerHTML==='Stop')
        count();
    display();
})

// Start
document.querySelector('.start').addEventListener(
    'click', () => {
        count();
    }
)

// Hover effect on start button
document.querySelector('.start').addEventListener('mouseover', () => {
    if(document.querySelector('.start').innerHTML.trim()=='Start')
        document.querySelector('.start').style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
    else if(document.querySelector('.start').innerHTML.trim()=='Stop')
        document.querySelector('.start').style.backgroundColor = 'rgba(239, 98, 98, 0.7)';
})

document.querySelector('.start').addEventListener('mouseout', () => {
    if(document.querySelector('.start').innerHTML.trim()=='Start')
        document.querySelector('.start').style.backgroundColor = 'rgb(0, 128, 0)';
    else if(document.querySelector('.start').innerHTML.trim()=='Stop')
        document.querySelector('.start').style.backgroundColor = 'rgb(239, 98, 98)';
})


let intervalId;

function count(){
    if(document.querySelector('.start').innerHTML.trim()==='Start')
    {
        document.querySelector('.start').innerHTML = 'Stop';
        document.querySelector('.start').style.backgroundColor = 'rgb(239, 98, 98)'; 
        intervalId = setInterval(() => {
            mils++;
            if(mils===100) {sec++; mils=0;}
            if(sec===60) {min++; sec=0;}
            if(min===60) {hour++; min=0;}
            display();
        }, 10);
    }
    else{
        clearInterval(intervalId);
        document.querySelector('.start').innerHTML = 'Start';
        document.querySelector('.start').style.backgroundColor = 'rgb(0, 128, 0)'; 
    }
}