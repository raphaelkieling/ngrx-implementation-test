import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";

export const ADD_TUTORIAL: string = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL: string = '[TUTORIAL] Remove'

export class AddTutorial implements Action {
    readonly type: string = ADD_TUTORIAL;

    constructor(public payload: Tutorial) { }
}

export class RemoteTutorial implements Action {
    readonly type: string = REMOVE_TUTORIAL;

    constructor(public payload: any) { }
}

export type Actions = AddTutorial | RemoteTutorial;