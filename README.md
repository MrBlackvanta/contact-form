# Contact form

My solution to the [Contact form](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://contact-form.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/contact-form

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Validation and focus

Validation runs on submit, then live. Nothing is flagged before the first submit; after
it, the errors recompute during render from the current values, so a field clears the
moment it's fixed. Focus moves to the first invalid control, which makes a screen reader
announce its label, its invalid state and the error text in one go.

The success toast lives in a permanently mounted `role="status"` region keyed by a
submission counter, so submitting again remounts it and it gets announced a second time
instead of passing silently. It has no close button and doesn't auto-dismiss, matching the
variant all three success frames use, and it clears on the next submission.

### Colour

Every text pairing passes as drawn. Three non-text ones don't, and they're all the same
grey, so one token fixes all three: `hsl(186 15% 59%)` to `hsl(186 15% 55%)`, which is the
smallest step that clears 3:1.

The unchecked radio also loses the design's 50% paint opacity. Composited over white that
ink is 1.59:1, and no opacity below 100% can reach 3:1 from the new grey. That's the one
visible change: empty radios read a shade firmer than the mockup.

### Deviations

**Focus is a 2px outline at 2px offset, not the design's green border.** The design draws
focus and hover identically, which leaves a keyboard user unable to tell them apart. An
outline also sits outside the control so it never disturbs layout.

**Field padding is 11px vertically, not 12.** Figma draws the 1px stroke inside the box, so
the 12px it measures already contains it. CSS borders sit outside the padding box, so
`py-3` plus a border makes the field 53px instead of 51.

**The two-column layout starts at 640px, not the tablet frame's 768.** Held at 768 the
mobile layout stretches to a 735px-wide card holding one column of full-width fields, which
is the worst the page ever looks. 768 itself still renders the tablet design.

**The button's hover green isn't in the file** at all; the component's hover variant
carries the same colour as its default. I sampled it off the exported hover render.

**Hover states for the radio cards and checkbox are mine.** Nothing in the design has one
except the fields and the button, and the brief asks for hover feedback on every
interactive element, so they borrow the field's treatment.

The heading's tracking follows the exported JPGs rather than the file's metadata, which
contradicts itself between frames. The consent asterisk ships green because the renders
show it green even though the file puts it in a dark text node.

**No scroll reveals.** The page is one card centred in the viewport, so there's nothing to
reveal.

Karla ships as a single 24KB woff2 and is the only preload. The page makes no image
requests at all; the checkbox, radio and check marks are CSS and inline SVG.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
