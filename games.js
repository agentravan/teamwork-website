// Games for the "Make your demo" waiting screen. No libraries.
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var active = null, raf = 0, snakeTimer = 0;
  function stop() { cancelAnimationFrame(raf); clearInterval(snakeTimer); }
  function best(k, v) { try { var b = +localStorage.getItem("tw-" + k) || 0; if (v > b) { b = v; localStorage.setItem("tw-" + k, v); } return b; } catch (e) { return v || 0; } }
  function fit(c, w, h) { var d = Math.min(2, window.devicePixelRatio || 1); c.width = w * d; c.height = h * d; var x = c.getContext("2d"); x.setTransform(d, 0, 0, d, 0, 0); return x; }
  function rr(x, a, b, w, h, r) { x.beginPath(); if (x.roundRect) x.roundRect(a, b, w, h, r); else x.rect(a, b, w, h); }

  window.twShowGame = function (name) {
    stop(); active = name;
    ["ttt", "snake", "race"].forEach(function (g) { $("g-" + g).hidden = g !== name; $("tab-" + g).setAttribute("aria-selected", g === name ? "true" : "false"); });
    if (name === "ttt") tttNew(); if (name === "snake") snakeIdle(); if (name === "race") raceIdle();
  };

  // ---------- tic-tac-toe ----------
  var cells, over, tally = { X: 0, O: 0, draw: 0 };
  var LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var XS = '<svg viewBox="0 0 60 60" aria-hidden="true"><path class="mx" d="M16 16 44 44M44 16 16 44"/></svg>';
  var OS = '<svg viewBox="0 0 60 60" aria-hidden="true"><circle class="mo" cx="30" cy="30" r="15"/></svg>';
  function win(b) { for (var i = 0; i < 8; i++) { var l = LINES[i]; if (b[l[0]] && b[l[0]] === b[l[1]] && b[l[1]] === b[l[2]]) return { w: b[l[0]], l: l }; } return b.indexOf("") === -1 ? { w: "draw", l: [] } : null; }
  function tttDraw(line) {
    var bs = $("ttt-grid").children;
    for (var i = 0; i < 9; i++) {
      var want = cells[i] || "";
      if (bs[i].getAttribute("data-m") !== want) { bs[i].setAttribute("data-m", want); bs[i].innerHTML = want === "X" ? XS : want === "O" ? OS : ""; }
      bs[i].disabled = over || !!cells[i]; bs[i].classList.toggle("hit", !!line && line.indexOf(i) > -1);
      bs[i].setAttribute("aria-label", "Square " + (i + 1) + (cells[i] ? ", " + cells[i] : ", empty"));
    }
    $("ttt-you").textContent = tally.X; $("ttt-draw").textContent = tally.draw; $("ttt-cpu").textContent = tally.O;
  }
  function tttEnd(r) { over = true; tally[r.w]++; $("ttt-msg").textContent = r.w === "X" ? "You win. Nicely played." : r.w === "O" ? "The computer wins this one." : "A draw."; tttDraw(r.l); }
  function pick(m) { for (var i = 0; i < 8; i++) { var l = LINES[i], v = [cells[l[0]], cells[l[1]], cells[l[2]]]; if (v.filter(function (x) { return x === m; }).length === 2 && v.indexOf("") !== -1) return l[v.indexOf("")]; } return -1; }
  function tttAi() {
    var m = pick("O"); if (m < 0) m = pick("X"); if (m < 0 && !cells[4]) m = 4;
    if (m < 0) { var f = []; cells.forEach(function (c, i) { if (!c) f.push(i); }); m = f[Math.floor(Math.random() * f.length)]; }
    cells[m] = "O"; var r = win(cells); if (r) return tttEnd(r); $("ttt-msg").textContent = "Your turn"; tttDraw();
  }
  function tttNew() { cells = ["","","","","","","","",""]; over = false; $("ttt-msg").textContent = "Your turn. You are X."; tttDraw(); }
  function tttInit() {
    var g = $("ttt-grid");
    for (var i = 0; i < 9; i++) (function (i) { var b = document.createElement("button"); b.type = "button"; b.addEventListener("click", function () { if (over || cells[i]) return; cells[i] = "X"; var r = win(cells); if (r) return tttEnd(r); $("ttt-msg").textContent = "Computer is thinking"; tttDraw(); setTimeout(tttAi, 420); }); g.appendChild(b); })(i);
    $("ttt-new").addEventListener("click", tttNew);
  }

  // ---------- snake ----------
  var S = 15, N = 20, snake, dir, nextDir, food, sScore, sRun, sx, sStep;
  function sFood() { do { food = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) }; } while (snake.some(function (p) { return p.x === food.x && p.y === food.y; })); }
  function sPaint() {
    var c = sx; c.fillStyle = "#0a0f15"; c.fillRect(0, 0, 300, 300);
    c.fillStyle = "rgba(255,255,255,.035)"; for (var i = 0; i < N; i++) for (var j = 0; j < N; j++) if ((i + j) % 2) c.fillRect(i * S, j * S, S, S);
    c.save(); c.shadowColor = "#ff6b74"; c.shadowBlur = 14; c.fillStyle = "#ff6b74"; c.beginPath(); c.arc(food.x * S + S / 2, food.y * S + S / 2, S / 2 - 2, 0, 7); c.fill(); c.restore();
    snake.forEach(function (p, i) { var t = i / Math.max(1, snake.length - 1); c.fillStyle = i ? "rgb(" + Math.round(47 + t * 20) + "," + Math.round(214 - t * 90) + "," + Math.round(195 - t * 60) + ")" : "#b6fff4"; rr(c, p.x * S + 1, p.y * S + 1, S - 2, S - 2, 5); c.fill(); });
    var h = snake[0]; c.fillStyle = "#0a0f15"; c.beginPath(); c.arc(h.x * S + S / 2 + dir.x * 2 - dir.y * 3, h.y * S + S / 2 + dir.y * 2 - dir.x * 3, 1.6, 0, 7); c.arc(h.x * S + S / 2 + dir.x * 2 + dir.y * 3, h.y * S + S / 2 + dir.y * 2 + dir.x * 3, 1.6, 0, 7); c.fill();
  }
  function sOver() { clearInterval(snakeTimer); sRun = false; $("snake-best").textContent = best("snake", sScore); ov("snake", "Game over", "Score " + sScore, "Play again"); }
  function sTick() {
    dir = nextDir; var h = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    if (h.x < 0 || h.y < 0 || h.x >= N || h.y >= N || snake.some(function (p) { return p.x === h.x && p.y === h.y; })) return sOver();
    snake.unshift(h);
    if (h.x === food.x && h.y === food.y) { sScore++; $("snake-score").textContent = sScore; sFood(); if (sScore % 4 === 0 && sStep > 70) { sStep -= 10; clearInterval(snakeTimer); snakeTimer = setInterval(sTick, sStep); } } else snake.pop();
    sPaint();
  }
  function snakeIdle() { sx = fit($("snake-c"), 300, 300); snake = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }]; dir = nextDir = { x: 1, y: 0 }; sScore = 0; sRun = false; sStep = 135; sFood(); sPaint(); $("snake-score").textContent = 0; $("snake-best").textContent = best("snake", 0); ov("snake", "Snake", "Arrow keys, swipe, or the buttons", "Start"); }
  function snakeStart() { clearInterval(snakeTimer); snakeIdle(); ov("snake"); sRun = true; snakeTimer = setInterval(sTick, sStep); }
  function sTurn(x, y) { if (!sRun) return; if (dir.x === -x && dir.y === -y) return; nextDir = { x: x, y: y }; }

  // ---------- racing ----------
  var rw = 300, rh = 400, lane, carX, cars, rScore, rSpeed, rRun, rLast, rGap, dash, rx;
  var LX = [75, 150, 225], COL = ["#ff6b74", "#ffa24d", "#9bd957", "#c58bff"];
  function car(c, x, y, col, me) {
    c.fillStyle = "#05070a"; rr(c, x - 21, y + 8, 6, 14, 2); c.fill(); rr(c, x + 15, y + 8, 6, 14, 2); c.fill(); rr(c, x - 21, y + 40, 6, 14, 2); c.fill(); rr(c, x + 15, y + 40, 6, 14, 2); c.fill();
    c.fillStyle = col; rr(c, x - 17, y, 34, 62, 9); c.fill();
    c.fillStyle = "rgba(6,8,12,.75)"; rr(c, x - 12, y + (me ? 12 : 34), 24, 14, 4); c.fill();
    c.fillStyle = me ? "#fff6c9" : "#ff3b3b"; rr(c, x - 14, y + (me ? 1 : 57), 8, 4, 2); c.fill(); rr(c, x + 6, y + (me ? 1 : 57), 8, 4, 2); c.fill();
  }
  function rPaint() {
    var c = rx; c.fillStyle = "#0f3d2e"; c.fillRect(0, 0, rw, rh);
    c.fillStyle = "#141a22"; c.fillRect(34, 0, rw - 68, rh);
    for (var y = -40 + dash; y < rh; y += 40) { c.fillStyle = (Math.floor((y - dash) / 40) % 2) ? "#f2f4f7" : "#ff6b74"; c.fillRect(28, y, 6, 20); c.fillRect(rw - 34, y, 6, 20); c.fillStyle = "rgba(255,255,255,.5)"; c.fillRect(110, y, 4, 22); c.fillRect(186, y, 4, 22); }
    cars.forEach(function (o) { car(c, LX[o.l], o.y, o.c, false); });
    c.save(); c.shadowColor = "#4da3ff"; c.shadowBlur = 18; car(c, carX, rh - 84, "#4da3ff", true); c.restore();
  }
  function rOver() { rRun = false; rPaint(); $("race-best").textContent = best("race", rScore); ov("race", "Crash", "Score " + rScore, "Play again"); }
  function rFrame(t) {
    if (!rRun) return; var dt = Math.min(40, t - rLast); rLast = t;
    dash = (dash + rSpeed * dt) % 80; rGap -= rSpeed * dt; carX += (LX[lane] - carX) * Math.min(1, dt / 70);
    if (rGap <= 0) { cars.push({ l: Math.floor(Math.random() * 3), y: -70, c: COL[Math.floor(Math.random() * COL.length)] }); rGap = 175 + Math.random() * 90; }
    for (var i = cars.length - 1; i >= 0; i--) {
      var o = cars[i]; o.y += rSpeed * dt;
      if (Math.abs(LX[o.l] - carX) < 30 && o.y + 62 > rh - 84 && o.y < rh - 22) return rOver();
      if (o.y > rh) { cars.splice(i, 1); rScore++; rSpeed = Math.min(0.52, rSpeed + 0.006); $("race-score").textContent = rScore; }
    }
    rPaint(); raf = requestAnimationFrame(rFrame);
  }
  function raceIdle() { rx = fit($("race-c"), rw, rh); lane = 1; carX = LX[1]; cars = []; rScore = 0; rSpeed = 0.2; rRun = false; rGap = 60; dash = 0; rPaint(); $("race-score").textContent = 0; $("race-best").textContent = best("race", 0); ov("race", "Racing", "Left and right keys, or the buttons", "Start"); }
  function raceStart() { cancelAnimationFrame(raf); raceIdle(); ov("race"); rRun = true; rLast = performance.now(); raf = requestAnimationFrame(rFrame); }
  function rMove(d) { if (!rRun) return; lane = Math.max(0, Math.min(2, lane + d)); }

  // ---------- overlay and controls ----------
  function ov(g, title, sub, label) { var o = $(g + "-ov"); if (!title) { o.hidden = true; return; } o.hidden = false; $(g + "-ovt").textContent = title; $(g + "-ovs").textContent = sub; $(g + "-start").textContent = label; }
  function on(id, fn) { var el = $(id); if (el) el.addEventListener("click", fn); }
  window.addEventListener("keydown", function (e) {
    var k = e.key;
    if (active === "snake" && sRun) { if (k === "ArrowUp") sTurn(0, -1); else if (k === "ArrowDown") sTurn(0, 1); else if (k === "ArrowLeft") sTurn(-1, 0); else if (k === "ArrowRight") sTurn(1, 0); else return; e.preventDefault(); }
    if (active === "race" && rRun) { if (k === "ArrowLeft") rMove(-1); else if (k === "ArrowRight") rMove(1); else return; e.preventDefault(); }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (!$("g-ttt")) return;
    tttInit(); on("snake-start", snakeStart); on("race-start", raceStart);
    on("s-up", function () { sTurn(0, -1); }); on("s-down", function () { sTurn(0, 1); }); on("s-left", function () { sTurn(-1, 0); }); on("s-right", function () { sTurn(1, 0); });
    on("r-left", function () { rMove(-1); }); on("r-right", function () { rMove(1); });
    var tx, ty, sc = $("snake-c");
    sc.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    sc.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return; if (Math.abs(dx) > Math.abs(dy)) sTurn(dx > 0 ? 1 : -1, 0); else sTurn(0, dy > 0 ? 1 : -1); }, { passive: true });
    $("race-c").addEventListener("pointerdown", function (e) { var r = e.target.getBoundingClientRect(); rMove(e.clientX - r.left < r.width / 2 ? -1 : 1); });
    ["ttt", "snake", "race"].forEach(function (g) { $("tab-" + g).addEventListener("click", function () { window.twShowGame(g); }); });
  });
})();
