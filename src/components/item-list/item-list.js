import React from 'react';
import PropType from 'prop-types';

import './item-list.css';

const ItemList = (props) => {
    const { data, onItemSelected, renderItem } = props;
    const items = data.map(( item ) => {
        const { id } = item;
        const label = renderItem(item);
        return(
            <li
                className="list-group-item list-group-item-hover"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}</li>
        );
    });
    return (
        <ul className="list-group">
            {items}
        </ul>
    );
};
ItemList.defaultProps = { 
    onItemSelected: () => {}
};
ItemList.protoType = {
    onItemSelected: PropType.func
};

export default ItemList;