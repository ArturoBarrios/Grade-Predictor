import FilePicker from './filePicker'
import Loading from './loading';
import GradedComponent from './gradedComponent'
import Card from 'react-bootstrap/Card'



class Grader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {gradeState: 0};
      this.fileHandler = this.fileHandler.bind(this)
      
    }
    
    fileHandler(object){
      console.log("file handler called: ", object);
      //todo
      //pass files to model for grade prediction
      this.setState({
        gradeState: 1
      })
    }

    loadingHandler(){
      
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