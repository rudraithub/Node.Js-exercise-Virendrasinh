let dns = require("dns")

// console.log(dns.getServers())


// for ip address 

// dns.lookup("www.google.com" , ((err,add)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(add)
//     }
// }))


// for canonical recod of hostname  

dns.resolveCname("www.instagram.com",((err,add)=>{
console.log(add)
}))


// using ip address getting hostname  
// dns.lookupService("8.8.8.8",80,((err,hostname)=>{
//     console.log(hostname)
// }))

// dns.lookupService("0.0.0.0",80,((err,hostname)=>{
        // console.log(hostname)
    // }))

    // dns.lookup("instagram.com",((err,address,family)=>{
    //     console.log(address)
    //     console.log(family)
    // }))
    // dns.resolveTxt("instagram.com" ,((err,record)=>{
    //     if (err)
    //      {throw err}    
    //     console.log(record);
    //     }))
// ns means name server  
// mx means mail exchange  
// soa mean servise oriented architecher
// txt soa ptr etc   
