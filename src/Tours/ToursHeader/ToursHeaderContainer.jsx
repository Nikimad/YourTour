import { useState } from "react";
import ToursHeader from "./ToursHeader";

const ToursHeaderContainer = () => {
    const [active, setActive] = useState('popular');

    return (
        <>
            <ToursHeader active={active} setActive={setActive}/>
        </>
    );
};

export default ToursHeaderContainer;