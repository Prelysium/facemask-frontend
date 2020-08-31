import styles from './UploadComponent.module.css'
import React from "react";
import fileUpload from "../../assets/file-upload.png"
import photoIcon from "../../assets/photoIcon.png"
import closeIcon from "../../assets/close.png"

const FileItem = props => (
    <div className={styles.fileItem}>
        <div className={styles.fileIconContainer}>
            <img className={styles.fileIcon} src={photoIcon}/>
        </div>
        <div className={styles.fileInfo}>
            <div className={styles.imageTitles}>
                <span className={styles.nameLabel}>{props.name}</span>
                <img className={styles.closeLabel} src={closeIcon}/>
            </div>
            <span className={styles.sizeLabel}>{(props.size / 1000).toFixed(2)} KB</span>
        </div>
    </div>
)

export default class UploadComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dragAreaClass: styles.unselected,
            uploadedFiles: [],
            realFileList: [],
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
        console.log("hmm: ", this.state.uploadedFiles);
        const files = this.state.uploadedFiles.map(file => (
            <FileItem key = {file.name} name={file.name} size={file.size}/>
        ))

        return (<div className={styles.mainComponent}>
            <div className={`${styles.leftContainer} ${styles.basicContainer}`}>
                <div className={styles.title}>File Upload</div>
                <div className={styles.uploadBarContainer}>
                    <div className={`${styles.uploadWidget}`}
                    >
                        <div className={`${styles.dropContainer}`}>
                            <div className={`${styles.dropAreaBackground} ${this.state.dragAreaClass}`}
                                 onDragEnter={this.dragEnter}
                                 onDragLeave={this.dragLeave}
                                 onDragOver={this.dragOver}
                                 onDragEnd={this.dragDrop}
                                 onDrop={this.dragDrop}>
                            </div>
                            <img className={styles.fileUploadImage} src={fileUpload}/>
                            <div className={styles.dragFilesLabel}>Drag files to upload</div>
                            <input onChange={this.handleLoad} className={styles.uploadInput} type={'file'} id={'upload'}/>
                        </div>
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
        let files = dt.files;

        const myFiles = []
        const realFiles = []

        for (let i=0;i<dt.files.length;i++){
            myFiles.push({
                name: dt.files[i].name,
                type: dt.files[i].type,
                size: dt.files[i].size,
            });
            realFiles.push(dt.files[i]);
        }

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(myFiles),
            dragAreaClass: styles.unselected,
            realFileList: this.state.realFileList.concat(realFiles)
        })
    }

    fileUploaded = e => {
        console.log(e.target.files);
    }

    handleLoad = async e => {
        let photo = e.target.files[0];
        console.log(e.target.files);

        const myFiles = []
        const realFiles = []

        for (let i=0;i<e.target.files.length;i++){
            myFiles.push({
                name: e.target.files[i].name,
                type: e.target.files[i].type,
                size: e.target.files[i].size,
            });
            realFiles.push(e.target.files[i]);
        }

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(myFiles),
            dragAreaClass: styles.unselected,
            realFileList: this.state.realFileList.concat(realFiles)
        })


        let formData = new FormData();

        formData.append("photo", photo);
        //const result = await fetch('http://localhost:5000/api/file', {method: "POST", body: formData});

        //console.log(result);
    }
}
