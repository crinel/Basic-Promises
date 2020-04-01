function request(successCallback, errorCallback) {
    let serverResponse = {
         statusCode: 200
     }
     if(serverResponse.statusCode === 200) {
         setTimeout(function(){
             successCallback(serverResponse);
         }, 1000)
     } else {
         setTimeout(errorCallback, 1000);
     }
 }
 request(function(serverResponse){
    console.log("Success operation", serverResponse);
}, function(){
    console.log("Error operation");
})

const request = new Promise(function(resolve, reject){
    let serverResponse = {
         statusCode: 200
     }
     if(serverResponse.statusCode === 200) {
         setTimeout(function(){
             resolve(serverResponse);
         }, 1000)
     } else {
         setTimeout(reject, 1000);
     }
 })

request.then(function(serverResponse){
    console.log("Success operation", serverResponse);
}).catch(function(){
    console.log("Error operation");
})



//------------------------------

// function facCurat(day, succesFn, failFn){
//     if(day == "maine") {
//         succesFn("Felicitari ! te-ai tinut de promisiune !");
//     } else if( day === "poimaine") {
//         succesFn("Ai intarziat putin, dar totusi te-ai tinut de promisiune !");
//     } else { 
//         failFn();
//     }
// }


// facCurat("poimaine", function(message){
//     console.log(message);
//     console.log("Dar se putea mai bine !");
// }, function(){
//     console.log("Nu prea te tii de promisiuni !");
// });


// facCurat("Sambata", function(message){
//     console.log(message);
//     console.log("Dar se putea mai bine !");
// }, function(){
//     console.log("Nu prea te tii de promisiuni !");
// });

var facCurat = function(day) {
    return new Promise(function(resolve, reject){
        if(day == "maine") {
            resolve("Felicitari ! te-ai tinut de promisiune !");
        } else if( day === "poimaine") {
            resolve("Ai intarziat putin, dar totusi te-ai tinut de promisiune !");
        } else { 
            reject("ceva");
        }
    });
}

facCurat("maine").then(function(msg){
    console.log(msg);
}).catch(function(param){
    console.log("Nu prea te tii de promisiuni !" + param);
})
