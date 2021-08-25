document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href');
        if (href == "#")
            return;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function showImprint() {
    document.getElementById("imprint-overlay").style.height = "100vh";
    return false;
}

function closeOverlay(cancelIfSelection) {
    if(!cancelIfSelection || window.getSelection().toString().length == 0)
        document.getElementById("imprint-overlay").style.height = 0;
    return false;
}

const first = document.querySelector('.slide');
console.log(first);

const slide = () => {
  const before = document.querySelector('.showing');
  if (before) {
    before
      .classList
      .remove('showing');
    const next = before.nextElementSibling;
    if (next) {
      next
        .classList
        .add('showing')
    } else {  
      first
        .classList
        .add('showing');
    }
  } else {
    first
      .classList
      .add('showing');
  }
}
slide();
if(first)
    setInterval(slide, 2500);