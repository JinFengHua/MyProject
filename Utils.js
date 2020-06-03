function requestMethod(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();
    var r_url = "https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/" + par2
    xhr.open(par1,r_url)
    xhr.setRequestHeader ("content-type","application/x-www-form-urlencoded");
    xhr.send(par3);
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4){
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;
            callback(obj)
        }
    }

}