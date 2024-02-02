'use client';

import { useContext } from "react";
import { HowIBuiltThisContext } from "./context-providers/HowIBuiltThisProvider";

export default function HowIBuiltThisToggle() {
    const { useHowIBuiltThis, setUseHowIBuiltThis } = useContext(HowIBuiltThisContext);
    const text = `Turn ${useHowIBuiltThis ? 'Off' : 'On'} How I Built This`;

    const handleClick = (event: React.MouseEvent) => {
        event?.stopPropagation();
        setUseHowIBuiltThis(useHowIBuiltThis ? false : true);
    }

    return (
        <button className='position-absolute' style={{ bottom: '10px', right: '10px' }} onClick={ handleClick }>
            { text }
        </button>
    );
  }
