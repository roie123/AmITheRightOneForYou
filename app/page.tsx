import styles from './page.module.css'
import {BsSearchHeart} from "react-icons/bs";
import {AiFillFilePpt, AiFillLinkedin} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import {mockData} from "@/app/mockData";
import HighlightCard from "@/app/Components/HighlightCard";

export default function Home() {
    return (
        <>
            <div className={styles.title}>
                <h1>Am i the right person for the job ? </h1>
                <p>Are you wondering if I'm the right fit for your team?</p>
                <p>In my quest for the perfect job, I faced a challenge. No matter how much I learned and improved, recruiters couldn't gauge my technical prowess.</p>
                <p>Enter this solution! Just search for a technology or skill you're interested in, and I'll show you if I've got it. Sometimes, I'll even link a commit or a PDF file that dives deep into the subject.</p>


            </div>

            <div className={styles.contactMeContainer}>

                <div className={styles.contactMeItem}>
                    <a href="" target={'_blank'}>
                        <AiFillFilePpt/> {/* THE PDF SYMBOL*/}

                    </a>
                </div>

                <div className={styles.contactMeItem}>

                    <a href="https://www.linkedin.com/in/roy-ivri/" target={'_blank'}>
                        <AiFillLinkedin/>

                    </a>
                </div>


                <div className={styles.contactMeItem}>
                    <a href="https://github.com/roie123" target={'_blank'}>
                        <FaGithub/>

                    </a>
                </div>


            </div>


            <div className={styles.searchComponentContainer}>


                <div className={styles.SearchBar}>
                    <input type="text" className={styles.searchBarInput} placeholder={'Search...'} />
                    {/*<p>Search</p>*/}
                    <BsSearchHeart/>
                </div>


            </div>



            <div>
                {mockData.map((highlight,index)=>  
                    (
                        <HighlightCard highlight={highlight}  key={index}/>
                    )
                )}
            </div>

        </>
    );
}
