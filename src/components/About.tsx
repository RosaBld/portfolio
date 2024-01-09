//Libraries
import { faGraduationCap, faLocationDot, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

//JSON
import educationData from "../db/education.json";
import workData from '../db/workData.json';

//Components
import { LanguageContext } from '../utils';

//Types
import { WorkData, EducationData, darkModeProps } from '../types/index.d';


export function About({ darkMode }: darkModeProps) {

    const { language } = useContext(LanguageContext);

    const { t } = useTranslation();

    return (
        <div className="flex flex-col pt-10 pb-24 text-left font-custom">
            <div className="py-10">
                <h2 className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} py-2 my-2 text-4xl lg:text-6xl font-bold leading-relaxed pb-2`}>
                    {t('about_title')}
                </h2>
                <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-2xl lg:text-3xl text-justif`}>
                    {t('about_text')}
                </h3>
            </div>
            <div className="py-10">
                <h2 className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} text-4xl lg:text-6xl font-bold leading-relaxed pb-2`}>
                    {t('work_title')}
                </h2> 
                {workData.map((job: WorkData) =>
                    <div key={job.title[language]} className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b-4 py-8`}>
                        <div className="flex flex-row justify-between">
                            <h4 className={`text-2xl lg:text-3xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed pb-2`}>
                                {job.title[language]}
                            </h4>
                            <h5 className="bg-green-200 text-green-600 font-bold text-xs lg:text-sm h-8 rounded-full pt-2 pl-5 pr-5 pb-7">
                                {job.time[language]}
                            </h5>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <FontAwesomeIcon icon={faBuilding} style={{color: "#9ca3af"}} />
                                <h5 className="text-gray-400 text-xs lg:text-sm">
                                    {job.place}
                                </h5>
                                <FontAwesomeIcon icon={faLocationDot} style={{color: "#9ca3af"}} />
                                <h4 className="text-gray-400 text-xs lg:text-sm">
                                    {job.location}
                                </h4>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <FontAwesomeIcon icon={faCalendar} style={{color: "#9ca3af"}} />
                                <h5 className="text-gray-400 text-xs lg:text-sm">
                                    {job.date[language]}
                                </h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="py-10">
                <h2 className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} text-4xl lg:text-6xl font-bold leading-relaxed pb-2`}>
                    {t('education_title')}
                </h2>
                {educationData.map((education: EducationData) =>
                    <div key={education.title[language]} className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b-4 py-8`}>
                        <div className="flex flex-row justify-between">
                            <h4 className={`text-2xl lg:text-3xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed pb-2`}>
                                {education.title[language]}
                            </h4>
                            <h5 className="bg-green-200 text-green-600 font-bold text-xs lg:text-sm h-8 rounded-full pt-2 pl-5 pr-5 pb-7">
                                {education.time[language]}
                            </h5>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <FontAwesomeIcon icon={faGraduationCap} style={{color: "#9ca3af"}} />
                                <h5 className="text-gray-400 text-xs lg:text-sm">
                                    {education.graduate[language]}
                                </h5>
                                <FontAwesomeIcon icon={faLocationDot} style={{color: "#9ca3af"}} />
                                <h5 className="text-gray-400 text-xs lg:text-sm">
                                    {education.place}
                                </h5>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <FontAwesomeIcon icon={faCalendar} style={{color: "#9ca3af"}} />
                                <h5 className="text-gray-400 text-xs lg:text-sm">
                                    {education.date[language]}
                                </h5>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}