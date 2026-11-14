// Small games for the "Make your demo" waiting screen. No libraries.
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var active = null, timers = {};
  function stop() { Object.keys(timers).forEach(function (k) { clearInterval(timers[k]); cancelAnimationFrame(timers[k]); }); timers = {}; }

  // ---------- tabs ----------
  window.twShowGame = function (name) {
    stop(); active = name;
    ["ttt", "snake", "race"].forEach(function (g) {
      $("g-" + g).hidden = g !== name;
      $("tab-" + g).setAttribute("aria-selected", g === name ? "true" : "false");
    });
    if (name === "ttt") tttNew();
    if (name === "snake") snakeIdle();
    if (name === "race") raceIdle();
  };

  // ---------- tic-tac-toe ----------
  var cells, over;
  var LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  function winner(b) { for (var i = 0; i < 8; i++) { var l = LINES[i]; if (b[l[0]] && b[l[0]] === b[l[1]] && b[l[1]] === b[l[2]]) return b[l[0]]; } return b.indexOf("") === -1 ? "draw" : null; }
  function tttDraw() { var bs = $("ttt-grid").children; for (var i = 0; i < 9; i++) { bs[i].textContent = cells[i]; bs[i].disabled = over || !!cells[i]; bs[i].setAttribute("aria-label", "Square " + (i + 1) + (cells[i] ? ", " + cells[i] : ", empty")); } }
  function tttEnd(w) { over = true; $("ttt-msg").textContent = w === "X" ? "You win. Nicely played." : w === "O" ? "The computer wins this one." : "A draw."; tttDraw(); }
  function pick(mark) { for (var i = 0; i < 8; i++) { var l = LINES[i], v = [cells[l[0]], cells[l[1]], cells[l[2]]]; if (v.filter(function (x) { return x === mark; }).length === 2 && v.indexOf("") !== -1) return l[v.indexOf("")]; } return -1; }
  function tttAi() {
    var m = pick("O"); if (m < 0) m = pick("X"); if (m < 0 && !cells[4]) m = 4;
    if (m < 0) { var free = []; cells.forEach(function (c, i) { if (!c) free.push(i); }); m = free[Math.floor(Math.random() * free.length)]; }
    cells[m] = "O"; var w = winner(cells); if (w) return tttEnd(w); $("ttt-msg").textContent = "Your turn. You are X."; tttDraw();
  }
  function tttNew() { cells = ["","","","","","","","",""]; over = false; $("ttt-msg").textContent = "Your turn. You are X."; tttDraw(); }
  function tttInit() {
    var g = $("ttt-grid");
    for (var i = 0; i < 9; i++) (function (i) { var b = document.createElement("button"); b.type = "button"; b.addEventListener("click", function () { if (over || cells[i]) return; cells[i] = "X"; var w = winner(cells); if (w) return tttEnd(w); tttDraw(); setTimeout(tttAi, 350); }); g.appendChild(b); })(i);
    $("ttt-new").addEventListener("click", tttNew);
  }

  // ---------- snake ----------
  var S = 15, N = 20, snake, dir, nextDir, food, sScore, sRun;
  function sCtx() { return $("snake-c").getContext("2d"); }
  function sFood() { do { food = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) }; } while (snake.some(function (p) { return p.x === food.x && p.y === food.y; })); }
  function sPaint() {
    var c = sCtx(); c.fillStyle = "#0d1620"; c.fillRect(0, 0, 300, 300);
    c.fillStyle = "#e0564f"; c.fillRect(food.x * S + 2, food.y * S + 2, S - 4, S - 4);
    snake.forEach(function (p, i) { c.fillStyle = i ? "#3fb7a8" : "#7fe0d3"; c.fillRect(p.x * S + 1, p.y * S + 1, S - 2, S - 2); });
  }
  function sTick() {
    dir = nextDir; var h = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    if (h.x < 0 || h.y < 0 || h.x >= N || h.y >= N || snake.some(function (p) { return p.x === h.x && p.y === h.y; })) { clearInterval(timers.snake); sRun = false; $("snake-msg").textContent = "Game over. Score " + sScore + "."; $("snake-start").textContent = "Play again"; return; }
    snake.unshift(h);
    if (h.x === food.x && h.y === food.y) { sScore++; $("snake-msg").textContent = "Score " + sScore; sFood(); } else snake.pop();
    sPaint();
  }
  function snakeIdle() { snake = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }]; dir = nextDir = { x: 1, y: 0 }; sScore = 0; sRun = false; sFood(); sPaint(); $("snake-msg").textContent = "Arrow keys, swipe, or the buttons below."; $("snake-start").textContent = "Start"; }
  function snakeStart() { clearInterval(timers.snake); snakeIdle(); sRun = true; $("snake-msg").textContent = "Score 0"; timers.snake = setInterval(sTick, 130); }
  function sTurn(x, y) { if (!sRun) return; if (dir.x === -x && dir.y === -y) return; nextDir = { x: x, y: y }; }

  // ---------- racing ----------
  var rw = 300, rh = 400, lane, cars, rScore, rSpeed, rRun, rLast, rGap, dash;
  var LX = [50, 150, 250];
  function rPaint() {
    var c = $("race-c").getContext("2d"); c.fillStyle = "#1b2632"; c.fillRect(0, 0, rw, rh);
    c.fillStyle = "#5b6a7a"; for (var l = 1; l < 3; l++) for (var y = -40 + dash; y < rh; y += 40) c.fillRect(l * 100 - 2, y, 4, 22);
    cars.forEach(function (o) { c.fillStyle = "#e0564f"; c.fillRect(LX[o.l] - 18, o.y, 36, 58); c.fillStyle = "#f6c9c6"; c.fillRect(LX[o.l] - 12, o.y + 36, 24, 12); });
    c.fillStyle = "#3f8fd6"; c.fillRect(LX[lane] - 18, rh - 76, 36, 60); c.fillStyle = "#cfe4f7"; c.fillRect(LX[lane] - 12, rh - 66, 24, 12);
  }
  function rFrame(t) {
    if (!rRun) return; var dt = Math.min(40, t - rLast); rLast = t;
    dash = (dash + rSpeed * dt) % 40; rGap -= rSpeed * dt;
    if (rGap <= 0) { cars.push({ l: Math.floor(Math.random() * 3), y: -60 }); rGap = 170 + Math.random() * 90; }
    for (var i = cars.length - 1; i >= 0; i--) {
      var o = cars[i]; o.y += rSpeed * dt;
      if (o.l === lane && o.y + 58 > rh - 76 && o.y < rh - 16) { rRun = false; rPaint(); $("race-msg").textContent = "Crash. Score " + rScore + "."; $("race-start").textContent = "Play again"; return; }
      if (o.y > rh) { cars.splice(i, 1); rScore++; rSpeed = Math.min(0.5, rSpeed + 0.006); $("race-msg").textContent = "Score " + rScore; }
    }
    rPaint(); timers.race = requestAnimationFrame(rFrame);
  }
  function raceIdle() { lane = 1; cars = []; rScore = 0; rSpeed = 0.2; rRun = false; rGap = 60; dash = 0; rPaint(); $("race-msg").textContent = "Left and right keys, or tap the buttons."; $("race-start").textContent = "Start"; }
  function raceStart() { cancelAnimationFrame(timers.race); raceIdle(); rRun = true; $("race-msg").textContent = "Score 0"; rLast = performance.now(); timers.race = requestAnimationFrame(rFrame); }
  function rMove(d) { if (!rRun) return; lane = Math.max(0, Math.min(2, lane + d)); }

  // ---------- controls ----------
  function hold(id, fn) { var el = $(id); if (el) el.addEventListener("click", fn); }
  window.addEventListener("keydown", function (e) {
    var k = e.key;
    if (active === "snake" && sRun) { if (k === "ArrowUp") sTurn(0, -1); else if (k === "ArrowDown") sTurn(0, 1); else if (k === "ArrowLeft") sTurn(-1, 0); else if (k === "ArrowRight") sTurn(1, 0); else return; e.preventDefault(); }
    if (active === "race" && rRun) { if (k === "ArrowLeft") rMove(-1); else if (k === "ArrowRight") rMove(1); else return; e.preventDefault(); }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (!$("g-ttt")) return;
    tttInit();
    hold("snake-start", snakeStart); hold("race-start", raceStart);
    hold("s-up", function () { sTurn(0, -1); }); hold("s-down", function () { sTurn(0, 1); }); hold("s-left", function () { sTurn(-1, 0); }); hold("s-right", function () { sTurn(1, 0); });
    hold("r-left", function () { rMove(-1); }); hold("r-right", function () { rMove(1); });
    var sx, sy, sc = $("snake-c");
    sc.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    sc.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return; if (Math.abs(dx) > Math.abs(dy)) sTurn(dx > 0 ? 1 : -1, 0); else sTurn(0, dy > 0 ? 1 : -1); }, { passive: true });
    ["ttt", "snake", "race"].forEach(function (g) { $("tab-" + g).addEventListener("click", function () { window.twShowGame(g); }); });
  });
})();
