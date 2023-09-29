import { atom } from "recoil";

import { localStorageEffect } from "../effects/persistance"

export const imageCollectionPathState = atom<string[]>({
    key: 'imageCollectionPath',
    default: [],
    effects: [
        localStorageEffect('image_collection_paths'),
    ]
})
