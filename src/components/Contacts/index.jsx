import React from 'react';
import s from './style.module.sass';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'; 

export default function Contacts() {
  return (
   
    <div className={['wrapper', s.contacts].join(' ')}>
        <div className={s.contacts_phone}>
            <p>Contacts</p>
            <p>+7 999 999 99 99</p>
            <div>
                <a href='instargam' >
                    <InstagramOutlined />
                </a>
                <a href='whatsApp'>
                    <WhatsAppOutlined />
                </a>  
            </div>
             
        </div>

        <div className={s.contacts_address}>
            <p className={s.address}>Address</p>
            <p className={s.address_street}>Cosmonauts <br/> Proezd Kosmonavtov, 11</p>
            <p className={s.work_schedule}>Work schedule</p>
            <p className={s.hour_work}>A 24-hour work schedule </p>
        </div>
        
    </div>
  )
}
