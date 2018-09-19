/*
 * Name: Paul Xiong
 * Course: PROG2070
 * Assignment#4
 * 
 * Purpose: Test case for mandatory fields
 * 
 */

using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace webApp.Tests
{
    [TestFixture]
    public class MandatoryFieldsTest
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;
        
        [SetUp]
        public void SetupTest()
        {
            driver = new FirefoxDriver();
            baseURL = "http://localhost/PXAssignment4";
            verificationErrors = new StringBuilder();
        }
        
        [TearDown]
        public void TeardownTest()
        {
            if (driver != null)
            {
                driver.Quit();
            }
        }
        
        [Test]
        public void TheMandatoryFieldsTest()
        {
            driver.Navigate().GoToUrl(baseURL + "/");
            
            driver.FindElement(By.Id("btnSubmit")).Click();

            Assert.AreEqual("Name is required\r\n" +
                "Address is required\r\n" +
                "City is required\r\n" +
                "Phone number is required\r\n" +
                "Email is required\r\n" +
                "Make is required\r\n" +
                "Model is required\r\n" +
                "Year is required\r\n", CloseAlertAndGetItsText());
        }
        private bool IsElementPresent(By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }
        
        private bool IsAlertPresent()
        {
            try
            {
                driver.SwitchTo().Alert();
                return true;
            }
            catch (NoAlertPresentException)
            {
                return false;
            }
        }
        
        private string CloseAlertAndGetItsText() {
            try {
                IAlert alert = driver.SwitchTo().Alert();
                string alertText = alert.Text;
                if (acceptNextAlert) {
                    alert.Accept();
                } else {
                    alert.Dismiss();
                }
                return alertText;
            } finally {
                acceptNextAlert = true;
            }
        }
    }
}
