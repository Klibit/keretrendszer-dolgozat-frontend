import PropTypes from "prop-types"


function MonitorCard(props) {

    const {monitor} = props;
    return ( 

        <div className="col">
            <div className="card">
                <div className="card-header">
                    {monitor.type}
                </div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Ár</th>
                                <td>{monitor.price}</td>                       
                            </tr>
                            <tr>
                                <th>Elérhetőség</th>
                                <td>{monitor.availibility}</td>                       
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

     );
}

MonitorCard.propTypes = {
    monitor: PropTypes.object.isRequired
}

export default MonitorCard;