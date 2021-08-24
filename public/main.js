var tl = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();

tl
  .from('#eyes', 2, { y: -2000})
  .from('#mustache', 2, { y: 2000})
  .from('#left-ear', 2, { x: 2000})
  .from('#right-ear', 2, { x: -2000}, "=-2")
  .from('#shoes', 2, { y: 2000})
  .from('#right-arm', 2, { y: -2000})
  .from('#left-arm', 2, { x: 2000})
  .from('#glasses', 2, { y: -2000})
  
const scene = new ScrollMagic.Scene({
  triggerElement: '.sticky',
  triggerHook: 'onLeave',
  duration: '200%'
})
  .setPin('.sticky')
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

let mustache = document.getElementById('mustache');
console.log(mustache);
mustache.addEventListener('mouseenter', (e) => mustache.classList.add('hover'));