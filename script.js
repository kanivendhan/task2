
function showul() {
    document.getElementById("navMenu").style.display = "block";
    document.getElementById("close").style.display = "block";
}

function hideul() {
    document.getElementById("navMenu").style.display = "none";
    document.getElementById("close").style.display = "none";
}


document.getElementById("validation").addEventListener("click", function() {
                    var email = document.getElementById("email").value;
                    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (emailPattern.test(email)) {
                        alert("Subscription successful!");
                    } else {
                        alert("Please enter a valid email address.");
                    }
});
function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
            