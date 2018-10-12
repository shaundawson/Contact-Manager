import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
  state = {
  showContactInfo: false
  };

  onShowClick = e => {
    this.setState({showContactInfo: !this.state.showContactInfo});
    //console.log(e);
  };

  render() {
    const { showContactInfo } = this.state
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4> { contact.name } <i onClick={this.onShowClick}
        className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? (<ul className="list-group">
          <li className="list-group-item">{ contact.email }</li>
          <li className="list-group-item">{ contact.phone }</li>
        </ul>) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
