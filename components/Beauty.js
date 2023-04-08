import Image from "next/image";
import Styles from "@/styles/Card.module.css";
import makeup from "/public/makeup.jpg";
import young from "/public/young-woman.png";

const responsive = { width: "100%", height: "auto" };

export default function Beauty() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Beauty/marques-de-maquillage-clean">
            <card className={Styles.card}>
              <Image
                src={makeup}
                alt="beautiful model"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    4 marques de maquillage clean pour les beautés naturelles
                  </em>
                </strong>
                <br></br>
                Découvrez 4 marques de maquillage propres et éthiques qui vont
                sublimer votre beauté naturelle sans compromettre la qualité ou
                la sécurité. Des produits innovants et respectueux de la peau et
                de l’environnement à essayer absolument!...&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Beauty/secrets-des-femmes-qui-restent-jeunes">
            <card className={Styles.card}>
              <Image
                src={young}
                alt="beautiful young woman"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Vieillir en beauté:<br></br>Les 7 secrets des femmes qui
                    restent jeunes
                  </em>
                </strong>
                <br></br>
                Découvrez les 7 habitudes puissantes des femmes qui vieillissent
                lentement et qui vous aideront à préserver votre santé, votre
                beauté et votre vitalité à tout âge....&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </a>
        </item>
      </group>
    </>
  );
}
