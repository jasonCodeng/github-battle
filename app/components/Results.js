var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailWrapper = require('../components/UserDetailWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../components/MainContainer');

function StartOver() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to='/PlayerOne'>
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}


function Results(props) {
    if (props.isLoading === true) {
        return (
            <p> LOADING </p>
        )
    }
    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver/>
            </MainContainer>
        )

    }
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
                </UserDetailWrapper>
                <UserDetailWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
                </UserDetailWrapper>
            </div>
            <StartOver/>
        </MainContainer>
    )
}
Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

module.exports = Results;
