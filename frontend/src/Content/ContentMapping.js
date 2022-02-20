import PC from './PC/PC'
import Default from './Default'



function ContentMapping(props) {
    const { contentList, getImage, projectTitle } = props;
    console.log(contentList)
    // const Component = contentList.length !== 0 ? contentList.filter((item)=>{return(item.fileName===projectTitle)})[0].component : ''
    // console.log(Component)
    
    // return(<Component getImage={getImage}/>)
    return(<contentList/>)
}

export default ContentMapping;