import Styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Bienetre() {
  return (
    <>
      <main className={Styles.main}>
        <item className={Styles.item}>
          <a href="/Bien-etre/ameliorer-votre-concentration">
            <card className={Styles.card}>
              <Image
                src="/woman.webp"
                alt="attractive woman"
                width={1536}
                height={1024}
                layout="responsive"
                priority
              />
              <p>
                <strong>
                  <em>
                    6 étapes pour améliorer votre concentration et votre
                    attention avec intention
                  </em>
                </strong>
                <br></br>
                Comment rester concentrée et attentive dans un monde où tout va
                vite ? Suivez ces 6 conseils pratiques pour développer votre
                focus et votre sérénité au quotidien....&nbsp;
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
