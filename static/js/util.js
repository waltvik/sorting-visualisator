import {dom} from "./dom.js";

export let util = {
    buildRandomList: function () {
        return [...Array(10)].map(() => Math.floor(Math.random() * 700));
    },
    sleep: function (ms) {

        return new Promise(resolve => setTimeout(resolve, ms));
    },
    bubbleSort: function (arr) {
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                util.sleep(2000).then(() => {
                    dom.buildPick(arr);
                    if (arr[j - 1] > arr[j]) {
                        let temp = arr[j - 1];
                        arr[j - 1] = arr[j];
                        arr[j] = temp;
                    }
                });

            }
        }
        return arr;
    },
    mergeSort: function (arr) {
        console.log("in merge sort");
        console.log("array: " + arr);
        let len = arr.length;
        if (len < 2)
            return arr;
        let mid = Math.floor(len / 2);
            let left = arr.slice(0, mid);
            let right = arr.slice(mid);
            console.log("left: " + left);console.log("right: " + right);
        return util.merge(util.mergeSort(left), util.mergeSort(right));


    },
    merge: function (left, right) {

            console.log("in merge");
            let result = [];
            let lLen = left.length;
            let rLen = right.length;
            let l = 0;
            let r = 0;
            while (l < lLen && r < rLen) {
                console.log("in while in merge");
                console.log("l: " + l);
                console.log("r: " + r);
                if (left[l] < right[r]) {
                    result.push(left[l++]);
                    console.log("result if left l < right r" + result);
                } else {

                    result.push(right[r++]);
                    console.log("result else: " + result);
                }
            }
            console.log("concatenated res" + result.concat(left.slice(l)).concat(right.slice(r)));
            dom.partlyBuildPick(result.concat(left.slice(l)).concat(right.slice(r)));
            return result.concat(left.slice(l)).concat(right.slice(r));

    }
};