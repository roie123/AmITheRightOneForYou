import styles from './HighlightCard.module.css'
import {Highlight} from "@/app/Models/Highlight";
import {FaGithub} from "react-icons/fa";
import {AiFillEye, AiFillFilePpt} from "react-icons/ai";
interface HighlightCardProps{
highlight:Highlight
}
    /**
     * Author - Roie Ivri 
     * Created Date&Time - 02/10/2023 | 12:51
     */
export default function HighlightCard(props:HighlightCardProps){

return(
<>

    <div className={styles.highlightCardContainer} >

        <div className={styles.imgContainer} >
            <img src={props.highlight.image} alt=""/>
        </div>

        <div className={styles.infoContainer}>

            <div className={styles.highlightTitleContainer}>
                <h3>{props.highlight.title}</h3>

            </div>

            <div className={styles.descriptionContainer}>
                <p>{props.highlight.description}</p>

            </div>

            <h5>Challenges : </h5>

            <div className={styles.challengesContainer}>
                {props.highlight.challenges.map((challenge,index)=>
                    (
                        <>
                        <div className={styles.challengeItemContainer}>

                        <span>{challenge}</span>
                        </div>
                        </>
                    )
                )

                }

            </div>

            <h5>Tech Utilized : </h5>

            <div className={styles.skillsUtilizedContainer}>
                {props.highlight.skillsUtilized.map((skill,index)=>
                    (
                        <>
                            <div className={styles.skillItemContainer}>
                                <span>{skill}</span>

                            </div>

                        </>
                    )
                )

                }

            </div>


        </div>



<div  className={styles.linksContainer}>
    {props.highlight.linkToGithub.length>1 ? (
        <div className={styles.linkItem}>
            <a href="https://github.com/roie123" target={'_blank'}>
                <FaGithub/>

            </a>

        </div>


    ):(null)}
    {props.highlight.linkToPDFFile.length>1 ? (

        <div className={styles.linkItem}>
            <a href="https://github.com/roie123" target={'_blank'}>
                <AiFillFilePpt/> {/* THE PDF SYMBOL*/}

            </a>

        </div>
    ):(null)}
    {props.highlight.linkToLiveSite.length>1 ? (

        <div className={styles.linkItem}>
            <a href="https://github.com/roie123" target={'_blank'}>
                <AiFillEye/>

            </a>


        </div>

    ):(null)}


</div>






    </div>
</>
)
}