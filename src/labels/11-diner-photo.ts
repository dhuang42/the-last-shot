import { moveIn, moveOut, narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene14MotelN1 from "./14-motel-n1";

const scene11DinerPhoto = newLabel("diner-photo", [
    async () => {
        await showImage("bg", "img-11-diner-photo");

        await moveIn(
            "diner-polaroid",
            {
                value: "p-11-diner",
                options: { xAlign: 0.5, yAlign: 0.25 },
            },
            { direction: "down", ease: "circInOut", type: "spring" },
        );

        narration.dialogue = `Before you leave, you decide to take a photo of the sign.`;
    },

    async () => {
        moveOut("diner-polaroid", { direction: "right", duration: 0.5, delay: 0.05 });
        narration.dialogue = `Time to go.`;
    },

    async (props) => await narration.jump(scene14MotelN1, props),
]);
export default scene11DinerPhoto;
