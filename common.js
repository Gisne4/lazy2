document.addEventListener("DOMContentLoaded",function(){
    const mainText = this.querySelector(".main-text");
    const mainVisual = this.querySelector(".mainVisual");

    function resizeTheHeight(){
        let textsHeight = mainText.offsetHeight;
        let manu = {"height":textsHeight+textsHeight/5+"px"};
        Object.assign(mainVisual.style ,manu);
    }
    resizeTheHeight();
    window.addEventListener("resize",resizeTheHeight);
})