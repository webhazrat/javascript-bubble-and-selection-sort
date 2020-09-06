// var arr = [45,10,2,85,0,-1,9];
function bubbleAscendingSort(arr){
  var n = arr.length;
  var swapp;
  do{
    swapp = false;
    for(i=0; i<n;i++){
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapp = true;
      }
    }
    n--;
  }while(swapp);
  console.log(arr);
  
}

// var arr = [45,10,2,85,0,-1,9];
function bubbleDescendingSort(arr){
  var n = arr.length;
  var swapp;
  do{
    swapp = false;
    for(i=0; i<n;i++){
      if (arr[i] < arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapp = true;
      }
    }
    n--;
  }while(swapp);
  console.log(arr);
}



// Bubble sort(Ascending) by using another process
function bubbleSort1(arr){
  var n = arr.length;
  for(i=0; i<n; i++){

    for(j=i+1; j<n; j++){
      if (arr[i]>arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}


// Selection sort
function selectionSortAscending(arr){
var n = arr.length;

for(i=0; i<n; i++){
  var min = i;

  for(j=i+1; j<n; j++){
    if (arr[min] > arr[j]) {
      min = j;
    }
  }

  if (min !== i) {
    var tempindex = arr[i];
    arr[i] = arr[min];
    arr[min] = tempindex;
  }
}
console.log(arr);
}

// Selection sort
function selectionSortDecending(arr){
var n = arr.length;

for(i=0; i<n; i++){

  var max = i;

  for(j=i+1; j<n; j++){
    if (arr[max] < arr[j]) {
      max = j;
    }
  }

  if (max !== i) {
    var tempindex = arr[i];
    arr[i] = arr[max];
    arr[max] = tempindex;
  }

}
console.log(arr);
}