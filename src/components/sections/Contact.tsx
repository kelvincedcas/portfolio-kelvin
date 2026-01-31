import { useRef, useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
  BadgeX,
} from 'lucide-react';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kelvin-cede%C3%B1o-castro-254021311/',
    color: 'hover:bg-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/kelvincedcas',
    color: 'hover:bg-gray-800',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/kelvin_cast/',
    color: 'hover-instagram',
  },
];

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formValid, setFormValid] = useState(false);
  const [formSubmitedd, setFormSubmitedd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormSubmitedd(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitedd(true);

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: { success?: boolean; error?: string } = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error);
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success(t.sonner.successfulMessage);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : t.sonner.errorMessage,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob w-150 h-150 bg-primary/10 -top-32 left-1/2 -translate-x-1/2" />
        <div className="decorative-blob w-100 h-100 bg-accent/10 bottom-0 right-0" />
      </div>

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.contact.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.contact.title}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold mb-6">
                {t.contact.formTitle}
              </h3>
              <AnimatePresence mode="wait">
                {!formValid && formSubmitedd && (
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-[#FEE2E2] px-3 py-4 text-[#7F1D1D] dark:text-[#FCA5A5] rounded-lg mb-4 flex gap-2 items-center dark:bg-[#2A1215] border border-[#EF4444] dark:border-[#E5484D]"
                  >
                    <BadgeX className="size-5 dark:text-[#E5484D]" />
                    <p>{t.contact.errorForm}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="subject"
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ background: 'var(--gradient-primary)' }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner /> {t.contact.spinnerButton}
                    </>
                  ) : (
                    <>
                      {t.contact.sendButton} <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t.contact.emailTitle}
                    </h4>
                    <a
                      href="mailto:hello@johndoe.dev"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kelvincedcas@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-accent to-pink-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t.contact.locationTitle}
                    </h4>
                    <p className="text-muted-foreground">
                      {t.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card rounded-2xl p-6 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-green-600">
                  {t.contact.available}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {t.contact.availableText}
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                {t.contact.scheduleCall}
                <ArrowUpRight className="w-4 h-4" />
              </a> */}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">{t.contact.connectWithMe}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.label}
                    href={social.url}
                    className={`w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-muted-foreground hover:text-white ${social.color} transition-all hover-lift`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/134_teYyJilSe3l-0YiTUZt-4y7ni_93h/view"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="text-xl">📄</span>
                </div>
                <div>
                  <p className="font-medium">{t.contact.downloadResume}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.contact.resumeSize}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
