import Styles from "@/styles/Card.module.css";
import Image from "next/image";

import tracker from "public/tracker-de-fitness.jpg";
import running from "public/running-shoes-women.jpg";

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
        <item className={Styles.item}>
          <a href="/Fitness/meilleures-chaussures-de-course-pour-le-confort-et-le-soutien">
            <card className={Styles.card}>
              <Image
                src={running}
                alt="chaussures de course"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    5 Chaussures De Course Qui Allient Confort Et Stabilité En
                    2023
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
