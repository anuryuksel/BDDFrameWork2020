@web


Feature: Messenger page feature

  Background:
    Given I am on messenger page
    @messenger

    Scenario: Verify invalid login from messenger page
    When I enter anuryuksel1235@gmail.com into username field on the messenger page
    And I enter test123 into password field on the messenger page
    And I click on login button on messenger page
    Then I verify invalid login message on sign in page