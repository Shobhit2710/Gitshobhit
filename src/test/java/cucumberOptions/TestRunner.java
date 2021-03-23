package cucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features",
		glue="stepDefinations", dryRun=true, monochrome=true, strict=true,
		tags="@MobileTest, @WebTest, @PortalTest",
		plugin= {"pretty", "html:target/cucumber", "junit:targer/cuckes.xml"}
		
		)
public class TestRunner {

}
