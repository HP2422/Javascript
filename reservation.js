"use strict";

var dateError = document.getElementById("date_error");
var daysError = document.getElementById("days_error");
var nameError = document.getElementById("name_error");
var emailError = document.getElementById("email_error");
var phoneError = document.getElementById("phone_error");
var submitError = document.getElementById("submit_error");
// Taking the value of error message from HTML document.


function ValidationEvent() {

	// Cheking the validation for Date.
	var date = document.getElementById('pickup_date').value.trim();
	// Taking the value of date from HTML. Trimeed the data and saved in date variable.
	var regDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	// Regular exp for Date.
	console.log(date);
	if (!(regDate.test(date))) {
		document.getElementById('pickup_date').focus();
		dateError.innerHTML = "* Date follows dd/mm/yyyy format";
		// Error msg for incorrect date format.
		if (date.length == 0) {
			dateError.innerHTML = "* Date is required";
			// Error msg for empty date.
			return false;
		}
		return false;
	}
	else {
		dateError.innerHTML = "";
	}

	// Cheking the validation for days.
	var days = document.getElementById('days').value.trim();
	// Taking the value of days from HTML. Trimeed the days and saved in days variable.
	var regDays = /^[0-9]+$/;
	// Regular exp for days.
	if (!(regDays.test(days))) {
		document.getElementById('days').focus();
		daysError.innerHTML = "* Please input numeric characters only";
		// Error msg for incorrect days format.
		if (days.length == 0) {
			daysError.innerHTML = "* Days is required";
			// Error msg for empty Days.
			return false;
		}
		return false;
	}
	else {
		daysError.innerHTML = "";
	}

	// Cheking the validation for Name.
	var name = document.getElementById('name').value.trim();
	// Taking the value of name from HTML. Trimeed the name and saved in name variable.
	var regName = /^[a-zA-Z]+$/;
	// Regular exp for name.
	if (!regName.test(name)) {
		document.getElementById('name').focus();
		nameError.innerHTML = "* Name must be in proper format";
		// Error msg for incorrect name format.
		if (name.length == 0) {
			nameError.innerHTML = "* Name is required";
			// Error msg for empty Name.
			return false;
		}
		return false;
	}
	else {
		nameError.innerHTML = "";
	}

	// Cheking the validation for email.
	var email = document.getElementById('email').value.trim();
	// Taking the value of email from HTML. Trimeed the email and saved in email variable.
	var regEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	// Regular exp for email.
	if (!regEmail.test(email)) {
		document.getElementById('email').focus();
		emailError.innerHTML = "* Email must be in proper format";
		// Error msg for incorrect email format.
		if (email.length == 0) {
			emailError.innerHTML = "* Email is required";
			// Error msg for empty email.
			return false;
		}
		return false;
	}
	else {
		emailError.innerHTML = "";
	}

	// Cheking the validation for phone.
	var phone = document.getElementById('phone').value.trim();
	// Taking the value of phone from HTML. Trimeed the phone and saved in phone variable.
	var regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
	// Regular exp for phone.
	if (!(regPhone.test(phone))) {
		document.getElementById('phone').focus();
		phoneError.innerHTML = "* Phone number must be in proper format.";
		// Error msg for incorrect name format.
		if (phone.length == 0) {
			phoneError.innerHTML = "* Phone is required";
			// Error msg for empty phone.
			return false;
		}
		return false;
	}

	return true;
}