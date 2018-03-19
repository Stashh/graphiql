import React from 'react';

const HeaderModal = (props) => {
    if (props.modalOpen) {
      return (  
      <div className="blur-div">
       <button style={styles.modalExit} onClick={props.handleToggleHeadersModal}>&#10006;</button>
        <div className="headers-modal-wrapper">
          <div className='inputs-row'>
            <label style={styles.inputHeadersLabel} className='header-input'>Key</label>
            <label style={styles.inputHeadersLabel} className='header-input'>Value</label>
            <button disabled={true} style={styles.invisableFlexboxHackButton}>&#10006;</button>
          </div>
          {
            props.headerInputs.map(function(headerInput, i){
              return  (
              <div key={i} className='inputs-row'>
                <input className='header-input' onChange={(e) => props.handleHeaderChange(e, i, 'key')} value={headerInput.key}/>
                <input className='header-input' onChange={(e) => props.handleHeaderChange(e, i, 'value')} value={headerInput.value}/>
                <button style={styles.removeHeader} onClick={() => props.handleRemoveHeaderInput(i)}>&#10006;</button>
              </div>
              )
            })
          }
          <div className='inputs-row'>
            <button style={styles.addHeader} onClick={props.handleAddHeaderInput}>ADD</button>
          </div>
        </div>
      </div>
      )
    } else {
      return null;
    }
}

export { HeaderModal };

const styles = {
  modalExit: { 
    paddingTop: 0, 
    paddingBottom: 0,
    paddingLeft: 7.7,
    paddingRight: 7.7,
    top: '10%', 
    right: '10%', 
    position: 'absolute', 
    fontSize: 30, 
    fontWeight: 700, 
    borderColor: '#f44336', 
    color: '#f44336', 
    backgroundColor: 'transparent',
  },
  addHeader: { 
    color: 'white', 
    fontWeight: 500, 
    flex: 1, 
    textAlign: 'center', 
    backgroundColor: '#4CAF50', 
    borderColor: '#4CAF50'
  },
  removeHeader: {
    color: 'white', 
    fontWeight: 700, 
    backgroundColor: '#f44336', 
    borderColor: '#f44336'
  },
  invisableFlexboxHackButton: {
    backgroundColor: 'transparent', 
    color: 'transparent', 
    borderColor: 'transparent'
  },
  inputHeadersLabel: { 
    fontSize: 17, 
    fontWeight: 500 
  },
}