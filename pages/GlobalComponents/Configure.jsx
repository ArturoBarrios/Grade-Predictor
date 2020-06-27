import FilePicker from './filePicker'
import Dropdown from './dropdown'



class Configure extends React.Component {
    constructor(props) {
        super(props);
        
      }
    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    render(){
        return(
            <div>
                <FilePicker bodyItem={<Dropdown modelChosen={this.props.modelChosen}></Dropdown>} fileHandler={this.props.fileHandler}></FilePicker>
                
            </div>
        )
    }
}
export default Configure;