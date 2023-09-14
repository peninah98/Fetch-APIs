const promiseOne = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Promise 1 is resolved')
            // reject('Promise 1 is rejected')
        }, 900);
    })
}



const promiseTwo =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve('Promise 2 is resolved')
            reject('Promise 2 is rejected')
        }, 600);
    })
}


const promiseThree =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Promise 3 is resolced')
            // reject('Promise 3 is rejected')
            
        }, 700);
    })
}

const throwErrorAfterSomeTime = () =>{
    return new Promise((_,reject) =>{

        setTimeout(() => {
            reject('Took too ling time')
        }, 500);
    })
}

const fetchData = async () =>{
try{
    // const beforeTime = new Date()
    // const responseOne = await promiseOne()
    // const responseTwo = await promiseTwo()
    // const responseThree = await promiseThree()
    // const afterTime = new Date()

    // const allPromises = await Promise.all([promiseOne(),promiseTwo(),promiseThree()])
    // const allPromises = await Promise.race([promiseOne(),promiseTwo(), promiseThree() ]);
    const allPromises = await Promise.race([promiseThree(),promiseOne(),promiseTwo()]);
    console.log(allPromises)

}
catch(error){
    console.log(`I'm sorry API sucks`,error)
}
}

fetchData()


