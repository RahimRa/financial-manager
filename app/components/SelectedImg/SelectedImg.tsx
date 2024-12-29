'use client'

import React from 'react'
import autoImg from '../../img/auto.png'
import entertaimentImg from '../../img/bar.png'
import foodImg from '../../img/gemuse.png'
import presentImg from '../../img/geschenkbox.png'
import healthImg from '../../img/health-and-care.png'
import housingImg from '../../img/home-button.png'
import restaurantImg from '../../img/nudeln.png'
import transportImg from '../../img/metro.png'
import clothImg from '../../img/t-shirt.png'
import taxiImg from '../../img/taxi.png'
import communicationImg from '../../img/telefon.png'
import hygieneImg from '../../img/zahnpasta.png'
import sportImg from '../../img/yoga.png'
import petsImg from '../../img/tier.png'
import defaultImg from '../../img/image-editing.png'
import proCompImg from '../../img/ProComp.png'
import scherdelImg from '../../img/Scherdel.png'
import unitedInternetImg from '../../img/UnitedInternet.png'
import Image from 'next/image'

interface Props {
  option: string
}



export const SelectedImg = ({ option }: Props) => {
  const arr = [
    { title: 'ProComp', img: proCompImg },
    { title: 'SCHERDEL', img: scherdelImg },
    { title: 'United Internet', img: unitedInternetImg },
    { title: 'Auto', img: autoImg },
    { title: 'Entertaiment', img: entertaimentImg },
    { title: 'Food', img: foodImg },
    { title: 'Present', img: presentImg },
    { title: 'Health', img: healthImg },
    { title: 'Housing', img: housingImg },
    { title: 'Restaurant', img: restaurantImg },
    { title: 'Transport', img: transportImg },
    { title: 'Cloth', img: clothImg },
    { title: 'Taxi', img: taxiImg },
    { title: 'Communication', img: communicationImg },
    { title: 'Hygiene', img: hygieneImg },
    { title: 'Sport', img: sportImg },
    { title: 'Pets', img: petsImg },
  ]

  const findImg = arr.find((item) => item.title === option)?.img || defaultImg

  return <Image src={findImg.src} alt={option} width={70} height={70} />
}
