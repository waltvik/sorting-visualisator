import {dom} from "./dom.js";
import {util} from "./util.js";

function init() {
    let randomList = util.buildRandomList();
    dom.buildPick(randomList);
    let randomize = document.querySelector("#randomize");
    randomize.addEventListener("click", function (e) {
        randomList = util.buildRandomList();
        dom.buildPick(randomList);
    });
    let bubble = document.querySelector("#bubble");
    bubble.addEventListener("click", function (e) {
        util.bubbleSort(randomList);
    });
    let merge = document.querySelector("#merge");
    merge.addEventListener("click", function (e) {
        util.mergeSort(randomList);
    });
}

init();


/*
let randomize = document.querySelector("#randomize");

randomize.addEventListener("click", function (e) {

});*/