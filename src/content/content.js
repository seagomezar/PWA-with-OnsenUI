////////////////////////////
// Main Page Controller //
////////////////////////////

if (!window.controllers)
    window.controllers = {};

window.controllers.contentPage = (page) => {
    // First time
    let currentOption = window.services.next();
    tis.render(currentOption);

    // Clic Handler dislike
    document.querySelector('#dislike').onclick = () => {
        window.services.addDislike(window.services.current);
        currentOption = window.services.next();
        this.render(currentOption);
    };

    // Click Handler like
    document.querySelector('#like').onclick = () => {
        window.services.addLike(window.services.current);
        currentOption = window.services.next();
        this.render(currentOption);
    };

    this.render = (option) => {
        if (option) {
            document.querySelector('figcaption').innerText = option.title;
            document.querySelector('img').src = option.image;
        } else {
            document.querySelector('figcaption').style.display = "none";
            document.querySelector('img').style.display = "none";
            document.querySelector('#like').style.display = "none";
            document.querySelector('#dislike').style.display = "none";
            document.querySelector('h2').style.display = "block";
        }

    }
};