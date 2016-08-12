var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

function showProps(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> Loading! </p>
        : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-6">
                <p className="load">Player 1</p>
                {showProps(props.playersInfo[0])}
            </div>
            <div className="col-sm-6">
                <p className="load">Player 2</p>
                {showProps(props.playersInfo[1])}
            </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12" style={styles.space}>
                <p className="load">Player 1</p>
                <button type="button" className="btn btn-lg btn-success" onClick={props.OnInitiateBattle}>
                    Initiate Battle!
                </button>
            </div>
            <div className="col-sm-12" style={styles.space}>
                <p className="load">Player 2</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
                </Link>
            </div>
        </div>

    </div>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    OnInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
