
const timeConverstion = (time) =>{
    let InputTime = time.split(':');
    console.log(InputTime)
    let hour = parseInt(InputTime[0]);
    let second = InputTime[2].slice(0,1);
    let timeframe = InputTime[2].slice(2);
    if((timeframe === 'PM') && (hour !== 12)){
        hour = 12 + hour;
    }
    if((hour === 12) && (timeframe === 'AM')){
        hour = '00'
    }
    console.log("hour",hour)
    console.log("mint",mint)
    console.log("second",second)
    console.log("hour",hour)
}

timeConverstion("7:45:00PM")