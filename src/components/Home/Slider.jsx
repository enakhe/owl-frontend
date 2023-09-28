import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { autoPlay } from 'react-swipeable-views-utils';
import { Avatar, BottomNavigation, BottomNavigationAction, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, useMediaQuery } from '@mui/material';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import image from '../../img/author.jpg'
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const articles = [
    {
        topic: 'Mount Everest Is The Tallest Mountain In The World',
        description: 'Mount Everest is the tallest mountain in the world, with a peak that stands at 8,848 meters (29,031 feet) above sea level. It is located in the Himalayas, on the border between Nepal and China.',
        imgPath:
            'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        topic: 'The Solar System',
        description: 'The solar system is a vast collection of objects that orbit the Sun. It includes the Sun, eight planets, dwarf planets, moons, asteroids, comets, and dust.',
        imgPath:
            'https://media.istockphoto.com/id/1295851454/photo/earth-and-solar-system-planets.jpg?s=612x612&w=0&k=20&c=OKx3C55qBrlC7LISNSnUngKyaNrzLOOE2btTcITVaLs=',
    },
    {
        topic: 'Bali, Indonesia',
        description: 'Bali is an island in Indonesia that is known for its beautiful beaches, lush rice paddies, and vibrant culture. The island is home to a mix of Hindu and Muslim influences, and this is reflected in the architecture, art, and music of Bali.',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        topic: 'The Amazon Rainforest',
        description: 'The Amazon rainforest is the largest rainforest in the world. It is home to a vast array of life, including trees, plants, animals, and insects. It is home to a vast array of life, including trees, plants, animals, and insects',
        imgPath:
            'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const Slider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = React.useState(0);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const maxSteps = articles.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const elipseHandler = (text) => {
        return text.split(' ').slice(0, 30).join(' ').concat('...');
    }

    const elipseHandlerTopic = (text) => {
        return text.split(' ').slice(0, 5).join(' ').concat('...');
    }

    return (
        <div className='container' style={{ marginTop: "4rem" }}>
            <div className="center">
                <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {articles.map((step, index) => (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <>
                                        {
                                            isMatch ? (
                                                <>
                                                    <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                                        Best Read <StarIcon />
                                                    </Typography>
                                                    <Item sx={{ minHeight: "435px", }}>
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                                    R
                                                                </Avatar>
                                                            }
                                                            title="Izuagbe Samuel Enakhe"
                                                            subheader="June 21st, 2023"
                                                        />
                                                        <CardMedia
                                                            component="img"
                                                            height="194"
                                                            image={step.imgPath}
                                                            alt="Paella dish"
                                                        />
                                                        <CardContent>
                                                            <Typography>
                                                                {
                                                                    elipseHandlerTopic(step.topic)
                                                                }
                                                            </Typography>
                                                            <span style={{ color: "#1976D2" }}>Technology</span>
                                                        </CardContent>
                                                        <CardActions disableSpacing>
                                                            <div>
                                                                <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                                                    <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                                                    <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                                                    <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                                                </BottomNavigation>
                                                            </div>
                                                            <ExpandMore
                                                                expand={expanded}
                                                                onClick={handleExpandClick}
                                                                aria-expanded={expanded}
                                                                aria-label="show more"
                                                            >
                                                                <ExpandMoreIcon />
                                                            </ExpandMore>
                                                        </CardActions>
                                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                            <CardContent>
                                                                <Typography paragraph>Method:</Typography>
                                                                <Typography paragraph>
                                                                    {
                                                                        elipseHandler(step.description)
                                                                    }
                                                                </Typography>
                                                            </CardContent>
                                                        </Collapse>
                                                    </Item>
                                                </>
                                            ) : (
                                                <>
                                                        <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                                            Best Read <StarIcon />
                                                        </Typography>
                                                    <Card key={index} sx={{ display: 'flex' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="220"
                                                            image={step.imgPath}
                                                            alt="Paella dish"
                                                            sx={{ objectFit: "cover", width: "100%" }} />
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                                <Typography component="div" variant="h4">
                                                                    {
                                                                        elipseHandlerTopic(step.topic)
                                                                    }
                                                                </Typography>
                                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                                    {
                                                                        elipseHandler(step.description)
                                                                    }
                                                                </Typography>
                                                            </CardContent>
                                                        </Box>
                                                    </Card>
                                                </>

                                            )
                                        }
                                    </>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
        </div>
    )
};

export default Slider