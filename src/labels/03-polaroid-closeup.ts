import { narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene04Map01 from "./04-map-01";

const scene03PolaroidCloseup = newLabel("polaroid-closeup", [
    async () => {
        await showImage("bg", "img-03-polaroid-closeup");

        narration.dialogue = `You turn it on and check the film counter.`;
    },

    async () => {
        narration.dialogue = `There's only 3 shots left. You decide you'll make them count.`;
    },

    async (props) => await narration.jump(scene04Map01, props),
]);
export default scene03PolaroidCloseup;
