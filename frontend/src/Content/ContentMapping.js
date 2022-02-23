
import * as React from 'react'; 
import PC from './PC'
import Portfolio from './Portfolio'
import Default from './Default'

const projects ={
    Default:Default,
    PC:PC,
    Portfolio:Portfolio
}



function ContentMapping(props) {
    const {contentFileName} = props;
    const ComponentToRender = projects[contentFileName]
    return(<ComponentToRender/>)
}

export default ContentMapping;