const os = require('os'); 

// compyuterning hozirgi foydalanuvchisi haqidagi ma'lumot
const user = os.userInfo()

console.log(user)

const freeMem = os.freemem()
console.log(freeMem)

const myPlatform = os.machine()

console.log(myPlatform)