import { Container, Scroll } from "./styles";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { useState, useRef } from 'react'

export function Section({ data, title, children }) {
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    let scrl = useRef(null);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
    
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
      };

      const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);

        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
      };

    return (
        <Container>
            <h2>{ title }</h2>

            <Scroll>
                {scrollX !== 0 && (
                    <button 
                    className="btn-left"
                    onClick={() => slide(-150)}
                    >
                        <RiArrowLeftSLine/>
                    </button>
                )}

                <div ref={scrl} onScroll={scrollCheck}>
                    {children}
                </div>


                {!scrolEnd && (
                    <button 
                    className="btn-right"
                    onClick={() => slide(+150)}
                    >
                        <RiArrowRightSLine/>
                    </button>
                )}

            </Scroll>

        </Container>
    );
};