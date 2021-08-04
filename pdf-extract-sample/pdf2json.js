let fs = require("fs");
let PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {

  // Business Rules here
  
  let textStrings = pdfData.formImage.Pages[0].Texts;
  let realTextStrings = [];
  textStrings.forEach(ts => {
      ts.R.forEach(s => {
          realTextStrings.push(s.T.split('%20').join(' '));
      })
  })

  fs.writeFile(
    "./output.json",
    JSON.stringify(realTextStrings),
    function (err, result) {
      if (err) {
        console.log("error", err);
      }
    }
  );
});

pdfParser.loadPDF("./1.pdf");
