import {IAppState} from "../types";

export const initialState: IAppState = {
    notes: [
        {
            "id": 1,
            "name": "Buy Groceries",
            "created": "25.07.2023",
            "category": "Task",
            "content": "Remember to buy groceries on 27.07.2023.",
            "dates": "27.07.2023",
            "archived": true
        },
        {
            "id": 2,
            "name": "Invention Idea",
            "created": "27.07.2023",
            "category": "Idea",
            "content": "I had a brilliant invention idea!",
            "dates": "",
            "archived": false
        },
        {
            "id": 3,
            "name": "Random Thought",
            "created": "27.07.2023",
            "category": "Random Thought",
            "content": "Life is full of surprises.",
            "dates": "",
            "archived": false
        },
        {
            "id": 4,
            "name": "Prepare Meeting Report",
            "created": "27.07.2023",
            "category": "Task",
            "content": "Finish the report for the meeting on 30.07.2023",
            "dates": "30.07.2023",
            "archived": false
        },
        {
            "id": 5,
            "name": "Write Book",
            "created": "28.07.2023",
            "category": "Idea",
            "content": "Write a book about technology advancements.",
            "dates": "",
            "archived": true
        },
        {
            "id": 6,
            "name": "Dentist Appointment",
            "created": "28.07.2023",
            "category": "Task",
            "content": "I’m gonna have a dentist appointment on the 3/8/2023, I moved it from 5/8/2023.",
            "dates": "3/8/2023, 5/8/2023",
            "archived": false
        },
        {
            "id": 7,
            "name": "Presentation Preparation",
            "created": "29.07.2023",
            "category": "Task",
            "content": "Prepare for the upcoming presentation on 01.08.2023",
            "dates": "01.08.2023",
            "archived": false
        }
    ],
};
