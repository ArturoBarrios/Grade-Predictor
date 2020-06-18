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
    
 
  
    fileHandler(object){
      console.log("file handler called: ", object);

      
      this.setState({
        gradeState: 1
      })
      console.log("api url: ", process.env.REACT_APP_API_URL)
      axios.get('http://localhost:5000/grade')
      .then(res => {
        console.log("res: ", res)
        this.resultState();
      }).catch(err =>{
        this.fileState();
      })
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