package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.MessengerPage;
import utils.BasePage;

public class MessengerSD {

    private MessengerPage messengerPage = new MessengerPage();
    @Given("^I am on messenger page$")
    public void setMessengerPage(){
        messengerPage.clickOnMessengerLink();
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.messenger.com/");

    }
@When("^I enter (.+)into (username|password) field on the messenger page$")
    public void enterDataIntoTextField(String value, String textField){
        switch (textField){
            case"username":
                messengerPage.enterEmail(value);
                break;
            case "password":
                    messengerPage.enterPassword(value);
                break;

        }
}
@And("^I click on login button on messenger page$")
    public void clickOnSignButton(){
        messengerPage.clickOnSignIn();
}
@Then("^I verify invalid login message on sign in page$")
    public void verifySignInMessage(){
        Assert.assertEquals(messengerPage.getErrorMessage(),"Incorrect Email");
}
}
