import FilePicker from './filePicker'
import Loading from './loading';
import Card from 'react-bootstrap/Card'



class Grader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {gradeState: 0};
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
          {/* <FilePicker></FilePicker> */}
          <Loading></Loading>
        </div>
      );
    }
  }
  
 export default Grader;