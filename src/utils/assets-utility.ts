import { Assets, sound } from "@drincs/pixi-vn";
import manifest from "../assets/manifest";
import { AUDIO_BUNDLE_NAME, MAIN_MENU_ROUTE } from "../constans";

import img00start from "../assets/images/img-00-start.png";
import img01trunk from "../assets/images/img-01-trunk.png";
import img02polaroid from "../assets/images/img-02-polaroid.png";
import img03polaroidcloseup from "../assets/images/img-03-polaroid-closeup.png";

Assets.add({
    alias: "img-00-start",
    src: img00start,
});
Assets.add({
    alias: "img-01-trunk",
    src: img01trunk,
});
Assets.add({
    alias: "img-02-polaroid",
    src: img02polaroid,
});
Assets.add({
    alias: "img-03-polaroid-closeup",
    src: img03polaroidcloseup,
});

/**
 * Define all the assets that will be used in the game.
 * This function will be called before the game starts.
 * You can read more about assets management in the documentation: https://pixi-vn.web.app/start/assets-management.html
 */

export async function defineAssets() {
    await Assets.init({ manifest });

    // The game will not start until these asserts are loaded.
    await Assets.loadBundle(MAIN_MENU_ROUTE);

    // The audio bundle will be loaded in the background, so it will be available when needed, but it won't block the game start.
    sound.backgroundLoadBundle(AUDIO_BUNDLE_NAME);

    // The game will start immediately, but these asserts will be loaded in the background.
    // Assets.backgroundLoadBundle("main_menu");
    // Assets.backgroundLoad("background_main_menu");
}

/**
 * Get the PixiJS asset from the given asset string.
 * If the asset is not a PixiAsset, it will return the asset as is.
 * @param asset - The asset string to resolve.
 * @returns The resolved PixiJS asset or the original asset string.
 */
export function getPixiJSAsset(asset: string) {
    // check if the asset is a PixiAsset
    return Assets.resolver.resolve(asset).src || asset;
}
