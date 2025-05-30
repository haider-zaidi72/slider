
// let img = document.getElementById("img");


//     document.getElementById("btn").addEventListener('click', function(){
//         img.src = "applered.png"
//     })

//     document.getElementById("newBtn").addEventListener('click', function(){
//         img.src = "applegreen.png"
//     })

    
let img = document.getElementById("img");


    document.getElementById("btn").addEventListener('click', function(){
       if( img.src.includes('applered.png')) {
        img.src = "applegreen.png";
       } else{
        img.src = "applered.png";
    } 
    }
)

