package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@MobileTest")
	public void validation()
	{
		System.out.println("Mobile Before Running Hooks");
	}
	
	@After("@MobileTest")
	public void verification()
	{
		System.out.println("Mobile After Running Hooks");
	}
	
	@Before("@WebTest")
	public void Webvalidation()
	{
		System.out.println("Web Before Running Hooks");
	}
	
	@After("@WebTest")
	public void Webverification()
	{
		System.out.println(" Web After Running Hooks");
	}
}
