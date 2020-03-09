// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var matrix = A;
    const sizes = [];
    const visited = matrix.map(row=>row.map(value =>false));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(visited[i][j]) continue;
            visiteachnode(i,j,matrix,visited,sizes);
        }
    }
    return sizes.length;
    
}

function visiteachnode(i,j,matrix,visited,sizes )
{
    let currentAdjacentCountrySize = 0;
    const nodetoexplore = [[i,j]];
    while(nodetoexplore.length){
        const currentNode = nodetoexplore.pop();
        i= currentNode[0];
        j= currentNode[j];
        if(visited[i][j]) continue;
        visited[i][j] = true;
        if(matrix[i][j]===0) continue;
        currentAdjacentCountrySize++;
        const unvisitedNeighbours = getunvistedneighbour(i,j,matrix,visited);
        for(const neighbour of unvisitedNeighbours)
        {
          nodetoexplore.push(neighbour);  
        }
        
    }
    if(currentAdjacentCountrySize >0) sizes.push(currentAdjacentCountrySize);
}

function getunvistedneighbour(i,j,matrix,visited){
    const unvisitedNeighbours = [];
    if(i> 0 && !visited[i-1][j]) unvisitedNeighbours.push([i-1,j]);
    if(i< matrix.length -1 && !visited[i+1][j]) unvisitedNeighbours.push([i+1,j]);
    if(j>0 && !visited[i][j-1]) unvisitedNeighbours.push([i,j-1]);
    if(j<matrix[0].length -1 && !visited[i][j+1]) unvisitedNeighbours.push([i,j+1]);
    return unvisitedNeighbours;
}


//Time complexity = O(wh) , here w = width
//Space complexity = O(wh)

//or O(N)  =>n = number of country element 















