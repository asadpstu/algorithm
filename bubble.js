
var array = [8, 5, 2, 9, 5, 6, 3]
var length = array.length;

var length = array.length;
for(var i=0;i<length;i++)
	{
			for(var j=0;j<length;j++)
			{   
				var currentIndex = j;
				var nextIndex = j+1;
				if(array[currentIndex] > array[nextIndex])
				{
					var swap1 = array[currentIndex];
					var swap2 = array[nextIndex];
					array[nextIndex] = swap1;
					array[currentIndex] = swap2;						
				}
				else
				{
				   
				   var currentIndex = nextIndex;
				   var nextIndex = currentIndex+1;
				   if(array[currentIndex] > array[nextIndex])
					{
						var swap1 = array[currentIndex];
						var swap2 = array[nextIndex];
						array[nextIndex] = swap1;
						array[currentIndex] = swap2;
					}
					else
					{
					  //no swap
					}
				}
				
				var checkTrue = 0;
				var checkFalse = 0;
				for(var k=0;k<length-1;k++)
				{
				  if(array[k] <= array[k+1])
				  {
					checkTrue = checkTrue + 1;
				  }
				  else
				  {
					checkFalse = checkFalse + 1;
				  }
				}
				//console.log("checkTrue",checkTrue);console.log("checkFalse",checkFalse);
				if( checkFalse == 0)
				{
				  console.log(array);
				}
				
				
			}
					
					
			
	}


