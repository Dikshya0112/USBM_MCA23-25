// Write a function to print greeting to your friend 
function greeting (name,hour){
    if (hour < 12){
        return `Good Morning ${name}`;
    }else if (hour < 16){
        return `Good Afternoon ${name}`;
    }else if (hour < 20){
        return `Good Evening ${name}`;
    }else {
        return `Good Night ${name}`;
    }
}

const output = greeting ("Abhishek",20);
console.log(output);