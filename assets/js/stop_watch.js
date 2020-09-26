
  let TimeFormat =(number)=>{
    if(number<10){
      number = "0" + number
    }
    return number
  }




  let Timer = (config) => {
   let {h,m,s} = config;
   let seconds = 0;
   let minutes = 0;
   let hours = 0;

   let i = setInterval(()=>{
    seconds+=1
    getHours()
    getMinutes()
    getSeconds()
    console.log(`${TimeFormat(hours)} : ${TimeFormat(minutes)} : ${TimeFormat(seconds)}`);

  //checks client config
  if(h&&m&&s){
    if(h==hours&&m==minutes&&s==seconds){
      clearTimeout(i)
    }
  }else if(h&&m || h&&s){
    if(h==hours&&m==minutes || h==hours&&s==seconds){
      clearTimeout(i)
    }
  }else if(h){
    if(h==hours){
      clearTimeout(i)
    }
  }else if(m&&s){
    if(m==minutes&&s==seconds){
      clearTimeout(i)
    }
  }else if(m){
    if(m==minutes){
      clearTimeout(i)
    }
  }else{
    if(s==seconds){
      clearTimeout(i)
    }
  }


  },1000)

   function getSeconds(){
      if(seconds>=60){
       seconds = 0;
       minutes+=1
      }
    }

   function getMinutes(){
      if(minutes>=60){
       minutes = 0;
       hours+=1;
      }
    }

   function getHours(){
      if(hours>=24){
       hours = 0;
      }
    }

    // return Timer(config);

  }


export {
  Timer,
  TimeFormat
}
