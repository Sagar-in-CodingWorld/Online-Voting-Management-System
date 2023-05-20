import React,{useEffect,useState} from 'react';
import "../stylesheet/Timer.css";
export const Timer = () => {

    function showTime(){  
    var date = new Date();  
    var h = date.getHours();  
    var m = date.getMinutes();  
    var s = date.getSeconds();  
    var session = "AM";  
    // if(h == 0) {  
    //     h = 12;  
    // }  
    if(h > 12) {  
        h = h - 12;   
        session = "PM";  
    }  
    h = (h < 10) ? "0" + h : h;  
    m = (m < 10) ? "0" + m : m;  
    s = (s < 10) ? "0" + s : s;  
    var time = h + ":" + m + ":" + s + " " + session;  
    document.getElementById("MyClockDisplay").innerText = time;  
    document.getElementById("MyClockDisplay").textContent = time;  
    setTimeout(showTime, 1000);  
}  
// window.onload = function(){showTime()};
    // showTime();
    // const {startTime} = useState();
    // const runTimeFunction = () => {
    //     startTime(() => showTime());
    // }

    // useEffect(() =>{
    //     runTimeFunction();
    // },[])
    useEffect(() =>{
        showTime();
    },[])

    return (
        <div>
            <div className="container-fluid bg-warnin">
                <div className="row">
                    <div onClick={() => showTime()} className="col-11 col-md-12 clock p-0" id="MyClockDisplay" style={{color:'black'}}>
                    00:00:00 --
                    </div>
                    {/* {showTime()} */}
                    {/* <button onClick={showTime}>Click me</button> */}
                </div>
            </div>
        </div>
    )
}
