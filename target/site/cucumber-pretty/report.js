$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Messenger.feature");
formatter.feature({
  "line": 4,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerSD.setMessengerPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter anuryuksel1235@gmail.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "anuryuksel1235@gmail.com ",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 38
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test123 ",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MessengerSD.clickOnSignButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MessengerSD.verifySignInMessage()"
});
formatter.result({
  "status": "skipped"
});
});