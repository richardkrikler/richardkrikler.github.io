"use strict";

// content types:
//      normal text  = text/xml charset=utf-8
//      json         = application/x-www-form-urlencoded

// params: for parameter, when calling a php script

// func: return value or calling a function

function post(url, contentType, params, func) {
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', contentType);

    //Call a function when the state changes.
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            //Calling a function from it's name as a String
            window[func](http.responseText);
        }
    }

    http.send(params);
}