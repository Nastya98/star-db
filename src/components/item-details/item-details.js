import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner/spinner";
import ErrorTest from '../error-test';

export default class ItemDetails extends Component {

    constructor() {
        super();
        this.state = {
            item: null,
            image: null,
            loading: true
        };
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            });
    }

    render() {

        if (!this.state.item) {
            return <span>Select a item from list</span>
        }
        const props = this.props;
        const { loading, item, image } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PersonView item={item} image={image} props={props}/> : null;
        return(
            <div className="c-person-details jumbotron rounded d-flex align-items-start">
                { spinner }
                { content }
            </div>
        )
    }
}
const Record = ({item, field, label}) => {
    return (
        <li className="c-list__item list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};
export {
    Record
};
const PersonView = ({ item, image, props }) => {
    const { id, name } = item;
    return (
        <React.Fragment>
          <img src={image} alt=""/>
          <div className="u-margin-left">
              <h3>{name} {id}</h3>
              <ul className="c-list list-group list-group-flush">
                  {
                      React.Children.map(props.children, (child) => {
                          return React.cloneElement(child, {item});
                      })
                  }
              </ul>
              <ErrorTest/>
          </div>
      </React.Fragment>
  );
};