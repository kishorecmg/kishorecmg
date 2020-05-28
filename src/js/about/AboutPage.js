import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../img/about/imadesomething.png'

class AboutPage extends React.Component
{
    render()
    {
        let currentLang = this.props.currentLanguage.about.webpage

        return(
            <div className="container-fluid" id="myself-parent">
                <div className="myself-middle">
                    <h1 className="myself-mainhead">{currentLang.aboutPage}</h1>
                    <p className="myself-mainpara" >{currentLang.aboutPageDescription}</p>
                    
                    <div className="myself-menustyle">
                        <div className="myself-menu">
                            <li className="myself-div" id='webpage-whypage'>
                            <a href="#webpage-whypage" className="myself-btn">{currentLang.whyPage}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child" >{currentLang.whyPagePara1}</p>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-challenges'>
                            <a href="#webpage-challenges" className="myself-btn">{currentLang.challenges}</a>
                            <div className="myself-smenu">
                                <p className="myself-smenu-child" >{currentLang.challengesPara1}</p>
                                <img className="myself-image" src={img1} alt="how-difficult-it-is" />
                                <p className="myself-smenu-child" >{currentLang.challengesPara2}</p>
                                <p className="myself-smenu-child" >{currentLang.challengesPara3}</p>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-timetook'>
                            <a href="#webpage-timetook" className="myself-btn">{currentLang.timetook}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <p>{currentLang.timetookPara1}</p>
                                    <ul className="myself-list">
                                        <li className="row">
                                            <p className="col-3">{currentLang.firstTenDays}</p>
                                            <p className="col-9">{currentLang.firstTenDaysSide}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-3">{currentLang.secondTenDays}</p>
                                            <p className="col-9">{currentLang.secondTenDaysSide}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-3">{currentLang.thirdTenDays}</p>
                                            <p className="col-9">{currentLang.thirdTenDaysSide}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-translation'>
                            <a href="#webpage-translation" className="myself-btn">{currentLang.translations}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <ul className="myself-list">
                                        <li className="row">
                                            <p className="col-6">{currentLang.translationsTamil}</p>
                                            <p className="col-6">{currentLang.translationsTamilSide}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-6">{currentLang.translationsJapanese}</p>
                                            <p className="col-6">{currentLang.translationsJapaneseSide}</p>
                                        </li>
                                        <li className="row">
                                            <p className="col-6">{currentLang.translationsEnglish}</p>
                                            <p className="col-6">{currentLang.translationsEnglishSide}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-techused'>
                            <a href="#webpage-techused" className="myself-btn">{currentLang.techUsed}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child">
                                    <p>{currentLang.techUsedPara1}</p>
                                    <ul className="myself-list">
                                        <li>'S' - 'SQL' (MySQL)</li>
                                        <li>'E' - 'Express' (A open-source framework for Node JS)</li>
                                        <li>'R' - 'React JS' (A famous framework for JavaScript by FaceBook)</li>
                                        <li>'N' - 'Node JS' (Server side JavaScript application)</li>
                                    </ul>
                                    <p>{currentLang.techUsedPara2}</p>
                                    <ul className="myself-list">
                                        <li>Microsoft Visual Studio Code</li>
                                        <li>NPM (Node Package Manager)</li>
                                        <li>GIT (Version control system)</li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-expansion'>
                            <a href="#webpage-expansion" className="myself-btn">{currentLang.futureExpansion}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child">
                                    <p>{currentLang.futureExpansionPara1}</p>
                                    <ul className="myself-list">
                                        <li>{currentLang.futureExpansionList1}</li>
                                        <li>{currentLang.futureExpansionList2}</li>
                                        <li>{currentLang.futureExpansionList3}</li>
                                        <li>{currentLang.futureExpansionList4}</li>
                                    </ul>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-source'>
                            <a href="#webpage-source" className="myself-btn">{currentLang.seeSource}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child" >
                                    <p>{currentLang.seeSourcePara1} <a href="https://github.com/kishorecmg/kishorecmg" target="_blank" rel="noopener noreferrer" >{currentLang.seeSourceLink1}</a>.</p>
                                    <p>{currentLang.seeSourcePara2}</p>
                                </div>
                            </div>
                            </li>

                            <li className="myself-div" id='webpage-attribution'>
                            <a href="#webpage-attribution" className="myself-btn">{currentLang.attribution}</a>
                            <div className="myself-smenu">
                                <div className="myself-smenu-child">
                                    <p>{currentLang.attributionPara1}</p>
                                    <ul className="myself-list">
                                        <li>Home Welcome image from <a href="https://www.pexels.com/photo/road-landscape-nature-forest-39811" target="_blank" rel="noopener noreferrer" >here</a> </li>
                                        <li>Contact page image from <a href="https://www.pexels.com/photo/aerial-photography-of-green-trees-1481581/" target="_blank" rel="noopener noreferrer" >here</a> </li>
                                        <li>About Main image from <a href="https://unsplash.com/photos/yCAAeuCL0mw " target="_blank" rel="noopener noreferrer" >here</a> </li>
                                        <li>Gear icon made by Freepik from <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Development icon made by Pixel perfect  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Workshop icon made by Eucalyp  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Game over icon made by Good Ware  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Keyboard icon made by Freepik  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Mouse icon made by srip  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                        <li>Coffee cup icon made by Freepik  <a href="www.flaticon.com" target="_blank" rel="noopener noreferrer" >Flaticon</a></li>
                                    </ul>
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
                                <Link className="btn btn-primary" role="button" to="/about/myself">{currentLang.returnToAboutMyself}</Link>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default AboutPage