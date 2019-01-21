showInterface = () => {
    class ChronoTer extends ChronoBis{

        //Extension de la methode affiche
        affiche(){
            //appelle le affiche de la class ChronoBis
            super.affiche();
            this.div.onmouseover = () => { this.cursor() };

        }
        cursor(){
            //change le curseur
            this.closeBtn.style.cursor = "pointer";
            this.playBtn.style.cursor = "pointer";
            this.pauseBtn.style.cursor = "pointer";
            this.stopBtn.style.cursor = "pointer";
            this.div.style.cursor = "all-scroll";
        }
    };

    let chrono3 = new ChronoTer("900px", "200px", "blue", "grey");
    chrono3.affiche();
}
onload = showInterface;