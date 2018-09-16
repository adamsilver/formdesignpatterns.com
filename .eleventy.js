module.exports = eleventyConfig => {
  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig
    .addPassthroughCopy('src/assets/fonts/')
    .addPassthroughCopy('src/assets/images/')
    .addPassthroughCopy('src/manifest.json')

  return {
    templateFormats: ['njk', 'md', 'html', 'png', 'ico', 'svg', 'xml', 'jpg'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
