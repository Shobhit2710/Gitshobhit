package stepDefinations;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefination {
	
    @Given("^Validate the browser$")
    public void validate_the_browser() throws Throwable {
        System.out.println("validate the browser");
    }

    @When("^Browser is triggered$")
    public void browser_is_triggered() throws Throwable {
    	System.out.println("Browser is triggered");
    }

    @Then("^check if browser is started$")
    public void check_if_browser_is_started() throws Throwable {
    	System.out.println("browser is started");
    }
	
	
	
	
	
	
	
	
    @Given("^User is on landing page$")
    public void user_is_on_landing_page() throws Throwable {
    	
        System.out.println("Navigated to Login URL");
    }

    @When("^User is login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_is_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
        System.out.println(strArg1);
        System.out.println(strArg2);
    }

    @Then("^Home Page is populated$")
    public void home_page_is_populated() throws Throwable {

    	System.out.println("Home page is displayed");
    }

    @And("^Cards displayed \"([^\"]*)\"$")
    public void cards_displayed_something(String strArg1) throws Throwable {
        System.out.println(strArg1);
    }
    
    @When("^User is login in to application with (.+) and (.+)$")
    public void user_is_login_in_to_application_with_and(String username, String password) throws Throwable {
        System.out.println(username);
        System.out.println(password);
    }
    
    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
        List<List<String>> al = data.raw(); //in latest cucumber it is aslists()
        System.out.println(al.get(0).get(0));
        System.out.println(al.get(0).get(1));
        System.out.println(al.get(0).get(2));
        System.out.println(al.get(0).get(3));
        System.out.println(al.get(0).get(4));
        
    }

}
