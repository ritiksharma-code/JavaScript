/* 
    Async/Await = Async = makes a function return a promise
                  Await = makes an async function wait for a promise

                  Allows you write asynchronous code in a synchronous manner
                  Async doesn't have resolve or reject parameters
                  Everything after Await is placed in an event queue

                  wait is only valid in async palace
*/

function walkDog(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const dogwalked = true;            // if the first task is rejected then we will not move further.
            if(dogwalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You didn't walked the dog");
            }
            
        }, 1500);
    });
};

function cleanKitchen(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen");
            }
            
        }, 2500);
    });
};

function takeOutTrash(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash ♻️");
            }
            else{
                reject("You didn't take out the trash");
            }

            
        }, 500);
    });
};


async function doChores(){

    try{
        const walDogResult = await walkDog();
        console.log(walDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult)
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
    
}

doChores();