// Declaring a Promise
var myPromise = new Promise((resolve, error) => {
  let x = 5;
  if (x == 0) {
    resolve(() => {
      return "Success";
    });
  } else {
    error("error");
  }
});

// Using async
async function invoices(){
    return () => {
        return [
            {"id": 1, "invoice_name": "Karisma Invoice"}
        ];
    };
}

// var myPromise3 = async(resolve, reject) => {
//     let x = 5;
//     if (x == 0) {
//       resolve(() => {
//         return "Success";
//       });
//     } else {
//       reject("error");
//     }
// }

// myPromise3().then((r) => {
//     console.log(r());
// })

// // Calling your async method
// invoices().then((r) => {
//     console.log(r);
// })

// myPromise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

console.log("first")
setTimeout(() => {
    console.log("second")
}, 1000)
console.log("third")
