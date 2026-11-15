let display = document.getElementById("display");
// console.log(display.value="hello")

const clearDis = () =>{
    display.value="";
}

const seven = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "7"
    }else{
      display.value += "7"  
    }
}
     

const eight = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "8"
    }else{
      display.value += "8"  
    }
}

const nine = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "9"
    }else{
      display.value += "9"  
    }
}

const four = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "4"
    }else{
      display.value += "4"  
    }
}

const five = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "5"
    }else{
      display.value += "5"  
    }
}

const six = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "6"
    }else{
      display.value += "6"  
    }
}

const one = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "1"
    }else{
      display.value += "1"  
    }
}

const two = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "2"
    }else{
      display.value += "2"  
    }
}

const three = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "3"
    }else{
      display.value += "3"  
    }
}

const zero = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "0"
    }else{
      display.value += "0"  
    }
}

const add = () =>{
    display.value += "+"
}

const sub = () =>{
    display.value += "-"
}

const mul = () =>{
    display.value += "*"
}

const div = () =>{
    display.value += "/"
}

const equal = () =>{
    display.value = eval(display.value)
}

const dot = () =>{
    display.value += "."
}

const per = () =>{
    display.value += "%"
}

const dbzero = () =>{
    if (display.value== 0){
        display.value="";
        display.value += "00"
    }else{
      display.value += "00"  
    }
}

const del = () =>{
    display.value = display.value.slice(0,-1)
}