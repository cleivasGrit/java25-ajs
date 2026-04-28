import { animate } from "animejs";


export function startAnimation(){
    animate('div', {
        // Animatable properties
        backgroundColor: 'hsl(300, 76%, 72%)',
        borderRadius: '50%',
        translateX: '100%',
    
        // Playback settings
        duration: 1000,
        ease: 'inOut',
        loop: true,
        alternate: true,
    });
}
