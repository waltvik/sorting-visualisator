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
        console.log("bubble clicked");
        util.sorter(randomList);
    });
    let selection = document.querySelector("#selection");
    selection.addEventListener("click", function (e) {
        util.sorter2(randomList);
    });
    let quick = document.querySelector("#quick");
    quick.addEventListener("click", function (e) {
        util.sorter3(randomList);
    });

}

init();


/*
let randomize = document.querySelector("#randomize");

randomize.addEventListener("click", function (e) {

});*/