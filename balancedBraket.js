var braket = "()()((())";
var singleBraketArray = braket.split("");

function recursion(){
    for(var i=0;i<singleBraketArray.length;i++)
    {   
        if(singleBraketArray[i] == "(" && singleBraketArray[i+1] == ")")
        {
            singleBraketArray.splice(i,2);
        }
    }    
    if(singleBraketArray.length % 2 == 0 && singleBraketArray.length != 0)
    {
        if(singleBraketArray.length == 2)
        {
            if(singleBraketArray[0] == ")" &&  singleBraketArray[1] == "(")
            {
                console.log("not balanced");
                return;
            }
            else
            {
                recursion();
            }            
        }
        else
        {
            recursion();
        }

        
        
    }
    else if(singleBraketArray.length == 0){
        console.log("balanced");
    }
    else
    {
        console.log("Not balanced");
    }
}

recursion();