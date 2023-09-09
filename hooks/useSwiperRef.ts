import {useState, useRef, useEffect} from 'react';
import SwiperCore from "swiper";

const UseSwiperRef = () => {
    const [wrapper, setWrapper] = useState<SwiperCore>(null)
    const ref = useRef<null | SwiperCore>(null)

    useEffect(() => {
        setWrapper(ref.current)
    }, [ref, wrapper])

    return [
        wrapper,
        ref
    ]
};

export default UseSwiperRef;