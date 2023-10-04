'use client'

import styles from './AddNewHighlightPAge.module.css'
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Highlight} from "@/app/Models/Highlight";
import {func} from "prop-types";
import {GrAdd} from "react-icons/gr";
import {IoAddCircle} from "react-icons/io5";
interface AddNewHighlightPAgeProps{

}
interface HighlightForm{
    title:string,
    description:string,
    image:string,
    linkToGithub:string,
    linkToPDFFile:string,
    linkToLiveSite:string,
    challenges:string[],
    skillsUtilized:string[],
}
    /**
     * Author - Roie Ivri
     * Created Date&Time - 03/10/2023 | 15:20
     */
export default function AddNewHighlightPAge(props:AddNewHighlightPAgeProps){
const [skills,setskills] =useState<string[]>([]);
const {register,handleSubmit} =useForm<HighlightForm>();

        const handleFormSubmit = handleSubmit((data) => {
            onSubmit(data); // Call the parent component's onSubmit function
        });

        function onSubmit(data: HighlightForm) {



        }


return(
<>



    <div className={styles.addNewHighlightPageContainer} >

        <div className={styles.newHighlightTitle}>
            <h2>Adding a new Highlight</h2>

        </div>

        <form action="" onSubmit={handleFormSubmit} className={styles.formContainer}>
            <input type="text" {...register('title')}  placeholder={'Title'} className={styles.highlightInput} />
            <input type="text" {...register('description')} placeholder={'Desc'} className={styles.highlightInputDesc}  />
            <input type="text" {...register('image')} placeholder={'image Url'} className={styles.highlightInput} />
            <input type="text" {...register('linkToGithub')} placeholder={'Github Link'} className={styles.highlightInput} />
            <input type="text" {...register('linkToPDFFile')} placeholder={'PDF link'} className={styles.highlightInput} />
            <input type="text" {...register('linkToLiveSite')} placeholder={'Live Site Link'} className={styles.highlightInput} />




        </form>



        <input type="text" placeholder={'Title'}/>

        <input type="text" placeholder={'Add a skill'}  />



<div className={styles.addHighlightButtons}>
    <button className={styles.addHighlightSingleButton} >
        <IoAddCircle   />
    </button>

</div>


    </div>

</>
)
}