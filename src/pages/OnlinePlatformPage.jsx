import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowRight, BadgeCheck, BookOpen, Clock, Sparkles, Layers } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
      <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-4 text-base font-extrabold">{title}</div>
      <div className="mt-2 text-sm text-black/60 dark:text-white/70">{desc}</div>
    </div>
  )
}

export default function OnlinePlatformPage() {
  const { t } = useTranslation()
  const platformUrl = useMemo(
    () => import.meta.env.VITE_PLATFORM_URL || 'https://learn.bonjourvallarta.com.mx',
    [],
  )

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 gradient-brand" />
          <div className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full blur-3xl opacity-25 bg-fuchsia-400 dark:bg-fuchsia-600" />
        </div>

        <div className="container-pad pt-12 pb-12">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2 text-xs font-semibold">
              <Sparkles className="h-4 w-4" />
              {t('online.kicker')}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t('online.title')} <span className="text-gradient">{t('online.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/70">
              {t('online.subtitle')}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }}>
              <Feature icon={BookOpen} title={t('online.features.lessons.title')} desc={t('online.features.lessons.desc')} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Feature icon={Clock} title={t('online.features.pace.title')} desc={t('online.features.pace.desc')} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <Feature icon={Layers} title={t('online.features.progress.title')} desc={t('online.features.progress.desc')} />
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-[28px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <BadgeCheck className="h-5 w-5" /> {t('online.ctaBox.title')}
                </div>
                <div className="mt-2 text-sm text-black/60 dark:text-white/70 max-w-xl">
                  {t('online.ctaBox.desc')}
                </div>
              </div>
              <a
                href={platformUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
              >
                {t('common.cta.learnOnline')} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="h-20 bg-gradient-to-r from-fuchsia-500/25 via-purple-500/20 to-indigo-500/10" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
