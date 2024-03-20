// // // for a cipher example-----------------------------------------------------

// const crypto = require('crypto');
// const { describe } = require('node:test');

// // // Secret key must be 32 bytes for AES-256
// const secretKey = crypto.randomBytes(32);
// // // Initialization vector should be 16 bytes
// const iv = crypto.randomBytes(16);

// function encrypt(text) {
//   const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
//   let encrypted = cipher.update(text, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return { iv: iv.toString('hex'), encryptedData: encrypted };
// }

// const message = "Hello, world!";
// const encrypted = encrypt(message);

// console.log(encrypted);

// for a  decipher    ----------------------------------------------------------------------------


// function decrypt(encryptedObject) {
//     const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from(encryptedObject.iv, 'hex'));
//     let decrypted = decipher.update(encryptedObject.encryptedData, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
//   }
  
//   const decryptedMessage = decrypt(encrypted);
  
//   console.log(`Decrypted message: ${decryptedMessage}`);
  
// for a crypto.diffieHellman method-------------------------------------------  

// const crypto = require('crypto');

// // Create Alice's Diffie-Hellman instance
// const alice = crypto.createDiffieHellman(2048); // 2048-bit key size
// const aliceKeys = alice.generateKeys();

// // Create Bob's Diffie-Hellman instance
// const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
// const bobKeys = bob.generateKeys();

// // Exchange and generate the secret
// const aliceSecret = alice.computeSecret(bobKeys);
// const bobSecret = bob.computeSecret(aliceKeys);


// console.log('Alice secret: ', aliceSecret.toString('hex'));
// console.log('Bob secret: ', bobSecret.toString('hex'));

// // Check if the secrets match
// if (aliceSecret.equals(bobSecret)) {
//   console.log('Shared secrets match.');
// } else {
//   console.log('Shared secrets do not match.');
}


// for a creatECDH ----------------------------------------------------------------


// const crypto = require('crypto');

// // Alice creates her ECDH key
// const aliceECDH = crypto.createECDH('secp256k1');
// const alicePublicKey = aliceECDH.generateKeys();

// // Bob creates his ECDH key
// const bobECDH = crypto.createECDH('secp256k1');
// const bobPublicKey = bobECDH.generateKeys();

// // Both exchange and derive the shared secret:
// const aliceSharedSecret = aliceECDH.computeSecret(bobPublicKey);
// const bobSharedSecret = bobECDH.computeSecret(alicePublicKey);

// console.log("Alice's Shared Secret:", aliceSharedSecret.toString('hex'));
// console.log("Bob's Shared Secret:", bobSharedSecret.toString('hex'));

// // Check if the shared secrets are equal
// if (aliceSharedSecret.equals(bobSharedSecret)) {
//   console.log('The shared secrets match.');
// } else {
//   console.log('The shared secrets do not match.');
// }

// for a has mathod --------------------------------------------------------

// let crypto = require("crypto")
// let data = "virendrasinh"


// let hash = crypto.createHash("sha256")
// hash.update(data)

// let digest = hash.digest("hex")

// console.log(`data : ${data}`)
// console.log(`hase : ${digest}`)

// ---------
// let a = crypto.getHashes()
// console.log(a)


// for a Hmac method---------------------------


// let crypto = require("crypto")

// let message = "hello world"

// let secretKey = "your secret key"

// let hmac = crypto.createHmac("sha256",secretKey)

// hmac.update(message)

// let digest = hmac.digest("hex")

// console.log(`digest : ${digest}`)