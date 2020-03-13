// Problem Statement : Maximum possible value by inserting 5 (Data Structure)
// Given N = 276, function should return 5276
// Given N = -999, function should return -5999
// Given N = 0, function should return 50
// Given N = 860, function should return 8650

var number =  -999
var positive = true; 
if(number < 0)
{
  positive = false;
  number = Math.abs(number);
}
var string = number.toString();
var toString = number.toString().split('');
var arrayValue = [];
for(var i=0; i < toString.length;i++)
{
    var temp = ""
    if(i==0)
    { 
      var temp = ""; 
      toString.unshift("5").toString();
      for(var j=0;j<toString.length;j++)
      {
        temp = temp + "" + toString[j];
      }

    }
    if(i != 0 && i != toString.length  )
    {
        my_string = string.split('');  
        my_string.splice( i , 0, 5 );
        temp = my_string.join('').toString();
    }
    if(i == toString.length )
    {
        temp = string.split('').push(5).toString();        
    }
    if(positive === false)
    {
        temp = - Math.abs(temp);
    }
    arrayValue.push(temp);


}

console.log(arrayValue.sort().pop());

