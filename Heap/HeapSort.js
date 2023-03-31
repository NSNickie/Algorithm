function heapSort(arr) {
    if (arr == null || arr.length < 2) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        //大根堆化
        heapInsert(arr, i);
    }
    let heap_size = arr.length;
    swap(arr, 0, heap_size);
    while (heap_size > 0) {
        heapify(arr, 0, heap_size);
        swap(arr, 0, --heap_size)
    }
}