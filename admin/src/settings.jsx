import { React, useState, useEffect } from 'react';
import {Card, Box, CardContent, Switch, Button, Input} from '@mui/material';
import Radio from '@mui/material/Radio';
import { Title } from 'react-admin';
import axios from 'axios'
import WidgetsApp from './components/widgets/main'

const domian = `http://${location.hostname}:5000`
//const domian = 'http://95.163.235.185:5000'

const Settings = (props) => {
    const userID = props.userID
    const [ data, setData ] = useState(false)

    //цвет виджета телефона
    const handleChange = (event) => {
        setData(data => ({
            ...data, widgets : {
                ...data.widgets, phone : {
                    ...data.widgets.phone, settings : {
                        ...data.widgets.phone.settings, color : event.target.value
                    }
                }
            }
        }))
    }

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
            {(data ? data.widgets.wa.state : false) &&
                <CardContent sx={{background:'#fafafa'}}>
                    <CardContent>
                        <Box sx={{ width: '10em', display: 'inline-block' }}>
                            Номер телефона
                        </Box>
                        <Input
                            placeholder='7 (999) 999 99 99'
                            type="tel"
                            onChange={(event) => {                            
                                let phone = event.target.value.replace(/[^0-9]/g,"")
                                setData(data => ({
                                    ...data, widgets : {
                                        ...data.widgets, wa : {
                                            ...data.widgets.wa, settings : {
                                                ...data.widgets.wa.settings, number : phone
                                            }
                                        }
                                    }
                                }))
                            }}
                        >
                        </Input>
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
                </CardContent>
            }

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
            </CardContent>
               
            {(data ? data.widgets.phone.state : false) &&
                <CardContent sx={{background:'#fafafa'}}>
                    <CardContent>
                        <Box sx={{ width: '10em', display: 'inline-block' }}>
                            Номер телефона
                        </Box>
                        <Input
                            placeholder='7 (999) 999 99 99'
                            type="tel"
                            onChange={(event) => {                            
                                let phone = event.target.value.replace(/[^0-9]/g,"")
                                setData(data => ({
                                    ...data, widgets : {
                                        ...data.widgets, phone : {
                                            ...data.widgets.phone, settings : {
                                                ...data.widgets.phone.settings, number : phone
                                            }
                                        }
                                    }
                                }))
                            }}
                            >
                        </Input>
                    </CardContent>
                    <CardContent>
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
                    </CardContent>
                    <CardContent>
                        <Box sx={{ width: '10em', display: 'inline-block' }}>
                            Цвет
                        </Box>

                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'red' : false}
                        onChange={handleChange}
                        value="red"
                        name="color"
                    />
                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'blue' : false}
                        onChange={handleChange}
                        value={'blue'}
                        sx={{ color: 'blue' }}
                        name="color"
                    />
                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'green' : false}
                        onChange={handleChange}
                        value={'green'}
                        sx={{ color: 'green'}}
                        name="color"
                    />
                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'yellow' : false}
                        onChange={handleChange}
                        value={'yellow'}
                        sx={{ color: 'yellow' }}
                        name="color"
                    />
                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'black' : false}
                        onChange={handleChange}
                        value={'black'}
                        sx={{ color: 'black' }}
                        name="color"
                    />
                    <Radio
                        checked={data ? data.widgets.phone.settings.color == 'purple' : false}
                        onChange={handleChange}
                        value={'purple'}
                        sx={{ color: 'purple' }}
                        name="color"
                    />
                    </CardContent>
                </CardContent>
            }
            <CardContent>
                <Button onClick={() => {
                        setWidgetsData(data)
                    }}>Применить</Button>
            </CardContent>
        </Card>
    );
};

export default Settings;
