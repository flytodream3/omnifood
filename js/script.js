console.log("Hello World!")

const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
})

// Fixing Safari bugs
// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');
    // Scroll to top
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const documentEl = document.querySelector(href)
      documentEl.scrollIntoView({behavior: 'smooth'});
    }
    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
})

// Flexbox gap property missing in some Safari browsers
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();