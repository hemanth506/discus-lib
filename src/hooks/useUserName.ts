import { useContext } from 'react'
import { UserNameContext } from '../Discus'

export const useUserName = (): string => {
  return useContext(UserNameContext);
}
