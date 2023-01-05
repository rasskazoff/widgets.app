import React from 'react';
import Wa from '../wa';
import Phone from '../phone'

const App = (props) => {
    const widgets = props.data.widgets
    const wa = widgets.wa
    const phone = widgets.phone
        return (
            <div id='widgets'>
                {wa.state ? <Wa settings={wa.settings}/> : ''}
                {phone.state ? <Phone settings={phone.settings}/> : ''}
            </div>
        );
    }

export default App