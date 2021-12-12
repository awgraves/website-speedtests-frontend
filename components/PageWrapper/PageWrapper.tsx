import processUrlInput from '../SitesListSection/urlProcessing';
import styles from './PageWrapper.module.css';

const PageWrapper: React.FC = (props) => {
  return (
    <main className={styles.main}>{props.children}</main>
  )
}

export default PageWrapper