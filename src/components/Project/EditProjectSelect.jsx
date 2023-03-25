import React from "react";
import { Form } from "react-bootstrap";



function EditProjectSelect({editProject, setEditProject}) 
{
    const handleSelectChange = event => {
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        setEditProject({...editProject, [propertyName]: parseInt(propertyValue)})
    }
    const parseCategory = (int) => {
        if(int === 0){
            return "Musikk"
        } else if(int === 1){
            return "Film"
        }else if(int === 2){
            return "SpillUtvikling"
        }else if(int === 3){
            return "NettUvikling"
        }
    }
    const parseProgress = (int) => {
        if(int === 0 ){
            return "Oppstart"
        } else if(int === 1){
            return "Under Utvikling"
        }else if(int === 2){
            return "Utsatt"
        }else if(int === 3){
            return "Ferdig"
        }
    }

    return(
        <Form>
            <Form.Label className="mt-3">Kategori:</Form.Label>
            <Form.Select className="mb-3 mt-2" onChange={handleSelectChange} name="category">
                <option hidden>{parseCategory(editProject.category)}</option>
                <option value={0}>Musikk</option>
                <option value={1}>Film</option>
                <option value={2}>SpillUtvikling</option>
                <option value={3}>NettUtvikling</option>
            </Form.Select>
            <Form.Label>Status:</Form.Label>
            <Form.Select className="mb-3 mt-2"  onChange={handleSelectChange} name="progress">
                <option hidden>{parseProgress(editProject.progress)}</option>
                <option value={0}>Oppstart</option>
                <option value={1}>Under Utvikling</option>
                <option value={2}>Utsatt</option>
                <option value={3}>Ferdig</option>
            </Form.Select>
        </Form>
    )
}
export default EditProjectSelect