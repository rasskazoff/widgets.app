import { React, useState, useEffect } from 'react';
import {Card, Box, CardContent, Switch, Button, Input} from '@mui/material';
import { Title } from 'react-admin';
import axios from 'axios'
import WidgetsApp from './components/widgets/main'

const domian = 'http://localhost:5000'

const Settings = (props) => {
    const userID = props.userID
    const [ data, setData ] = useState(false)
    
    useEffect(() => {
    const getWidgetsData = async (userID) => {
        try {
          const response = await axios.get(`${domian}/api/getUserData/?id=${userID}`)
          return (
            setData(response.data)
            )
        } catch (error) {
          console.error(error)
        }
      }
      getWidgetsData(userID)
    }, [userID])

    
    const setWidgetsData = async (data) => {
        try {
            const response = await axios.post(`${domian}/api/setUserData`,{ data })
            return (
                console.log(response)
            )
        } catch (error) {
            console.error(error)
        }
    }
      
    return (

        <Card>
            {console.log(data)}
            { data ? <WidgetsApp data={data}/> : '' }
            <Title title='Виджеты' />
            <CardContent>
                <Box sx={{ width: '100%', display: 'inline-block' }}>
                    Ваш код для установки на сайт: 
                </Box>
                <Input sx={{ width: '100%', display: 'inline-block' }} value={`<script async id="widgets" src="${domian}/api/getWidgets?${userID}"></script>`}></Input>
            </CardContent>
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    Виджет WhatsApp
                </Box>
                <Switch checked={data ? data.widgets.wa.state : false}
                        onChange={() => {
                            setData(data => ({
                                ...data, widgets : {
                                    ...data.widgets, wa : {
                                        ...data.widgets.wa, state : data.widgets.wa.state ? false : true
                                    }
                                }
                            }))
                        }} />
            </CardContent>
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    Расположение
                </Box>
                слева
                <Switch checked={data ? (data.widgets.wa.settings.position == 'right' ? true : false) : false}
                        onChange={() => {
                            setData(data => ({
                                ...data, widgets : {
                                    ...data.widgets, wa : {
                                        ...data.widgets.wa, settings : {
                                            ...data.widgets.wa.settings, position : data.widgets.wa.settings.position == 'right' ? 'left' : 'right'
                                        }
                                    }
                                }
                            }))
                        }} />
                справа
                
            </CardContent>

            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    Виджет телефон
                </Box>
                <Switch checked={data ? data.widgets.phone.state : false}
                        onChange={() => {
                            setData(data => ({
                                ...data, widgets : {
                                    ...data.widgets, phone : {
                                        ...data.widgets.phone, state : data.widgets.phone.state ? false : true
                                    }
                                }
                            }))
                        }} />
        
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    Расположение
                </Box>
                слева
                <Switch checked={data ? (data.widgets.phone.settings.position == 'right' ? true : false) : false}
                        onChange={() => {
                            setData(data => ({
                                ...data, widgets : {
                                    ...data.widgets, phone : {
                                        ...data.widgets.phone, settings : {
                                            ...data.widgets.phone.settings, position : data.widgets.phone.settings.position == 'right' ? 'left' : 'right'
                                        }
                                    }
                                }
                            }))
                        }} />
                справа
                
                <Button sx={{background: 'green'}} onClick={() => {
                        setData(data => ({
                            ...data, widgets : {
                                ...data.widgets, phone : {
                                    ...data.widgets.phone, settings : {
                                        ...data.widgets.phone.settings, color : 'green'
                                    }
                                }
                            }
                        }))
                    }}>green</Button>
                <Button sx={{background: 'blue'}} onClick={() => {
                        setData(data => ({
                            ...data, widgets : {
                                ...data.widgets, phone : {
                                    ...data.widgets.phone, settings : {
                                        ...data.widgets.phone.settings, color : 'blue'
                                    }
                                }
                            }
                        }))
                    }}>blue</Button>
            </CardContent>

            <CardContent>
                <Button onClick={() => {
                        setWidgetsData(data)
                    }}>Применить</Button>
            </CardContent>
        </Card>
    );
};

export default Settings;