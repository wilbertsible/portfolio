import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

function Header(props){

    const {sections, title, mobileView} = props;
    const [state, setState] = React.useState({
        drawerOpen: false
    })
    const {drawerOpen} = state;

    const displayDesktop = () => {
        return (
            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Typography
                    component='h1'
                    variant='h4'
                    color='inherit'
                    align='left'
                    noWrap
                    sx={{ flex: 1, overflow: 'visible' }}
                    >
                        {title}
                    </Typography>
                    <Toolbar
                    component="nav"
                    sx={{ justifyContent: 'space-between' }}
                    >
                        {sections.map((section) => (
                            <Button
                            color='inherit'
                            noWrap
                            key={section.title}
                            href={section.url}
                            sx={{ justifyContent: 'flex-end' }}
                            >
                                {section.title}
                            </Button>
                        ))}
                    </Toolbar>
                </Toolbar>
            </React.Fragment>
        );
    }

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) =>({...prevState, drawerOpen:true}));
        const handleDrawerClose = () => setState((prevState) =>({...prevState, drawerOpen:false}));
        return(
            
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {console.log(mobileView)}
                <Typography
                component='h1'
                variant='h4'
                color='inherit'
                align='left'
                noWrap
                sx={{ flex: 1, overflow: 'visible' }}
                >
                    {title}
                </Typography>
                <Menu 
                    fontSize = 'large'
                    color='inherit'
                    onClick={()=>handleDrawerOpen()}
                >
                </Menu>
                <Drawer
                anchor='top'
                open={drawerOpen}
                onClose={handleDrawerClose}
                >
                    {sections.map((section) => (
                        <Button
                        color='inherit'
                        noWrap
                        key={section.title}
                        href={section.url}
                        sx={{ justifyContent: 'flex-midlle' }}
                        >
                            {section.title}
                        </Button>
                    ))}
                </Drawer>
            </Toolbar>
        );
    }

    return(
        <>
            {mobileView ? displayMobile():displayDesktop()}
        </>

    );
        
}

export default Header;