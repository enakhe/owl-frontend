import React from 'react'
import PropTypes from 'prop-types';
import { Avatar, BottomNavigation, BottomNavigationAction, Card, CardActions, CardHeader, CardMedia, Typography, Box, Grid, Tabs, Tab, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import image from '../../img/author.jpg';


const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Showcase = () => {
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue2(newValue);
    };
    
    return (
        <section style={{ paddingTop: "170px" }}>
            <div className="container-md">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        <Grid item={true} xs={1} sm={8} sx={{ minHeight: "365px" }} md={8}>
                            <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                Editor's Pick <AutoAwesomeIcon />
                            </Typography>
                            <Link to='/'>
                                <Item sx={{ color: "#444746", minHeight: "365px" }} className='transition'>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="icon">
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image={image}
                                                    alt="Izuagbe Samuel Enakhe"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }}
                                                />
                                            </Avatar>
                                        }
                                        title="Izuagbe Samuel Enakhe"
                                        subheader="September 14, 2016"
                                    />
                                    <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                        <Grid item={true} xs={1} sm={8} md={6}>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
                                                alt="Paella dish"
                                                sx={{ borderRadius: "10px", objectFit: "cover", width: "100%" }} />
                                        </Grid>
                                        <Grid item={true} xs={1} sm={8} md={6}>
                                            <Typography variant="h5" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem" }}>
                                                Why California is the best place to visit for an honeymoon
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This impressive paella is a perfect party dish and a fun meal to cook
                                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                if you like.
                                            </Typography>
                                            <div className="center">
                                                <CardActions disableSpacing>
                                                    <div className='center'>
                                                        <div>
                                                            <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                                                <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                                                <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                                                <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                                            </BottomNavigation>
                                                        </div>
                                                    </div>
                                                </CardActions>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item={true} xs={1} sm={8} md={4}>
                            <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                For you <StarIcon />
                            </Typography>
                            <Item sx={{ minHeight: "365px" }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value2} onChange={handleChange} aria-label="Content" centered>
                                            <Tab label="Popular" {...a11yProps(0)} />
                                            <Tab label="Trending" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel variant="div" value={value2} index={0}>
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://media.istockphoto.com/id/1359497811/photo/ecclesiastes-holy-bible-old-testament-open-book-close-up.jpg?s=612x612&w=0&k=20&c=34pOcWKDf8kcvII7x8AfISCUZ3Ygjq8OEnWo90JzaL4="
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={6} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    Ecclesiastes Explained: Introduction (Everything is Vanity)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI="
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={10} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    Romans: God's Righteousness
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI="
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={10} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    Your Beliefs Shape Your Identity
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value2} index={1}>
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://media.istockphoto.com/id/1003271898/photo/text-sign-showing-vulnerability-conceptual-photo-information-susceptibility-systems-bug.jpg?s=612x612&w=0&k=20&c=tlChYau6pvs54jvS4BO8dwvJ7h4UorFJqVeHJgrm7gE="
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={10} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    Apple VR is taking over
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://media.istockphoto.com/id/1044908342/photo/brain-left-and-right-creativity-functions-sketch-concept.jpg?s=612x612&w=0&k=20&c=UrLKaIhKJpNB5JB5zArZsbrl7BVR4M2E3Xdje4bjOmY="
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={10} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    You Work Too Much, Take a Break
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={2} md={2}>
                                                <CardMedia
                                                    component="img"
                                                    height="40px"
                                                    image="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
                                                    alt="Paella dish"
                                                    sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }} />
                                            </Grid>
                                            <Grid item={true} xs={1} sm={10} md={10}>
                                                <Typography variant="p" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem", marginLeft: '0.5rem' }}>
                                                    Why California is the best place to visit for an honeymoon
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </section>
    )
}

export default Showcase