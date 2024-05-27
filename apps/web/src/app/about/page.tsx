import Image from 'next/image'
import {Cta, Card, CardWithContainer} from "@freasbe/ui/components";
import type {JSX} from "react";
import installerImg from "../../assets/img/installer.png";
import landscapeHero from "../../assets/img/landscape-hero.webp";
import {Section} from "../../organisms/section.tsx";
import Pros from "../../organisms/pros.tsx";
import FormSection from "../../organisms/form.tsx";
import Footer from "../../organisms/footer.tsx";

export default function Page(): JSX.Element {

    const issues = [
        {
            label: "Faciliter les paiements et la facturation"
        },
        {
            label: "Ameliorer le suivi du processus d'installation client"
        },
        {
            label: "Trouver un partenaire fiable avec qui collaborer"
        },
        {
            label: "Mettre la contractualisation au coeur de votre processus"
        },
        {
            label: "Augmenter votre visibilité auprès d'éventuels partenaires"
        },
    ]

    const contentRegies = [
        {
            label: "Aide à la mise en relation entre vous et les installateurs de la plateforme",
            description: "Un annuaire dédié à votre recherche de projets parmi les meilleurs installateurs disponibles"
        },
        {
            label: "Des paiements gelés et virer entre toutes les parties prenantes",
            description: "Nous prenons en compte les commissions prises conformément à votre contractualisation"
        },
        {
            label: "Création d’appel d’offres directement sur la plateforme",
            description: "Les installateurs peuvent aisément collaborer avec vous sur vos projets selon vos critères"
        },
        {
            label: "Facilitation de la collaboration entre régies et installateurs",
            description: "La plateforme met en avant le suivi des différentes étapes de vos projets"
        },
        {
            label: "Un support client dédié",
            description: "Notre équipe est à votre disposition pour répondre à toutes vos questions"
        }
    ]

    const contentInstallers = [
        {
            label: "Gestion des termes de la contractualisation",
        },
        {
            label: "Gestion des facturations et de votre comptabilité",
        },
        {
            label: "Mise en avant de votre expertiste auprès des régies partenaires"
        },
        {
            label: "Accès aux projets les plus pertinents pour vous",
        },
        {
            label: 'Un système de référencement dédié à améliorer votre visibilité auprès de vos éventuels partenaires'
        }
    ]


    return (
        <>

            <div className="hero min-h-screen">
                <Image className="hero-overlay img-slide-from-top opacity-90 object-right object-cover"
                       loading={"eager"} src={landscapeHero.src}
                       alt="hero" width={1920} height={1080}/>

                <div className="hero-content text-center text-neutral-content p-0">
                    <div className="max-w-md text-white flex flex-col gap-y-3 lg:gap-y-5 fade-in">
                        <h1 className="text-5xl p-3 lg:p-0 lg:text-6xl font-bold uppercase flex flex-col gap-y-2 ">La
                            plateforme <span
                                className="paint">ultime</span></h1>
                        <p className="text-lg">Nous vous accompagnons dans vos projets de transition énergétique</p>
                        <div className="flex justify-center">
                            <Cta content="En savoir plus"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="m-auto w-4/5 lg:w-full pt-2" id="issues">
                <div className="lg:w-3/5 m-auto">
                    <div className="flex flex-col m-auto py-10 my-10 lg:flex-row lg:justify-center gap-10">
                        <h2 className="text-4xl lg:text-5xl lg:w-3/5 text-base-100 font-semibold lg:mr-8">
                            Nous connaissons vos <span className="text-primary font-semibold">problématiques</span>
                        </h2>

                        <div className="w-full lg:w-2/5 flex flex-col gap-y-3">
                            {issues.map((issue, index) => (

                                <Card cardType="number" key={index} numberCard={(index + 1).toString()}
                                      label={issue.label}/>
                            ))}
                        </div>
                    </div>


                    <Section
                        id="administer"
                        subtitle="Pour les régies" title="Freasbe est la solution"
                        wordsToHighlight={1}
                        description="Facilitez votre flux de travail avec vos partenaires jusqu'au paiement grâce à nos solutions spécialisées.">
                        <div className="w-full flex flex-wrap gap-x-10 gap-y-5 mb-5">
                            {contentRegies.map((content, index) => (
                                <CardWithContainer cardType="icon" key={index} numberCard={(index + 1).toString()}
                                                   label={content.label} description={content.description}/>
                            ))}
                        </div>
                    </Section>

                    <Section
                        description="Trouvez des projets de qualité au travers d'un panel de projets variés proposées par les régies partenaires."
                        id="installers"
                        subtitle="Pour les installateurs"
                        title="Accédez aux projets des meilleures régies"
                        wordsToHighlight={2}
                    >
                        <div className="w-full flex flex-wrap gap-x-10 gap-y-5 mb-5" id="installers">
                            {
                                contentInstallers.map((content, index) => (
                                    <CardWithContainer cardType="icon" fullWidth key={index}
                                                       label={content.label} numberCard={(index + 1).toString()}/>
                                ))
                            }
                        </div>

                    </Section>

                </div>

                <div className="my-12 pt-2" id="about-freasbe">
                    <Pros ctaContent="Souscrire"
                          description="Chez Freasbe, notre objectif est de simplifier vos opérations quotidiennes, conscient que le métier de nos clients est déjà bien assez complexes. Nous nous engageons à accompagner  vos projets comme si ils étaient les nôtres.
En somme, nous vous aidons à construire l'énergie de demain, sans vous préoccuper des défis d’aujourd’hui."
                          img={installerImg.src}
                          title="Exprimez votre expertise là où vous brillez le plus"
                          wordToHighlight="vous"/>
                </div>

            </div>
            <FormSection/>
            <Footer/>
        </>
    );
}
