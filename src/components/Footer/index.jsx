import React from 'react';
import s from './style.module.sass';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'; 

export default function Footer() {
  return (
   
    <div className={['wrapper', s.contacts_block].join(' ')}>
        <div className={s.contacts_phone}>
            <p className={s.contacts_title}>Contacts</p>
            <p className={s.phone}>+7 999 999 99 99</p>
            
            <div className={s.social}>
                <div className={s.insta}>
                    <a href='instargam'><InstagramOutlined /></a>
                    <p>Instagram</p>
                </div>
                <div className={s.whatsApp}>
                    <a href='whatsApp'><WhatsAppOutlined /></a> 
                    <p>WhatsApp</p>
                </div>
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
