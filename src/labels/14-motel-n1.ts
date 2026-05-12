import { narration, newLabel, showImage, showWithFade, Text, TextStyle } from "@drincs/pixi-vn";

const scene14MotelN1 = newLabel("motel-n1", [
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
            stroke: { color: "#050046", width: 12, join: "round" },
            fontSize: 60,
            fontWeight: "lighter",
        });
        const text = new Text({
            text: t(`(Later at night...)`),
            style: skewStyle,
        });
        await showWithFade("bg", text);
        text.align = 0.5;
    },

    async () => {
        await showImage("bg", "img-14-motel-n1");

        narration.dialogue = `You pull into a dingy roadside motel called the "Americana Motel".`;
    },

    async () => {
        narration.dialogue = `It's nothing fancy, but it'll do - at least for one night.`;
    },
]);
export default scene14MotelN1;
