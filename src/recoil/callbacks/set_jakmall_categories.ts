import { useRecoilCallback } from "recoil"

import { CategoryNavigation, JkmlCategoryListResponse } from "../../model/newapisdk"
import { jakmallCategoriesState } from "../atoms/categories"

type TypeFunc = () => (res: JkmlCategoryListResponse) => void

export const setJakmallCategoriesCallback: TypeFunc = () => useRecoilCallback(({ set }) => (res: JkmlCategoryListResponse) => {

    const fixcategories = res.data.reduce<CategoryNavigation[]>((res, cat) => {

        if (cat) {
            res.push(cat)
        }

        return res

    }, [])

    set(jakmallCategoriesState, fixcategories)
})
