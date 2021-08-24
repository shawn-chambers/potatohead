var tl = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();

tl
  .from('#eyes', .5, { y: -2000})
  .from('#mustache', .5, { y: 2000})
  .from('#left-ear', .5, { x: 2000})
  .from('#right-ear', .5, { x: -2000})
  .from('#shoes', .5, { y: 2000})
  .from('#right-arm', .5, { y: -2000})
  .from('#left-arm', .5, { x: 2000})
  .from('#glasses', .5, { y: -2000})
  
const scene = new ScrollMagic.Scene({
  triggerElement: '.sticky',
  triggerHook: 'onLeave',
  duration: '100%'
})
  .setPin('.sticky')
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}