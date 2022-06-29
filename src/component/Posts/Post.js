import styles from '../cssModules/Post.module.scss';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const Post = ({post, date}) => {
  return(
  <>
    <p className={styles.postContent}>
     { post }
      </p>

    <ul className={styles.postsMeta}>
    <li className={styles.postMetaData}>
        <FaHeart />
        34
      </li>

      <li className={styles.postMetaData}>
      <FaShareAlt />
        Share
      </li>

      <li className={styles.postMetaData}>
        { date }
      </li>
    </ul>
  </>
  )
};

export default Post;
