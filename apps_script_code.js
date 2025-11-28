const sheet = SpreadsheetApp.openById("19fufbBRiZaJw97PDOSdXBEm_5aB-xoHO4JVpRxdrDig")
  .getSheetByName("Sheet1");
if (!sheet) {
  throw new Error("Sheet1 not found");
}

const data = JSON.parse(e.postData.contents);

sheet.appendRow([
  data.name || "",
  data.email || "",
  data.whatsapp || "",
  data.rating || "",
  data.review || "",
  new Date()
]);

return ContentService
  .createTextOutput(JSON.stringify({ status: "success" }))
  .setMimeType(ContentService.MimeType.JSON);
