import Styles from "@/styles/Card.module.css";
import Image from "next/image";
import woman from "/public/beautiful_model.webp";
import jardin from "public/idees-jardin.jpg";

const responsive = { width: "100%", height: "auto" };

export default function Bienetre() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Bien-etre/idees-pour-amenager-un-petit-jardin">
            <card className={Styles.card}>
              <Image
                src={jardin}
                alt="idées petit jardin"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    7 astuces pour aménager un petit jardin avec une terrasse
                    mobile
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/ameliorer-votre-concentration">
            <card className={Styles.card}>
              <Image
                src={woman}
                alt="attractive woman"
                style={responsive}
                priority
                sizes="100vw"
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
