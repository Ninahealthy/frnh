import Nutrition from "@/components/Nutrition";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alimentation Healthy</title>
        <meta name="description" content="" />
      </Head>
      {/*Nutrition
Food shouldn't just taste good—it should give your body the nutrients it needs to fuel you through the day. Learn more about different food groups and the health benefits they offer, as well as how to work these nutrient-packed foods into your diet.*/}

      {/*make search box optimized for prodcut dearch*/}

      <Nutrition />
    </>
  );
}
