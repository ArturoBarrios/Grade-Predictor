import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chosenModel: "Choose a model"};
        this.modelSelected = this.modelSelected.bind(this);
        this.testEvent = this.testEvent.bind(this);
      }
      modelSelected(event){
        this.setState({
          chosenModel: event
        })
        this.props.modelChosen(event);
      }
      testEvent(){
        console.log("test event");
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
      render(){
        return(
            <div style={{}}>
                <Dropdown onSelect={this.modelSelected } >
                    <Dropdown.Toggle   variant="success" id="dropdown-basic">
                        {this.state.chosenModel}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="ABRSM(1-8)">ABRSM(1-8)</Dropdown.Item>
                        <Dropdown.Item eventKey="RCM(1-10)">RCM(1-10)</Dropdown.Item>
                        <Dropdown.Item eventKey="Piano Marvel(0-10)">Piano Marvel(0-10)</Dropdown.Item>
                        <Dropdown.Item eventKey="Henle(1-6)">Henle(1-6)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
      }
}
export default DropDown