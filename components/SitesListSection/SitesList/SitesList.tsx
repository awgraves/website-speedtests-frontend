import SiteListType from '../types'
import styles from './SiteList.module.css'

import SiteListItem from '../SiteListItem/SiteListItem'

type SitesListProps = {
  urls: SiteListType
}

const SitesList: React.FC<SitesListProps> = ({ urls }) => {

  return (
    <div className={styles.sitelist}>
        {urls.map((s) => <SiteListItem site={s} key={s.url}></SiteListItem>)}
    </div>
  )
}

export default SitesList