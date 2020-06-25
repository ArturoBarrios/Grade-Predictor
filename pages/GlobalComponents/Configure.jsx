import FilePicker from './filePicker'
import Dropdown from './dropdown'



function configure(props){
    return(
        <div>
            <FilePicker bodyItem={<Dropdown></Dropdown>} fileHandler={props.fileHandler}></FilePicker>
            
        </div>
    )
}
export default configure;