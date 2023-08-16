import React from "react";
import {getCategoriesFromApi} from "../axios/categories";
import {ICategory, ISetCategoriesAction} from "../types";
import {AnyAction, Dispatch} from "redux";

export function fetchCategories(setDefaultCategoryId: React.Dispatch<React.SetStateAction<number>>,
                                dispatch: Dispatch<AnyAction>,
                                setCategories: (categories: ICategory[]) => ISetCategoriesAction): void {
    getCategoriesFromApi()
        .then(response => {
            const categories = response.data;
            dispatch(setCategories(categories));
            setDefaultCategoryId(categories[0].category_id);
        })
        .catch(error => console.error(error));
}
