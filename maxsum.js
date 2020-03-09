    var matrix = [1.0, 0.1, -1.0, -7.0, 3.0, -5.0, -2.5, 0.0, 1.0];
    if(!matrix.length) {
        return 0;
    }
    if(matrix.length === 1){
        return matrix[0];
    }
    var matrix = [1.0, 0.1, -1.0, -7.0, 3.0, -5.0, -2.5, 0.0, 1.0]
    var productSum = 0;
    var arrayData = [];
    for(var i=0;i<matrix.length;i++)
    {
        var product = 1;
        
        for(var j=i+1;j<matrix.length;j++)
        {
          //console.log(Math.abs(matrix[j]));
          var value = Math.abs(matrix[j])
          if(value === 0)
          {
            value = 1;
          }
          product = product * value;    
        } 
        arrayData.push(product)
        //console.log(product)
        
    }
    var result = 0;
    for(var j=0;j<arrayData.length;j++)
    {
       if(arrayData[j] > result)
       {
        result =  arrayData[j]; 
       }
    }
    
    console.log(result)