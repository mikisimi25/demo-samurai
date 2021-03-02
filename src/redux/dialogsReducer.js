const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.sendMessage;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: newMessage }]
            }
        }
        default:
            return state;
    }
}

export const addDialogActionCreator = (sendMessage) => ({ type: ADD_MESSAGE,sendMessage });

export default dialogsReducer;