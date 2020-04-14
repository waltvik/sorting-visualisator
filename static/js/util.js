import {dom} from "./dom.js";

function* bubbleSort(a) { // * is magic
    console.log("in bubble sort");
    let swapped;
    do {
        console.log("in do");
        swapped = false;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                console.log("before yield");
                yield swapped; // pause here
                console.log("after yield");
            }
        }
    } while (swapped);

}


function* selectionSort(arr) {
    let minIdx, temp,
        len = arr.length;
    let swapped;
    for (let i = 0; i < len; i++) {
        swapped = false;
        minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        swapped = true;
        console.log("before yield");
        yield swapped; // pause here
    }
    //return arr;
}

/*
var co = require('co');

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function* partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (items[left] < pivot) { left++ }
    while (items[right] > pivot) { right-- }
    if (left <= right) {
      swap(items, left, right);
      left++;
      right--
    }
    yield true
  }
  return left
}

function* generatorQuickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    left = typeof left !== "number" ? 0 : left;
    right = typeof right !== "number" ? items.length - 1 : right;
    index = yield* partition(items, left, right);
    if (left < index - 1) { yield* generatorQuickSort(items, left, index - 1) }
    if (index < right) { yield* generatorQuickSort(items, index, right) }
  }
  return items
}

function syncQuickSort(items) {
  let copy = items.slice()
  for (let operation of generatorQuickSort(copy));
  return copy;
}

function asyncQuickSort(items, batch) {
  // Note: using co as a temporary stand-in
  // until async/await are available
  return co(function*() {
    let copy = items.slice()
      , counter = 0
      , tick = Promise.resolve();
    for (let operation of generatorQuickSort(copy)) {
      if (!batch || ++counter % batch === 0) {
        yield tick
      }
    }
    return copy;
  })
}

var list = [];

for (let i=0; i<1000; i++) {
  list.push(Math.random())
}

console.log(syncQuickSort(list));

asyncQuickSort(list, 1).then(function(sorted) {
  console.log(sorted)
}) */

export let util = {
    buildRandomList: function () {
        return [...Array(100)].map(() => Math.floor(Math.random() * 700));
    },
    sleep: function (ms) {

        return new Promise(resolve => setTimeout(resolve, ms));
    },
    sorter: function (arr) {
        let sort = bubbleSort(arr);
        let requestId = 0;

        // an anim function triggered every 60th of a second
        function anim() {
            requestId = requestAnimationFrame(anim);
            dom.buildPick(arr);
            sort.next(); // call next iteration of the bubbleSort function
            cancelAnimationFrame(2600);
        }

        anim();
    },
    sorter2: function (arr) {
        let sort = selectionSort(arr);
        let requestId = 0;

        // an anim function triggered every 60th of a second
        function anim() {
            requestId = requestAnimationFrame(anim);
            dom.buildPick(arr);
            sort.next(); // call next iteration of the bubbleSort function
            cancelAnimationFrame(120);
        }

        anim();
    },
/*
    sorter3: function (arr) {
        let sort = quickSort(arr, 0, (arr.length - 1));
        let requestId = 0;

        // an anim function triggered every 60th of a second
        function anim() {
            requestId = requestAnimationFrame(anim);
            console.log("request id: " + requestId);
            dom.buildPick(arr);
            sort.next(); // call next iteration of the bubbleSort function
            cancelAnimationFrame(120);
        }

        anim();
    },
*/

};