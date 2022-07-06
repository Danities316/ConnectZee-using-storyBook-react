import styles from '../cssModules/PostForm.module.scss';

const PostForm = ({ onSubmit }) => {

  function handleOnSubmit(e){
    const { currentTarget } = e;
    const fields = Array.from(currentTarget.elements);
    const data = {};

    fields.forEach(field =>{
      if(!field.name) return;
      data[field.name] = field.value;
    })
    
  };

  if(typeof onSubmit === 'function'){
    onSubmit(data, e);
  }
  return(
  <>
     <from onSubmit = {handleOnSubmit}>
          <textarea name='posts' className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add your thoughts</button>
        </from>
  </>
  )
};

export default PostForm;
