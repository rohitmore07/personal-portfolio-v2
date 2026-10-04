export const initialBlobityOptions = {
    licenseKey: "opensource",
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    dotColor: "#0e1016",
    color: "rgb(187, 208, 245)",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 16,
    fontWeight: 500,
    opacity: 1,
    fontColor: "#0e1016",
    zIndex: 100,
    size: 0, // idle blob hidden: the coffee cup is the pointer. Hover morphing still works.
    radius: 4,
    magnetic: true,
  }

// Blobity paints its inverted blob white and blends it with `difference`, so the
// visible colour is |page - paint|. To get #BBD0F4 on the site's dark background
// (~#0E1016) the paint colour has to be that background + #BBD0F4 (clamped to 255).
// Applied in page.tsx right after Blobity is created. Everything else (invert,
// opacity, magnetic morphing, ...) is unchanged.
export const blobityInvertPaint = { r: 201, g: 224, b: 255 };
