import React from 'react';

const HeaderModal = (props) => {
    if (props.modalOpen) {
      return (  
      <div className="blur-div">
       <button style={{top: '10%', right: '10%', position: 'absolute', fontSize: 30, fontWeight: 700, borderColor: '#f44336', color: '#f44336', backgroundColor: 'transparent'}} onClick={props.handleToggleHeadersModal}>
        &#10006;
       </button>
        <div 
        className="headers-modal-wrapper"      
        >
          <div className='inputs-row'>
            <label style={{fontSize: 17, fontWeight: 500}} className='header-input'>Key</label>
            <label style={{fontSize: 17, fontWeight: 500}} className='header-input'>Value</label>
            <button disabled={true} style={{backgroundColor: 'transparent', color: 'transparent', borderColor: 'transparent'}}>&#10006;</button>
          </div>
          {
            props.headerInputs.map(function(headerInput, i){
            return  (<div key={i} className='inputs-row'>
            <input className='header-input' onChange={(e) => props.handleHeaderChange(e, i, 'key')} value={headerInput.key}/>
            <input className='header-input' onChange={(e) => props.handleHeaderChange(e, i, 'value')} value={headerInput.value}/>
            <button style={{color: 'white', fontWeight: 700, backgroundColor: '#f44336', borderColor: '#f44336'}} onClick={() => props.handleRemoveHeaderInput(i)}>&#10006;</button>
            </div>)
          })
          }
          <div className='inputs-row'>
            <button style={{color: 'white', fontWeight: 500, flex: 1, textAlign: 'center', backgroundColor: '#4CAF50', borderColor: '#4CAF50'}} onClick={props.handleAddHeaderInput}>ADD</button>
          </div>
        </div>
      </div>
      )
    } else {
      return null;
    }
}

export { HeaderModal };