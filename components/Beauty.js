import Image from "next/image";
import Styles from "@/styles/Card.module.css";
import makeup from "/public/makeup.jpg";
import young from "/public/young-woman.png";
import curly from "public/curly-hair.jpg";
import shampo from "public/shampoo.jpg";

const responsive = { width: "100%", height: "auto" };

export default function Beauty() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Beauty/meilleurs-shampoings-clarifiants">
            <card className={Styles.card}>
              <Image
                src={shampo}
                alt="curly-hair"
                style={responsive}
                sizes="100vw"
                priority
              />
              <p>
                <strong>
                  <em>
                    meilleurs shampoings clarifiants qui vont débarrasser vos
                    cheveux des impuretés
                  </em>
                </strong>

                <br />
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Beauty/meilleurs-produits-pour-cheveux-boucles">
            <card className={Styles.card}>
              <Image
                src={curly}
                alt="curly-hair"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Comment prendre soin de ses cheveux bouclés avec un petit
                    budget ?
                  </em>
                </strong>

                <br />
              </p>
            </card>
          </a>
        </item>
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
                Découvrez 4 marques de maquillage propres et éthiques qui
                ...&nbsp;
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
                lentement et ....&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </a>
        </item>
      </group>
      <group className={Styles.group}></group>
    </>
  );
}
