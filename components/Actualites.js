import Nutrition from "./Nutrition";
import Fitness from "./Fitness";
import LatestBlogpost from "./LatestBlogpost";
import Beauty from "./Beauty";

export default function Actualites() {
  return (
    <>
      <actualites>
        <h1>Latest </h1>
        <LatestBlogpost />
        <h1>Nutrition</h1>
        <Nutrition />
        <h1>Fitness</h1>
        <Fitness />
        <Beauty />
      </actualites>
    </>
  );
}
