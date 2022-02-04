import { useContext, createContext, ReactChildren } from 'react';
import { useMachine } from '@xstate/react';
import searchMachine from './search-state-machine';

interface SearchMachineProviderProps {
  children: any;
}

const SearchContext = createContext<any>(null);

export const useSearchMachine = () => useContext(SearchContext);

function SearchMachineProvider({ children }: SearchMachineProviderProps) {
  const machine = useMachine(searchMachine, { devTools: true });
  return <SearchContext.Provider value={machine}>{children}</SearchContext.Provider>;
}

export default SearchMachineProvider;
