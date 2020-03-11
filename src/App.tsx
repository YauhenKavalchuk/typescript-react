import React, { Component } from 'react';

/*
// --------- useState ---------
// Inferred as number
const [value, setValue] = useState(0);

// Explicitly setting the types
const [value, setValue] = useState<number | undefined>(undefined);
const [value, setValue] = useState<Array<number>>([]);

interface IUser {
  name: string;
  age?: number;
}
const [value, setValue] = useState<IUser>({ name: 'Yauhen' });

// --------- useRef ---------
const ref1 = useRef<HTMLElement>(null!);
const ref2 = useRef<HTMLElement | null>(null);

// --------- useContext ---------
interface ITheme {
  backgroundColor: string;
  color: string;
}

// Context creation
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
})

// Accessing context in a child component
const themeContext = useContext<ITheme>(ThemeContext);

// --------- useReducer ---------

interface State { count: number; }

type Action = { type: 'increment' | 'decrement' }

const counterReducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment': return { count: count + 1 };
    case 'decrement': return { count: count - 1 };
    default: return {};
  }
};

const [state, dispatch] = useReducer(counterReducer, { count: 0 });

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });

// --------- useCallback & useMemo ---------
// Callback
// Inferred as number
const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);

// Memo
// Inferred as (value1: number, value2: number) => number
const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);

// --------- useEffect & useLayoutEffect ---------
useEffect(() => {
  const subscriber = subscribe(options);
  return () => {
    unsubscribe(subscriber)
  };
}, [options]);

*/

const App:React.FC = () => null;

export default App;
