import React  from 'react';

import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match, location }) => {
    const { id } = match.params;

    const personDetails = (
        <PersonDetails itemId={id}/>
    );

    const personList = (
        <PersonList
            onItemSelected={( itemId ) => {
                history.push(itemId)
            }}
            renderItem={({ name, gender }) => `${name} (${gender})`}
        />
    );

    return(
        <Row left={personList} right={personDetails}/>
    );

};

export default withRouter(PeoplePage);