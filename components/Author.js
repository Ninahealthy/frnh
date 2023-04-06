import Image from "next/image";

export default function Author() {
  return (
    <>
      <author>
        <strong>About Author</strong>

        {/*<p>
        Hi! I’m Nina Bernrad, the face behind NinaHealthy.com ! I share easy,
        approachable plant-based recipes that are not only healthy but taste
        amazing. Follow me on Instagram, TikTok, and Facebook for free vegan
        meal ideas, recipes and healthygirl tips.
  </p>*/}

        <p>
          <Image src="/nina.webp" alt="Nina Bernard" width={100} height={100} />
          <br></br>
          Salut! Je suis Nina Bernard, le visage derrière NinaHealthy.com ! Je
          partage des recettes à base de plantes faciles et accessibles qui sont
          non seulement Healthy mais qui ont également un goût incroyable.
          <br></br>
          Suivez-moi sur pinterest pour des idées de repas végétaliens gratuits,
          des recettes et des astuces pour Healthy-girl.
        </p>
      </author>
    </>
  );
}
