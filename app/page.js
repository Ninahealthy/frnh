import Beauty from "@/components/Beauty";
import Bienetre from "@/components/Bienetre";
import Fitness from "@/components/Fitness";
import Nutrition from "@/components/Cuisine";

export const metadata = {
  title: "Home",
  description:
    "Découvrez comment adopter un mode de vie sain pour améliorer votre santé et votre bien-être. dans mon blog Je vous propose des conseils pratiques sur la nutrition, l'exercice physique, la gestion du stress et plus encore pour vous aider à atteindre vos objectifs de santé. Commencez votre voyage vers une vie plus saine dès aujourd'hui !",
};
export default function Home() {
  return (
    <>
      <actualites>
        <Beauty />
        <Bienetre />
        <Nutrition />
        <Fitness />
      </actualites>
    </>
  );
}
