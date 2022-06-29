import styles from '../cssModules/Bio.module.scss'

const Bio = ({headshots, name, tagline, role}) =>{
    return (
        <div className={styles.bio}>
            <div className={styles.bioImage}>
            <img src={headshots} alt ={`Image of ${ name }`} />
            </div>

            <div className={styles.bioContent}>
                <p className={styles.bioContentName}>
                    { name }
                </p >
                <p className={styles.bioContentTagline}>
                {  tagline }
                </p >
                <p className={styles.bioContentNameRole}>
                { role }
                </p >
                
            </div>
        </div>
    );
}

export default Bio;

