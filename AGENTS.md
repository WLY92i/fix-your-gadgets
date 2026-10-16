<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep shared site navigation and footer in the root layout; public content pages use their own leaf routes and metadata so direct links remain accessible.
- Define device categories, brands and faults in the shared client-safe catalogue; include a free-text alternative to avoid excluding unlisted manufacturers.
- Keep visual model records in a shared client-safe catalogue keyed by category and brand, with stored asset pointers; the same model picker serves repair and buyback and permits unlisted models.
- Repair and buyback use a shared three-step request form with shared Zod validation; submit via a public server function with insert-only RLS and no public request reads to protect contact details.
- Use global semantic design tokens and Button variants for visual styling; imagery is imported from project assets for reliable delivery.
- Keep business identity and contact links in a shared client-safe module so the header, homepage and footer stay consistent.
- Keep the homepage device chooser as one shared component whose rows link to the repair page with a catalogue category id, and never repeat that chooser as a second category grid on the same page.
