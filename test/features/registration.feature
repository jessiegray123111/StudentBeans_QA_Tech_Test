Feature: Student Beans Registration Form Validation 

Scenario: Invalid email shows error
  Given I am on the studentbeans homepage
  When I open the register form
    And I enter "test.com" into the email field
    And I enter "ValidPass123" into the password field
    Then I should see an error for the email field

Scenario: Short password shows error
  Given I am on the studentbeans homepage
  When I open the register form
    And I enter "user@test.com" into the email field
    And I enter "abc" into the password field
    Then I should see an error for the password field

