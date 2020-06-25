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
      this.fileHandler = this.fileHandler.bind(this)
      
    }
    
 
  
    fileHandler(files){
      this.filesChosen();
      
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
          this.resultState(res.data);
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

    resultState(grades){
      
      this.setState({
        gradedSongs: grades
      });
      console.log("result gradedSongs: ", this.state.gradedSongs)
      this.setState({
        gradeState: 2
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
        <div>
          {
            this.state.gradeState == 0 ? <Configure fileHandler={this.fileHandler}></Configure>
            : this.state.gradeState == 1 ? <Loading></Loading>
            : <GradedComponent songs={this.state.gradedSongs}></GradedComponent>
          }
        </div>
      );
    }
  }
  
 export default Grader;