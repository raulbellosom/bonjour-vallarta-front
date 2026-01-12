import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
      <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-4 text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-sm text-black/60 dark:text-white/70">{value}</div>
    </div>
  )
}

export default function ContactPage() {
  const { t, i18n } = useTranslation()
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

        <div className="container-pad pt-12 pb-14">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t('contact.title')} <span className="text-gradient">{t('contact.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/70">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.06 }}>
              <InfoCard icon={MapPin} title={t('contact.cards.location')} value={t('common.location')} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }}>
              <InfoCard icon={Phone} title={t('contact.cards.phone')} value={'+52 (322) 000-0000'} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.18 }}>
              <InfoCard icon={Mail} title={t('contact.cards.email')} value={'hello@bonjourvallarta.com.mx'} />
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft p-6 md:p-8">
                <div className="text-sm font-extrabold">{t('contact.form.title')}</div>
                <p className="mt-2 text-sm text-black/60 dark:text-white/70">{t('contact.form.subtitle')}</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert(i18n.language === 'es' ? 'Enviado (demo)' : 'Sent (demo)')
                  }}
                  className="mt-6 grid gap-3"
                >
                  <input
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-fuchsia-500/30"
                    placeholder={t('contact.form.name')}
                    required
                  />
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-fuchsia-500/30"
                    placeholder={t('contact.form.email')}
                    required
                  />
                  <input
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-fuchsia-500/30"
                    placeholder={t('contact.form.subject')}
                    required
                  />
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-fuchsia-500/30"
                    placeholder={t('contact.form.message')}
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
                  >
                    {t('contact.form.send')} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="text-sm font-extrabold">{t('contact.side.title')}</div>
                  <p className="mt-2 text-sm text-black/60 dark:text-white/70">{t('contact.side.desc')}</p>

                  <div className="mt-5 grid gap-3">
                    {t('contact.side.bullets', { returnObjects: true }).map((b, idx) => (
                      <div key={idx} className="rounded-2xl bg-black/5 dark:bg-white/10 px-4 py-3 text-sm font-semibold">
                        {b}
                      </div>
                    ))}
                  </div>

                  <a
                    href={platformUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    {t('common.cta.learnOnline')} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="h-24 bg-gradient-to-r from-fuchsia-500/25 via-purple-500/20 to-indigo-500/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
