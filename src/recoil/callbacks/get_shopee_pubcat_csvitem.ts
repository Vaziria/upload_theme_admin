import { useRecoilCallback } from "recoil"

import { ShopeeCategoryOld } from "../../model/newapisdk"
import { shopeePublicCategoriesState } from "../atoms/categories"

type TypeFunc = () => (id: number) => ShopeeCategoryOld

export const getShopeePubcatCSVitem: TypeFunc = () => useRecoilCallback(({ snapshot }) => (id: number) => {

    const catsnapshot = snapshot.getLoadable(shopeePublicCategoriesState)
    const cats = catsnapshot.getValue()

    console.log(cats)
    for (const cat of cats) {
        const { main, sub: subs, collections } = cat

        if (main.catid == id) {
            return {
                parent_category: 0,
                catid: main.catid,
                parent_display_name: main.display_name,
                display_name: "",
                status: ""
            }
        }

        for (const sub of subs) {
            if (sub.catid == id) {
                return {
                    parent_category: sub.parent_category,
                    catid: sub.catid,
                    parent_display_name: main.display_name,
                    display_name: sub.display_name,
                    status: ""
                }
            }
        }

        if (collections) {
            for (const collection of collections) {
                if (collection.collection_id == id) {
                    return {
                        parent_category: 0,
                        catid: collection.collection_id,
                        parent_display_name: main.display_name,
                        display_name: collection.collection_title,
                        is_collection: 1,
                        status: ""
                    }
                }
            }
        }
    }

    return {
        parent_category: 0,
        catid: 0,
        parent_display_name: "",
        display_name: "",
        status: ""
    }
})
