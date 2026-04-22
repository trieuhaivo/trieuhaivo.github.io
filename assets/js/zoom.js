// medium-zoom config — use natural behavior with comfortable margin.
//
// Earlier versions capped the zoom container at 1200x900 px to prevent perceived
// pixelation on 29"+ monitors. That cap turned out to cause the opposite bug for
// publication thumbnails: dmi_preview.png is 2902x1451 (2:1) and lake_preview.png
// is 3850x1767 (~2.18:1) — both far higher resolution than any 27" monitor's pixel
// width and both with wide aspect ratios. Fitting a 2:1 image into a 4:3 (1200x900)
// container made the rendered image only ~1200x600, which on a 2560-wide viewport
// looked small with large empty bands either side ("centered but feels left-shifted"
// because the empty space dominates).
//
// Switched to medium-zoom's default expand-to-viewport behavior with margin=80.
// The native thumbnails are large enough that scaling them to fit viewport-160px
// is downscaling (no upscale → no pixelation), and the result is centered correctly
// at any viewport width.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
    margin: 80,
  });
});
