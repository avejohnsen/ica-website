window.onload = function() {
    var element = document.getElementById('title_img');
    var position = element.offsetTop - 100; // Adjust this value as needed
    window.scrollTo(0, position);
};