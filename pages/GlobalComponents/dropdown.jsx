import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Tooltip from 'react-bootstrap/Tooltip'



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
                        <Dropdown.Item eventKey="ABRSM(1-8)V1">ABRSM(1-8)V1</Dropdown.Item>
                        <Dropdown.Item eventKey="ABRSM(1-8)V2">ABRSM(1-8)V2</Dropdown.Item>
                        <Dropdown.Item eventKey="ABRSM(1-8)V3">ABRSM(1-8)V3</Dropdown.Item>
                        <Dropdown.Item eventKey="ABRSM_2019_2020(1-8)V1">ABRSM_2019_2020(1-8)V1</Dropdown.Item>
                        <Dropdown.Item eventKey="ABRSM_2019_2020(1-8)V2">ABRSM_2019_2020(1-8)V2</Dropdown.Item>
                        <Dropdown.Item eventKey="ABRSM_2019_2020(1-8)V3">ABRSM_2019_2020(1-8)V3</Dropdown.Item>
                        <Dropdown.Item eventKey="Piano Marvel(0-10)V1">Piano Marvel(0-10)V1</Dropdown.Item>
                        <Dropdown.Item eventKey="Piano Marvel(0-10)V2">Piano Marvel(0-10)V2</Dropdown.Item>
                        <Dropdown.Item eventKey="Piano Marvel(0-10)V3">Piano Marvel(0-10)V3</Dropdown.Item>
                        <Dropdown.Item eventKey="Henle(1-6)">Henle(1-6)</Dropdown.Item>
                        <Dropdown.Item eventKey="RCM(1-10)">RCM(1-10)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
      }
}
export default DropDown