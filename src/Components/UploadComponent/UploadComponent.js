import styles from './UploadComponent.module.css'
import React from "react";
import fileUpload from "../../assets/file-upload.png"
import photoIcon from "../../assets/photoIcon.png"
import closeIcon from "../../assets/close.png"
import CloseButton from "./CloseButton/CloseButton";
import loading from "../../assets/Ripple-1s-200px.gif"

const FileItem = props => (
    <div className={styles.fileItem}>
        <div className={styles.fileIconContainer}>
            <img className={styles.fileIcon} src={photoIcon}/>
        </div>
        <div className={styles.fileInfo}>
            <div className={styles.imageTitles}>
                <span className={styles.nameLabel}>{props.name}</span>
                {!props.loading && <CloseButton onClick={props.handleClick}/>}
                {props.loading && <img className={styles.loading} src={loading}/>}
            </div>
            <span className={styles.sizeLabel}>{(props.size / 1000).toFixed(2)} KB</span>
            {props.ready && <a href={props.link} className={styles.download}>download</a>}
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
            readyArr: [],
            linkArr: [],
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
    
    handleCloseClick = (e, i) => {
        console.log(i);
        const uploadedFiles = this.state.uploadedFiles.splice(0);
        const realFileList = this.state.realFileList.splice(0)
        const readyArr = this.state.readyArr.splice(0)
        const linkArr = this.state.linkArr.splice(0)

        uploadedFiles.splice(i, 1);
        realFileList.splice(i, 1);
        readyArr.splice(i, 1);
        linkArr.splice(i, 1);


        this.setState({uploadedFiles, realFileList, readyArr, linkArr})
    }

    render(){
        const files = this.state.uploadedFiles.map((file,i) => (
            <FileItem key = {file.name}
                      loading={this.state.loading}
                      name={file.name}
                      size={file.size}
                      ready={this.state.readyArr[i]}
                      link={this.state.linkArr[i]}
                      handleClick={e => this.handleCloseClick(e, i)}
            />
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
                        <label onClick={this.startUploading} className={styles.dragFilesButton}>Upload</label>
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
        const readyArr = [];
        const linkArr = [];

        for (let i=0;i<dt.files.length;i++){
            myFiles.push({
                name: dt.files[i].name,
                type: dt.files[i].type,
                size: dt.files[i].size,
            });
            realFiles.push(dt.files[i]);
            readyArr.push(false);
            linkArr.push("");
        }

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(myFiles),
            dragAreaClass: styles.unselected,
            realFileList: this.state.realFileList.concat(realFiles),
            readyArr: readyArr,
            linkArr: linkArr,
        })
    }

    startUploading = async (e) => {
        console.log(this.state.realFileList);
        let formData = new FormData();

        this.state.realFileList.forEach(file => {
            formData.append(file.name, file);
        });

        this.setState({
            loading: true,
        });


        const result = await fetch('http://localhost:5000/api/file', {method: "POST", body: formData});



        const answer = await result.json();

        const picArray = JSON.parse(answer.pic);
        console.log(picArray);

        const readyArr = picArray.map(id => true);
        const linkArr = picArray.map(id => typeof id === 'number' ? `http://localhost:5000/api/image?id=${id}` : `http://localhost:5000/videos/output/${id}`);

        this.setState({
            readyArr: readyArr,
            linkArr: linkArr,
            loading: false
        })
    }

    handleLoad = async e => {

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

        //console.log(result);
    }
}
