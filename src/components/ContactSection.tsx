import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { contactInfo, personalInfo, socialLinks } from "@/data/personalData";
import { scrollToSection } from "@/lib/utils";

const inquiryTopics = [
  "Job / Full-Time Opportunity",
  "Project Collaboration",
  "Backend / Cloud & DevOps Inquiry",
  "General Hello",
];

function buildMailtoHref(data: {
  name: string;
  email: string;
  topic: string;
  message: string;
}) {
  const subject = `[Portfolio] ${data.topic} — ${data.name || "Visitor"}`;
  const bodyLines = [
    "Hi Chetan,",
    "",
    "You have received a new message from your portfolio website:",
    "",
    "----------------------------------------",
    `Name   : ${data.name || "N/A"}`,
    `Email  : ${data.email || "N/A"}`,
    `Topic  : ${data.topic}`,
    "----------------------------------------",
    "",
    "Message:",
    data.message || "(No message entered)",
    "",
    "----------------------------------------",
    "Sent via Portfolio Contact Form",
  ];

  return `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: inquiryTopics[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      toast.success(`Copied ${personalInfo.email} to clipboard`);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      toast.error("Could not copy email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFallbackMailto(null);

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${personalInfo.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Topic: formData.topic,
            Message: formData.message,
            "Submitted At": submittedAt,
            _subject: `[Portfolio Contact] ${formData.topic} — from ${formData.name}`,
            _replyto: formData.email,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && (data.success === "true" || data.success === true)) {
        toast.success(
          `Message sent directly to ${personalInfo.email}! Thank you for reaching out.`
        );
        setFormData({
          name: "",
          email: "",
          topic: inquiryTopics[0],
          message: "",
        });
      } else {
        const mailtoUrl = buildMailtoHref(formData);
        setFallbackMailto(mailtoUrl);
        toast.info(
          "Direct mail service requires activation or is unavailable here. Use the 'Open in Email App' button below to send directly."
        );
      }
    } catch {
      const mailtoUrl = buildMailtoHref(formData);
      setFallbackMailto(mailtoUrl);
      toast.info(
        "Could not reach mail relay. Click 'Open in Email App' to send directly to chetan17302@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMailApp = () => {
    const mailtoUrl = buildMailtoHref(formData);
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-secondary/25 scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <MessageSquare className="w-3.5 h-3.5" />
            Connect
          </span>
          <h2 className="section-heading mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Have a role, cloud/backend project, or collaboration in mind? Send a
            formatted message straight to{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary hover:underline font-mono"
            >
              {personalInfo.email}
            </a>
            .
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="tech-surface p-6">
              <h3 className="text-xl font-bold font-display mb-2">
                Let&apos;s Build Something Reliable
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to discussing full-stack Java/Spring Boot engineering, AWS
                cloud &amp; automation workflows, or exciting software
                opportunities.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactInfo.map((info) => {
                const isHashLink = info.href.startsWith("#");
                const isClickable = Boolean(info.href);

                return (
                  <div
                    key={info.label}
                    className="tech-surface p-4 flex items-center justify-between gap-3 group"
                  >
                    <a
                      href={info.href || undefined}
                      onClick={(e) => {
                        if (!isClickable) {
                          e.preventDefault();
                          return;
                        }
                        if (isHashLink) {
                          e.preventDefault();
                          scrollToSection(info.href);
                        }
                      }}
                      className={`flex items-center gap-4 flex-1 min-w-0 ${
                        isClickable ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="p-3 rounded-xl gradient-bg flex-shrink-0 shadow-md shadow-primary/15">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>

                    {info.copyable && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy email address"
                        aria-label="Copy email address"
                        className="p-2 rounded-lg bg-secondary/80 border border-border/60 hover:border-primary/50 hover:text-primary transition-colors flex-shrink-0"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="tech-surface p-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Social Profiles
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/70 border border-border/60 hover:border-primary/50 hover:text-primary text-sm font-medium transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="tech-surface p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h3 className="text-lg font-bold font-display">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    To: {personalInfo.email}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Formatted Delivery
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Subject / Topic
                </label>
                <select
                  id="topic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                >
                  {inquiryTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                  placeholder="Share details about the opportunity, project, or question..."
                  required
                />
              </div>

              {fallbackMailto && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs text-foreground/90">
                    Prefer sending directly from your email client with the
                    message pre-formatted?
                  </p>
                  <a
                    href={fallbackMailto}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg gradient-bg text-primary-foreground text-xs font-semibold flex-shrink-0"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Open Email Client
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="flex-1 py-3.5 px-6 gradient-bg text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <button
                  type="button"
                  onClick={handleOpenMailApp}
                  className="py-3.5 px-5 rounded-xl bg-secondary/80 border border-border hover:border-primary/50 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  title={`Open default mail app addressed to ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email App
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
