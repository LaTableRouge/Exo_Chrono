showInterface = () => {
    class ChronoTer extends ChronoBis{
        affiche(){
            super.affiche();
            this.div.onmouseover = () => { this.cursor(); };
            this.div.onclick = () => { this.drag(); };
        }
        cursor(){
            //change le curseur
            this.closeBtn.style.cursor = "pointer";
            this.playBtn.style.cursor = "pointer";
            this.pauseBtn.style.cursor = "pointer";
            this.stopBtn.style.cursor = "pointer";
            this.div.style.cursor = "all-scroll";
        };
        drag(){
            //drag & drop de la div
            this.div.onmousedown = (e) => {
                this.x = e.clientX;
                this.y = e.clientY;
                this.div.onmouseup = () => {
                    this.div.onmouseup = null;
                    this.div.onmousemove = null;
                };
                this.div.onmousemove = (e) => {
                    let pos1 = this.x - e.clientX;
                    let pos2 = this.y - e.clientY;
                    this.x = e.clientX;
                    this.y = e.clientY;
                    this.div.style.top = (this.div.offsetTop - pos2) + "px";
                    this.div.style.left = (this.div.offsetLeft - pos1) + "px";
                };
            };
        };
    };
    let chrono4 = new ChronoTer("1300px", "200px", "purple", "blue");
    chrono4.affiche();
}
onload = showInterface;