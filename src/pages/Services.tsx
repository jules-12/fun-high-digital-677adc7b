import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Palette, Cloud, Bot, Shield, Globe, Code, 
  Settings, Lightbulb, Monitor, Wrench, Server, Database,
  CheckCircle, ChevronRight, Laptop, HardDrive, Wifi
} from "lucide-react";
import { Button } from "@/components/ui/button";
import techImage from "@/assets/tech-innovation.png";
import supportImage from "@/assets/team-support.jpg";

const mainServices = [
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Designs modernes et interfaces utilisateur exceptionnelles. Expérience utilisateur optimisée pour maximiser l'engagement.",
    features: [
      "Prototyping & Wireframes",
      "User Research & Testing",
      "Design System complet",
      "Responsive Design",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure cloud scalable et déploiement automatisé. Performance et sécurité garanties pour votre croissance.",
    features: [
      "AWS / Azure / GCP",
      "CI/CD Pipelines",
      "Kubernetes & Docker",
      "Monitoring 24/7",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ia",
    icon: Bot,
    title: "IA & Automation",
    description: "Intelligence artificielle et automatisation pour optimiser vos processus métier et gagner en productivité.",
    features: [
      "Chatbots intelligents",
      "Machine Learning Models",
      "RPA - Robotic Process Automation",
      "Analyse prédictive",
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "web",
    icon: Globe,
    title: "Création de Sites Web",
    description: "Sites vitrines, e-commerce, blogs avec design responsive, sécurité SSL et hébergement inclus.",
    features: [
      "Sites vitrines modernes",
      "E-commerce complet",
      "SEO optimisé",
      "Hébergement sécurisé",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "software",
    icon: Code,
    title: "Développement Logiciel",
    description: "Logiciels personnalisés sur mesure : gestion, RH, stock. Applications internes ou en ligne.",
    features: [
      "Applications sur mesure",
      "Logiciels de gestion",
      "Intégration API",
      "Solutions ERP/CRM",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit de sécurité des réseaux et postes. Pare-feux, antivirus, systèmes de sauvegarde.",
    features: [
      "Audit de sécurité complet",
      "Protection pare-feu",
      "Sauvegarde automatisée",
      "Formation du personnel",
    ],
    color: "from-red-500 to-pink-500",
  },
];

const additionalServices = [
  {
    icon: Laptop,
    title: "Vente de Matériel Informatique",
    items: [
      "Ordinateurs portables et de bureau (neufs et reconditionnés)",
      "Imprimantes, onduleurs, routeurs, accessoires",
      "Livraison et installation sur site",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance Professionnelle",
    items: [
      "Contrats mensuels ou annuels pour entreprises",
      "Maintenance préventive et curative",
      "Dépannage rapide, assistance technique 6j/7",
    ],
  },
  {
    icon: Lightbulb,
    title: "Conseil Digital",
    items: [
      "Évaluation des besoins numériques",
      "Propositions de solutions adaptées",
      "Accompagnement vers la digitalisation",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Settings className="h-4 w-4" />
              Nos Solutions Digitales
            </span>
            <h1 className="heading-xl mb-6">
              Des services sur mesure pour{" "}
              <span className="text-gradient-primary">propulser</span> votre entreprise
            </h1>
            <p className="body-lg">
              Solutions digitales complètes adaptées aux entreprises, institutions et particuliers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#services">Découvrir nos services</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="section-padding relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Demander un devis
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-navy-medium/30 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              <Monitor className="h-4 w-4" />
              Offres Complètes
            </span>
            <h2 className="heading-lg mb-4">
              Nos{" "}
              <span className="text-gradient-accent">Offres</span>{" "}
              Complémentaires
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Services adaptés aux entreprises, institutions et particuliers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-6 hover:gap-3 transition-all"
                >
                  Nous contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Une équipe{" "}
                <span className="text-gradient-primary">dédiée</span>{" "}
                à votre succès
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre équipe d'experts vous accompagne à chaque étape de votre transformation digitale, de l'analyse initiale jusqu'au suivi post-déploiement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "6j/7", label: "Support disponible" },
                  { value: "24h", label: "Temps de réponse" },
                  { value: "100%", label: "Satisfaction" },
                  { value: "3+", label: "Ans d'expérience" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-muted/30">
                    <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={supportImage}
                  alt="Équipe FUN HIGH DIGITAL"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Prêt à transformer votre{" "}
              <span className="text-gradient-accent">entreprise</span> ?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Demander un devis
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/methodology">Notre méthodologie</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
