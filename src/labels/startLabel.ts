import { Assets, narration, newLabel, showImage } from "@drincs/pixi-vn";
import scene01Trunk from "./01-trunk";

const startLabel = newLabel(
    "start",
    [
        async () => {
            await showImage("bg", "img-00-start");

            narration.dialogue = `You were woken up last night by a sudden phone call. It was your mom.`;
        },

        async () => {
            narration.dialogue = `She never calls, but this was urgent.`;
        },

        async () => {
            narration.dialogue = `It turns out your dad's illness is terminal, and he only has about a week left to live.`;
        },

        async () => {
            narration.dialogue = `Maybe less.`;
        },

        async () => {
            narration.dialogue = `This morning, you decided to drop everything and drive back home to see him one last time.`;
        },

        async () => {
            narration.dialogue = `After packing for the trip, you leave your apartment.`;
        },

        async (props) => await narration.jump(scene01Trunk, props),
    ],

    // loading character models in background, might not need
    {
        onLoadingLabel: () => {
            Assets.backgroundLoadBundle(["fm01", "fm02", "m01"]);
        },
    },
);
export default startLabel;
