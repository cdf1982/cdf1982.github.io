// Italian polls visualizer — 2026-10-17 post
(function () {
	var root = document.getElementById('itpol');
	if (!root) return;

	var NS = 'http://www.w3.org/2000/svg';
	var THRESHOLD = 42;

	var coalitions = [
		{ id: 'left', name: 'Centre-left & left', stroke: '#e0514b', parties: [
			{ id: 'avs', name: 'Alleanza Verdi e Sinistra', short: 'AVS', value: 6.6, color: '#f28b6e' },
			{ id: 'm5s', name: 'Movimento 5 Stelle', short: 'M5S', value: 11.1, color: '#f6c35b' },
			{ id: 'pd', name: 'Partito Democratico', short: 'PD', value: 20.0, color: '#e0514b' },
			{ id: 'piuuno', name: 'Più Uno', short: '', value: 0.7, color: '#f4a6a0' },
			{ id: 'iv', name: 'Italia Viva', short: 'IV', value: 2.3, color: '#c0577f' },
			{ id: 'piueuropa', name: '+Europa', short: '', value: 1.4, color: '#f2b3d0' },
			{ id: 'pc', name: 'Progetto Civico', short: '', value: 1.3, color: '#e8956a' },
			{ id: 'azione', name: 'Azione', short: 'Az', value: 3.3, color: '#f7d2a6' }
		] },
		{ id: 'right', name: 'Centre-right & right (current government)', stroke: '#8ec5f0', government: true, parties: [
			{ id: 'fi', name: 'Forza Italia', short: 'FI', value: 7.7, color: '#8ec5f0' },
			{ id: 'nm', name: 'Noi Moderati', short: '', value: 1.0, color: '#c3dcf5' },
			{ id: 'scn', name: 'Sud Chiama Nord', short: '', value: 0.6, color: '#6aa6e0' },
			{ id: 'fdi', name: "Fratelli d'Italia", short: 'FdI', value: 27.8, color: '#3f6fd1' },
			{ id: 'lega', name: 'Lega', short: 'Lega', value: 6.0, color: '#9fd6e6' }
		] },
		{ id: 'far', name: 'Far right', stroke: '#5a5d68', parties: [
			{ id: 'fn', name: 'Futuro Nazionale (Vannacci)', short: 'FN', value: 6.8, color: '#4b4f6e', hatch: true }
		] }
	];

	// Horrible positions; 0.5 means "about half of the party"
	var positions = [
		{ id: 'antisemitic', name: 'Antisemitic stances', parties: { avs: 1, m5s: 1, pd: 0.5 }, racist: true },
		{ id: 'islamophobic', name: 'Racist stances against Muslims', parties: { fdi: 0.5, lega: 1, fn: 1 }, racist: true },
		{ id: 'russia', name: 'Russian influence, against Ukraine', parties: { avs: 1, m5s: 1, lega: 1, fn: 1 } },
		{ id: 'economy', name: 'No idea how to run an economy', parties: { avs: 1, m5s: 1, fn: 1 } },
		{ id: 'lgbtq', name: 'Anti-LGBTQ+ stances', parties: { fn: 1 } }
	];

	var outside = [
		{ name: 'Others', value: 3.4 },
		{ name: 'Undecided / won’t vote', value: 39.7 }
	];

	// Layout, in viewBox units
	var VW = 1000, PAD = 10, BAR_Y = 86, BAR_H = 56, GAP = 2;
	var BAR_B = BAR_Y + BAR_H;
	var RUSSIA_Y = BAR_B + 20;
	var B1 = BAR_B + 68;
	var B2 = B1 + 74;
	var B3 = B2 + 42;
	var VH = B3 + 44;

	var YELLOW = '#ffd500', PURPLE = '#b48cff';

	var parties = [], pos = 0;
	coalitions.forEach(function (c) {
		c.start = pos;
		c.parties.forEach(function (p) {
			p.coalition = c;
			p.start = pos;
			pos += p.value;
			p.end = pos;
			parties.push(p);
		});
		c.end = pos;
		c.total = c.end - c.start;
	});
	var BAR_TOTAL = pos;
	var byId = {};
	parties.forEach(function (p) { byId[p.id] = p; });

	function X(v) { return PAD + v / BAR_TOTAL * (VW - 2 * PAD); }
	function fmt(v) { return v.toFixed(1) + '%'; }
	function mid(p) { return (p.start + p.end) / 2; }

	// Share of the vote covered by a set of positions, counting each party once
	function share(list) {
		return parties.reduce(function (sum, p) {
			var f = 0;
			list.forEach(function (pos) { f = Math.max(f, pos.parties[p.id] || 0); });
			return sum + p.value * f;
		}, 0);
	}
	var horrible = share(positions);
	var notHorrible = BAR_TOTAL - horrible;

	function el(name, attrs, parent) {
		var n = document.createElementNS(NS, name);
		for (var k in attrs) n.setAttribute(k, attrs[k]);
		if (parent) parent.appendChild(n);
		return n;
	}

	function text(parent, x, y, str, attrs) {
		var a = { x: x, y: y };
		for (var k in attrs) a[k] = attrs[k];
		var t = el('text', a, parent);
		t.textContent = str;
		return t;
	}

	// Horizontal curly brace from x1 to x2; base at y, tip at y + dir * h
	function brace(parent, x1, x2, y, h, dir, style) {
		var q = h / 2, r = Math.min(q, (x2 - x1) / 4), m = (x1 + x2) / 2, yq = y + dir * q, yt = y + dir * h;
		var d = 'M' + x1 + ',' + y +
			' Q' + x1 + ',' + yq + ' ' + (x1 + r) + ',' + yq +
			' L' + (m - r) + ',' + yq +
			' Q' + m + ',' + yq + ' ' + m + ',' + yt +
			' Q' + m + ',' + yq + ' ' + (m + r) + ',' + yq +
			' L' + (x2 - r) + ',' + yq +
			' Q' + x2 + ',' + yq + ' ' + x2 + ',' + y;
		var b = el('path', { d: d, 'class': 'itpol-brace' }, parent);
		if (style) b.setAttribute('style', style);
		return b;
	}

	function inkFor(hex) {
		var n = parseInt(hex.slice(1), 16);
		var c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(function (v) {
			v /= 255;
			return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
		});
		var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
		return L > 0.3 ? '#1b1f36' : '#ffffff';
	}

	var svg = el('svg', {
		viewBox: '0 0 ' + VW + ' ' + VH,
		'class': 'itpol-svg',
		role: 'img',
		'aria-label': 'Voting intentions in Italy by party and coalition, October 2026, annotated with the stances of each party'
	});
	root.querySelector('.itpol-scroll').appendChild(svg);

	var defs = el('defs', {}, svg);
	var pat = el('pattern', { id: 'itpol-hatch', width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, defs);
	el('rect', { width: 6, height: 6, fill: '#4b4f6e' }, pat);
	el('line', { x1: 0, y1: 0, x2: 0, y2: 6, stroke: 'rgba(255,255,255,0.22)', 'stroke-width': 2 }, pat);

	// Tooltip
	var tip = document.createElement('div');
	tip.className = 'itpol-tip';
	root.style.position = 'relative';
	root.appendChild(tip);

	function showTip(html, evt) {
		var box = root.getBoundingClientRect();
		tip.innerHTML = html;
		var x = evt.clientX - box.left;
		var half = tip.offsetWidth / 2;
		x = Math.max(half + 4, Math.min(box.width - half - 4, x));
		tip.style.left = x + 'px';
		tip.style.top = (evt.clientY - box.top) + 'px';
		tip.classList.add('is-visible');
	}
	function hideTip() { tip.classList.remove('is-visible'); }

	function partyTip(p) {
		var rows = [];
		if (p.coalition.government) rows.push('Part of the current government');
		positions.forEach(function (pos) {
			var f = pos.parties[p.id];
			if (f) rows.push(pos.name + (f < 1 ? ' (about half of the party)' : ''));
		});
		if (!rows.length || (rows.length === 1 && p.coalition.government)) rows.push('Not horrible people');
		return '<strong>' + p.name + '</strong> ' + fmt(p.value) +
			'<br><span>' + p.coalition.name + '</span>' +
			'<ul>' + rows.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>';
	}

	// Focus: dim everything but the given parties and note
	var segs = {};
	function focus(ids, note) {
		root.classList.add('is-focused');
		parties.forEach(function (p) {
			segs[p.id].classList.toggle('is-on', ids.indexOf(p.id) !== -1);
		});
		Array.prototype.forEach.call(svg.querySelectorAll('.itpol-note'), function (n) {
			n.classList.toggle('is-on', n === note);
		});
	}
	function unfocus() {
		root.classList.remove('is-focused');
		hideTip();
	}

	// Bar segments
	var barG = el('g', {}, svg);
	parties.forEach(function (p) {
		var x = X(p.start) + GAP / 2, w = X(p.end) - X(p.start) - GAP;
		var g = el('g', { 'class': 'itpol-seg' }, barG);
		el('rect', {
			x: x, y: BAR_Y, width: w, height: BAR_H, rx: 3,
			fill: p.hatch ? 'url(#itpol-hatch)' : p.color,
			stroke: p.hatch ? 'rgba(255,255,255,0.45)' : 'none', 'stroke-width': 1
		}, g);
		if (p.short && w >= 30) {
			var ink = p.hatch ? '#ffffff' : inkFor(p.color);
			text(g, x + w / 2, BAR_Y + 25, p.short, { 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, style: 'fill:' + ink });
			text(g, x + w / 2, BAR_Y + 42, p.value.toFixed(1), { 'text-anchor': 'middle', 'font-size': 12, style: 'fill:' + ink + ';opacity:.8' });
		}
		g.addEventListener('mousemove', function (e) {
			focus([p.id], null);
			showTip(partyTip(p), e);
		});
		g.addEventListener('mouseleave', unfocus);
		segs[p.id] = g;
	});

	function hoverable(g, ids) {
		var bb = g.getBBox();
		el('rect', { x: bb.x - 4, y: bb.y - 4, width: bb.width + 8, height: bb.height + 8, fill: 'transparent' }, g);
		g.addEventListener('mousemove', function () { focus(ids, g); });
		g.addEventListener('mouseleave', unfocus);
	}

	// Single brace + label; `grow` fades the brace in toward the more extreme end
	function note(opts) {
		var g = el('g', { 'class': 'itpol-note' }, svg);
		var x1 = X(opts.from) + 1, x2 = X(opts.to) - 1;
		var style = opts.color ? 'stroke:' + opts.color + ';stroke-width:2.5' : null;
		if (opts.grow) {
			var gid = 'itpol-grow-' + opts.parties.join('-');
			var lg = el('linearGradient', { id: gid, gradientUnits: 'userSpaceOnUse', x1: x1, x2: x2, y1: 0, y2: 0 }, defs);
			var weak = 'rgba(255,255,255,0.12)', strong = 'rgba(255,255,255,1)';
			el('stop', { offset: 0, 'stop-color': opts.grow === 'start' ? strong : weak }, lg);
			el('stop', { offset: 1, 'stop-color': opts.grow === 'start' ? weak : strong }, lg);
			style = 'stroke:url(#' + gid + ');stroke-width:2.5';
		}
		brace(g, x1, x2, opts.y, opts.h, opts.dir, style);
		var tipY = opts.y + opts.dir * opts.h;
		var anchor = opts.anchor || 'middle';
		var tx = anchor === 'end' ? x2 : (x1 + x2) / 2;
		var lines = opts.label;
		lines.forEach(function (line, i) {
			var y = opts.dir > 0 ? tipY + 18 + i * 16 : tipY - 8 - (lines.length - 1 - i) * 16;
			text(g, tx, y, line, { 'text-anchor': anchor, 'font-size': i === 0 ? 14 : 13, 'font-weight': i === 0 ? 700 : 400, 'class': i === 0 ? '' : 'itpol-muted' });
		});
		hoverable(g, opts.parties);
	}

	// Two braces joined by a dashed line, label centered on the line
	function linkedNote(opts) {
		var g = el('g', { 'class': 'itpol-note' }, svg);
		var y = opts.y, h = 12, lineY = y + h, style = 'stroke:' + opts.color + ';stroke-width:2';
		var tips = opts.spans.map(function (s) {
			var x1 = X(s[0]) + 1, x2 = X(s[1]) - 1;
			brace(g, x1, x2, y, h, 1, style);
			return (x1 + x2) / 2;
		});
		var tipA = tips[0], tipB = tips[tips.length - 1], cx = (tipA + tipB) / 2;

		var t = text(g, 0, lineY + 5, opts.label, { 'font-size': 14, 'font-weight': 700 });
		var tw = t.getComputedTextLength();
		var FW = opts.flag ? 21 : 0, FS = opts.flag ? 8 : 0, total = FW + FS + tw;
		var left = cx - total / 2;
		if (opts.flag) opts.flag(g, left, lineY, FW);
		t.setAttribute('x', left + FW + FS);

		el('path', { d: 'M' + tipA + ',' + lineY + ' L' + (left - 10) + ',' + lineY, 'class': 'itpol-link', style: 'stroke:' + opts.color }, g);
		el('path', { d: 'M' + (left + total + 10) + ',' + lineY + ' L' + tipB + ',' + lineY, 'class': 'itpol-link', style: 'stroke:' + opts.color }, g);
		hoverable(g, opts.parties);
	}

	function russianFlag(g, x, cy, w) {
		var h = 14, y = cy - h / 2;
		el('rect', { x: x, y: y, width: w, height: h / 3, fill: '#ffffff' }, g);
		el('rect', { x: x, y: y + h / 3, width: w, height: h / 3, fill: '#0039a6' }, g);
		el('rect', { x: x, y: y + 2 * h / 3, width: w, height: h / 3, fill: '#d52b1e' }, g);
		el('rect', { x: x, y: y, width: w, height: h, fill: 'none', stroke: 'rgba(255,255,255,0.5)', 'stroke-width': 0.75 }, g);
	}

	// Top: coalitions
	coalitions.forEach(function (c) {
		var label = [c.name, fmt(c.total) + (c.id === 'far' ? '' : (c.total >= THRESHOLD ? ' · over 42%' : ' · under 42%'))];
		note({
			from: c.start, to: c.end, y: 62, h: 14, dir: -1, label: label, color: c.stroke,
			parties: c.parties.map(function (p) { return p.id; }), anchor: c.id === 'far' ? 'end' : 'middle'
		});
	});

	// Right below the bar: Russian influence
	linkedNote({
		y: RUSSIA_Y, color: YELLOW, flag: russianFlag,
		spans: [[byId.avs.start, byId.m5s.end], [byId.lega.start, byId.fn.end]],
		label: 'Russian influence (want to drop support for Ukraine)',
		parties: ['avs', 'm5s', 'lega', 'fn']
	});

	// Racism, and the middle ground between the two
	note({
		from: byId.avs.start, to: mid(byId.pd), y: B1, h: 14, dir: 1,
		label: ['Multiple antisemitic stances', 'AVS, M5S + about half of PD'],
		parties: ['avs', 'm5s', 'pd'], grow: 'start'
	});
	(function () {
		var from = mid(byId.pd), to = mid(byId.fdi);
		note({
			from: from, to: to, y: B1, h: 14, dir: 1,
			label: ['Not horrible people', '≈' + fmt(to - from) + ' (not racists, not Russian agents)'],
			parties: parties.filter(function (p) { return p.end > from && p.start < to; }).map(function (p) { return p.id; })
		});
	})();
	note({
		from: mid(byId.fdi), to: byId.fn.end, y: B1, h: 14, dir: 1,
		label: ['Multiple racist stances against Muslims', 'about half of FdI + Lega, Futuro Nazionale'],
		parties: ['fdi', 'lega', 'fn'], grow: 'end'
	});

	// The economy
	linkedNote({
		y: B2, color: PURPLE,
		spans: [[byId.avs.start, byId.m5s.end], [byId.fn.start, byId.fn.end]],
		label: 'Have no idea how to run an economy',
		parties: ['avs', 'm5s', 'fn']
	});

	// Last level
	note({
		from: byId.fn.start, to: byId.fn.end, y: B3, h: 14, dir: 1, anchor: 'end',
		label: ['Multiple anti-LGBTQ+ stances'],
		parties: ['fn']
	});

	// Legend for the gradient braces
	(function () {
		var y = B3 + 30, x = PAD + 1;
		var lg = el('linearGradient', { id: 'itpol-legend-grad', x1: 0, x2: 1, y1: 0, y2: 0 }, defs);
		el('stop', { offset: 0, 'stop-color': 'rgba(255,255,255,0.12)' }, lg);
		el('stop', { offset: 1, 'stop-color': '#ffffff' }, lg);
		el('rect', { x: x, y: y - 5, width: 36, height: 3, rx: 1.5, fill: 'url(#itpol-legend-grad)' }, svg);
		text(svg, x + 46, y, 'The whiter the brace, the more extreme the positions', { 'font-size': 12, 'class': 'itpol-muted' });
	})();

	svg.addEventListener('mouseleave', unfocus);

	// Totals by position: overlapping groups, each party counted once per group
	(function () {
		var box = root.querySelector('.itpol-positions');
		if (!box) return;
		var racists = positions.filter(function (p) { return p.racist; });
		function byPos(id) { return positions.filter(function (p) { return p.id === id; }); }
		var rows = [
			{ name: 'Racists', value: share(racists), sub: [
				{ name: 'antisemitic', value: share(byPos('antisemitic')) },
				{ name: 'against Muslims', value: share(byPos('islamophobic')) }
			] },
			{ name: 'Russian agents against Ukraine', value: share(byPos('russia')), color: YELLOW },
			{ name: 'No idea how to run an economy', value: share(byPos('economy')), color: PURPLE },
			{ name: 'Anti-LGBTQ+', value: share(byPos('lgbtq')) }
		];
		function meter(v, color) {
			return '<span class="itpol-meter"><span style="width:' + (v / BAR_TOTAL * 100) + '%' + (color ? ';background:' + color : '') + '"></span></span>';
		}
		var html = '<div class="itpol-pos-card is-horrible"><h4>Horrible people</h4><p class="itpol-pos-big">' + fmt(horrible) + '</p><ul>';
		rows.forEach(function (r) {
			html += '<li><span class="itpol-name">' + r.name + '</span><span class="itpol-val">' + fmt(r.value) + '</span>' + meter(r.value, r.color);
			if (r.sub) {
				html += '<span class="itpol-sub">' + r.sub.map(function (s) { return s.name + ' ' + fmt(s.value); }).join(' · ') + '</span>';
			}
			html += '</li>';
		});
		html += '</ul><p class="itpol-pos-note">Groups overlap: many parties tick more than one box.</p></div>';
		html += '<div class="itpol-pos-card"><h4>Not horrible people</h4><p class="itpol-pos-big">' + fmt(notHorrible) + '</p>' +
			'<p class="itpol-pos-note">Not racists, not Russian agents: from about half of PD to about half of FdI.</p></div>';
		box.innerHTML = html;
	})();

	// Key: every party, every number, so nothing relies on color or hover
	var key = root.querySelector('.itpol-key');
	coalitions.forEach(function (c) {
		var col = document.createElement('div');
		var h = document.createElement('h4');
		h.textContent = c.name;
		col.appendChild(h);
		var ul = document.createElement('ul');
		c.parties.forEach(function (p) {
			var li = document.createElement('li');
			li.innerHTML = '<span class="itpol-sw" style="background:' + (p.hatch ? 'repeating-linear-gradient(45deg,#4b4f6e 0 3px,#6a6e8a 3px 5px)' : p.color) + '"></span>' +
				'<span class="itpol-name">' + p.name + '</span><span class="itpol-val">' + fmt(p.value) + '</span>';
			li.addEventListener('mouseenter', function () { focus([p.id], null); });
			li.addEventListener('mouseleave', unfocus);
			ul.appendChild(li);
		});
		var tot = document.createElement('li');
		tot.className = 'itpol-total';
		tot.innerHTML = '<span class="itpol-name">Total</span><span class="itpol-val">' + fmt(c.total) + '</span>';
		ul.appendChild(tot);
		col.appendChild(ul);
		key.appendChild(col);
	});
	var col = document.createElement('div');
	col.innerHTML = '<h4>Not in the bar</h4>';
	var ul = document.createElement('ul');
	outside.forEach(function (o) {
		var li = document.createElement('li');
		li.innerHTML = '<span class="itpol-name">' + o.name + '</span><span class="itpol-val">' + fmt(o.value) + '</span>';
		ul.appendChild(li);
	});
	col.appendChild(ul);
	key.appendChild(col);
})();
