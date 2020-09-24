import Configure from './Configure'
import Loading from './loading';
import GradedComponent from './gradedComponent'
import Card from 'react-bootstrap/Card'
import axios from 'axios';



class Grader extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {gradeState: 0};
      this.state = {gradedSongs: []}
      this.state = {model: null}
      this.state = {formDataFiles: null}
      this.state = {fileNames: []}
      this.state = {didChooseFile: false}
      this.state = {didChooseModel: false}
      this.fileHandler = this.fileHandler.bind(this)
      this.modelChosen = this.modelChosen.bind(this)
      this.gradeSongsHandler = this.gradeSongsHandler.bind(this)
      this.resetStates = this.resetStates.bind(this)
      
    }
    
 
  
    fileHandler(files){
      const formData = new FormData();
      for (var i = 0; i < files.length; i++) {
      
        var file = files[i];
        formData.append("file"+i,file);
      }
      this.setState({
        formDataFiles: formData
      })
      this.setFileNames(formData);
    }
    
    resetStates(){
      this.setState({
        gradeState: 0
      })
      this.setState({
        gradedSongs: []
      })
      this.setState({
        model: null
      })
      this.setState({
        formDataFiles: null
      })
      this.setState({
        fileNames: null
      })

    }

    setFileNames(formData){
      var files = [];
      console.log("form data files: ", formData)
      for(var pair of formData.entries()) {
        files.push(pair[1].name) 
      }
      this.setState({
        fileNames: files
      })
     return files;
    }

    gradeSongsHandler(){
      var fileChosen = this.state.fileNames!=null;
      var modelChosen = this.state.model!=null;
      if(!fileChosen){
        console.log("file not chosen")
      }
      if(!modelChosen){
        console.log("model not chosen")
      }
      console.log("bool values: ", fileChosen, "  ", modelChosen)
      console.log("files chosen: ", this.state.formDataFiles)
      if(modelChosen&&fileChosen){
        this.filesChosen();
        axios.post('http://127.0.0.1:5000/get_grades', this.state.formDataFiles, {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'multipart/form-data'
          },
          params:{
            'model': this.state.model
          },
        })
          .then(res => {
            console.log("res: ", res)
            this.resultState(res.data);
          }).catch(err =>{
            console.log("errrr: ", err)
            this.fileState();
          });
      }

    }

    fileState() {
      this.setState({
        gradeState: 0
      })
    }

    resultState(grades){    
      this.setState({
        gradedSongs: grades
      });
      console.log("result gradedSongs: ", this.state.gradedSongs)
      this.setState({
        gradeState: 2
      })
    }

    modelChosen(chosenModel) {
      console.log("model chosen: ", chosenModel)
      this.setState({
        model: chosenModel
      })
    }

    filesChosen() {
      this.setState({
          gradeState: 1
      })
    }

    componentDidMount() {
      this.setState({
          gradeState: 0
      })
    }
    componentWillUnmount() {
        this.setState({
            gradeState: 0
        })
    }

    render() {
      return (
        <div style={{zIndex: "1"}}>
          {
            this.state.gradeState == 0 ? <Configure didChooseFile={this.state.didChooseFile} didChooseModel={this.state.didChooseModel}  fileNames={this.state.fileNames} gradeFunction={this.gradeSongsHandler} modelChosen={this.modelChosen} fileHandler={this.fileHandler}></Configure>
            : this.state.gradeState == 1 ? <Loading></Loading>
            : <GradedComponent resetFunction={this.resetStates} songs={this.state.gradedSongs}></GradedComponent>
          }
        </div>
      );
    }
  }
  
 export default Grader;