import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Cloud, Bot, Shield, Globe, Code, Settings, Lightbulb, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designs modernes et interfaces utilisateur exceptionnelles. Expérience utilisateur optimisée.",
    features: ["Prototyping", "User Research", "Design System"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure cloud scalable et déploiement automatisé. Performance et sécurité garanties.",
    features: ["AWS/Azure", "CI/CD", "Kubernetes"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "IA & Automation",
    description: "Intelligence artificielle et automatisation pour optimiser vos processus métier.",
    features: ["Chatbots", "ML Models", "RPA"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description: "Sites vitrines, e-commerce, blogs. Design responsive, sécurité SSL, hébergement.",
    features: ["E-commerce", "SEO", "Responsive"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Développement Logiciel",
    description: "Logiciels personnalisés : gestion, RH, stock. Applications internes ou en ligne.",
    features: ["Sur mesure", "Intégration", "API"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit de sécurité, pare-feux, antivirus, systèmes de sauvegarde.",
    features: ["Audit", "Protection", "Formation"],
    color: "from-red-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const ServicesPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Settings className="h-4 w-4" />
            Nos Services
          </span>
          <h2 className="heading-lg mb-4">
            Solutions Digitales{" "}
            <span className="text-gradient-primary">Complètes</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Des services sur mesure pour propulser votre entreprise à l'ère numérique
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Explorer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="hero-secondary" size="lg" asChild>
            <Link to="/services" className="group">
              Voir tous nos services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
