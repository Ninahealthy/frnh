import Styles from "@/styles/Card.module.css";
import Image from "next/image";

import tracker from "public/tracker-de-fitness.jpg";

const responsive = { width: "100%", height: "auto" };

export default function Fitness() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Fitness/meilleurs-trackers-de-fitness-pour-les-femmes">
            <card className={Styles.card}>
              <Image
                src={tracker}
                alt="terrasse extérieur"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Les Meilleurs Trackers De Fitness Pour Les Femmes en 2023
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
      </group>
    </>
  );
}
