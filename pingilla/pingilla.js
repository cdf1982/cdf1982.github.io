/* Pingilla landing page: progress bar, glass glow, scroll spy,
   reveal on scroll and stat count-up. No dependencies. */
(function(){
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* progress bar */
  var bar = document.getElementById('progress');
  function onScrollBar(){
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (window.scrollY / max * 100) : 0) + '%';
  }
  window.addEventListener('scroll', onScrollBar, {passive:true});
  onScrollBar();

  /* glass panels: cursor-tracking glow */
  document.querySelectorAll('.glass').forEach(function(el){
    el.addEventListener('pointermove', function(e){
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) / r.width * 100 + '%');
      el.style.setProperty('--my', (e.clientY - r.top) / r.height * 100 + '%');
    });
  });

  /* stat count-up */
  function countUp(el){
    var to = parseFloat(el.getAttribute('data-to'));
    if (isNaN(to)) return;
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    function render(v){ el.textContent = pre + v.toFixed(dec) + suf; }
    if (reduceMotion || !window.requestAnimationFrame){ render(to); return; }
    var start = null, dur = 1400, delay = 600;
    render(0);
    function tick(ts){
      if (start === null) start = ts + delay;
      var t = Math.min(1, Math.max(0, (ts - start) / dur));
      var eased = 1 - Math.pow(1 - t, 3);
      render(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  document.querySelectorAll('.stat .num').forEach(countUp);

  /* scroll spy for the pill nav: the active item is the last section whose top
     has passed 40% of the viewport (works across the gaps between sections) */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.topnav a[href^="#"]'));
  var spy = navLinks.map(function(a){
    return {a:a, el:document.getElementById(a.getAttribute('href').slice(1))};
  }).filter(function(x){ return x.el; });
  var spyRaf = 0;
  function updateSpy(){
    spyRaf = 0;
    var line = window.innerHeight * 0.4, current = null;
    spy.forEach(function(x){ if (x.el.getBoundingClientRect().top <= line) current = x; });
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom && spy.length) current = spy[spy.length - 1];
    navLinks.forEach(function(a){ a.classList.toggle('active', !!current && a === current.a); });
    if (current && current.a.scrollIntoView && document.querySelector('.topnav').scrollWidth > document.querySelector('.topnav').clientWidth){
      var nav = document.querySelector('.topnav'), r = current.a.getBoundingClientRect(), n = nav.getBoundingClientRect();
      if (r.left < n.left || r.right > n.right) nav.scrollLeft += (r.left - n.left) - (n.width - r.width) / 2;
    }
  }
  window.addEventListener('scroll', function(){ if (!spyRaf) spyRaf = requestAnimationFrame(updateSpy); }, {passive:true});
  window.addEventListener('resize', updateSpy);
  updateSpy();

  if (!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal,.sec-head').forEach(function(el){ el.classList.add('in'); });
    return;
  }

  /* reveal section heads and cards as they scroll in */
  var rev = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      rev.unobserve(en.target);
    });
  }, {rootMargin:'0px 0px -10% 0px'});
  document.querySelectorAll('.reveal,.sec-head').forEach(function(el, i){
    if (el.classList.contains('reveal')) el.style.transitionDelay = ((i % 3) * 0.07) + 's';
    rev.observe(el);
  });
})();
