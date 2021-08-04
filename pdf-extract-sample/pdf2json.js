let fs = require("fs");
let PDFParser = require("pdf2json");
// Check out this library this is nice.
// https://www.npmjs.com/package/pdf2json

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {

  // Business Rules here
  
  // The data will be available in the Texts Array
  let textStrings = pdfData.formImage.Pages[0].Texts;
  let realTextStrings = [];
  textStrings.forEach(ts => {
      // R denotes the array of text Run and T is the real text in each of those objects
      ts.R.forEach(s => {
          realTextStrings.push(s.T.split('%20').join(' '));
      })
  })

  fs.writeFile(
    "./output.json",
    // To understand the JSON you can use JSON.stringify(pdfData),
    JSON.stringify(realTextStrings),
    function (err, result) {
      if (err) {
        console.log("error", err);
      }
    }
  );
});

pdfParser.loadPDF("./1.pdf");
