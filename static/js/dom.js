export let dom = {
    buildPick: function (randomList) {
        let listDiv = document.querySelector(".picks");
        listDiv.innerHTML = '';
        for (let pick of randomList){
            listDiv.innerHTML += `<div class="pick" style="height: ` + pick + `px"></div>`
        }
    },
    partlyBuildPick : function (partList) {
        let listDiv = document.querySelector(".picks");
        let picks = document.querySelectorAll(".pick");
        let len = partList.length;
        listDiv.innerHTML = '';
        for (let i=0; i<picks.length; i++){
            if (i<len){
                listDiv.innerHTML += `<div class="pick" style="height: ` + partList[i] + `px"></div>`
            }else{
                listDiv.innerHTML += `<div class="pick" style="height: ` + picks[i] + `px"></div>`
            }
        }
    }
};