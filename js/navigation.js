const Navigation = {
    navBar: document.getElementsByTagName("nav")[0],
    mainContent: document.getElementsByTagName("main")[0],
    initialNavHeight: 0,

    init: function () {
        this.initialNavHeight = this.navBar.scrollHeight;
        
        this.mainContent.addEventListener("scroll", () => {
            if (this.mainContent.scrollTop > 100) {
                this.navBar.style.height = this.initialNavHeight - 10 + "px";
            } else {
                this.navBar.style.height = null;
            }
        });
    }
};

window.addEventListener("load", () => Navigation.init());
