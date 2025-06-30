import { createContext, useContext, useState } from 'react';
import {Task} from "../models/Task.js";
import {SortType} from "../data/SortType.js";
import {FilterType} from "../data/FilterType.js";

const TasksContext = createContext(null);


export function useTasksContext() {
    return useContext(TasksContext);
}

export function TasksProvider({ children }) {
    const taskDefault = [
        new Task({
            title:    'Ranger mon studio',
            date:     '2025-07-01',
            priority: 9,
            done:     false,
            color:    '#201000'
        }),
        new Task({
            title:    'Something',
            date:     '2025-08-15',
            priority: 3
        }),
        new Task({
            title:    'Apprendre TypeScript',
            date:     '2025-06-20',
            priority: 6,
            done:     true,
            color:    '#004080'
        }),
        new Task({
            title: 'Découvrir Flutter'
        })
    ]

    const [data, setData] = useState({
        tasks: taskDefault,
        sortBy: SortType.PRIORITY,
        filterBy: FilterType.ALL
    });

    return (
        <TasksContext.Provider value={[data, setData]}>
            {children}
        </TasksContext.Provider>
    );
}