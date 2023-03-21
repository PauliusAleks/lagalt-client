import React from "react";
import { useEffect } from "react";
import ProjectBanner from "../components/Project/ProjectBanner";
import CategoryDropdown from "../components/Project/CategoryDropdown";
import { setSearchShowTrue } from "../reduxParts/searchReducer";
import { useDispatch } from "react-redux";

function ProjectBannerPage() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowTrue())
    })
    

    return (
        <div className="projectPage">
            <div className="d-flex justify-content-between">
                <h1 className="mr-1 p-3">Prosjektoversikt</h1>
                <div className="ml-auto p-3">
                <CategoryDropdown />
                </div>
            </div>
            <ProjectBanner />
        </div>
    )
}

export default ProjectBannerPage