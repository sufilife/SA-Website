function doPost(e) {
  const sheet = SpreadsheetApp.openById("19fufbBRiZaJw97PDOSdXBEm_5aB-xoHO4JVpRxdrDig")
    .getSheetByName("Sheet1");

  const data = JSON.parse(postData.contents);

  // Insert row in correct order (A→F)
  sheet.appendRow([
    data.name,         // A1 → name
    data.email,        // B1 → email
    data.whatsapp,     // C1 → whatsapp
    data.rating,       // D1 → rating
    data.review,       // E1 → review
    new Date()         // F1 → submitted_at
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
