class MinHeap {

    constructor(parentIdx, heap) {
        this.parentIdx = parentIdx;
        this.child1Idx = this.parentIdx * 2;
        this.child2Idx = this.parentIdx * 2 + 1;
        this.heap = heap;
    }

    changeParentByChild1() {
        this.changeParentByIdx(this.child1Idx);

    }

    changeParentByChild2() {
        this.changeParentByIdx(this.child2Idx);
    }

    changeParentByIdx(idx) {
        let value = this.heap[idx];
        this.heap[idx] = this.heap[this.parentIdx];
        this.heap[this.parentIdx] = value;
        this.parentIdx = this.idx;
        this.child1Idx = this.parentIdx * 2;
        this.child2Idx = this.parentIdx * 2 + 1;
    }

    isChild1MinorThanFather() {
        return this.heap[this.child1Idx] && this.heap[this.child1Idx] < this.heap[this.parentIdx];
    }

    isChild2MinorThanFather() {
        return this.heap[this.child2Idx] && this.heap[this.child2Idx] < this.heap[this.parentIdx];
    }

}

function removeFromMinHeap(heap = []) {

    let min = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();

    let minHeap = new MinHeap(1, heap);

    while (true) {

        if (minHeap.isChild1MinorThanFather()) {
            minHeap.changeParentByChild1()
        } else if (minHeap.isChild2MinorThanFather()) {
            minHeap.changeParentByChild2();
        } else {
            break;
        }

    }

    console.log(heap);

    return min;

}

console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]));

console.log(removeFromMinHeap([undefined, 8]));