var path = require('path')
var filePath = path.join(__dirname, '1.pdf')
var extract = require('pdf-text-extract')
extract(filePath,
    {
        splitPages: true,
        layout: 'raw'
    },
    function (err, pages) {
  if (err) {
    console.dir(err)
    return
  }
  let myResult = [];
//   myResult = pages[0].split(/\r?\n/);
//   myResult.forEach(myString => {
//       console.log(myString);
//       console.log("#sonia#");
//   });
  console.dir(pages[0]);

})