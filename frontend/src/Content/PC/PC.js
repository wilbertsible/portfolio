
import Content from '../../components/Content'


const sidebar = {
    title: 'About',
    description:
        'Etiam porta malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
};

function PC(props){
    const {headers, socials, mobileView} = props
    return(
        <>
        
        <Content headers={headers} sidebar={sidebar} socials={socials} mobileView={mobileView}/>
        
        </>
    )
}

export default PC;