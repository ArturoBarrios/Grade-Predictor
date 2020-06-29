import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DropDown from './dropdown'


class filePicker extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div>
                    <input style={{marginLeft: "20%"}} type="file" multiple
                    onChange={(event) =>{
                        console.log("file on change: ", event.target.files[0])
                        this.props.fileHandler(event.target.files)
                    }} />
                </div>
               
        )
    }
}

export default filePicker;