import { demoPosts } from '../data/blog.js'

export async function fetchPosts() {
  const base = import.meta.env.VITE_API_BASE_URL
  if (!base) return demoPosts

  try {
    const res = await fetch(`${base}/blog/posts`)
    if (!res.ok) throw new Error('Bad response')
    const data = await res.json()
    return Array.isArray(data) ? data : data.items || demoPosts
  } catch (e) {
    console.warn('Blog API unavailable, using demo content:', e)
    return demoPosts
  }
}

export async function fetchPostBySlug(slug) {
  const base = import.meta.env.VITE_API_BASE_URL
  if (!base) return demoPosts.find((p) => p.slug === slug) || null

  try {
    const res = await fetch(`${base}/blog/posts/${encodeURIComponent(slug)}`)
    if (!res.ok) throw new Error('Bad response')
    const data = await res.json()
    return data || null
  } catch (e) {
    console.warn('Blog API unavailable, using demo content:', e)
    return demoPosts.find((p) => p.slug === slug) || null
  }
}
