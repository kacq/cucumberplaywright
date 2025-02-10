Feature: Login to the application

  Scenario: Successful login
    Given I navigate to "https://example.com/login"
    When I enter username "testuser" and password "password123"
    And I click the login button
    Then I should see the dashboard