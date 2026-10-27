/* ==========================================================================
   PINK BIRTHDAY LOVE SITE - JAVASCRIPT INTERACTIONS 💕
   Dedicated from Husband to Tota
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. CONFIGURATION
  // ------------------------------------------------------------------------
  const CONFIG = {
    // Relationship started on October 10, 2026
    relationshipStartDate: new Date('2026-10-10T00:00:00'),
    partnerName: 'Tota 💕',
    senderName: 'Husband'
  };

  // ------------------------------------------------------------------------
  // 2. AUDIO & ENTRANCE MODAL ("Be My Baby" by The Ronettes)
  // ------------------------------------------------------------------------
  const bgMusic = document.getElementById('bgMusic');
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const vinylDisc = document.getElementById('vinylDisc');
  const entranceModal = document.getElementById('entranceModal');
  const enterSiteBtn = document.getElementById('enterSiteBtn');

  let isPlaying = false;

  function toggleAudio() {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        isPlaying = true;
        vinylDisc.classList.add('spinning');
        playIcon.className = 'fa-solid fa-pause';
      }).catch(err => {
        console.log('Audio playback notice:', err);
      });
    } else {
      bgMusic.pause();
      isPlaying = false;
      vinylDisc.classList.remove('spinning');
      playIcon.className = 'fa-solid fa-play';
    }
  }

  playBtn.addEventListener('click', toggleAudio);

  // Entrance button triggers audio & celebratory confetti
  enterSiteBtn.addEventListener('click', () => {
    entranceModal.classList.add('hidden');
    bgMusic.play().then(() => {
      isPlaying = true;
      vinylDisc.classList.add('spinning');
      playIcon.className = 'fa-solid fa-pause';
    }).catch(err => {
      console.log('Autoplay policy notice:', err);
    });

    // Welcome Confetti Burst
    fireHeartConfetti();
  });

  // ------------------------------------------------------------------------
  // 3. HEART-SHAPED CURSOR TRAIL PARTICLES
  // ------------------------------------------------------------------------
  const heartIcons = ['💖', '💕', '✨', '🌸', '🎀', '🧸'];
  let lastParticleTime = 0;

  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    // Throttle to 50ms for performance
    if (now - lastParticleTime > 50) {
      lastParticleTime = now;
      createCursorParticle(e.clientX, e.clientY);
    }
  });

  function createCursorParticle(x, y) {
    const particle = document.createElement('span');
    particle.className = 'cursor-heart-particle';
    particle.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    const randomRotate = (Math.random() - 0.5) * 40;
    particle.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  }

  // ------------------------------------------------------------------------
  // 4. FLOATING AMBIENT SPARKLES CANVAS
  // ------------------------------------------------------------------------
  const canvas = document.getElementById('sparkle-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class FloatingHeart {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 14 + 10;
      this.speedY = Math.random() * 1.2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.char = ['💖', '🌸', '✨', '💕'][Math.floor(Math.random() * 4)];
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      if (this.y < -30) {
        this.reset();
      }
    }
    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px sans-serif`;
      ctx.fillText(this.char, this.x, this.y);
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < 28; i++) {
    const heart = new FloatingHeart();
    heart.y = Math.random() * height;
    particles.push(heart);
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  // ------------------------------------------------------------------------
  // 5. RELATIONSHIP LOVE CLOCK COUNTER (Since 10/10/2026)
  // ------------------------------------------------------------------------
  const daysElem = document.getElementById('daysCount');
  const hoursElem = document.getElementById('hoursCount');
  const minsElem = document.getElementById('minsCount');
  const secsElem = document.getElementById('secsCount');

  function updateLoveClock() {
    const now = new Date();
    const diff = Math.max(0, now - CONFIG.relationshipStartDate);

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (daysElem) daysElem.innerText = days;
    if (hoursElem) hoursElem.innerText = hours.toString().padStart(2, '0');
    if (minsElem) minsElem.innerText = minutes.toString().padStart(2, '0');
    if (secsElem) secsElem.innerText = seconds.toString().padStart(2, '0');
  }

  setInterval(updateLoveClock, 1000);
  updateLoveClock();

  // ------------------------------------------------------------------------
  // 6. INTERACTIVE WAX-SEALED ENVELOPE (Tota's Letter)
  // ------------------------------------------------------------------------
  const waxSeal = document.getElementById('waxSeal');
  const envelope = document.getElementById('envelope');

  waxSeal.addEventListener('click', () => {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
      fireHeartConfetti();
    }
  });

  // ------------------------------------------------------------------------
  // 7. MAKE-A-WISH BIRTHDAY CAKE & CANDLE
  // ------------------------------------------------------------------------
  const blowBtn = document.getElementById('blowCandleBtn');
  const candleFlame = document.getElementById('candleFlame');
  const candleSmoke = document.getElementById('candleSmoke');
  const wishMsg = document.getElementById('wishMsg');

  blowBtn.addEventListener('click', () => {
    if (!candleFlame.classList.contains('out')) {
      candleFlame.classList.add('out');
      candleSmoke.classList.add('puff');
      wishMsg.classList.remove('hidden');
      blowBtn.innerHTML = '✨ Wish Made! Tap to Relight 🎂';
      fireGrandConfetti();
    } else {
      candleFlame.classList.remove('out');
      candleSmoke.classList.remove('puff');
      wishMsg.classList.add('hidden');
      blowBtn.innerHTML = '<i class="fa-solid fa-wind"></i> <span>Blow Candle & Make A Wish, Tota!</span>';
    }
  });

  // ------------------------------------------------------------------------
  // 8. THE EVASIVE "NO" BUTTON & GROWING "YES" BUTTON
  // ------------------------------------------------------------------------
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const arena = document.getElementById('proposalArena');
  const dodgeCountText = document.getElementById('dodgeCountText');
  const celebrationModal = document.getElementById('celebrationModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  const playfulPhrases = [
    "Nice try, Tota! 😜",
    "Too slow! 💨",
    "Not an option! 💖",
    "Husband won't let you! 🎀",
    "Think again, my love! 🥺",
    "Wrong button darling! 🌸",
    "Error 404: No not found! ❌",
    "Just press YES already! 🥰",
    "Destiny says YES to Husband! ✨"
  ];

  let dodgeCount = 0;
  let yesScale = 1;

  function dodgeButton() {
    dodgeCount++;
    
    const phrase = playfulPhrases[dodgeCount % playfulPhrases.length];
    noBtn.innerText = phrase;
    
    if (dodgeCountText) {
      dodgeCountText.innerText = `You've tried saying no ${dodgeCount} time${dodgeCount === 1 ? '' : 's'}... but Husband's love is unstoppable! 💕`;
    }

    // Make YES button grow bigger each time NO is attempted
    yesScale += 0.08;
    yesBtn.style.transform = `scale(${yesScale})`;

    const arenaRect = arena.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxOffsetX = (arenaRect.width / 2) - (btnRect.width / 2) - 10;
    const maxOffsetY = 110;

    const randomX = (Math.random() - 0.5) * 2 * maxOffsetX;
    const randomY = (Math.random() - 0.5) * 2 * maxOffsetY;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.92)`;
  }

  // Hover triggers dodge
  noBtn.addEventListener('mouseenter', dodgeButton);
  // Touch triggers dodge on mobile
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeButton();
  });
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dodgeButton();
  });

  // ------------------------------------------------------------------------
  // 9. "YES!" BUTTON CELEBRATION
  // ------------------------------------------------------------------------
  yesBtn.addEventListener('click', () => {
    fireGrandConfetti();
    
    if (typeof celebrationModal.showModal === 'function') {
      celebrationModal.showModal();
    } else {
      celebrationModal.setAttribute('open', 'true');
    }
  });

  closeModalBtn.addEventListener('click', () => {
    celebrationModal.close();
  });

  // ------------------------------------------------------------------------
  // 10. CONFETTI GENERATORS
  // ------------------------------------------------------------------------
  function fireHeartConfetti() {
    if (typeof confetti !== 'function') return;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff1493', '#ff69b4', '#ffb6c1', '#ffffff']
    });
  }

  function fireGrandConfetti() {
    if (typeof confetti !== 'function') return;

    const end = Date.now() + 3 * 1000;
    const colors = ['#ff1493', '#ff69b4', '#ff85c0', '#ffd1dc', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

});
