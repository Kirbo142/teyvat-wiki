// Quests: built from this page's data file (data/<region>.js)
(function () {
    var data = (window.WIKI_DATA || {})[document.body.dataset.region];
    var list = document.getElementById("questList");
    var bar = document.getElementById("questFilters");
    if (!data || !list || !bar) return;

    // type -> [filter button text, tag text]
    var LABELS = {
        archon: ["Archon", "Archon Quest"],
        world: ["World", "World Quest"],
        story: ["Story", "Story Quest"],
        hangout: ["Hangout", "Hangout Event"]
    };
    function label(type, i) { return (LABELS[type] || [type, type])[i]; }

    var types = ["all"];
    data.quests.forEach(function (q) {
        if (types.indexOf(q.type) < 0) types.push(q.type);

        var li = document.createElement("li");
        li.dataset.type = q.type;

        var tag = document.createElement("span");
        tag.className = "tag " + q.type;
        tag.textContent = label(q.type, 1);
        li.appendChild(tag);

        var name = document.createElement("p");
        name.textContent = q.name;
        li.appendChild(name);

        if (q.how) {
            var how = document.createElement("p");
            how.className = "how";
            how.textContent = q.how;
            li.appendChild(how);
        }
        list.appendChild(li);
    });

    // One filter button per quest type on this page
    types.forEach(function (type) {
        var chip = document.createElement("button");
        chip.className = "chip" + (type === "all" ? " active" : "");
        chip.textContent = type === "all" ? "All" : label(type, 0);
        chip.addEventListener("click", function () {
            bar.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
            chip.classList.add("active");
            list.querySelectorAll("li").forEach(function (li) {
                li.hidden = type !== "all" && li.dataset.type !== type;
            });
        });
        bar.appendChild(chip);
    });
})();

// Map: zoom (buttons, Ctrl + scroll, double-click), drag to move
(function () {
    var view = document.querySelector(".map-full");
    if (!view) return;
    var img = view.querySelector("img");
    var contain = view.dataset.fit === "contain";   // square maps: fit the whole picture in the banner
    var MAX = parseFloat(view.dataset.maxZoom) || 3, s = 1, x = 0, y = 0, drag = null;   // max zoom is set per page with data-max-zoom

    function size() {
        var w = view.clientWidth, vh = view.clientHeight, ratio = img.naturalHeight / img.naturalWidth;
        var bw = contain ? vh / ratio : w;
        return { w: w, vh: vh, bw: bw, bh: bw * ratio };
    }
    function apply() {
        var d = size(), cw = d.bw * s, ch = d.bh * s;
        img.style.width = d.bw + "px";
        x = cw <= d.w ? (d.w - cw) / 2 : Math.min(0, Math.max(d.w - cw, x));
        y = ch <= d.vh ? (d.vh - ch) / 2 : Math.min(0, Math.max(d.vh - ch, y));
        img.style.transform = "translate(" + x + "px," + y + "px) scale(" + s + ")";
        view.classList.toggle("zoomed", s > 1);
    }
    function zoomTo(ns, cx, cy) {
        ns = Math.min(MAX, Math.max(1, ns));
        x = cx - (cx - x) * (ns / s);
        y = cy - (cy - y) * (ns / s);
        s = ns;
        apply();
    }
    function reset() { var d = size(); s = 1; x = (d.w - d.bw) / 2; y = (d.vh - d.bh) / 2; apply(); }

    view.querySelectorAll("[data-zoom]").forEach(function (b) {
        b.addEventListener("click", function () {
            var a = b.dataset.zoom, cx = view.clientWidth / 2, cy = view.clientHeight / 2;
            if (a === "in") zoomTo(s * 1.4, cx, cy);
            else if (a === "out") zoomTo(s / 1.4, cx, cy);
            else reset();
        });
    });
    view.addEventListener("wheel", function (e) {
        if (!e.ctrlKey) return;
        e.preventDefault();
        var r = view.getBoundingClientRect();
        zoomTo(s * (e.deltaY < 0 ? 1.2 : 1 / 1.2), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    view.addEventListener("dblclick", function (e) {
        if (e.target.closest(".map-tools, .map-link")) return;
        var r = view.getBoundingClientRect();
        zoomTo(s < MAX ? s * 1.6 : 1, e.clientX - r.left, e.clientY - r.top);
    });
    view.addEventListener("pointerdown", function (e) {
        if (e.target.closest(".map-tools, .map-link")) return;
        drag = { px: e.clientX, py: e.clientY, x: x, y: y };
        view.setPointerCapture(e.pointerId);
        view.classList.add("dragging");
    });
    view.addEventListener("pointermove", function (e) {
        if (!drag) return;
        x = drag.x + e.clientX - drag.px;
        y = drag.y + e.clientY - drag.py;
        apply();
    });
    function stop() { drag = null; view.classList.remove("dragging"); }
    view.addEventListener("pointerup", stop);
    view.addEventListener("pointercancel", stop);
    window.addEventListener("resize", reset);
    if (img.complete && img.naturalWidth) reset(); else img.addEventListener("load", reset);
})();
