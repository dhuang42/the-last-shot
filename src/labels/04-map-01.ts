import { narration, newLabel, newCloseChoiceOption } from "@drincs/pixi-vn";

const scene04Map01 = newLabel("map-01", [
    async () => {
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
            newCloseChoiceOption("Take the Northern route"),
            newCloseChoiceOption("Take the Middle route"),
            newCloseChoiceOption("Take the Southern route"),
        ];
    },
]);
export default scene04Map01;
