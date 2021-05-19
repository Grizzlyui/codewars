const validMoves = (pos) => {    
    let counter = 0;
    const positions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];    
    const Arr = [parseInt(positions.indexOf(pos[0])), pos[1] -1];
    
    if(Arr[0] +1 <= 7 && Arr[1] +2 <= 7) counter++;
    if(Arr[0] +1 <= 7 && Arr[1] -2 >= 0) counter++;
    if(Arr[0] +2 <= 7 && Arr[1] +1 <= 7) counter++;
    if(Arr[0] +2 <= 7 && Arr[1] -1 >= 0) counter++;
    if(Arr[0] -1 >= 0 && Arr[1] +2 <= 7) counter++;
    if(Arr[0] -1 >= 0 && Arr[1] -2 >= 0) counter++;
    if(Arr[0] -2 >= 0 && Arr[1] +1 <= 7) counter++;
    if(Arr[0] -2 >= 0 && Arr[1] -1 >= 0) counter++;
    
    return counter
}