# frozen_string_literal: true
#
# Demote jekyll-scholar's hardcoded <h2 class="bibliography">YEAR</h2> year-grouping
# headings to <h3>. The plugin emits h2 unconditionally; nesting them inside an h2
# card title (e.g. "Publications") creates a sibling-rank hierarchy violation
# flagged by WCAG 2.1 SC 1.3.1 (Info and Relationships) and SC 2.4.10
# (Section Headings).
#
# Surgical regex: only matches `<h2 class="bibliography">YYYY</h2>` (4-digit year),
# so it cannot rewrite any other h2 on the page.
Jekyll::Hooks.register %i[pages documents], :post_render do |item|
  next unless item.output_ext == ".html"
  item.output = item.output.gsub(
    /<h2(\s+class="bibliography"[^>]*)>(\d{4})<\/h2>/,
    '<h3\1>\2</h3>'
  )
end
