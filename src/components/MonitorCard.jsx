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

                </div>
            </div>

        </div>

     );
}

MonitorCard.propTypes = {
    monitor: PropTypes.object.isRequired
}

export default MonitorCard;