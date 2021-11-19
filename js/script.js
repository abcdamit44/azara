var experience = document.getElementById('ks-experience');
var nature = document.getElementById('ks-nature');
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var image1 = document.getElementById("slider-img-1");
var image1Scroll = image1.offsetTop;

var image2 = document.getElementById("slider-img-2");
var image2Scroll = image2.offsetTop;

var image3 = document.getElementById("slider-img-3");
var image3Scroll = image3.offsetTop;

var att = document.createAttribute("data-bs-ride");
att.value = "carousel";
var att2 = document.createAttribute("data-bs-interval");
att2.value = "3500";
var att3 = document.createAttribute("data-bs-pause");
att3.value = "false";

var twoatt = document.createAttribute("data-bs-ride");
twoatt.value = "carousel";
var twoatt2 = document.createAttribute("data-bs-interval");
twoatt2.value = "3500";
var twoatt3 = document.createAttribute("data-bs-pause");
twoatt3.value = "false";

var threeatt = document.createAttribute("data-bs-ride");
threeatt.value = "carousel";
var threeatt2 = document.createAttribute("data-bs-interval");
threeatt2.value = "3500";
var threeatt3 = document.createAttribute("data-bs-pause");
threeatt3.value = "false";

window.addEventListener('scroll', function() {
    // var value = scrollY;

    // experience.style.left = value + 'px';
    // nature.style.right = value + 'px';


    if (window.pageYOffset > 0) {
        navbar.classList.add("ks-sticky")
        navbar.classList.add('ks-transpatent');
    } else {
        navbar.classList.remove("ks-sticky");
        navbar.classList.remove('ks-transpatent');
    }


    // ************************************************

    if (window.pageYOffset >= image1Scroll) {
        image1.setAttributeNode(att);
        image1.setAttributeNode(att2);
        image1.setAttributeNode(att3);
    }
    if (window.pageYOffset >= image2Scroll) {
        image2.setAttributeNode(twoatt);
        image2.setAttributeNode(twoatt2);
        image2.setAttributeNode(twoatt3);
    }
    if (window.pageYOffset >= image3Scroll) {
        image3.setAttributeNode(threeatt);
        image3.setAttributeNode(threeatt2);
        image3.setAttributeNode(threeatt3);
    }

})