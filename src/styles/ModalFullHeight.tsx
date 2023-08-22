import { cloneElement, useRef, useEffect } from 'react';

import useOutsideAlerter from '../hooks/useOutside';
import { useWindowSize } from 'usehooks-ts';

interface ModalProps {
    active: boolean;
    closeModal: () => void;
    children: JSX.Element;
    width?: string;
    zindex?: any;
    minHeight?: string;
    isSubModal?: boolean;
}

export default function ModalFullHeight({
    active,
    closeModal,
    children,
    width = 'w-3/4',
    zindex,
    minHeight,
    isSubModal = false,
}: ModalProps) {
    const container = useRef(null);
    useOutsideAlerter({ ref: container, callback: () => closeModal() });
    const { height: windowHeight } = useWindowSize();

    useEffect(() => {
        if (active && !minHeight) {
            document.body.classList.add('no-scroll');
        }
        return () => {
            if (!isSubModal) {
                document.body.classList.remove('no-scroll');
            }
        };
    }, [active]);

    const style = {
        minHeight: minHeight ? minHeight : windowHeight ? windowHeight : '100%',
        zIndex: zindex ? zindex : 1,
    };

    return (
        <>
            {active && (
                <div
                    style={style}
                    className={`flex ${minHeight ? "items-start pt-20 pb-20 absolute" : "items-center fixed"}  border-int-dark-blue border-5  justify-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 backdrop-blur-xs`}
                >
                    <div
                        ref={container}
                        className={`bg-white ${width}  shadow shadow-int-mid-blue h1 `}
                    >
                        {cloneElement(children, { close: closeModal })}
                    </div>
                </div>
            )}
        </>
    );
}
