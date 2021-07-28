export default async () => {
  const { $content } = require('@nuxt/content')
  // default: use await $content({ deep: true })
  // currently only capturing 'articles' content
  // use deep: true other content/ dir needs to be included in the sitemap
  const files = await $content('articles').only(['slug']).fetch()

  return files.map((file) =>
    file.path === '/index' ? '/' : `/faq/${file.slug}`
  )
}
