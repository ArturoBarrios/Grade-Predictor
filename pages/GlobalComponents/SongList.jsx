
import ListGroup from 'react-bootstrap/ListGroup'


class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {prevFileNames: this.props.fileNames};
        
      }
      
      componentDidMount() {
        this.setState({
            chosenModel: "Choose a model"
        })
      }
      componentWillUnmount() {
          this.setState({
            chosenModel: "Choose a model"
          })
      }
      static getDerivedStateFromProps(props, state) {
          console.log("songFiles: ", props.fileNames)
          console.log("stateFile: ", state.prevFileNames)
        if (props.fileNames !== state.prevFileNames) {
          return {
            prevFileNames: props.fileNames,
          };
        }
    
        // Return null if the state hasn't changed
        return null;
      }
      
      render(){
        console.log("even nicer: ", this.props.fileNames)
        
        

        return(
            
            <div style={{}}>
                
                <ListGroup variant="flush">
                    {
                      
                        this.props.fileNames&&this.props.fileNames.map(function(fileName, index){
                            return <ListGroup.Item>{fileName}</ListGroup.Item>
                        }) 
                    }
                </ListGroup>
            </div>
        )
      }
}
export default SongList