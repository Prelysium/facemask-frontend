import React, { useState, useEffect } from 'react';

function App() {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="App">
                <h1> {initialData.title}</h1>
        </div>
    );
}

export default App;

// import styles from './UploadComponent.module.css'
// import React from "react";
// import { useState, useEffect } from 'react';
// export default class UploadComponent extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//
//     render(){
//         return <div className={styles.mainComponent}>
//             Upload
//             <div>
//                 <input onChange={this.uploadHandler} type={'file'}/>
//             </div>
//         </div>
//     }
//
//     uploadHandler = e => {
//         console.log("upload", e.target.files)
//         const reader = new FileReader();
//         reader.onload = this.handleLoad;
//         reader.readAsArrayBuffer(e.target.files[0])
//     }
//
//     handleLoad = function(e) {
//         const [currentTime, setCurrentTime] = useState(0);
//
//         useEffect(() => {
//             fetch('/time').then(res => res.json()).then(data => {
//                 setCurrentTime(data.time);
//             });
//         }, []);
//
//         return (
//             <div className="App">
//                 <header className="App-header">
//
//                     ... no changes in this part ...
//
//                     <p>The current time is {currentTime}.</p>
//                 </header>
//             </div>
//         );
//         // const rawData = e.target.result;
//         //
//         // //ws.send(rawData);
//         // console.log(rawData);
//         // console.log(typeof rawData)
//         //
//         // alert("the File has been transferred.")
//         //
//         // const ws = new WebSocket("ws://localhost:5000");
//         // ws.addEventListener('open', () => {
//         //     //
//         //     // ws.send(JSON.stringify({'data': rawData, 'flag': 'picture'}));
//         // })
//         // ws.send(rawData)
//     }
// }