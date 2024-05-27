import {Navbar} from "../../organisms/navbar.tsx";

export default function Legal() {
    return (
        <main className="min-h-screen text-base-100">
            <Navbar></Navbar>
            <div className="m-auto w-10/12">
                <h1 className="text-5xl">Mentions légales</h1>

                <div className="flex flex-col gap-y-10 mt-10">
                    <div>
                        <h2 className="text-3xl mb-5">1. Présentation du site</h2>
                        <p>En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                            l&apos;économie numérique, il est précisé aux utilisateurs du site freasbe.fr
                            l&apos;identité des
                            différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
                        <p>Propriétaire : Freasbe</p>
                        <p>Créateur : Freasbe</p>
                        <p>Responsable publication : Freasbe </p>
                        <p>Email de contact: frease.pro@gmail.com</p>
                    </div>

                    <div>
                        <h2 className="text-3xl mb-5">2. Hébergeur</h2>
                        <p>Hébergeur : Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789 USA</p>
                    </div>

                    <div>
                        <h2 className="text-3xl mb-5">3. Collecte de données personnelles</h2>
                        <p>
                            Conformément à la réglementation en vigueur en matière de protection des données à
                            caractère personnel, nous vous informons que les informations collectées font l&apos;objet
                            d&apos;un traitement informatisé destiné à l&apos;amélioration de nos services. Nous sommes
                            les
                            uniques destinataires de vos données.
                        </p>
                        <p>
                            Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée en 2004, vous
                            bénéficiez d&apos;un droit d&apos;accès et de rectification aux informations qui vous
                            concernent,
                            que vous pouvez exercer en vous adressant à freasbe.pro@gmail.com.
                        </p>
                        <p>
                            Aussi, vos données de navigation seront supprimés dans un délai de 1 an à compter de
                            l&apos;enregistrement
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl mb-5">4. Google analytics</h2>
                        <p>
                            Ce site utilise Google Analytics, un service d&apos;analyse de site internet fourni par
                            Google Inc. (&quot;Google&quot;). Google Analytics utilise des cookies, qui sont des
                            fichiers
                            texte placés sur votre ordinateur, pour aider le site internet à analyser l&apos;utilisation
                            du site par ses utilisateurs. Les données générées par les cookies concernant votre
                            utilisation du site (y compris votre adresse IP) sont transmises et stockées par Google
                            sur des serveurs situés aux États-Unis. Google utilisera ces informations dans le but
                            d&apos;évaluer votre utilisation du site, de compiler des rapports sur l&apos;activité du
                            site à
                            destination de son éditeur et de fournir d&apos;autres services relatifs à l&apos;activité
                            du site
                            et à l&apos;utilisation d&apos;Internet. Google est susceptible de communiquer ces données à
                            des
                            tiers en cas d&apos;obligation légale ou lorsque ces tiers traitent ces données pour le
                            compte de Google, y compris notamment l&apos;éditeur de ce site. Google ne recoupera pas
                            votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez désactiver
                            l&apos;utilisation de cookies en sélectionnant les paramètres appropriés de votre
                            navigateur.
                            En utilisant ce site internet, vous consentez expressément au traitement de vos données
                            nominatives par Google dans les conditions et pour les finalités décrites ci-dessus.
                        </p>

                    </div>
                </div>
            </div>
        </main>
    )
        ;
}
