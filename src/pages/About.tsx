import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users, Target, Award, GraduationCap, Lightbulb, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder.jpg";
import techImage from "@/assets/tech-innovation.png";

const timeline = [
  {
    year: "2020-2021",
    title: "Les Germes d'une Passion",
    description: "Tout a commencé après l'obtention du BAC. Entouré de mentors exceptionnels - des cadres expérimentés, des docteurs en informatique et des entrepreneurs aguerris - 8 mois intenses à peaufiner le projet.",
    quote: "Le digital est le langage du futur, et tu dois l'écrire dès aujourd'hui.",
    icon: GraduationCap,
  },
  {
    year: "2021-2023",
    title: "Lancement Officiel & Premiers Défis",
    description: "Avec une équipe de 5 passionnés, lancement officiel de FUN HIGH DIGITAL. Premiers chantiers réalisés avec succès.",
    stats: [
      { value: "10", label: "PME digitalisées" },
      { value: "3", label: "Contrats bancaires" },
      { value: "50", label: "Particuliers formés" },
    ],
    icon: Rocket,
  },
  {
    year: "2023-Présent",
    title: "Vision & Ambitions",
    description: "Aujourd'hui, FUN HIGH DIGITAL vise plus haut avec des objectifs ambitieux pour l'avenir du numérique au Bénin.",
    goals: [
      { title: "Partenariats", desc: "Collaborer avec des universités" },
      { title: "Lab d'innovation", desc: "Incuber des startups tech au Bénin" },
      { title: "Impact social", desc: "Digitaliser 100 petites entreprises d'ici 2025" },
    ],
    icon: Target,
  },
];

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Une équipe qualifiée et des solutions éprouvées pour des résultats à la hauteur de vos attentes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Confidentialité",
    description: "Protection absolue de vos données et respect strict des clauses de non-divulgation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Résultats Mesurables",
    description: "Des indicateurs clairs pour évaluer l'impact de nos solutions sur votre productivité.",
    color: "from-orange-500 to-red-500",
  },
];

const reasons = [
  { icon: Lightbulb, title: "Persévérance", desc: "Même entre les cours et les examens" },
  { icon: Users, title: "Mentorat", desc: "Guidage par des experts bienveillants" },
  { icon: Building, title: "Curiosité", desc: "Étudiant ET entrepreneur simultanément" },
];

const About = () => {
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
              <Users className="h-4 w-4" />
              Notre Histoire
            </span>
            <h1 className="heading-xl mb-6">
              Notre <span className="text-gradient-primary">Histoire</span>,{" "}
              Notre <span className="text-gradient-accent">Passion</span>,{" "}
              Votre <span className="text-gradient-primary">Succès</span>
            </h1>
            <p className="body-lg">
              Découvrez comment une vision née d'une passion pour le numérique est devenue une entreprise au service de la transformation digitale du Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow z-10">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 pl-24 lg:pl-0 ${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20"}`}>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4 justify-start lg:justify-end">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-primary font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    {item.quote && (
                      <blockquote className="italic text-primary border-l-2 border-primary pl-4 mt-4">
                        "{item.quote}"
                      </blockquote>
                    )}

                    {item.stats && (
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {item.stats.map((stat) => (
                          <div key={stat.label} className="text-center lg:text-right">
                            <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.goals && (
                      <div className="space-y-3 mt-4">
                        {item.goals.map((goal) => (
                          <div key={goal.title} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground text-sm">{goal.title}</div>
                              <div className="text-xs text-muted-foreground">{goal.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-navy-medium/30 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Jules SOGADJI - Fondateur"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Pourquoi Cette Histoire{" "}
                <span className="text-gradient-accent">Compte</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Elle prouve qu'avec persévérance, mentorat et curiosité, on peut transformer une idée en empire technologique.
              </p>

              <div className="grid gap-4 mb-8">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{reason.title}</div>
                      <div className="text-sm text-muted-foreground">{reason.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <blockquote className="glass-card rounded-xl p-6">
                <p className="text-lg italic text-foreground mb-4">
                  "Le code que nous écrivons aujourd'hui bâtit le Bénin de demain."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Jules SOGADJI</div>
                    <div className="text-sm text-muted-foreground">Fondateur & CEO</div>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Nos Valeurs
            </span>
            <h2 className="heading-lg mb-4">
              Ce qui nous{" "}
              <span className="text-gradient-primary">Définit</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
              Prêt à écrire votre{" "}
              <span className="text-gradient-accent">histoire digitale</span> ?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui nous font confiance pour leur transformation numérique.
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

export default About;
