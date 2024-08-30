document.addEventListener('DOMContentLoaded', ()=>{
    const birthday = new Date("Feb 23, 2025 20:00:00");
    const time_stamp = (birthday.getTime())/1000;

    new FlipDown(time_stamp)
    .start()
    .ifEnded(()=>{
        console.log('Event has ended!');
    })
})