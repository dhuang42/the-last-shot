import { narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene08Diner from "./08-diner";

const scene05RoadN1 = newLabel("road-n1", [
    async () => {
        await showImage("bg", "road");

        narration.dialogue = `You choose the northern path and hit the road.`;
    },

    async (props) => await narration.jump(scene08Diner, props),
]);
export default scene05RoadN1;
