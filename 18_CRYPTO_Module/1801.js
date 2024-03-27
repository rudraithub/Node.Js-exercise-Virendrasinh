// ## 1801 - Password Encryption and Decryption using AES


// const crypto = require('crypto');


// function encryptPassword(password) {
  
//   const key = crypto.randomBytes(32);
 
//   const iv = crypto.randomBytes(16);

//   const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//   let encrypted = cipher.update(password, 'utf8', 'hex');
//   encrypted += cipher.final('hex');

 
//   return {
//     encryptedPassword: encrypted,
//     key: key.toString('hex'),
//     iv: iv.toString('hex'),
//   };
// }


// function decryptPassword(encryptedData) {
//   const key = Buffer.from(encryptedData.key, 'hex');
//   const iv = Buffer.from(encryptedData.iv, 'hex');

//   const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//   let decrypted = decipher.update(encryptedData.encryptedPassword, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');

//   return decrypted;
// }

// const password = 'secretPassword123';
// console.log( password);

// const encryptedData = encryptPassword(password);
// console.log(encryptedData.encryptedPassword);

// const decryptedPassword = decryptPassword(encryptedData);
// console.log(decryptedPassword);
