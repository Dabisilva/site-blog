import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => post._raw.flattenedPath.replace('.md', '') },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })