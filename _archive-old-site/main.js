/* ════════════════════════════════════════════════════════════════
   samuelbechar.com — interactions
   ════════════════════════════════════════════════════════════════ */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

document.getElementById('year').textContent = new Date().getFullYear()

/* ── Loader ──────────────────────────────────────────────────── */
const loader = document.getElementById('loader')
const loaderFill = document.getElementById('loaderFill')

if (reducedMotion) {
  loader.remove()
} else {
  let progress = 0
  const tick = setInterval(() => {
    progress = Math.min(100, progress + 8 + Math.random() * 18)
    loaderFill.style.width = progress + '%'
    if (progress >= 100) {
      clearInterval(tick)
      setTimeout(() => loader.classList.add('is-done'), 200)
      setTimeout(() => loader.remove(), 1100)
    }
  }, 70)
}

/* ── Custom cursor ───────────────────────────────────────────── */
if (finePointer && !reducedMotion) {
  const dot = document.getElementById('cursorDot')
  const ring = document.getElementById('cursorRing')
  let mx = innerWidth / 2, my = innerHeight / 2
  let rx = mx, ry = my

  addEventListener('mousemove', e => {
    mx = e.clientX
    my = e.clientY
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
  }, { passive: true })

  ;(function followRing() {
    rx += (mx - rx) * 0.16
    ry += (my - ry) * 0.16
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
    requestAnimationFrame(followRing)
  })()

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hover'))
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'))
  })
}

/* ── Hero canvas — dot field with cursor repulsion ───────────── */
const canvas = document.getElementById('heroCanvas')
const ctx = canvas.getContext('2d')

let dots = []
let mouse = { x: -9999, y: -9999 }
const SPACING = 30
const RADIUS = 130

function buildField() {
  const dpr = Math.min(devicePixelRatio || 1, 2)
  const rect = canvas.parentElement.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  dots = []
  for (let x = SPACING / 2; x < rect.width; x += SPACING) {
    for (let y = SPACING / 2; y < rect.height; y += SPACING) {
      dots.push({ ox: x, oy: y, x, y })
    }
  }
}

function drawField() {
  const w = canvas.width / Math.min(devicePixelRatio || 1, 2)
  const h = canvas.height / Math.min(devicePixelRatio || 1, 2)
  ctx.clearRect(0, 0, w, h)

  for (const d of dots) {
    const dx = d.ox - mouse.x
    const dy = d.oy - mouse.y
    const dist = Math.hypot(dx, dy)

    let tx = d.ox, ty = d.oy, near = 0
    if (dist < RADIUS && dist > 0) {
      near = 1 - dist / RADIUS
      const push = near * near * 26
      tx = d.ox + (dx / dist) * push
      ty = d.oy + (dy / dist) * push
    }
    d.x += (tx - d.x) * 0.12
    d.y += (ty - d.y) * 0.12

    ctx.beginPath()
    ctx.arc(d.x, d.y, 1 + near * 1.6, 0, Math.PI * 2)
    ctx.fillStyle = near > 0.05
      ? `rgba(200, 255, 46, ${0.25 + near * 0.75})`
      : 'rgba(233, 230, 219, 0.13)'
    ctx.fill()
  }
  requestAnimationFrame(drawField)
}

if (!reducedMotion) {
  buildField()
  drawField()
  addEventListener('resize', buildField)
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }, { passive: true })
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -9999
    mouse.y = -9999
  })
}

/* ── Mobile menu ─────────────────────────────────────────────── */
const burger = document.getElementById('navBurger')
const overlay = document.getElementById('menuOverlay')

function setMenu(open) {
  burger.classList.toggle('is-open', open)
  overlay.classList.toggle('is-open', open)
  burger.setAttribute('aria-expanded', open)
  overlay.setAttribute('aria-hidden', !open)
  document.body.style.overflow = open ? 'hidden' : ''
}

burger.addEventListener('click', () => setMenu(!overlay.classList.contains('is-open')))
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)))

/* ── Scroll reveals ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

/* ── Work list — floating image preview ──────────────────────── */
const preview = document.getElementById('workPreview')
const previewImg = document.getElementById('workPreviewImg')
const workList = document.getElementById('workList')

if (finePointer && !reducedMotion) {
  let px = 0, py = 0, targetX = 0, targetY = 0, previewRaf = null

  function movePreview() {
    px += (targetX - px) * 0.12
    py += (targetY - py) * 0.12
    preview.style.left = px + 'px'
    preview.style.top = py + 'px'
    previewRaf = requestAnimationFrame(movePreview)
  }

  workList.addEventListener('mousemove', e => {
    targetX = e.clientX
    targetY = e.clientY
  }, { passive: true })

  workList.querySelectorAll('.work-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      previewImg.src = row.dataset.img
      preview.classList.add('is-active')
      if (!previewRaf) {
        px = targetX
        py = targetY
        movePreview()
      }
    })
    row.addEventListener('mouseleave', () => {
      preview.classList.remove('is-active')
    })
  })

  workList.addEventListener('mouseleave', () => {
    preview.classList.remove('is-active')
    if (previewRaf) {
      cancelAnimationFrame(previewRaf)
      previewRaf = null
    }
  })

  // Pre-warm images so the preview never flashes empty
  workList.querySelectorAll('.work-row').forEach(row => {
    new Image().src = row.dataset.img
  })
}

/* ── Live age counter ────────────────────────────────────────── */
const BIRTHDAY = new Date(2003, 7, 10).getTime()
const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000
const ageEl = document.getElementById('ageCounter')

function tickAge() {
  ageEl.textContent = ((Date.now() - BIRTHDAY) / YEAR_MS).toFixed(9)
  requestAnimationFrame(tickAge)
}
if (reducedMotion) {
  ageEl.textContent = ((Date.now() - BIRTHDAY) / YEAR_MS).toFixed(2)
} else {
  tickAge()
}

/* ── Coffee counter (deterministic, ~2.1 cups/day) ───────────── */
const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
const coffeeTarget = Math.round(dayOfYear * 2.1)
const coffeeEl = document.getElementById('coffeeCounter')

const coffeeObserver = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return
  coffeeObserver.disconnect()
  if (reducedMotion) {
    coffeeEl.textContent = coffeeTarget.toLocaleString()
    return
  }
  const start = performance.now()
  const DURATION = 1400
  ;(function count(now) {
    const t = Math.min(1, (now - start) / DURATION)
    const eased = 1 - Math.pow(1 - t, 3)
    coffeeEl.textContent = Math.round(coffeeTarget * eased).toLocaleString()
    if (t < 1) requestAnimationFrame(count)
  })(start)
}, { threshold: 0.5 })
coffeeObserver.observe(coffeeEl)

/* ── SF clock ────────────────────────────────────────────────── */
const clockEls = document.querySelectorAll('[data-clock]')
const clockFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false,
})

function tickClock() {
  const time = clockFmt.format(new Date())
  clockEls.forEach(el => { el.textContent = time })
}
tickClock()
setInterval(tickClock, 1000)
