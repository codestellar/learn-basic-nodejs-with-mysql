var path = require('path')
var filePath = path.join(__dirname, '2.pdf')
var extract = require('pdf-text-extract')
extract(filePath,
    {
        splitPages: true
    },
    function (err, pages) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(pages[10])
})