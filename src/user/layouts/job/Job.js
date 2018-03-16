import React, { Component } from 'react'
import JobFormContainer from '../../ui/jobform/JobFormContainer'

class Job extends Component {
    render() {
        return (
            <main id="vacancy" className="container">
                <div id="vacancy-background-image">
                    <img role="presentation" src="https://app.hellotalent.com/vacancy/background?token=75zKPAh4s2XpkDucYYJ4TcflJMO5KCOgIfZvyaKNDF95MsWOMU6ZzF4%2bjAZcnP4pQ4BGxcVPbdJpM2TMTCzssOAY5YQu8oJPQIjVDq3fNNrzan%2b82Pb8LOeB7plyNvOyQgEChA%3d%3d"></img>
                </div>
                <div id="vacancy-content">
                    <div id="vacancy-header" className="vacancy-section">
                        <img id="vacancy-logo-image" alt="logo" src="https://app.hellotalent.com/vacancy/logo?token=feIe%2b93eU%2ff8phQ5xRVvnhOf5n0Vmi%2bDvmqzvOz8CRcv6zktfTPGbj3nRsHQUUE6qGZ5v6RtjO6dv4zYjd4uh0UaQDEUcObUxnIGYe%2fkeNrlHFrN"></img>
                        <h1>Marketing Ninja</h1>
                        <div className="vacancy-metas">
                            <span className="vacancy-meta">Hello Unicorn</span>
                            <span className="vacancy-meta">Paris</span>
                            <span className="vacancy-meta">CDI</span>
                            <span className="vacancy-meta">5+ years experience</span>
                        </div>
                        <link href="https://unpkg.com/ilyabirman-likely@2/release/likely.css" rel="stylesheet"></link>
                        <div className="likely likely-big likely_visible likely_ready" data-url="https://app.hellotalent.com/vacancy/marketing-ninja-ed18e378c" data-title="Hello Unicorn recrute un Marketing Ninja. Postulez maintenant !">
                            <div className=" likely__widget likely__widget_linkedin"><span className="likely__icon likely__icon_linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0zz"></path></svg></span><span className="likely__button likely__button_linkedin"></span><span className="likely__counter likely__counter_linkedin likely__counter_empty"></span></div>
                            <div className=" likely__widget likely__widget_facebook"><span className="likely__icon likely__icon_facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0z"></path></svg></span><span className="likely__button likely__button_facebook"></span><span className="likely__counter likely__counter_facebook likely__counter_empty"></span></div>
                            <div className=" likely__widget likely__widget_twitter"><span className="likely__icon likely__icon_twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353z"></path></svg></span><span className="likely__button likely__button_twitter"></span></div>
                        </div>
                        <script src="https://unpkg.com/ilyabirman-likely@2/release/likely.js" type="text/javascript"></script>
                    </div>
                    <div id="vacancy-description" className="vacancy-section">
                        <p><strong>Job description</strong></p>

                        <p>We only hire ninjas, maybe rockstars.</p>

                        <p>Are you up to the job?</p>

                        <p><strong>Job responsibilities</strong></p>

                        <ul>
                            <li>Managing all marketing for the company and activities within the marketing department.</li>
                            <li>Developing the marketing strategy for the company in line with company objectives.</li>
                            <li>Co-ordinating marketing campaigns with sales activities.</li>
                            <li>Overseeing the company’s marketing budget.</li>
                            <li>Creation and publication of all marketing material in line with marketing plans.</li>
                            <li>Planning and implementing promotional campaigns.</li>
                            <li>Manage and improve lead generation campaigns, measuring results.</li>
                            <li>Overall responsibility for brand management and corporate identity</li>
                            <li>Preparing online and print marketing campaigns.</li>
                            <li>Monitor and report on effectiveness of marketing communications.</li>
                            <li>Creating a wide range of different marketing materials.</li>
                            <li>Working closely with design agencies and assisting with new product launches.</li>
                            <li>Maintain effective internal communications to ensure that all relevant company functions are kept informed of marketing objectives.</li>
                            <li>Analysing potential strategic partner relationships for company marketing.</li>
                        </ul>
                    </div>
                    <div id="vacancy-form" className="vacancy-section">
                        <div className="vacancy-title">Postuler pour ce poste</div>
                        <div id="application-form">

                            <table className="application-form-table">
                                <tbody>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_0__StringValue">First name</label>
                                            <span className="application-form-mandatory">*</span>
                                        </td>
                                        <td className="application-form-item-content">
                                            <input className="application-form-input" data-val="true" data-val-length="" data-val-length-max="255" data-val-required="" id="ApplicationFormItems_0__StringValue" name="ApplicationFormItems[0].StringValue" required="" type="text" value="" aria-required="true"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_1__StringValue">Last name</label>
                                            <span className="application-form-mandatory">*</span>
                                        </td>
                                        <td className="application-form-item-content">
                                            <input className="application-form-input" data-val="true" data-val-length="" data-val-length-max="255" data-val-required="" id="ApplicationFormItems_1__StringValue" name="ApplicationFormItems[1].StringValue" required="" type="text" value="" aria-required="true"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_2__EmailValue">Email</label>
                                            <span className="application-form-mandatory">*</span>
                                        </td>
                                        <td className="application-form-item-content">
                                            <input className="application-form-input" data-val="true" data-val-length="" data-val-length-max="255" data-val-required="" id="ApplicationFormItems_2__EmailValue" name="ApplicationFormItems[2].EmailValue" required="" type="email" value="" aria-required="true"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_3__StringValue">Phone number</label>

                                        </td>
                                        <td className="application-form-item-content">
                                            <input className="application-form-input" data-val="true" data-val-length="" data-val-length-max="50" id="ApplicationFormItems_3__StringValue" name="ApplicationFormItems[3].StringValue" type="text" value=""></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_4__StringValue">Comment</label>

                                        </td>
                                        <td className="application-form-item-content">
                                            <textarea className="application-form-textarea" cols="20" data-val="true" data-val-length="" data-val-length-max="1000" id="ApplicationFormItems_4__StringValue" name="ApplicationFormItems[4].StringValue" rows="2"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label">
                                            <label htmlFor="ApplicationFormItems_5__FileValue">Upload your CV</label>

                                        </td>
                                        <td className="application-form-item-content">
                                            <input className="application-form-input" data-val="true" id="ApplicationFormItems_5__FileValue" name="ApplicationFormItems[5].FileValue" type="file" value=""></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="application-form-item-label"></td>
                                        <td className="application-form-item-content">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="application-form-item-label"></td>
                                        <td className="application-form-item-content">
                                            <JobFormContainer />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="application-form-legal-notices">
                            </div>

                        </div>
                    </div>
                    <div id="vacancy-powered-by-hellotalent">
                        Powered by
                    <img src="https://app.hellotalent.com/Content/images/favicon.ico" alt="logo Hello Talent"></img>
                        <a href="https://www.hellotalent.com/" target="_blank">Hello Talent</a>
                    </div>
                </div>

            </main>
        )
    }
}

export default Job