const path = require('path');

// path.basename file nomi 
console.log(path.basename(__filename))

// path.basename file joylashuvi 
console.log(path.dirname(__filename))

// path.basename file kengaytmasi
console.log(path.extname(__filename))

// path.basename file haqida umumiy ma'lumot obyekt holatida
console.log(path.parse(__filename))

// path.join nomlarni birlashtirish
console.log(path.join(__dirname, "lesson", "index.js"))

console.log(path.resolve(__dirname, "lesson", "index.js"))