function testSchemas() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('mail_template').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Test Email markup - ' + new Date(),
    htmlBody: htmlBody,
  });
}
