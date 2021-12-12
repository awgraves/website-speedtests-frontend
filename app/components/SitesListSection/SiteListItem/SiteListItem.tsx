import { Site } from '../types'
import styles from './SiteListItem.module.css'

type SiteListItemProps = {
  site: Site
}

const SitesList: React.FC<SiteListItemProps> = ({ site }) => {

  return (
    <div className={styles.sitelistitem} title={site.url}>
        <img src={site.favicon} height='40px'/>
        <div className={styles.urlname}>{ site.url }</div>
    </div>
  )
}

export default SitesList