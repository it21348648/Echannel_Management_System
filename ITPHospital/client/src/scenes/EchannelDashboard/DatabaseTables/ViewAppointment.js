import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ViewAppointment(){
    const [appointments, setAppointments] = useState([]);

    useEffect(() => 
        async function getAppointmentDetails(){
            try{
                const res = await axios.get('');
                setAppointments(res.data);
            } catch ()
        })
}