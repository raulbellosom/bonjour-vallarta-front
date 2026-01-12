import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react'

import { fetchPostBySlug } from '../lib/blog.js'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr)
    return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: '2-digit' }).format(d)
  } catch {
    return dateStr
  }
}

export default function BlogPostPage() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      setLoading(true)
      const data = await fetchPostBySlug(slug)
      if (mounted) {
        setPost(data)
        setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [slug])

  return (
    <div>
      <section className="container-pad pt-10 pb-14">
        <motion.div {...fadeUp}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <ArrowLeft className="h-4 w-4" /> {t('blog.back')}
          </Link>
        </motion.div>

        {loading ? (
          <div className="mt-8 flex items-center gap-3 text-sm text-black/60 dark:text-white/70">
            <Loader2 className="h-4 w-4 animate-spin" /> {t('blog.loading')}
          </div>
        ) : !post ? (
          <div className="mt-8 glass rounded-3xl p-6">
            <div className="text-lg font-extrabold">{t('blog.notFound.title')}</div>
            <div className="mt-2 text-sm text-black/60 dark:text-white/70">{t('blog.notFound.desc')}</div>
          </div>
        ) : (
          <>
            <motion.div {...fadeUp} className="mt-8">
              <div className="flex items-center gap-2 text-xs text-black/60 dark:text-white/60">
                <Calendar className="h-4 w-4" /> {formatDate(post.date)}
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {typeof post.title === 'string' ? post.title : post.title?.[i18n.language] || post.title?.en}
              </h1>
              {post.excerpt ? (
                <p className="mt-4 max-w-3xl text-base text-black/60 dark:text-white/70">
                  {typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.[i18n.language] || post.excerpt?.en}
                </p>
              ) : null}
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }}>
              <div className="mt-8 rounded-[28px] overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft">
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt={typeof post.title === 'string' ? post.title : post.title?.[i18n.language] || post.title?.en}
                    className="h-[340px] w-full object-cover"
                  />
                ) : (
                  <div className="h-[220px] gradient-brand opacity-90" />
                )}
                <div className="p-6 md:p-8">
                  {/* Content can be markdown or HTML later; for now plain text paragraphs */}
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    {(() => {
                      const raw = post.content
                      const content = Array.isArray(raw)
                        ? raw
                        : typeof raw === 'string'
                          ? raw.split('\n')
                          : raw?.[i18n.language] || raw?.en || []

                      return (content || []).filter(Boolean).map((p, idx) => <p key={idx}>{p}</p>)
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </section>
    </div>
  )
}
