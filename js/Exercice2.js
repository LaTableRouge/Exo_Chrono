showInterface = () => {
    class ChronoBis extends Chrono{
        constructor(x, y, c, b){
            //appelle le constructeur de la class Chrono
            super(x,y,c,b);
        }
        //Nouvelle methode affiche
        affiche(){
            //appelle le affiche de la class Chrono
            super.affiche();
            this.closeBtn = document.createElement("img");
            let closeBtn = this.closeBtn;
                closeBtn.src = "img/close-button.png";
                closeBtn.alt = "stop";
                closeBtn.style.position = "absolute";
                closeBtn.style.top = "0px";
                closeBtn.style.right = "0px";
                //change le curseur
                closeBtn.style.cursor = "pointer";
            this.div.appendChild(this.closeBtn);
            this.closeBtn.onclick = () => { this.close() };
        }
        //methode close qui supprime le chrono
        close(){
            document.body.removeChild(this.div);
        }
    }
    let chrono2 = new ChronoBis("500px", "200px", "green", "black");
    chrono2.affiche();
}
onload = showInterface;