Feature: Application Login


@WebTest
Scenario: Home Page default Login
Given User is on landing page
When User is login into application with "shobhit" and "1234"
Then Home Page is populated
And Cards displayed "true"

@MobileTest
Scenario: Home Page default Login
Given User is on landing page
When User is login into application with "jin" and "1234"
Then Home Page is populated
And Cards displayed "false"


Scenario Outline: Home Page default Login
Given User is on landing page
When User is login in to application with <username> and <password>
Then Home Page is populated
And Cards displayed "false"

Examples: 
|username| password|
|abc     |   123   |
|xyz     |   456   |


Scenario: Home Page default Login
Given User is on landing page
When User sign up with following details
|john | abcd| john@gmail.com |india| 12345|
Then Home Page is populated
And Cards displayed "false"