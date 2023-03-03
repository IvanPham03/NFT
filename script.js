const dash = document.querySelectorAll(".dash");
const listDes = document.querySelectorAll(".list .des");
const navHeaders = document.querySelectorAll(".nav-item span a");
const navHeadersParent = document.querySelectorAll(".nav-item");
console.log(navHeaders)
const navFooters = document.querySelectorAll(".footer .navs .nav");
const explore = document.getElementById("contact");
// count
var count = 0;
// value of interval
var v_inter = "";

function set_In() {
  v_inter = setInterval(() => {
    dash[count].classList.remove("active");
    listDes[count].classList.remove("active");
    count += 1;
    if (count == dash.length) {
      dash[0].classList.add("active");
      count = 0;
    } else {
      dash[count].classList.add("active");
    }
    listDes[count].classList.add("active");
  }, 6000);
}

function clear_In() {
  clearInterval(v_inter);
}

set_In();

dash.forEach((d) => {
  d.addEventListener("click", () => {
    clear_In();
    dash.forEach((ele) => {
      ele.classList.remove("active");
    });
    listDes.forEach((ele) => {
      ele.classList.remove("active");
    });
    dash[d.getAttribute("id") - 1].classList.add("active");
    listDes[d.getAttribute("id") - 1].classList.add("active");
    count = d.getAttribute("id") - 1;
    set_In();
  });
});

// nav link
navHeaders.forEach((nav) => {
  nav.addEventListener("click", () => {
    var tempLink = nav.parentNode.parentNode.classList[0];
    console.log(tempLink)
    var nameTemp = `.footer .navs .${tempLink}`;
    console.log(nameTemp)
    var navFooter = document.querySelector(nameTemp);
    navHeadersParent.forEach((ele) => {
      ele.classList.remove("active");
    });
    navFooters.forEach((ele) => {
      ele.classList.remove("active");
    });
    navFooter.classList.add("active");
    nav.parentNode.parentNode.classList.add('active');
  });
});

//

navFooters.forEach((nav) => {
  nav.addEventListener("click", () => {
    var nameTemp = `.function-left .nav .${nav.classList[0]}`;
    var navHeader = document.querySelector(nameTemp);
    navFooters.forEach((ele) => {
      ele.classList.remove("active");
    });
    navHeadersParent.forEach((ele) => {
      ele.classList.remove("active");
    });
    nav.classList.add("active");
    navHeader.classList.add("active");
  });
});

function callbackFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.getElementById(entry.target.id).classList.add("show");
      var temp = document.getElementById(entry.target.id).classList;
      // console.log(temp);
    } else {
      document.getElementById(entry.target.id).classList.remove("show");
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.12,
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById("explore"));
observer.observe(document.getElementById("contact"));
observer.observe(document.getElementById("community"));
observer.observe(document.getElementById("about"));
observer.observe(document.getElementById("art"));

// ===============menu

const menu = document.querySelector('.function-left .menu');
const nav = document.querySelector('.function-left .nav');

menu.addEventListener('click', ()=>{
  nav.classList.toggle('show');
  menu.classList.toggle('active');
})
