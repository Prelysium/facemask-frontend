import styles from './UploadComponent.module.css'
import React from "react";
import fileUpload from "../../assets/file-upload.png"

const FileItem = props => (
    <div className={styles.fileItem}>

    </div>
)

export default class UploadComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dragAreaClass: styles.unselected,
            uploadedFiles: [],
        }
    }

    componentDidMount() {
        window.addEventListener("dragover",function(e){
            e.preventDefault();
        },false);
        window.addEventListener("drop",function(e){
            e.preventDefault();
        },false);
    }

    render(){

        const files = this.state.uploadedFiles.map(file => (
            <div className={styles.fileItem}>file.name</div>
        ))

        return (<div className={styles.mainComponent}>
            <div className={`${styles.leftContainer} ${styles.basicContainer}`}>
                <div className={styles.title}>File Upload</div>
                <div className={styles.uploadBarContainer}>
                    <div className={`${styles.uploadWidget}`}

                    >
                        <div className={`${styles.dropAreaBackground}  ${this.state.dragAreaClass}`}
                             onDragEnter={this.dragEnter}
                             onDragLeave={this.dragLeave}
                             onDragOver={this.dragOver}
                             onDragEnd={this.dragDrop}
                             onDrop={this.dragDrop}>

                        </div>
                        <img className={styles.fileUploadImage} src={fileUpload}/>
                        <div className={styles.dragFilesLabel}>Drag files to upload</div>
                        <input onChange={this.fileUploaded} className={styles.uploadInput} type={'file'} id={'upload'}/>
                        <label htmlFor={'upload'} className={styles.dragFilesButton}>Browse Files</label>
                    </div>
                    <div className={styles.uploadedFileList}>
                        <div className={styles.uploadFileHeader}>Selected Files</div>
                        <div className={styles.uploadedFileContainer}>
                            {files}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.rightContainer} ${styles.basicContainer}`}>right</div>
        </div>);
    }

    dragEnter = e => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            dragAreaClass: styles.selected
        })
    }

    dragLeave = e => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            dragAreaClass: styles.unselected
        })
    }

    dragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    dragDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        let dt = e.dataTransfer
        let files = dt.files

        console.log(files);
        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(files)
        })
    }

    uploadHandler = e => {
        console.log("upload", e.target.files)
        const reader = new FileReader();
        reader.onload = this.handleLoad;
        reader.readAsArrayBuffer(e.target.files[0])
    }

    fileUploaded = e => {
        console.log(e.target.files);
    }

    handleLoad = function(e) {

        const rawData = e.target.result;

        //ws.send(rawData);
        console.log(rawData);

        alert("the File has been transferred.")

        const ws = new WebSocket("ws://localhost:5000");
        ws.addEventListener('open', () => {
            ws.send(rawData);
        })

    }
}