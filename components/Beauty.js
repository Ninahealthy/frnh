import Image from "next/image";
import Styles from "@/styles/Card.module.css";

export default function Beauty() {
  return (
    <>
      <main className={Styles.main}>
        <item className={Styles.item}>
          <a href="/Beauty/marques-de-maquillage-clean">
            <card className={Styles.card}>
              <Image
                src="/beautiful_model.webp"
                alt="beautiful_model"
                width={1024}
                height={1024}
                layout="responsive"
                priority
              />
              <p>
                <strong>
                  <em>
                    4 marques de maquillage clean pour les beautés naturelles{" "}
                  </em>
                </strong>
                <br></br>
                Découvrez 4 marques de maquillage propres et éthiques qui vont
                sublimer votre beauté naturelle sans compromettre la qualité ou
                la sécurité. Des produits innovants et respectueux de la peau et
                de l’environnement à essayer absolument!...&nbsp;
                <em>Lire plus</em>
                <br />
              </p>
            </card>
          </a>
        </item>
      </main>
    </>
  );
}
