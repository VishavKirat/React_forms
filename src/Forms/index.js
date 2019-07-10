import React from 'react'

const Forms = (props)=>{
    let style = {marginTop:'1.3rem'}
    return (
       <div className="forms left-align row z-depth-3" style={{height:'40vh',marginTop:'3rem',padding:'2rem'}}>
         <form>
            <label htmlFor="name" className='col s12' style={style}>Name 
                <input type="text" id='name' onChange={props.handleInput}/>
            </label>
            <label htmlFor="phone" className='col s12' style={style}>Phone
                <input type="text" id='phone' onChange={props.handleInput}/>
            </label>
            <button type='submit' style={style} className='btn green waves-effect waves-green-lighten-3 col s6 offset-s3' onClick={props.handleSubmitButon}>Submit</button>
         </form>
       </div>
    )
}

export default Forms