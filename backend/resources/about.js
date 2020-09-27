const htmlContent = `
<h3>About</h3>
<p>Styling texts is a very tricky part of converting HTML into react-native components.</p>
<p>The way react-native's <em>Text</em> components behaves is a lot different from our browsers' implementation.</p>
<p>Let's see how styles are applied to texts with this plugin.</p>
<div style="color:red;">This text is inside a div, without a text tag wrapping it. The <em>div</em> tag only has <em>color:red;</em> as style.</div>
In the example above, you may find, if you inspect the rendered components, that it's the <em>Text</em> component inside that actually receives the color attribute.
This is because this library parses every text-only style of <em>View</em> wrappers and moves them to each <em>Text</em> child.
<div style="color:red">
  <p>This first paragraph doesn't have a specific styling.</p>
  <p style="color:blue;">This one is blue.</p>
</div>
<p>Here, the <em>div</em> wrapper still has <em>color:red;</em> as style.</div>.</p>
<p>The first paragraph inside it doesn't have any style attribute, either from HTML or from the <em>tagsStyles</em> or <em>classesStyles</em> props.</p>
<p>The second one is set to be blue from its <em>style</em> attribute.</p>
<p>You can see the order of priorities that applies to styling. The less important are your <em>tagsStyles</em>, 
then your <em>classessStyles</em> and finally the styles parsed from your HTML content.</p>
`;

module.exports = htmlContent;
