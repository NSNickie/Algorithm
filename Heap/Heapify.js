
//堆化 从大根堆里删除并插入一个数字，使剩下的树依然是大根堆   复杂度O(logN) 因为只涉及向下高度
function heapify(arr, index, heap_size) {
    let left = index * 2 + 1;//左孩子下标
    //下方有孩子的时候
    while (left < heap_size) {
        //比较左右孩子哪个大
        let largest = left + 1 < heap_size && arr[left + 1] > arr[left] ? left + 1 : left;
        //比较自己跟大的孩子拿个大
        largest = arr[largest] > arr[index] ? largest : index;
        //如果自己大
        if (largest == index) {
            break;
        }
        //如果孩子大，交换自己和孩子的位置
        swap(arr, largest, index);
        index = largest;
        //把自己左孩子的index更新，重新循环
        left = index * 2 + 1;
    }
}

function swap(arr, num, index) {
    let tmp = arr[num];
    arr[num] = arr[index];
    arr[index] = tmp;
}