'use client';
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ActivationParams } from '../../../../../hooks/useCreateUser'
import { activateUser } from '../../../../../hooks/useCreateUser'


const Activation = () => {
  const activationParams = useParams<ActivationParams>()
  useEffect(
    () => {
      activateUser(activationParams);
    },[]
  )
  return (
    <div>User is Activated</div>
  )
}

export default Activation