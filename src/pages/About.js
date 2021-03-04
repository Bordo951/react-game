import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h2 className="about__title">About the game</h2>
                <div className="about__content">
                    <p className="about__description">
                        Tic-tac-toe is a logic game between two opponents on a 3x3 or larger square field. The game can be customized.
                        On the settings page, you can:
                    </p>
                    <ol className="about__list">
                        <li className="about__item">Choose who will go first: "X" or "O";</li>
                        <li className="about__item">On the "Game Mode" tab, you can choose who you want to play with:
                            <ul>
                                <li>with a friend, with a virtual opponent, or start autoplay</li>
                                <li>with a virtual opponent, or start autoplay</li>
                                <li>start autoplay</li>
                            </ul>
                        </li>
                        <li className="about__item">In the "Game Sounds" section, you can adjust the volume of the background music or turn on/off it.</li>
                        <li className="about__item">If you are bored with the "classic" tic-tac-toe, on the "Chips style" tab you can change the theme of the chips.</li>
                        <li className="about__item">Think you're a tic-tac-toe pro? You can increase the difficulty level in the "Levels" section by selecting a field of a suitable size:
                            <ul>
                                <li>5 х 5</li>
                                <li>7 х 7</li>
                                <li>9 х 9</li>
                            </ul>
                        </li>
                        <li className="about__item">Hot key to control the playing field
                            <ul>
                                <li>'ENTER' - сlick on buttons 'New game' or 'Game over'</li>
                                <li>'SPACE' - placing a chip in a cell</li>
                                <li>&larr; &uarr; &rarr; &darr; - arrows will help you move around the field</li>
                            </ul>
                        </li>
                    </ol>
                    <p className="about__description">
                        <b>Attention!</b> All the specified settings will be implemented only after the launch of <b>the New game</b>.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
