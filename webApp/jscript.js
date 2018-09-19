function validateForm() 
{
	//declare error message variable
	var errorMessage = "";
		
	//validate and save seller name
	var name = document.sellerForm.name;
	if (!isNaN(name.value) || name.value == "")
	{
		errorMessage += "Name is required\n";
	}
	else
	{
		localStorage.setItem("name", name.value);
	}
	
	//validate and save seller address
	var address = document.sellerForm.address;
	if (!isNaN(address.value) || address.value == "")
	{
		errorMessage += "Address is required\n";
	}
	else
	{
		localStorage.setItem("address", address.value);
	}
	
	//validate and save seller city
	var city = document.sellerForm.city;
	if (!isNaN(city.value) || city.value == "")
	{
		errorMessage += "City is required\n";
	}
	else
	{
		localStorage.setItem("city", city.value);
	}
	
	//validate and save phone number
	var phone = document.sellerForm.phone;
	if (phone.value == "")
	{
		errorMessage += "Phone number is required\n";
	}
	else
	{
		var rePhone = /^([(]\d{3}[)]|\d{3}[-])\d{3}[-]\d{4}$/;
		if (!rePhone.test(phone.value))
		{
			errorMessage += "Phone number provided is invalid format\n";
		}
		else
		{
			localStorage.setItem("phone", phone.value);
		}
	}
	
	//validate and save email
	var email = document.sellerForm.email;
	if (!isNaN(email.value) || email.value == "")
	{
		errorMessage += "Email is required\n";
	}
	else
	{
		localStorage.setItem("email", email.value);
	}
	
	//validate and save make
	var make = document.sellerForm.make;
	if (!isNaN(make.value) || make.value == "")
	{
		errorMessage += "Make is required\n";
	}
	else
	{
		localStorage.setItem("make", make.value);
	}
	
	//validate and save model
	var model = document.sellerForm.model;
	if (!isNaN(model.value) || model.value == "")
	{
		errorMessage += "Model is required\n";
	}
	else
	{
		localStorage.setItem("model", model.value);
	}
	
	//validate and save year
	var year = document.sellerForm.year;
	if (isNaN(year.value) || year.value == "")
	{
		errorMessage += "Year is required\n";
	}
	else
	{
		localStorage.setItem("year", year.value);
	}

	//alert user of any errors in form
	if (errorMessage != "")
	{
		alert(errorMessage);
		return false;
	}
}