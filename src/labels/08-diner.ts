import { narration, newChoiceOption, newLabel, showImage, showWithFade, Text, TextStyle } from "@drincs/pixi-vn";
import scene11DinerPhoto from "./11-diner-photo";
import scene14MotelN1 from "./14-motel-n1";

const scene08Diner = newLabel("diner", [
    async ({ t }) => {
        narration.dialogue = undefined;
        const skewStyle = new TextStyle({
            fontFamily: "Arial",
            dropShadow: {
                alpha: 0.8,
                angle: 2.1,
                blur: 4,
                color: "0x111111",
                distance: 10,
            },
            fill: "#ffffff",
            stroke: { color: "#ff8800", width: 12, join: "round" },
            fontSize: 60,
            fontWeight: "lighter",
        });
        const text = new Text({
            text: t(`(Down the road...)`),
            style: skewStyle,
        });
        await showWithFade("bg", text);
        text.align = 0.5;
    },

    async () => {
        await showImage("bg", "img-08-diner");

        narration.dialogue = `As the sun starts to set, you stop by a roadside diner to grab a bite.`;
    },

    async () => {
        narration.dialogue = `Your mind wanders...`;
    },

    async () => {
        narration.dialogue = `You realize you don't have many memories of eating out with your parents. They always preferred to cook at home and never seemed very interested in trying new dishes.`;
    },

    async () => {
        narration.dialogue = `On the other hand, you love to eat at restaurants of kinds. Maybe, to you, that was some small form of rebellion.`;
    },

    async () => {
        narration.dialogue = `...`;
        narration.choices = [
            newChoiceOption("Take a photo (3 shots left)", scene11DinerPhoto, {}, { type: "jump" }),
            newChoiceOption("Leave", scene14MotelN1, {}, { type: "jump" }),
        ];
    },
]);
export default scene08Diner;
