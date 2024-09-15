import SarcasticLaughs from '/assets/images/dudes-a-guy-who-likes-to-give-sarcastic-laughs.png'
import BlinkingCharacter from '/assets/images/dudes-blinking-doodle-character.png'
import LaughingThrowHeadBack from '/assets/images/dudes-doodle-character-laughing-throwing-his-head-back.png'
import GentlemanRaisesGlass from '/assets/images/dudes-gentleman-in-suit-raising-his-glass.png'
import ManInHatCondescending from '/assets/images/dudes-man-in-hat-looking-condescending.png'
import ManPointingAtSomething from '/assets/images/dudes-man-with-glass-pointing-at-something.png'

export function RandomImage() {
    const MAX_NO_OF_IMAGES = 6
    const currentImage = Math.floor(Math.random() * MAX_NO_OF_IMAGES);
    return <div>
        <img className={currentImage !== 0 ? 'hidden' : ''}
             src={SarcasticLaughs} alt={'funny-illustration-1'}/>
        <img className={currentImage !== 1 ? 'hidden' : ''}
             src={BlinkingCharacter} alt={'funny-illustration-2'}/>
        <img className={currentImage !== 2 ? 'hidden' : ''}
             src={LaughingThrowHeadBack}
             alt={'funny-illustration-3'}/>
        <img className={currentImage !== 3 ? 'hidden' : ''}
             src={GentlemanRaisesGlass} alt={'funny-illustration-4'}/>
        <img className={currentImage !== 4 ? 'hidden' : ''}
             src={ManInHatCondescending} alt={'funny-illustration-5'}/>
        <img className={currentImage !== 5 ? 'hidden' : ''}
             src={ManPointingAtSomething} alt={'funny-illustration-6'}/>
    </div>
}