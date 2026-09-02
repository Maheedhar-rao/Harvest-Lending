/**
 * Google Apps Script backing POST /api/apply.
 *
 * Setup
 * 1. Open the Google Sheet that should collect applications.
 * 2. Extensions > Apps Script, paste this file, and set SECRET below to a long
 *    random string.
 * 3. Deploy > New deployment > Web app.
 *      Execute as:      Me
 *      Who has access:  Anyone
 * 4. Copy the /exec URL into .env.local as GOOGLE_SHEETS_WEBHOOK_URL and the
 *    same random string as GOOGLE_SHEETS_WEBHOOK_SECRET, then restart the dev
 *    server.
 *
 * Re-deploy (Manage deployments > edit > new version) after any edit here.
 */

var SECRET = 'CHANGE_ME'
var SHEET_NAME = 'Applications'

var HEADERS = [
  'submittedAt',
  'firstName',
  'lastName',
  'email',
  'phone',
  'businessName',
  'state',
  'industry',
  'capitalNeeded',
  'timeInBusiness',
  'monthlySales',
  'creditScore',
  'bankAccount',
  'textAlerts',
  'qualified',
]

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents)
    if (body.secret !== SECRET) {
      return json({ ok: false, error: 'unauthorized' })
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS)
      sheet.setFrozenRows(1)
    }

    var row = body.row || {}
    sheet.appendRow(
      HEADERS.map(function (h) {
        return row[h] === undefined ? '' : row[h]
      })
    )

    return json({ ok: true })
  } catch (err) {
    return json({ ok: false, error: String(err) })
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
