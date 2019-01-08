### Semantic Markup
Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a `<p>` tag indicates that the enclosed text is a paragraph.

This is both semantic and presentational, because people know what paragraphs are and browsers know how to display them.

On the flip side of this equation, tags like `<b>` and `<i>` are not semantic, because they define only how the text should look (bold or italic) and do not provide any additional meaning to the markup.

Examples of semantic HTML tags include the header tags `<h1> through <h6>, <blockquote>, <code> and <em>.` There are many more semantic HTML tags that can be used as you build a standards-compliant website.

**Benefit of Semantics**
The benefit of writing semantic HTML stems from what should be the driving goal of any web page— the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is.

That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.

Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the `<code>` tag is immediately recognized by the browser as some type of coding language.

**Use Semantic Tags Correctly**
When you want to use semantic tags to convey meaning rather than for presentation purposes, you need to be careful that you don't use them incorrectly simply for their common display properties. Some of the most commonly misused semantic tags include:

* blockquote - Some people use the `<blockquote>` tag for indenting text that is not a quotation. This is because blockquotes are indented by default. If you simply want to benefits of indentation, but the text is not a blockquote, use CSS margins instead.
* p - Some web editors use `<p>&nbsp;</p>` (a non-breaking space contained in a paragraoph) to add extra space between page elements, rather than defining actual paragraphs for the text of that page. As with the previously mentioned indenting example, you should use the margin or padding style property to add space.
* ul - Like blockquote, enclosing text inside a `<ul>` tag indents that text in most browsers. This is both semantically incorrect and invalid HTML, as only `<li>` tags are valid within a `<ul>` tag. Again, use the margin or padding style to indent text.
* h1–h6 - The heading tags can be used to make fonts bigger and bolder, but if the text is not a heading, it should not be inside a heading tag. Use the font-weight and font-size CSS properties instead if you want to change the size or weight of specific text on your page.

By using HTML tags that have meaning, you create pages that impart more information than by just surrounding everything with `<div>` tags.While nearly every HTML4 tag and all the HTML5 tags have a semantic meaning, some tags are primarily semantic in nature.