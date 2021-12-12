import { useState } from 'react'
import classes from './SitesListSection.module.css'
import SiteURLInput from './SiteURLInput/SiteURLInput'
import SitesList from './SitesList/SitesList'
import SiteListType from './types'

const mockSiteList: SiteListType = [
  {
    'url': 'https://www.stackoverflow.com',
    'favicon': 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a'
  },{
    'url': 'https://www.amazon.com',
    'favicon': 'http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png'
  }
]

const SitesListSection: React.FC = () => {
  const [listedUrls, setListedUrls] = useState<SiteListType>(mockSiteList)

  return (
  <div className={classes.siteslistsection}>
    {listedUrls.length ? <SitesList urls={listedUrls} /> : <span>No URLS yet!</span>}
    <SiteURLInput listedUrls={listedUrls} setListedUrls={setListedUrls}/>
  </div>
  )
}

export default SitesListSection