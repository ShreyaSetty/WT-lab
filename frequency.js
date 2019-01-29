function frequency(arr){
    arr.sort();
    var temp = 0;
    var high = 0;
    var index = 0;
    for(var i=0;i<arr.length-1;i++){
        if(arr[i] == arr[i+1]){
            temp++;
        }
        if(temp>high){
            high = temp;
            index = i;
        }
    }
    console.log(arr[index]);
    document.write("<h1>"+arr[index]+"</h1");
    
}