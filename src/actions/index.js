
//Action Maker
const setTechnology = (text) => {
    return {
        type: 'SET_TECHNOLOGY',
        tech: text
    }
}

export default setTechnology;


//Actions
// const ReactAction = {
//     type: 'SET_TECHNOLOGY',
//     payload: {
//         text: "React"
//     }
// }

// const ReactReduxAction = {
//     type: 'SET_TECHNOLOGY',
//     payload: {
//         text: 'React-Redux'
//     }
// }

// const PythonAction = {
//     type: 'SET_TECHNOLOGY',
//     payload: {
//         text: 'Python'
//     }
// }