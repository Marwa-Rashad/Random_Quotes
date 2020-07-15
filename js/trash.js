/* Quote Api */

var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api.paperquotes.com/apiv1/quotes/");
xhr.setRequestHeader('Authorization', "Token e414992f3ccbc5c57c5bcb726285cc4a0af67475")

xhr.send();


/*
var token = "e414992f3ccbc5c57c5bcb726285cc4a0af67475";
$.ajax({ 
    type : "GET", 
    url : "https://api.paperquotes.com/quotes?tags=love,life&language=en", 
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "Token {e414992f3ccbc5c57c5bcb726285cc4a0af67475}");},

    success : function(result) { 
        console.log(result.results); 
    }, 
    error : function(result) { 
console.log("error")    } 
  }); */