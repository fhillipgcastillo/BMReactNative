import {Tabs} from "./types";

export const setActiveTab = (newTab) => ({type:Tabs.SET_ACTIVE_TAB, payload:newTab});