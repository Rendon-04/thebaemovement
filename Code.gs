function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var payload = {
      "entry.1111500027": data.firstName,
      "entry.1241673709": data.lastName,
      "entry.1285359350": data.email,
      "entry.1401508164": data.phone,
      "entry.2049775849": data.subject,
      "entry.1694549348": data.message,
    };

    var formResponseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXDt2ndur-2vrIz9C7M1Wsug3IsGBSjaxPIEtR4Ey3D2oBXQ/formResponse";


    UrlFetchApp.fetch(formResponseUrl, {
      method: "post",
      payload: payload,
      muteHttpExceptions: true
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doOptions() {
  return jsonResponse({ ok: true });
}

function jsonResponse(body) {
  var output = ContentService.createTextOutput(JSON.stringify(body));
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader("Access-Control-Allow-Origin", "*");
  output.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return output;
}
