import { narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene03PolaroidCloseup from "./03-polaroid-closeup";

const scene02Polaroid = newLabel("polaroid", [
    async () => {
        await showImage("bg", "img-02-polaroid");

        narration.dialogue = `... You decided to bring your old Polaroid camera with you.`;
    },

    async () => {
        narration.dialogue = `It's been years since you last used it.`;
    },

    async () => {
        narration.dialogue = `Until you took it out, it was just sitting around gathering dust - like all the other things you've accumulated for your immerable hobbies.`;
    },

    async () => {
        narration.dialogue = `You don't really know why you felt the need to bring the camera along but, in this moment, you're drawn to it.`;
    },

    async (props) => await narration.jump(scene03PolaroidCloseup, props),
]);
export default scene02Polaroid;
