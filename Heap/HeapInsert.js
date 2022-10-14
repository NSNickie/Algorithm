function heapInsert(arr, index) {
    while (arr[index] > arr[(index - 1) / 2]) {
        swap(arr, index, (index - 1) / 2);
        index = (index - 1) / 2;
    }

}











function swap(arr, num, index) {
    let tmp = arr[num];
    arr[num] = arr[index];
    arr[index] = tmp;
}