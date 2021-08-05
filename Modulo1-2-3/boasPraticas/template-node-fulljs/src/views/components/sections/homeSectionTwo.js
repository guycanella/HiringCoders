import Bg2 from '../../../assets/images/background/stormtrooper.jpg';
import darthVader from '../../../assets/images/elements/vader.png';
import footer from '../footer';

let textContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

let HomeSectionTwo = `
    <section class="section background--one" style="background-image: url(${Bg2});">
        <div class="container block-section--two">
            <img src=${darthVader} alt="Vader />
            <div class="text-block--two">
                <p>${textContent}</p>
            </div>
        </div>
        ${footer}
    </section>
`;

export default HomeSectionTwo;