import React from 'react'
import { Link } from 'react-router-dom'

class AboutMe extends React.Component
{
    render()
    {
        let currentLang = this.props.currentLanguage.about.myselfPage

        return(
            <div className="container-fluid" id="myself-parent">
                <div className="myself-middle">
                    <h1 className="myself-mainhead">{currentLang.aboutMe}</h1>
                    <p className="myself-mainpara" >{currentLang.congrats}</p>
                    
                    <div className="myself-menustyle">
                        <div className="myself-menu">
                            <li className="myself-div" id='myself-intro'>
                            <a href="#myself-intro" className="myself-btn">{currentLang.introduction}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child" >{currentLang.introductionPara1}</p>
                            </div>
                            </li>

                            <li className="myself-div" id='myself-languages'>
                            <a href="#myself-languages" className="myself-btn">{currentLang.languagesKnown}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child">
                                    <p>{currentLang.languagesKnownPara1}</p>
                                    <ul className="myself-list">
                                        <li className="row">
                                            <p className="col-6">{currentLang.tamil}</p>
                                            <p className="col-6">{currentLang.languagesKnownSkill1}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-6">{currentLang.english}</p>
                                            <p className="col-6">{currentLang.languagesKnownSkill1}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-6">{currentLang.japanese}</p>
                                            <p className="col-6">{currentLang.languagesKnownSkill1}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-6">{currentLang.chinese}</p>
                                            <p className="col-6">{currentLang.languagesKnownSkill2}</p>
                                        </li>
                                                                                
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id="myself-skill">
                            <a href="#myself-skill" className="myself-btn">{currentLang.skillsets}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child">{currentLang.skillsetsPara1}</p>
                                <p className="myself-smenu-child">{currentLang.skillsetsPara2}</p>
                                <p className="myself-smenu-child">{currentLang.skillsetsPara3}</p>
                            </div>
                            </li>

                            <li className="myself-div" id='myself-strength'>
                            <a href="#myself-strength" className="myself-btn">{currentLang.strengths}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <p>{currentLang.strengthsPara1}</p>
                                    <ul className="myself-list">
                                        <li>{currentLang.strengthsList1}</li>
                                        <li>{currentLang.strengthsList2}</li>
                                        <li>{currentLang.strengthsList3}</li>
                                        <li>{currentLang.strengthsList4}</li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='myself-weakness'>
                            <a href="#myself-weakness" className="myself-btn">{currentLang.weaknesses}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <p>{currentLang.weaknessesPara1}</p>
                                    <ul className="myself-list">
                                        <li>{currentLang.weaknessesList1}</li>
                                        <li>{currentLang.weaknessesList2}</li>
                                        <li>{currentLang.weaknessesList6}</li>
                                        <li>{currentLang.weaknessesList3}</li>
                                        <li>{currentLang.weaknessesList4}</li>
                                        <li>{currentLang.weaknessesList5}</li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='myself-cmg'>
                            <a href="#myself-cmg" className="myself-btn">{currentLang.whatIsCmg}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child" >{currentLang.whatIsCmgPara1}</p>
                            </div>
                            </li>

                            <li className="myself-div" id="myself-hobbies">
                            <a href="#myself-hobbies" className="myself-btn">{currentLang.hobbies}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child" >{currentLang.hobbiesPara1} <a href="https://www.youtube.com/watch?v=bt4-FwVe1Fk" rel="noopener noreferrer" target="_blank" >{currentLang.hobbiesLink1}</a></p>
                                <p className="myself-smenu-child" style={{marginTop:'-10px', textAlign: 'center'}} >{currentLang.hobbiesPara2}</p>
                            </div>
                            </li>

                            <li className="myself-div" id="myself-playedgames">
                            <a href="#myself-playedgames" className="myself-btn">{currentLang.gamesPlayed}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <p>{currentLang.gamesPlayedPara1}</p>
                                    <ul className="myself-list">
                                        <li>Grand Theft Auto (III, Vice City, San Andreas, IV, Episodes from Liberty City, V)</li>
                                        <li>Assassin's Creed (I, II, Brotherhood, Revelations, III, Black Flag, Rogue)</li>
                                        <li>The Witcher III: Wild Hunt, The Witcher I</li>
                                        <li>The Elder Scrolls V: Skyrim</li>
                                        <li>Fallout (III, New Vegas, IV)</li>
                                        <li>Watch Dogs (I, II)</li>
                                        <li>Hitman (Silent Assassin, Contracts, Blood Money, Absolution, 2016)</li>
                                        <li>Shovel Knight: Tresure Trove</li>
                                        <li>Far Cry (III, IV)</li>
                                        <li>Doom 2016</li>
                                        <li>Crysis (I, Warhead, II, III)</li>
                                        <li>Halo (I, II)</li>
                                        <li>L.A. Noire</li>
                                        <li>Just Cause (I, II, III)</li>
                                        <li>Mortal Kombat (IX, X)</li>
                                        <li>Call of Duty: Modern Warfare (I, II, III)</li>
                                        <li>Prince of Persia (The Sands of Time, Warrior Within, Two Thrones, The Forgotten Sands)</li>
                                        <li>Need for Speed: Most Wanted 2005</li>
                                        <li>Dead Space I</li>
                                        <li>Bio Shock I</li>
                                        <li>Project IGI (I, II)</li>
                                    </ul>
                                    <p>{currentLang.gamesPlayedPara2}</p>
                                    <p>{currentLang.gamesPlayedPara3}</p>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div">
                            <a className="myself-btn" href="#shin">{currentLang.closeAll}</a>
                            </li>
                        </div>
                        </div>

                        <div className="myself-return row">
                            <div className="col-6">
                                <Link className="btn btn-primary" role="button" to="/about">{currentLang.returnToMain}</Link>
                            </div>
                            <div className="col-6">
                                <Link className="btn btn-primary" role="button" to="/about/webpage">{currentLang.returnToAboutWebpage}</Link>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default AboutMe