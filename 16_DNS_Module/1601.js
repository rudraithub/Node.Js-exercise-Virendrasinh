// ## 1601 - wite a program for all DNS methods. 


// const dns = require('dns');


// const domain = 'example.com';


// dns.resolve4(domain, (err, addresses) => {
//   if (err) throw err;
//   console.log(addresses);

  
//   dns.reverse(addresses[0], (err, hostnames) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(hostnames);
//     }
//   });
// });


// dns.resolve6(domain, (err, addresses) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(addresses);
//   }
// });


// dns.resolveMx(domain, (err, addresses) => {
//   if (err) throw err;
//   console.log(addresses.map(addr => ({ exchange: addr.exchange, priority: addr.priority })));
// });
