
let a = 5
try{
    if(a !== 0){
        throw new Error("a must be a zero")
    }else{
        console.log(a)
    }
}catch(error){
    console.log(error)}
    // console.log(error.name)
    // console.log(error.message)

finally{
    console.log("a must be zero")
}







 