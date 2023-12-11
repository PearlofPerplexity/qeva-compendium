import React, { useContext } from 'react';
import diamondShape from '../assets/imgs/diamond-shape.png';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterSheetEditable = React.forwardRef((props, ref) => {

    const profBonus = 2; //Always 2 for Level 1

    const [character, setCharacter] = useContext(CharacterContext);

    const { 

        //Level
        level,
        //Name
        playerName,
        name,
        //Ability Scores
        str, strMod, strSave,
        dex, dexMod, dexSave,
        con, conMod, conSave,
        int, intMod, intSave,
        wis, wisMod, wisSave,
        cha, chaMod, chaSave,
        //Alignment
        alignment, alignmentType, alignmentGem,
        //Race
        race, subrace, endrace,
        //Class
        myClass, subClass, endclass,
        //Proficiencies and Languages
        profAndLang,
        //Calculations
        ac, init, hp, hitDie, inspiration,
        //Features
        features,
        //Backstory
        personality, ideals, flaws,

    } = character;

    


    return (
<form className="charsheet" ref={ref}>
<header>
    <section className="charname">
    <label htmlFor="charname">Character Name</label><input name="charname" value={name} />
    </section>
    <section className="misc">
    <ul>
        <li>
        <label htmlFor="classlevel">Class & Level</label><input name="classlevel" value={`${endclass && endclass.name} ${level}`} />
        </li>
        <li>
        <label htmlFor="background">Gemstone</label><input name="background" value={alignmentGem && alignmentGem.name} />
        </li>
        <li>
        <label htmlFor="playername">Player Name</label><input name="playername" value={playerName} />
        </li>
        <li>
        <label htmlFor="race">Race</label><input name="race" value={endrace && endrace.singName} />
        </li>
        <li>
        <label htmlFor="alignment">Alignment</label><input name="alignment" value={alignment} />
        </li>
        <li>
        <label htmlFor="experiencepoints">Experience Points</label><input name="experiencepoints" />
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
                <label htmlFor="Strengthscore">Strength</label><input name="Strengthscore" value={str} className="stat" />
            </div>
            <div className="modifier">
                <input name="Strengthmod" value={strMod} className="statmod" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Dexterityscore">Dexterity</label><input name="Dexterityscore" value={dex} className="stat" />
            </div>
            <div className="modifier">
                <input name="Dexteritymod" value={dexMod} className="statmod" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Constitutionscore">Constitution</label><input name="Constitutionscore" value={con} className="stat" />
            </div>
            <div className="modifier">
                <input name="Constitutionmod" value={conMod} className="statmod" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Wisdomscore">Wisdom</label><input name="Wisdomscore" value={wis}className="stat" />
            </div>
            <div className="modifier">
                <input name="Wisdommod" value={wisMod} />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Intelligencescore">Intelligence</label><input name="Intelligencescore" value={int} className="stat" />
            </div>
            <div className="modifier">
                <input name="Intelligencemod" value={intMod} className="statmod" />
            </div>
            </li>
            <li>
            <div className="score">
                <label htmlFor="Charismascore">Charisma</label><input name="Charismascore" value={cha} className="stat" />
            </div>
            <div className="modifier">
                <input name="Charismamod" value={chaMod} className="statmod" />
            </div>
            </li>
        </ul>
        </div>
        <div className="attr-applications">
        <div className="inspiration box">
            <div className="label-container">
            <label htmlFor="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" type="checkbox" checked={inspiration} />
        </div>
        <div className="proficiencybonus box">
            <div className="label-container">
            <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" value='+2' />
        </div>
        <div className="saves list-section box">
            <ul>
            <li>
                <label htmlFor="Strength-save">Strength</label><input name="Strength-save" type="text" value={strSave} /><input name="Strength-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Dexterity-save">Dexterity</label><input name="Dexterity-save" type="text" value={dexSave} /><input name="Dexterity-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Constitution-save">Constitution</label><input name="Constitution-save" type="text" value={conSave} /><input name="Constitution-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Wisdom-save">Wisdom</label><input name="Wisdom-save" type="text" value={wisSave} /><input name="Wisdom-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Intelligence-save">Intelligence</label><input name="Intelligence-save" type="text" value={intSave} /><input name="Intelligence-save-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Charisma-save">Charisma</label><input name="Charisma-save" type="text" value={chaSave} /><input name="Charisma-save-prof" type="checkbox" />
            </li>
            </ul>
            <div className="label">
            Saving Throws
            </div>
        </div>
        <div className="skills list-section box">
            <ul>
            <li>
                <label htmlFor="Acrobatics">Acrobatics <span className="skill">(Dex)</span></label><input name="Acrobatics-skill" type="text" /><input name="Acrobatics-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Animal Handling">Animal Handling <span className="skill">(Wis)</span></label><input name="AnimalHandling-skill" type="text" /><input name="Animal Handling-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Arcana">Arcana <span className="skill">(Int)</span></label><input name="Arcana-skill" type="text" /><input name="Arcana-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Athletics">Athletics <span className="skill">(Str)</span></label><input name="Athletics-skill" type="text" /><input name="Athletics-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Deception">Deception <span className="skill">(Cha)</span></label><input name="Deception-skill" type="text" /><input name="Deception-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="History">History <span className="skill">(Int)</span></label><input name="History-skill" type="text" /><input name="History-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Insight">Insight <span className="skill">(Wis)</span></label><input name="Insight-skill" type="text" /><input name="Insight-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Intimidation">Intimidation <span className="skill">(Cha)</span></label><input name="Intimidation-skill" type="text" /><input name="Intimidation-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Investigation">Investigation <span className="skill">(Int)</span></label><input name="Investigation-skill" type="text" /><input name="Investigation-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Medicine">Medicine <span className="skill">(Wis)</span></label><input name="Medicine-skill" type="text" /><input name="Medicine-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Nature">Nature <span className="skill">(Int)</span></label><input name="Nature-skill" type="text" /><input name="Nature-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Perception">Perception <span className="skill">(Wis)</span></label><input name="Perception-skill" type="text" /><input name="Perception-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Performance">Performance <span className="skill">(Cha)</span></label><input name="Performance-skill" type="text" /><input name="Performance-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Persuasion">Persuasion <span className="skill">(Cha)</span></label><input name="Persuasion-skill" type="text" /><input name="Persuasion-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Religion">Religion <span className="skill">(Int)</span></label><input name="Religion-skill" type="text" /><input name="Religion-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Sleight of Hand">Sleight of Hand <span className="skill">(Dex)</span></label><input name="SleightofHand-skill" type="text" /><input name="Sleight of Hand-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Stealth">Stealth <span className="skill">(Dex)</span></label><input name="Stealth-skill" type="text" /><input name="Stealth-prof" type="checkbox" />
            </li>
            <li>
                <label htmlFor="Survival">Survival <span className="skill">(Wis)</span></label><input name="Survival-skill" type="text" /><input name="Survival-prof" type="checkbox" />
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
        <input name="passiveperception" value={wis} />
    </div>
    <div className="otherprofs box textblock">
        <label htmlFor="otherprofs">Other Proficiencies and Languages</label><textarea className='widthCalc' name="otherprofs" value={profAndLang && profAndLang.join("\n\n")} ></textarea>
    </div>
    </section>
    <section>
    <section className="combat">
        <div className="armorclass">
            <div>
                <label htmlFor="ac">Armor Class</label><input name="ac" type="text" value={ac} />
            </div>
        </div>
        <div className="initiative">
            <div>
                <label htmlFor="initiative">Initiative</label><input name="initiative" type="text" value={init} />
            </div>
        </div>
        <div className="speed">
            <div>
                <label htmlFor="speed">Speed</label><input name="speed" type="text" value={race && race.speed} />
            </div>
        </div>
        <div className="hp">
        <div className="regular">
            <div className="max">
            <label htmlFor="maxhp">Hit Point Maximum</label><input name="maxhp" type="text" value={hp} />
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
            <label htmlFor="totalhd">Total</label><input name="totalhd" type="text" value={hitDie} />
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
        <label>Attacks</label>
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
        <textarea className='widthCalc'></textarea>
        </div>
    </section>
    <section className="equipment">
        <div>
        <label>Equipment</label>
        <div className="money">
            <ul>
            <li>
                <label htmlFor="ct">ct</label><input name="ct" />
            </li>
            <li>
                <label htmlFor="k">k</label><input name="k" />
            </li>
            <li>
                <label htmlFor="qz">qz</label><input name="qz" />
            </li>
            </ul>
        </div>
        <textarea className='widthCalc' ></textarea>
        </div>
    </section>
    </section>
    <section>
    <section className="gem">
        <h6>Gemstone Alignment</h6>
        <div className="gemstone-alignment box">
        <input 
            name="firstgem"  
            className="label-container"
            value={`${alignmentGem && alignmentGem.name} (${alignmentGem && alignmentGem.quality})`}
        />
        <div className="gemOne">
            <input name="firstgemscore" value="1" className="gemOne" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
        <div className="gemstone-alignment box">
        <input name="firstgem" className="label-container" />
        <div className="gemOne">
            <input name="firstgemscore" className="gemOne" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
        <div className="extra-gemstones box">
        <div className="gemOne">
            <input name="firstgemscore" className="gemScore" />
            <input name="firstgemscore" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" className="gemScore" />
            <input name="firstgemscore" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" className="gemScore" />
            <input name="firstgemscore" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" className="gemScore" />
            <input name="firstgemscore" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        <div className="gemOne">
            <input name="firstgemscore" className="gemScore" />
            <input name="firstgemscore" className="gemType" />
            <img src={diamondShape} alt="diamond" />
        </div>
        </div>
    </section>
    <section className="flavor">
        <div className="personality">
        <label htmlFor="personality">Personality</label><textarea className='widthCalc' name="personality" value={personality} ></textarea>
        </div>
        <div className="ideals">
        <label htmlFor="ideals">Ideals</label><textarea className='widthCalc' name="ideals" value={ideals} ></textarea>
        </div>
        <div className="flaws">
        <label htmlFor="flaws">Flaws</label><textarea className='widthCalc' name="flaws" value={flaws} ></textarea>
        </div>
    </section>
    <section className="features">
        <div>
        <label htmlFor="features">Features & Traits</label>
        <textarea name="features" value={features && features.join("\n\n")} ></textarea>
        </div>
    </section>
    </section>
</main>
</form>

    );
});

export default CharacterSheetEditable;