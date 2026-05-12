import { narration, newChoiceOption, newCloseChoiceOption, newLabel, showImage } from "@drincs/pixi-vn";
import scene05RoadN1 from "./05-road-n1";

const scene04Map01 = newLabel("map-01", [
    async () => {
        await showImage("bg", "map");

        narration.dialogue = `You look at your map and see that there are several highway routes you can take to get home.`;
    },

    async () => {
        narration.dialogue = `No matter what you pick, it will take a little over three days to get there.`;
    },

    async () => {
        narration.dialogue = `Time to choose a route...`;
        narration.choices = [
            // newCloseChoiceOption as placeholder
            // use newChoiceOption once you've built the label for the path
            newChoiceOption("Take the Northern route", scene05RoadN1, {}, { type: "jump" }),
            newCloseChoiceOption("Take the Middle route"),
            newCloseChoiceOption("Take the Southern route"),
        ];
    },
]);
export default scene04Map01;
