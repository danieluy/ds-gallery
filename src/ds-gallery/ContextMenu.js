import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
  setActionElements(_actions) {
    const actions = [];
    let key = 0;
    for (let _action in _actions) {
      if (_actions.hasOwnProperty(_action))
        actions.push(<button key={key++} className="ds-context-menu-action" onClick={_actions[_action]}>{_action}</button>);
    }
    return actions;
  }
  render() {
    const styles = {
      dsContextMenu: {
        top: this.props.position.y,
        left: this.props.position.x,
        display: this.props.display,
        position: 'fixed',
        zIndex: 10,
        flexDirection: 'column'
      }
    }
    return (
      <div className="ds-context-menu" style={styles.dsContextMenu}>
        {this.setActionElements(this.props.actions)}
      </div>
    );
  }
}

ContextMenu.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  position: PropTypes.objectOf(PropTypes.number).isRequired
}

export default ContextMenu;