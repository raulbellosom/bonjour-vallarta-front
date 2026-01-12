import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Users,
  Sparkles,
  Laptop,
  Building2,
  Play,
  Star,
  MapPin,
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 shadow-soft">
      <div className="text-xl font-extrabold">{value}</div>
      <div className="text-xs text-black/60 dark:text-white/60">{label}</div>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs font-semibold">
      <Sparkles className="h-4 w-4" />
      {children}
    </span>
  )
}

function Card({ icon: Icon, title, desc, highlight }) {
  return (
    <div
      className={cx(
        'rounded-3xl border p-5 shadow-soft transition',
        highlight
          ? 'gradient-brand text-white border-transparent'
          : 'border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5',
      )}
    >
      <div className={cx('h-11 w-11 rounded-2xl flex items-center justify-center', highlight ? 'bg-white/15' : 'bg-black/5 dark:bg-white/10')}>
        <Icon className={cx('h-5 w-5', highlight ? 'text-white' : '')} />
      </div>
      <h3 className={cx('mt-4 text-sm font-bold', highlight ? 'text-white' : '')}>{title}</h3>
      <p className={cx('mt-2 text-sm', highlight ? 'text-white/85' : 'text-black/60 dark:text-white/60')}>{desc}</p>
    </div>
  )
}

