import Styles from "@/styles/Card.module.css";
import Image from "next/image";
import flocon from "/public//flocons-d'avoine-cuits-au-four.webp";
import cookie from "/public/cookies.webp";

const responsive = { width: "100%", height: "auto" };

export default function Nutrition() {
  return (
    <>
      <main className={Styles.main}>
        <item className={Styles.item}>
          <a href="/Nutrition/flocon-avoine-au-four-healthy">
            <card className={Styles.card}>
              <Image
                src={flocon}
                alt="flocons d'avoine cuits au four"
                priority
                sizes="100vw"
                style={responsive}
              />
              <p>
                <strong>
                  <em>flocons d'voine cuits au four à la banane </em>
                </strong>
                <br></br>
                Voici une recette idéale pour un petit déjeuner healthy, facile
                à préparer...&nbsp;
                <em>Lire plus</em>
                <br />
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Nutrition/cookies-healthy">
            <card className={Styles.card}>
              <Image
                src={cookie}
                alt="cookies"
                style={responsive}
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>Les meilleures recettes de cookies</em>
                </strong>
                <br></br>
                Les cookies sont des petits gâteaux moelleux et délicieux qui
                font le bonheur de tout le monde. Que vous soyez un ex...&nbsp;
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
