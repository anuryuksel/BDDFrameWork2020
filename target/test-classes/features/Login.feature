@web

   Feature: Login Facebook Page

     Background:
       Given: I am on home page

       @login
       Scenario Outline: Verify invalid login for multiple users

         When I enter <username> into username text fields on home screen
         And I enter <password> into password text fields on home screen
         And I click on login button on home screen
         Then I verify that I am invalid login page

         Examples:
         | username              | password |
         |anur35678@hotmail.com   | test@123 |
         |dila1234@yahoo.com    | test@345 |
         |safish1234@gmail.com  | test@567 |

