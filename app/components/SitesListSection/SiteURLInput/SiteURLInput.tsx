import styles from './SiteURLInput.module.css'
import Button from '../../Button/Button'

const SitesListSection: React.FC = () => {
  const myClick = () => {alert('clickity!')}

  return (
  <div className={styles.urlinputcontainer}>
    <div className={styles.inputwrapper}>
      <span>https://</span>
      <input className={styles.input}/>
    </div>
    <Button text="+ Add This URL" onClick={myClick}></Button>
  </div>
  )
}

export default SitesListSection