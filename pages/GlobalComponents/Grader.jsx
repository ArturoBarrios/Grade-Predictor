import FilePicker from './filePicker'
import Loading from './loading';
import GradedComponent from './gradedComponent'
import Card from 'react-bootstrap/Card'
import axios from 'axios';



class Grader extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {gradeState: 0};
      this.fileHandler = this.fileHandler.bind(this)
      
    }
    
 
  
    fileHandler(files){
      console.log("file handler called: ", files);
      
      const formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        formData.append("file"+i,file);
      }

      axios.post('http://localhost:5000/get_grades', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
       
      })
        .then(res => {
          console.log("res: ", res)
          this.resultState();
        }).catch(err =>{
          console.log("errrr: ", err)
          this.fileState();
        });
    }

    fileState() {
      this.setState({
        gradeState: 0
      })
    }

    resultState(){
      this.setState({
        gradeState: 2
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
        <div>
          {
            this.state.gradeState == 0 ? <FilePicker fileHandler={this.fileHandler}></FilePicker>
            : this.state.gradeState == 1 ? <Loading></Loading>
            : <GradedComponent></GradedComponent>
          }
        </div>
      );
    }
  }
  
 export default Grader;