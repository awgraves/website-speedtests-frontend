import classes from './SitesListSection.module.css'
import SiteURLInput from './SiteURLInput/SiteURLInput'

const SitesListSection: React.FC = () => {
  const myClick = () => {alert('clickity!')}

  return (
  <div className={classes.siteslistsection}>
    <SiteURLInput />
  </div>
  )
}

export default SitesListSection