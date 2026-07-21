// when refreshed, prompt is given
// the value of the prompt (num) 
// is how many times a specified data 
// is shown inside an object 


let obj = {
    name : "Elyorbek",
    age : 16,
    hobby: "chess"
}
function showData () {
    // console.log(obj);
    let times = +prompt("necha marta")
    let data = prompt("nimani ko'rmoqchisiz?")
    
    if(!isNaN(times)) {
        for (i = 1; i <= times; i++) {
        if(data == "name"){
            console.log(obj[data]);
        }
        else if (data == "age") {
            console.log(obj[data], '- number');
        } 
    }
        
    }
    else {
        console.log("not a number");
        
    }

    
}
showData()