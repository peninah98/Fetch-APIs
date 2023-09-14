const promiseOne = () => new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise 1 resolved!')
        // reject('Promise 1 rejected')
    }, 400);
})


const promiseTwo = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve('Promise 2 resolved')
        reject('Promise 2 rejected')
    }, 500);
})


const promiseThree = () => new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise 3 is resolved')
        // reject('Promise 3 is rejected')
    }, 600);
})


const fetchData = async () =>{
    try {
        const response = await Promise.allSettled([promiseOne(),promiseThree(),promiseTwo()])
        console.log(response)


        //This method promise.allsettled never throw error, though you can customise it the way you want
        //like here if there the one result or more woith rejected console oooh no message
        for(const singularResponse of response ){
            if(singularResponse.status === 'rejected'){
                console.log(`Oh nonononooo`)
            }
        }
    } catch (error) {
        console.log(`Ooops API sucks`, error)
        
    }
}


fetchData()