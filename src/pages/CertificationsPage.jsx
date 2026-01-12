import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { BadgeCheck, GraduationCap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function Block({ title, subtitle, items }) {
  return (
    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl gradient-brand flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-base font-extrabold">{title}</div>
          <div className="text-sm text-black/60 dark:text-white/70">{subtitle}</div>
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-2xl bg-black/5 dark:bg-white/10 px-4 py-3 text-sm font-semibold">
            {it}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CertificationsPage() {
  const { t } = useTranslation()
  const fr = t('certifications.fr.items', { returnObjects: true })
  const en = t('certifications.en.items', { returnObjects: true })

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
              <BadgeCheck className="h-4 w-4" />
              {t('certifications.kicker')}
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t('certifications.title')} <span className="text-gradient">{t('certifications.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/70">
              {t('certifications.subtitle')}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.06 }}>
              <Block title={t('certifications.fr.title')} subtitle={t('certifications.fr.subtitle')} items={fr} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }}>
              <Block title={t('certifications.en.title')} subtitle={t('certifications.en.subtitle')} items={en} />
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 glass rounded-3xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-extrabold">{t('certifications.cta.title')}</div>
                <div className="mt-1 text-sm text-black/60 dark:text-white/70">{t('certifications.cta.desc')}</div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
              >
                {t('common.cta.contact')} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