export default function HomePage() {
  const { t, i18n } = useTranslation()

  const platformUrl = useMemo(
    () => import.meta.env.VITE_PLATFORM_URL || 'https://learn.bonjourvallarta.com.mx',
    [],
  )

  const testimonials = t('home.testimonials.items', { returnObjects: true })

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full blur-3xl opacity-60 gradient-brand" />
          <div className="absolute -bottom-56 -left-56 h-[520px] w-[520px] rounded-full blur-3xl opacity-35 bg-fuchsia-400 dark:bg-fuchsia-600" />
        </div>

        <div className="container-pad pt-14 pb-10 lg:pt-20 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div {...fadeUp} className="lg:col-span-6">
              <Pill>
                <span className="inline-flex items-center gap-2 text-black/70 dark:text-white/70">
                  <MapPin className="h-4 w-4" /> {t('home.hero.kicker')}
                </span>
              </Pill>

              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
                {t('home.hero.title1')} <span className="text-gradient">{t('home.hero.title2')}</span>
                <span className="block">{t('home.hero.title3')}</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-black/60 dark:text-white/70 max-w-xl">
                {t('home.hero.subtitle')}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
                >
                  {t('common.cta.viewCourses')} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={platformUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  {t('common.cta.learnOnline')} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Stat value="15+" label={t('home.hero.stats.years')} />
                <Stat value="2,000+" label={t('home.hero.stats.students')} />
                <Stat value="98%" label={t('home.hero.stats.satisfaction')} />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="lg:col-span-6">
              <div className="relative rounded-[28px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-soft overflow-hidden">
                <div className="absolute -top-12 -right-16 h-48 w-48 rounded-full opacity-40 gradient-brand blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
                  alt="Students learning"
                  className="h-[340px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

                <div className="absolute left-4 bottom-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="glass rounded-2xl px-4 py-3 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl gradient-brand flex items-center justify-center">
                        <BadgeCheck className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{t('nav.certifications')}</div>
                        <div className="text-xs text-black/60 dark:text-white/60">DELF • DALF • Cambridge</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={platformUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold bg-white/80 hover:bg-white transition"
                  >
                    <Play className="h-4 w-4" /> {t('common.cta.learnOnline')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Human approach */}
      <section className="container-pad py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden border border-black/5 dark:border-white/10 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
                alt="Classroom"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="text-xs font-semibold text-black/50 dark:text-white/50">{t('home.human.kicker')}</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('home.human.title').split(' ').slice(0, 3).join(' ')}{' '}
              <span className="text-gradient">{t('home.human.title').split(' ').slice(3).join(' ')}</span>
            </h2>
            <p className="mt-3 text-base text-black/60 dark:text-white/70">
              {t('home.human.subtitle')}
            </p>

            <div className="mt-6 grid gap-3">
              {t('home.human.cards', { returnObjects: true }).map((c, idx) => (
                <div key={idx} className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                      {idx === 0 && <GraduationCap className="h-5 w-5" />}
                      {idx === 1 && <Sparkles className="h-5 w-5" />}
                      {idx === 2 && <Users className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{c.title}</div>
                      <div className="mt-1 text-sm text-black/60 dark:text-white/60">{c.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer cards */}
      <section className="bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="container-pad py-14">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold text-black/50 dark:text-white/50">{t('home.offer.kicker')}</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('home.offer.title')} <span className="text-gradient">{i18n.language === 'es' ? '' : ''}</span>
            </h2>
            <p className="mt-3 text-base text-black/60 dark:text-white/70 max-w-2xl">
              {t('home.offer.subtitle')}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card icon={Users} title={t('home.offer.items.0.title')} desc={t('home.offer.items.0.desc')} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card icon={Laptop} title={t('home.offer.items.1.title')} desc={t('home.offer.items.1.desc')} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <Card icon={Sparkles} title={t('home.offer.items.2.title')} desc={t('home.offer.items.2.desc')} highlight />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card icon={Building2} title={t('home.offer.items.3.title')} desc={t('home.offer.items.3.desc')} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform highlight */}
      <section className="container-pad py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500" /> {t('home.platform.kicker')}
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('home.platform.title').split(' ').slice(0, 4).join(' ')}{' '}
              <span className="text-gradient">{t('home.platform.title').split(' ').slice(4).join(' ')}</span>
            </h2>
            <p className="mt-3 text-base text-black/60 dark:text-white/70">
              {t('home.platform.subtitle')}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t('home.platform.bullets', { returnObjects: true }).map((b, idx) => (
                <div key={idx} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BadgeCheck className="h-4 w-4" /> {b}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={platformUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
              >
                {t('home.platform.cta')} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                {t('common.cta.contact')} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-soft">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{t('common.brand')}</div>
                  <div className="text-xs text-black/60 dark:text-white/60">24/7</div>
                </div>
                <div className="mt-5 rounded-2xl bg-black/5 dark:bg-white/10 p-4">
                  <div className="text-sm font-semibold">{i18n.language === 'es' ? 'Lección rápida' : 'Quick lesson'}</div>
                  <div className="mt-1 text-sm text-black/60 dark:text-white/60">
                    {i18n.language === 'es' ? 'Vocabulario + pronunciación + práctica' : 'Vocabulary + pronunciation + practice'}
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                    <div className="h-2 w-2/5 rounded-full gradient-brand" />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
                    <div className="text-xs text-black/60 dark:text-white/60">{i18n.language === 'es' ? 'Racha' : 'Streak'}</div>
                    <div className="mt-1 text-xl font-extrabold">12</div>
                  </div>
                  <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
                    <div className="text-xs text-black/60 dark:text-white/60">{i18n.language === 'es' ? 'Nivel' : 'Level'}</div>
                    <div className="mt-1 text-xl font-extrabold">A2</div>
                  </div>
                </div>
              </div>

              <div className="h-40 bg-gradient-to-r from-fuchsia-500/40 via-purple-500/30 to-indigo-500/20 dark:from-fuchsia-500/30 dark:via-purple-500/20 dark:to-indigo-500/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="container-pad py-14">
          <motion.div {...fadeUp}>
            <div className="text-xs font-semibold text-black/50 dark:text-white/50">{t('home.certs.kicker')}</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('home.certs.title').split(' ').slice(0, 3).join(' ')}{' '}
              <span className="text-gradient">{t('home.certs.title').split(' ').slice(3).join(' ')}</span>
            </h2>
            <p className="mt-3 text-base text-black/60 dark:text-white/70 max-w-2xl">
              {t('home.certs.subtitle')}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }}>
              <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl gradient-brand flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t('home.certs.leftTitle')}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">FR</div>
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  {t('home.certs.leftItems', { returnObjects: true }).map((it, idx) => (
                    <div key={idx} className="rounded-2xl bg-black/5 dark:bg-white/10 px-4 py-3 text-sm font-semibold">
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }}>
              <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl gradient-brand flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t('home.certs.rightTitle')}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">EN</div>
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  {t('home.certs.rightItems', { returnObjects: true }).map((it, idx) => (
                    <div key={idx} className="rounded-2xl bg-black/5 dark:bg-white/10 px-4 py-3 text-sm font-semibold">
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-pad py-14">
        <motion.div {...fadeUp}>
          <div className="text-xs font-semibold text-black/50 dark:text-white/50">{t('home.testimonials.kicker')}</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('home.testimonials.title').split(' ').slice(0, 4).join(' ')}{' '}
            <span className="text-gradient">{t('home.testimonials.title').split(' ').slice(4).join(' ')}</span>
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((it, idx) => (
            <motion.div key={idx} {...fadeUp} transition={{ duration: 0.6, delay: 0.05 * idx }}>
              <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-black/70 dark:text-white/70">“{it.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl gradient-brand" />
                  <div>
                    <div className="text-sm font-bold">{it.name}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">{it.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-brand opacity-90" />
        <div className="container-pad py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <motion.div {...fadeUp} className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {t('home.cta.title')}
              </h2>
              <p className="mt-3 text-white/85 text-base">
                {t('home.cta.subtitle')}
              </p>
              <div className="mt-6 grid gap-2 text-sm text-white/85">
                {t('home.cta.meta', { returnObjects: true }).map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4" /> {m}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-6">
              <div className="rounded-[28px] bg-white/10 border border-white/15 backdrop-blur-xl p-6 shadow-soft">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert(i18n.language === 'es' ? 'Enviado (demo)' : 'Sent (demo)')
                  }}
                  className="grid gap-3"
                >
                  <input
                    className="w-full rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-white/50"
                    placeholder={t('home.cta.form.name')}
                    required
                  />
                  <input
                    type="email"
                    className="w-full rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-white/50"
                    placeholder={t('home.cta.form.email')}
                    required
                  />
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-white/50"
                    placeholder={t('home.cta.form.message')}
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-black/90 hover:bg-black text-white transition"
                  >
                    {t('home.cta.form.send')} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
