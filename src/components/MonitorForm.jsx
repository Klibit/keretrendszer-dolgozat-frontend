import {useRef} from "react";
import propTypes from "prop-types";


function MonitorForm(props) {
    
    const typeRef = useRef(null);
    const priceRef = useRef(null);
    const avaibilityRef = useRef(null);
    const {onSubmit} = props;

    const createMonitor = async () => {
        const monitor = {
            type: typeRef.current.value,
            price: priceRef.current.value,
            avaibility: avaibilityRef.current.value,
        };
        const success = await onSubmit(monitor);
        if (success){
            resetForm();
        }
    }

    const resetForm = () => {
        typeRef.current.value = "";
        priceRef.current.value = "";
        avaibilityRef.current.value = "";
    }

    return (<form onSubmit={event => {event.preventDefault(); createMonitor(); }} >
        <div className="mb-3">
            <label htmlFor="type" className="form-label">Típus</label>
            <input type="text" className="form-control" id="type" ref={typeRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Ár</label>
            <input type="number" className="form-control" id="price" ref={priceRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="avaibility" className="form-label">Elérhetőség</label>
            <input type="boolean" className="form-control" id="avaibility" ref={avaibilityRef}/>
        </div>
        <button type="submit">Monitor hozzáadása</button>
    </form>  );
}

MonitorForm.propTypes = {
    onSubmit :  propTypes.func.isRequired
}

export default MonitorForm ;