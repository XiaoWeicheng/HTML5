function clearText(){
	var password_=document.getElementById("password");
	if(password_.value == password_.defaultValue){
		password_.value = "";
		password_.style.color="#000";
	}
	document.getElementById("tips").style.display="none";
} 
function checkText(){
	var password_=document.getElementById("password");
	if(password_.value == ""){
	 	password_.value = password_.defaultValue;
	 	password_.style.color="darkgray";
	}
	password_.style.backgroundColor="rgba(255,255,255,0.9)";
}
function checkPassword(){
	var password_=document.getElementById("password");
	if(password_.value == "大傻叉爱大宝宝"){
		return true;
	}
	else{
		document.getElementById("tips").style.display="block";
		return false;
	}
}