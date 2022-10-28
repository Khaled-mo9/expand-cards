const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener('click', function () {
        removeAllActiveClass();
        panel.classList.add("active");
        console.log('ell');
        
    });
});

const removeAllActiveClass = function() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}