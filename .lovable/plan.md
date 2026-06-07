## Change

Single file: `src/routes/index.tsx`

### Step 1 — Remove from bottom CTA section
Delete the `<figure>` block (currently inside `#enroll` section) containing Ceres Chua's quote and attribution. The section will then flow directly from the top border into the "Five weeks. Five stories…" paragraph.

### Step 2 — Add to end of Turn section
After the final paragraph of the Turn section ("A way to process what's in your head in a way other writing styles cannot."), insert a new `<figure>` block with:
- `className="pt-10"` (generous whitespace, matching the John Cook figure styling)
- Italic blockquote with the quote text
- `<figcaption>` with em-dash, "Ceres Chua" as an underlined accent-color link to https://www.themoneymindsetlab.com/ (target=_blank, rel=noopener noreferrer), followed by ", finance creator"

Styling matches the John Cook figure exactly (italic Gilda Display via existing serif, Josefin Sans caption via font-sans). Background remains the Turn section's KRAFT_DEEP — no card or box.

No other changes.