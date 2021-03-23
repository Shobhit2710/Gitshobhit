$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Home Page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is login into application with \"shobhit\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Cards displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shobhit",
      "offset": 37
    },
    {
      "val": "1234",
      "offset": 51
    }
  ],
  "location": "stepDefination.user_is_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Home Page default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User is login into application with \"jin\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 37
    },
    {
      "val": "1234",
      "offset": 47
    }
  ],
  "location": "stepDefination.user_is_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User is login into application with \"shobhit\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shobhit",
      "offset": 37
    },
    {
      "val": "1234",
      "offset": 51
    }
  ],
  "location": "stepDefination.user_is_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User is login into application with \"jin\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 37
    },
    {
      "val": "1234",
      "offset": 47
    }
  ],
  "location": "stepDefination.user_is_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is login in to application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "portal-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "portal-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 31,
      "id": "portal-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "xyz",
        "456"
      ],
      "line": 32,
      "id": "portal-login;home-page-default-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is login in to application with abc and 123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 37
    },
    {
      "val": "123",
      "offset": 45
    }
  ],
  "location": "stepDefination.user_is_login_in_to_application_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is login in to application with xyz and 456",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 37
    },
    {
      "val": "456",
      "offset": 45
    }
  ],
  "location": "stepDefination.user_is_login_in_to_application_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Home Page default Login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "john",
        "abcd",
        "john@gmail.com",
        "india",
        "12345"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefination.cards_displayed_something(String)"
});
formatter.result({
  "status": "skipped"
});
});