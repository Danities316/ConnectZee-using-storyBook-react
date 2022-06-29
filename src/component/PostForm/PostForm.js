import styles from '../cssModules/PostForm.module.scss';

const PostForm = ({}) => {
  return(
  <>
     <from>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add your thoughts</button>
        </from>
  </>
  )
};

export default PostForm;
