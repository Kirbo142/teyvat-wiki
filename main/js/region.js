// Filter quests by type
document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
        document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var type = chip.dataset.filter;
        document.querySelectorAll(".quests li").forEach(function (li) {
            li.hidden = type !== "all" && li.dataset.type !== type;
        });
    });
});

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
