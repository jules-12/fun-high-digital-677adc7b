import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder.jpg";

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Une équipe qualifiée et des solutions éprouvées",
  },
  {
    icon: Target,
    title: "Résultats Mesurables",
    description: "Des indicateurs clairs pour évaluer l'impact",
  },
  {
    icon: Users,
    title: "Confidentialité",
    description: "Protection absolue de vos données",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Technologies de pointe et solutions créatives",
  },
];

export const AboutPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-medium/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Jules SOGADJI - Fondateur"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 left-12 glass-card rounded-xl p-5"
              >
                <p className="text-sm italic text-foreground mb-3">
                  "Le code que nous écrivons aujourd'hui bâtit le Bénin de demain."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    JS
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Jules SOGADJI</div>
                    <div className="text-xs text-muted-foreground">Fondateur & CEO</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-2xl blur-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              À propos de nous
            </span>

            <h2 className="heading-lg mb-6">
              Notre{" "}
              <span className="text-gradient-accent">Histoire</span>,{" "}
              Notre{" "}
              <span className="text-gradient-primary">Passion</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Lancé en 2023 avec une équipe de 5 passionnés, <strong className="text-foreground">FUN HIGH DIGITAL</strong> est né d'une vision : démocratiser l'excellence digitale au Bénin.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, nous avons accompagné plus de 15 clients, digitalisé 10 PME, et formé plus de 50 particuliers aux outils numériques.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{value.title}</div>
                    <div className="text-xs text-muted-foreground">{value.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="group">
                Découvrir notre histoire
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
