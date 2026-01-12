import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="container-pad py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="glass rounded-3xl p-8">
          <div className="text-xs font-semibold text-black/50 dark:text-white/50">404</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">{t('notFound.title')}</h1>
          <p className="mt-3 text-base text-black/60 dark:text-white/70">{t('notFound.subtitle')}</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold gradient-brand text-white shadow-soft"
          >
            {t('notFound.backHome')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
