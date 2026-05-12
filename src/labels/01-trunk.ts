import { narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene02Polaroid from "./02-polaroid";

const scene01Trunk = newLabel("trunk", [
    async () => {
        await showImage("bg", "img-01-trunk");

        narration.dialogue = `You figure you won't be staying long, so you pack light.`;
    },

    async () => {
        narration.dialogue = `Just a few things in your bag and, for whatever reason...`;
    },

    async (props) => await narration.jump(scene02Polaroid, props),
]);
export default scene01Trunk;
