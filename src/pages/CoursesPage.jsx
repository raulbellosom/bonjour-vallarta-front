import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowRight, Users, Laptop, Building2, Sparkles } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function Card({ icon: Icon, title, desc, cta, to, highlight }) {
  return (
    <div
      className={
        'rounded-3xl border p-6 shadow-soft ' +
        (highlight
          ? 'gradient-brand text-white border-transparent'
          : 'border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5')
      }
    >
      <div
        className={
          'h-12 w-12 rounded-2xl flex items-center justify-center ' +
          (highlight ? 'bg-white/15' : 'bg-black/5 dark:bg-white/10')
        }
      >
        <Icon className={'h-6 w-6 ' + (highlight ? 'text-white' : '')} />
      </div>
      <h3 className={'mt-4 text-lg font-extrabold ' + (highlight ? 'text-white' : '')}>
        {title}
      </h3>
      <p className={'mt-2 text-sm ' + (highlight ? 'text-white/85' : 'text-black/60 dark:text-white/70')}>
        {desc}
      </p>
      {to && (
        <Link
          to={to}
          className={
            'mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ' +
            (highlight
              ? 'bg-white text-black hover:bg-white/90'
              : 'border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10')
          }
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export default function CoursesPage() {
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
          <div className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 bg-fuchsia-400 dark:bg-fuchsia-600" />
        </div>
        <div className="container-pad pt-12 pb-10">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t('courses.title')} <span className="text-gradient">{t('courses.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/70">
              {t('courses.subtitle')}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }}>
              <Card
                icon={Users}
                title={t('courses.cards.inPerson.title')}
                desc={t('courses.cards.inPerson.desc')}
                cta={t('courses.cards.inPerson.cta')}
                to="/contact"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card
                icon={Laptop}
                title={t('courses.cards.liveOnline.title')}
                desc={t('courses.cards.liveOnline.desc')}
                cta={t('courses.cards.liveOnline.cta')}
                to="/contact"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <Card
                icon={Sparkles}
                title={t('courses.cards.selfLearning.title')}
                desc={t('courses.cards.selfLearning.desc')}
                cta={t('courses.cards.selfLearning.cta')}
                to="/online"
                highlight
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card
                icon={Building2}
                title={t('courses.cards.business.title')}
                desc={t('courses.cards.business.desc')}
                cta={t('courses.cards.business.cta')}
                to="/contact"
              />
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 glass rounded-3xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-extrabold">{t('courses.platformBox.title')}</div>
                <div className="mt-1 text-sm text-black/60 dark:text-white/70">
                  {t('courses.platformBox.desc')}
                </div>
              </div>
              <a
                href={platformUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
              >
                {t('common.cta.learnOnline')} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
