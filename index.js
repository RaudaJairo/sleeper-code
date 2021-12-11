module.exports=function(milliseconds){return new Promise(function(r){setTimeout(function(){r()},milliseconds)})}
