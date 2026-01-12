import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowRight, Calendar, Loader2 } from 'lucide-react'

import { fetchPosts } from '../lib/blog.js'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr)
    return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: '2-digit' }).format(d)
  } catch {
    return dateStr
  }
}

function PostCard({ post, t, lang }) {
  const title = typeof post.title === 'string' ? post.title : post.title?.[lang] || post.title?.en || ''
  const excerpt = typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.[lang] || post.excerpt?.en || ''

  return (
    <article className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft overflow-hidden">
      {post.cover ? (
        <img src={post.cover} alt={title} className="h-44 w-full object-cover" loading="lazy" />
      ) : (
        <div className="h-44 w-full gradient-brand opacity-80" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-black/60 dark:text-white/60">
          <Calendar className="h-4 w-4" /> {formatDate(post.date)}
        </div>
        <h3 className="mt-3 text-lg font-extrabold">{title}</h3>
        <p className="mt-2 text-sm text-black/60 dark:text-white/70 line-clamp-3">{excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          {t('blog.readMore')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let mounted = true
    ;(async () => {
      setLoading(true)
      const data = await fetchPosts()
      if (mounted) {
        setPosts(data || [])
        setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 gradient-brand" />
          <div className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full blur-3xl opacity-25 bg-fuchsia-400 dark:bg-fuchsia-600" />
        </div>

        <div className="container-pad pt-12 pb-12">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t('blog.title')} <span className="text-gradient">{t('blog.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/70">
              {t('blog.subtitle')}
            </p>
          </motion.div>

          {loading ? (
            <div className="mt-10 flex items-center gap-3 text-sm text-black/60 dark:text-white/70">
              <Loader2 className="h-4 w-4 animate-spin" /> {t('blog.loading')}
            </div>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, idx) => (
                <motion.div key={p.slug || idx} {...fadeUp} transition={{ duration: 0.6, delay: 0.04 * idx }}>
                  <PostCard post={p} t={t} lang={i18n.language} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
