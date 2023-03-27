import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Form } from "react-bootstrap";
import { parseCategory, parseProgress } from "../../const/parseCategoryProgress";



function EditProjectSelect({editProject, setEditProject}) 
{
    const handleSelectChange = event => {
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        setEditProject({...editProject, [propertyName]: propertyValue})
    }

    return(
        <Form>
            <Form.Label className="mt-3">Kategori:</Form.Label>
            <Form.Select className="mb-3 mt-2" onChange={handleSelectChange} name="category">
                <option hidden>{editProject.category}</option>
                <option value={'Musikk'}>Musikk</option>
                <option value={'Film'}>Film</option>
                <option value={'SpillUtvikling'}>SpillUtvikling</option>
                <option value={'NettUtvikling'}>NettUtvikling</option>
            </Form.Select>
            <Form.Label>Status:</Form.Label>
            <Form.Select className="mb-3 mt-2"  onChange={handleSelectChange} name="progress">
                <option hidden>{editProject.progress}</option>
                <option value={'Oppstart'}>Oppstart</option>
                <option value={'UnderUtvikling'}>Under Utvikling</option>
                <option value={'Utsatt'}>Utsatt</option>
                <option value={'Ferdig'}>Ferdig</option>
            </Form.Select>
        </Form>
    )
}
export default EditProjectSelect