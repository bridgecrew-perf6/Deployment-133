import React, { Component } from 'react'
import styles from '../../../assets/scss/component/Inquiry.scss';
import Registration from './Registration';

    class Inquiry extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
      };
    }
  
    openModal = () => {
      this.setState({ isModalOpen: true });
    };
  
    closeModal = () => {
      this.setState({ isModalOpen: false });
    };

render(){
    return (
        <div className={styles.Inquiry}>
            <h2>생산계획 - 조회</h2>
            <button onClick={this.openModal}>등록</button>
            <Registration isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>

    )
    }
}

export default Inquiry;