// components/Survey.tsx
"use client";

import "survey-core/survey-core.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../services/data";

export default function SurveyComponent() {
    const survey = new Model(surveyJson);
    // survey.addNavigationItem({
    //     id: "pdf-export",
    //     title: "Save as PDF",
    //     action: () => savePdf(survey.data),
    // });
    survey.onComplete.add((survey, options) => {
        options.showSaveInProgress();
        const dataObj = { postId: 1, surveyResult: survey.data };
        console.log(survey.data);

        const dataToFetch = {
            data: {
                dataJson: dataObj,
            },
            type: "hello world",
        };
        const dataStr = JSON.stringify(dataToFetch);
        const headers = new Headers({
            "Content-Type": "application/json; charset=utf-8",
        });
        fetch("http://localhost:1337/api/data-quests", {
            method: "POST",
            body: dataStr,
            headers: headers,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not post the survey results");
                }
                // Display the "Success" message (pass a string value to display a custom message)
                options.showSaveSuccess();
                // Alternatively, you can clear all messages:
                // options.clearSaveMessages();
            })
            .catch((error) => {
                // Display the "Error" message (pass a string value to display a custom message)
                options.showSaveError();
                console.log(error);
            });
    });
    return <Survey model={survey} />;
}
