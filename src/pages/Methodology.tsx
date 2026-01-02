import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Search, FileText, Rocket, 
  CheckCircle, Users, Clock, Target, Award, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse des Besoins",
    description: "Évaluation approfondie de vos objectifs et contraintes pour proposer la solution la plus adaptée à votre contexte.",
    details: [
      "Entretien découverte gratuit",
      "Audit de l'existant",
      "Identification des opportunités",
      "Définition des objectifs mesurables",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposition Technique",
    description: "Élaboration d'une solution détaillée avec planning et budget transparent pour une prise de décision éclairée.",
    details: [
      "Spécifications techniques détaillées",
      "Planning de réalisation",
      "Devis transparent et détaillé",
      "Validation avant démarrage",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Mise en Œuvre & Suivi",
    description: "Développement agile avec points réguliers et livraisons itératives pour un résultat conforme à vos attentes.",
    details: [
      "Développement itératif",
      "Points d'avancement réguliers",
      "Tests et validation continue",
      "Formation et documentation",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Une équipe qualifiée et des solutions éprouvées pour des résultats à la hauteur de vos attentes.",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "Protection absolue de vos données et respect strict des clauses de non-divulgation.",
  },
  {
    icon: Target,
    title: "Résultats Mesurables",
    description: "Des indicateurs clairs pour évaluer l'impact de nos solutions sur votre productivité.",
  },
];

const stats = [
  { value: "100%", label: "Projets livrés à temps" },
  { value: "15+", label: "Clients satisfaits" },
  { value: "50+", label: "Projets réalisés" },
  { value: "6j/7", label: "Support disponible" },
];

const Methodology = () => {
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Notre Méthodologie
            </span>
            <h1 className="heading-xl mb-6">
              Un processus{" "}
              <span className="text-gradient-primary">éprouvé</span>{" "}
              pour des{" "}
              <span className="text-gradient-accent">résultats optimaux</span>
            </h1>
            <p className="body-lg">
              Notre approche structurée garantit la réussite de chaque projet, de l'analyse initiale jusqu'à la livraison finale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-gradient-primary opacity-50">{step.number}</span>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="heading-md mb-4">{step.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className={`glass-card rounded-2xl p-8 relative overflow-hidden`}>
                      {/* Decorative Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                      
                      {/* Icon Grid */}
                      <div className="relative grid grid-cols-2 gap-4">
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-xl bg-muted/50 backdrop-blur-sm"
                          >
                            <CheckCircle className="h-6 w-6 text-primary mb-2" />
                            <p className="text-sm text-foreground font-medium">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${step.color} opacity-20 rounded-2xl blur-2xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-medium/30 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Approche sur mesure
            </span>
            <h2 className="heading-lg mb-4">
              Nos{" "}
              <span className="text-gradient-accent">Valeurs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
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
              Prêt à démarrer votre{" "}
              <span className="text-gradient-accent">projet</span> ?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Notre équipe est prête à vous accompagner dans votre transformation digitale.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Démarrer maintenant
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Methodology;
