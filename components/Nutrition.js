import Styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Nutrition() {
  return (
    <>
      <main className={Styles.main}>
        <item className={Styles.item}>
          <a href="/Nutrition/flocon-d'avoine-au-four-healthy">
            <card className={Styles.card}>
              <Image
                src="/flocons-d'avoine-cuits-au-four.webp"
                alt="flocons d'avoine cuits au four"
                width={1024}
                height={1024}
                layout="responsive"
                priority
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
                src="/cookies.webp"
                alt="cookies"
                width={1024}
                height={1024}
                layout="responsive"
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
