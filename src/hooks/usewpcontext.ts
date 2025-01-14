
import WPContext from '@/context/wp-context';
import { IWPContext } from '@/types/iwp-context';
import { useContext } from 'react';

export const useWPContext = (): IWPContext => {
  const context = useContext(WPContext);
  if (!context) {
    throw new Error('useWPContext must be used within a WPContext Provider');
  }
  return context;
};