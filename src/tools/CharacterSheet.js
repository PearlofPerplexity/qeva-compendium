import React, { useContext } from 'react';
import diamondShape from '../assets/imgs/diamond-shape.png';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterSheet = React.forwardRef((props, ref) => {

    const [character, setCharacter] = useContext(CharacterContext);

    const { 
        STR, 
        DEX, 
        CON, 
        INT, 
        WIS, 
        CHA 
    } = character;

    return (
<form className="charsheet" ref={ref}>
<header>
    <section className="charname">
    <label htmlFor="charname">Character Name</label><input name="charname" placeholder="Thelmiel" />
    </section>
    <section className="misc">
    <ul>
        <li>
        <label htmlFor="classlevel">Class & Level</label><input name="classlevel" placeholder="Oracle 7" />
        </li>
        <li>
        <label htmlFor="background">Gemstone</label><input name="background" placeholder="Tanzanite" />
        </li>
        <li>
        <label htmlFor="playername">Player Name</label><input name="playername" placeholder="Kyle O'Brien" />
        </li>
        <li>
        <label htmlFor="race">Race</label><input name="race" placeholder="Aviame" />
        </li>
        <li>
        <label htmlFor="alignment">Alignment</label><input name="alignment" placeholder="Chaotic Neutral" />
        </li>
        <li>
        <label htmlFor="experiencepoints">Experience Points</label><input name="experiencepoints" placeholder="1337" />
        </li>
    </ul>
    </section>
</header>
<main>
    <section>
    <section className="attributes">
        <div className="scores">
        <ul>
            <li>
            <div className="score">
                <label htmlFor="Strengthscore">Strength</label><input name="Strengthscore" placeholder={STR} className="stat"/>
            </div>
            <div className="modifier">
                <input name="Strengthmod" placeholder="+0" className="statmod"/>
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Dexterityscore">Dexterity</label><input name="Dexterityscore" placeholder="10" className="stat"/>
            </div>
            <div className="modifier">
                <input name="Dexteritymod" placeholder="+0" className="statmod" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Constitutionscore">Constitution</label><input name="Constitutionscore" placeholder="10" className="stat"/>
            </div>
            <div className="modifier">
                <input name="Constitutionmod" placeholder="+0" className="statmod"/>
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Wisdomscore">Wisdom</label><input name="Wisdomscore" placeholder="10" className="stat"/>
            </div>
            <div className="modifier">
                <input name="Wisdommod" placeholder="+0" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Intelligencescore">Intelligence</label><input name="Intelligencescore" placeholder="10" className="stat"/>
            </div>
            <div className="modifier">
                <input name="Intelligencemod" placeholder="+0" className="statmod"/>
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Charismascore">Charisma</label><input name="Charismascore" placeholder="10" className="stat"/>
            </div>
            <div className="modifier">
                <input name="Charismamod" placeholder="+0" className="statmod"/>
            </div>
            </li>
        </ul>
        </div>
        <div className="attr-applications">
        <div className="inspiration box">
            <div className="label-container">
            <label htmlFor="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" type="checkbox" />
        </div>
        <div className="proficiencybonus box">
            <div className="label-container">
            <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" placeholder="+2" />
        </div>
        <div className="saves list-section box">
            <ul>
            <li>
                <label htmlFor="Strength-save">Strength</label><input name="Strength-save" placeholder="+0" type="text" /><input name="Strength-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Dexterity-save">Dexterity</label><input name="Dexterity-save" placeholder="+0" type="text" /><input name="Dexterity-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Constitution-save">Constitution</label><input name="Constitution-save" placeholder="+0" type="text" /><input name="Constitution-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Wisdom-save">Wisdom</label><input name="Wisdom-save" placeholder="+0" type="text" /><input name="Wisdom-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Intelligence-save">Intelligence</label><input name="Intelligence-save" placeholder="+0" type="text" /><input name="Intelligence-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Charisma-save">Charisma</label><input name="Charisma-save" placeholder="+0" type="text" /><input name="Charisma-save-prof" type="checkbox" />
            </li>
            </ul>
            <div className="label">
            Saving Throws
            </div>
        </div>
        <div className="skills list-section box">
            <ul>
            <li>
                <label htmlFor="Acrobatics">Acrobatics <span className="skill">(Dex)</span></label><input name="Acrobatics-skill" placeholder="+0" type="text" /><input name="Acrobatics-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Animal Handling">Animal Handling <span className="skill">(Wis)</span></label><input name="AnimalHandling-skill" placeholder="+0" type="text" /><input name="Animal Handling-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Arcana">Arcana <span className="skill">(Int)</span></label><input name="Arcana-skill" placeholder="+0" type="text" /><input name="Arcana-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Athletics">Athletics <span className="skill">(Str)</span></label><input name="Athletics-skill" placeholder="+0" type="text" /><input name="Athletics-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Deception">Deception <span className="skill">(Cha)</span></label><input name="Deception-skill" placeholder="+0" type="text" /><input name="Deception-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="History">History <span className="skill">(Int)</span></label><input name="History-skill" placeholder="+0" type="text" /><input name="History-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Insight">Insight <span className="skill">(Wis)</span></label><input name="Insight-skill" placeholder="+0" type="text" /><input name="Insight-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Intimidation">Intimidation <span className="skill">(Cha)</span></label><input name="Intimidation-skill" placeholder="+0" type="text" /><input name="Intimidation-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Investigation">Investigation <span className="skill">(Int)</span></label><input name="Investigation-skill" placeholder="+0" type="text" /><input name="Investigation-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Medicine">Medicine <span className="skill">(Wis)</span></label><input name="Medicine-skill" placeholder="+0" type="text" /><input name="Medicine-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Nature">Nature <span className="skill">(Int)</span></label><input name="Nature-skill" placeholder="+0" type="text" /><input name="Nature-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Perception">Perception <span className="skill">(Wis)</span></label><input name="Perception-skill" placeholder="+0" type="text" /><input name="Perception-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Performance">Performance <span className="skill">(Cha)</span></label><input name="Performance-skill" placeholder="+0" type="text" /><input name="Performance-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Persuasion">Persuasion <span className="skill">(Cha)</span></label><input name="Persuasion-skill" placeholder="+0" type="text" /><input name="Persuasion-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Religion">Religion <span className="skill">(Int)</span></label><input name="Religion-skill" placeholder="+0" type="text" /><input name="Religion-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Sleight of Hand">Sleight of Hand <span className="skill">(Dex)</span></label><input name="SleightofHand-skill" placeholder="+0" type="text" /><input name="Sleight of Hand-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Stealth">Stealth <span className="skill">(Dex)</span></label><input name="Stealth-skill" placeholder="+0" type="text" /><input name="Stealth-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Survival">Survival <span className="skill">(Wis)</span></label><input name="Survival-skill" placeholder="+0" type="text" /><input name="Survival-prof" type="checkbox" />
            </li>
            </ul>
            <div className="label">
            Skills
            </div>
        </div>
        </div>
    </section>
    <div className="passive-perception box">
        <div className="label-container">
        <label htmlFor="passiveperception">Passive Perception (Wisdom)</label>
        </div>
        <input name="passiveperception" placeholder="10" />
    </div>
    <div className="otherprofs box textblock">
        <label htmlFor="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
    </div>
    </section>
    <section>
    <section className="combat">
        <div className="armorclass">
            <div>
                <label htmlFor="ac">Armor Class</label><input name="ac" placeholder="10" type="text" />
            </div>
        </div>
        <div className="initiative">
            <div>
                <label htmlFor="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" />
            </div>
        </div>
        <div className="speed">
            <div>
                <label htmlFor="speed">Speed</label><input name="speed" placeholder="30" type="text" />
            </div>
        </div>
        <div className="hp">
        <div className="regular">
            <div className="max">
            <label htmlFor="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
            </div>
            <div className="current">
            <label htmlFor="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
            </div>
        </div>
        <div className="temporary">
            <label htmlFor="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
        </div>
        </div>
        <div className="hitdice">
        <div>
            <div className="total">
            <label htmlFor="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" />
            </div>
            <div className="remaining">
            <label htmlFor="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
            </div>
        </div>
        </div>
        <div className="deathsaves">
        <div>
            <div className="label">
            <label>Death Saves</label>
            </div>
            <div className="marks">
            <div className="deathsuccesses">
                <div className="bubbles">
                <input name="deathsuccess1" type="checkbox" />
                <input name="deathsuccess2" type="checkbox" />
                <input name="deathsuccess3" type="checkbox" />
                </div>
                <label>Success</label>
            </div>
            <div className="deathfails">
                <div className="bubbles">
                <input name="deathfail1" type="checkbox" />
                <input name="deathfail2" type="checkbox" />
                <input name="deathfail3" type="checkbox" />
                </div>
                <label>Failure</label>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="attacksandspellcasting">
        <div>
        <label>Attacks & Spellcasting</label>
        <table>
            <thead>
            <tr>
                <th>
                Name
                </th>
                <th>
                Atk Bonus
                </th>
                <th>
                Damage/Type
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                <input name="atkname1" type="text" />
                </td>
                <td>
                <input name="atkbonus1" type="text" />
                </td>
                <td>
                <input name="atkdamage1" type="text" />
                </td>
            </tr>
            <tr>
                <td>
                <input name="atkname2" type="text" />
                </td>
                <td>
                <input name="atkbonus2" type="text" />
                </td>
                <td>
                <input name="atkdamage2" type="text" />
                </td>
            </tr>
            <tr>
                <td>
                <input name="atkname3" type="text" />
                </td>
                <td>
                <input name="atkbonus3" type="text" />
                </td>
                <td>
                <input name="atkdamage3" type="text" />
                </td>
            </tr>
            </tbody>
        </table>
        <textarea></textarea>
        </div>
    </section>
    <section className="equipment">
        <div>
        <label>Equipment</label>
        <div className="money">
            <ul>
            <li>
                <label htmlFor="cp">cp</label><input name="cp" />
            </li>
            <li>
                <label htmlFor="sp">sp</label><input name="sp" />
            </li>
            <li>
                <label htmlFor="ep">ep</label><input name="ep" />
            </li>
            <li>
                <label htmlFor="gp">gp</label><input name="gp" />
            </li>
            <li>
                <label htmlFor="pp">pp</label><input name="pp" />
            </li>
            </ul>
        </div>
        <textarea placeholder="Equipment list here"></textarea>
        </div>
    </section>
    </section>
    <section>
    <section className="gem">
        <h6>Gemstone Alignment</h6>
        <div className="gemstone-alignment box">
        <input name="firstgem" placeholder="Diamond (Love)" className="label-container" />
        <div className="gemOne">
            <input name="firstgemscore" placeholder="5" className="gemOne" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
        <div className="gemstone-alignment box">
        <input name="firstgem" placeholder="Quartz (Strength)" className="label-container" />
        <div className="gemOne">
            <input name="firstgemscore" placeholder="5" className="gemOne" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
        <div className="extra-gemstones box">
        <div className="gemOne">
            <input name="firstgemscore" placeholder="0" className="gemScore" />
            <input name="firstgemscore" placeholder="DEX" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" placeholder="0" className="gemScore" />
            <input name="firstgemscore" placeholder="CON" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" placeholder="0" className="gemScore" />
            <input name="firstgemscore" placeholder="WIS" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" placeholder="0" className="gemScore" />
            <input name="firstgemscore" placeholder="INT" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" placeholder="0" className="gemScore" />
            <input name="firstgemscore" placeholder="CHA" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
    </section>
    <section className="flavor">
        <div className="personality">
        <label htmlFor="personality">Personality</label><textarea name="personality"></textarea>
        </div>
        <div className="ideals">
        <label htmlFor="ideals">Ideals</label><textarea name="ideals"></textarea>
        </div>
        <div className="flaws">
        <label htmlFor="flaws">Flaws</label><textarea name="flaws"></textarea>
        </div>
    </section>
    <section className="features">
        <div>
        <label htmlFor="features">Features & Traits</label><textarea name="features"></textarea>
        </div>
    </section>
    </section>
</main>
</form>

    );
});

export default CharacterSheet;