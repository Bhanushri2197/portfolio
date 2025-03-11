export const fadeIn = (direction, delay) => {
    return{
        hidden:{
            y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
            x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0,
        },
        show : {
            y: 0,
            x: 0,
            opacity : 1,
            transition: {
                delay: delay,
                type: 'tween',
                ease: [0.25, 0.25, 0.25, 0.75],
                duration: 1
            }
        }
    }
}